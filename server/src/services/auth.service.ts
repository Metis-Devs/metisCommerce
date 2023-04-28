
import bcrypt from "bcrypt"
import { User } from "../entity/User"
import jwt from "jsonwebtoken"


export const authService = {
    encryptPassword: (password:string):string =>{

        let encryptedPassword = bcrypt.hashSync(password, 10)

        return encryptedPassword
    },
    createUser: async(name:string, lastname:string, idNumber:string, password:string, email:string):Promise<User> =>{
        const user = new User()

        user.firstname = name
        user.lastname = lastname
        user.idNumber = idNumber
        user.password = password
        user.email = email

        await user.save()

        return user
    },
    findUser: async(email:string):Promise<User> =>{
        const user = await User.findOneBy({email: email})

        if(!user) throw new Error("No existe el usuario")

        return user
    },
    decryptPassword: (password:string, encryptedPassword:string)=>{
        if(!bcrypt.compareSync(password,encryptedPassword)){
            throw new Error("Contraseña incorrecta")
        }
    },
    getToken: (role:number):string=>{

        const secret = process.env.SECRETKEY

        if (!secret) {
            throw new Error("La clave secreta no está definida");
        }

        let token = jwt.sign({ role: +role  }, secret );

        return token
    }
    

}