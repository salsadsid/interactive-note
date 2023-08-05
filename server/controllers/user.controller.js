const { signupService } = require("../services/user.service");


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
              error:error.message,
          })
    }
  };