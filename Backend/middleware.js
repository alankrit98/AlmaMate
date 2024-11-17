import jwt from 'jsonwebtoken';

export const assigntoken = (id) => {
    return jwt.sign({ id }, "secret key", {
        expiresIn: "30d",
    }); 
}
export const verifytoken = (token) => { 
    if (token) {
        return jwt.verify(token, "secret key").id;
    }
}
