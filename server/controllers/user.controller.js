const { signupService, findUserByEmail } = require("../services/user.service");
const { generateToken } = require("../utils/token");


exports.signup = async (req, res, next) => {
    try {
      // console.log(req.body);
      const user = await signupService(req.body);
    //   const token = generateToken(user);
      const { password: pwd, ...other } = user.toObject();
  
  
      res.status(200).json({
        status: "Success",
        message: "Sign Up Successful",
        data: {
          user: other,
        //   token,
        },
      });
    } catch (error) {
        console.log(error);
      res.status(500).json({
              status: "Fail",
              error,
          })
    }
  };


  exports.login=async(req,res,next)=>{
    try {
        const { email, password } = req.body;
        console.log(email,password)
        if (!email || !password) {
            return res.status(401).json({
                status: "Fail",
                message: "Please provide your credentials"
            })
        }

        const user = await findUserByEmail(email)

        if (!user) {
            return res.status(401).json({
                status: "Fail",
                message: "No User found. Please create an account"
            })
        }
        const isPasswordValid = await user.comparePassword(password, user.password)
        console.log(isPasswordValid,user)

        if (!isPasswordValid) {
            return res.status(401).json({
                status: "Fail",
                message: "Password is not correct"
            })
        }

        const token = generateToken(user)

        const { password: pwd, ...other } = user.toObject()

        return res.status(200).json({
            status: "Success",
            message: "Successfully Logged in",
            data: {
                user: other,
                token
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            error,
        })
    }
}


exports.persist = async (req, res, next) => {
    try {
        const user = await findUserByEmail(req.user?.email)
        const { password: pwd, ...other } = user.toObject()
        res.status(200).json({
            status: "Success",
            user: other
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            error,
        })
    }
}