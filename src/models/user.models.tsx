import mongoose from 'mongoose' ;
import { tree } from 'next/dist/build/templates/app-page';


const userSchema =  new mongoose.Schema({
    fullName : {
        type : String,
        required : [true , 'please fill this field']
    },
    emai : {
        type : String,
        required : [true , 'please fill  this field'],
        unique : true,
    },
    password : {
        type : String,
        required : [true , 'please fill  this field'],
    },
    isVerfied : {
        type : Boolean,
        default : false,
    }, 
    isAdmin : {
        type : Boolean,
        default : false,
    }, 
    forgotPasswordToken : String,
    forgotPasswordExpiryToken : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,
})


const User = mongoose.models.users || mongoose.model('users' , userSchema);


export default User;