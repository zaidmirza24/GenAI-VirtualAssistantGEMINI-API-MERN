import jwt from "jsonwebtoken"
 
const secretKey = process.env.JWT_SECRET
const expiryKey = process.env.JWT_EXPIRES_IN
const genToken = async (userId)  => { 
    try {
        const token = jwt.sign({ userId }, secretKey, { expiresIn: expiryKey });
        return token
        
    } catch (error) {
        console.log(error)
        
    }
 }
 export default genToken;