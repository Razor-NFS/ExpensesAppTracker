import { pool } from "../libs/database.js";




export const registerUser = async (req, res) => {

    try {

     const {firstName, email, password } = req.body;
     
     if (!(firstName || email || password)) {
       return res.status(404).json({
         status: "error",
         message: "Please fill in all fields",
       });
     }

     const userExist = await pool.query({
        text: "SELECT EXISTS (SELECT 1 FROM tbluser WHERE email = $1)",
        Value: [email],
     });

        if(userExist.rows[0].exists) {
            return res.status(404).json({
                status: "error",
                message: "User already exists. Try Login",
            });
        }

        

    }catch (error) {

      console.log(error);
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
}

export const loginUser = async (req, res) => {

    try {


    }catch (error) {

      console.log(error);
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
}