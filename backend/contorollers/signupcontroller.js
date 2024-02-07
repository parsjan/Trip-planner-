import usermodel from "../models/usermodel.js";
const signupcontroller=async (req, res) => {
    try {
      const { username, password } = req.body;
       //console.log(username);
      // Create a new user instance
      const newUser = new usermodel({ username:username, password:password });
  
      // Save the user to the database
      await newUser.save();
  
      // Send a success response
      res.json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  export default signupcontroller