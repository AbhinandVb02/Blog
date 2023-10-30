const jwt = require('jsonwebtoken');
const Users2 = require('../Model/Usermodel')
const bcrypt = require('bcrypt')

const userlogfun = async (req, res) => {
  
  const { Email, Password } = req.body;

  try {

    const Users = await Users2.findOne({ Email })

    if (!Users) {
      res.json("User not found")
    }
    const validpass = await bcrypt.compare(Password, Users.Password)

    if (validpass) {

      const token = jwt.sign({ Email: Users.Email }, process.env.jwt_secret,{expiresIn:'1d'})
      res.json({
        message: "Login successful",
        userId: Users._id,
        token
      })

    } else {
      res.json("Login unsuccessful")
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
}

module.exports = userlogfun