const express = require("express");
const { employmentModel } = require("../model/employe.model");

const { authenticateToken } = require("../auth/auth");


const employeRouter = express.Router();
//POST
employeRouter.post("/employees", authenticateToken, async (req, res) => {
    const payload =req.body
 try {
    const emp =new employmentModel(payload)
    await emp.save()
       res.status(200).send({"msg":"emp has been added"})
} catch (error) {
     res.status(400).send({"msg":error.message})
}
})
//ALL THE EMPLOYEES
employeRouter.get("/gett", authenticateToken, async (req, res) => {
  try {
    const employees = await employmentModel.find();
    res.send({ msg: "List of employees", employees });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// EMPLOYEES BY PARTICULAR ID
employeRouter.get("/:employeeId", authenticateToken, async (req, res) => {
  const { employeeId } = req.params;

  try {
 
    const employee = await employmentModel.findById(employeeId);

    if (!employee) {
      return res.status(404).send({ msg: "Employee not found" });
    }

    res.send({ msg: "Employee found", employee });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});



// pagination,limit,sorting and filtering 
employeRouter.get("/", authenticateToken, async (req, res) => {
  let { page, limit, sort, position } = req.query;
  page = +page;
  limit = +limit;

  try {
    const Page = page || 1;
    const Limit = limit || 10;
    const skip = (Page - 1) * Limit;

    let filter = {};

    if (position) {
     
      filter.position = { $regex: new RegExp(position, "i") };
    }

   
    const employees = await employmentModel.find(filter);

  
    const sortOptions = {};
    if (sort === "asc" || sort === "desc") {
      sortOptions.position = sort === "asc" ? 1 : -1;
    }

    const emp = await employmentModel
      .find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(Limit);

    res.send({ msg: "List of employees", emp, counts: employees.length });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});




// PUT 
employeRouter.put("/:employeeId", authenticateToken, async (req, res) => {
  try {
    const { employeeId } = req.params;
    const updatedEmployee = await employmentModel.findByIdAndUpdate(employeeId,req.body);

    if (!updatedEmployee) {
      return res.status(404).send({ msg: "Employee not found" });
    }

    res.send({ msg: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE EMPLOYEE
employeRouter.delete("/:employeeId", authenticateToken, async (req, res) => {
  try {
    const { employeeId } = req.params;
    const deletedEmployee = await employmentModel.findByIdAndDelete(employeeId);

    if (!deletedEmployee) {
      return res.status(404).send({ msg: "Employee not found" });
    }

    res.send({ msg: "Employee deleted successfully", employee: deletedEmployee });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});


module.exports = { employeRouter };
