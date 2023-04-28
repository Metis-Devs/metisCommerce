
import bcrypt from "bcrypt"
import { User } from "../entity/User"

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
    
}