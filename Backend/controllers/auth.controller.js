import genToken from "../config/token.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"


export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const ExistEmail = await User.findOne({ email });
    if (ExistEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters!" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashPassword });
    await user.save();

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // ✅ milliseconds!
      sameSite: "Lax",
      secure: false, // change to true in production with HTTPS
    });

    return res.status(200).json({
      message: {
        msg: "User Created Successfully",
        data: user,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


 export const Login = async (req,res) => { 
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({Message:"Email does not exist!"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password!"})
        }

        const token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000,
            sameSite: "Lax",
            secure:false,

        })


        return res.status(200).json({message:{
            msg:"User Logged in Successfully",
            data: user,
            token:token,
        }})
    } catch (error) {
        console.log("Login Error",error)
        
    }
 }

 export const logout = async (req,res) => { 
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout Successfully"})
        
    } catch (error) {
        console.log("Logout Error",error)
        return res.status(200).json({message:`Logout Error:${error}`})
        
    }
  }