import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

export const hashPassword = async (userValue) => {

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(userValue, salt);

    return hashedPassword;


};

export const comparePassword = async (userPassword, password) => {

    try {
        const isMatch = await bcrypt.compare(userPassword, password);

        return isMatch;
    } catch{
            console.log(error);
    }

}

export const creatJWT = (id)=> {

   return JWT.sign({
        userId: id
    }, process.env.JWT_SECRET, {
        expiresIn: "24h"
    })

}