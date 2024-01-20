const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {adminModel} = require("../model/admin.model")
adminRouter = express.Router()

adminRouter.post("/signup", async (req, res) => {
    try {
    
        const { email, password, position } = req.body;

     
        const emailExists = await adminModel.findOne({ email });

        if (emailExists) {
            return res.send("Email already exists");
        }

       
        const hashedPassword = await bcrypt.hashSync(password, 8)
        
         const newUser = adminModel({ email, password: hashedPassword, position });

        
            await newUser.save();

         
            res.send("Registration successful");
    } catch (error) {
        res.send({ msg: "Error occurred" });
    }
});

adminRouter.post("/login", async (req, res) => {
    try {
     
        const { email, password } = req.body;

     
        const user = await adminModel.findOne({ email });

       
        if (!user) {
            return res.send("User email does not exist");
        }

      const isCorrectPassword = await bcrypt.compareSync(password, user.password);
        if (!isCorrectPassword) {
            return res.status(401).send({ msg: "Invalid Credentials" });
        }
        const token = jwt.sign({ userid: user._id}, "yourSecretKey", { expiresIn: "2h" });

     
        res.json({ token });
    } catch (error) {
        res.send({ msg: "Error occurred" });
    }
});

module.exports = {adminRouter}