import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/user.models';
import {NextRequest , NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { stat } from 'fs';
import { error } from 'console';



connect ();


export async function POST(request : NextRequest ) {
    try {
        const  reqBody =  request.json();
        const {fullName ,email ,password} = await  reqBody 

        console.log({reqBody});




        //check if user already exits

       const user = await User.find(email);
       
       if (user){
        NextResponse.json({error : 'user already exits'},{status:400})
       }




       //hashing password 

       const salt = await bcryptjs.genSalt(10)
       const hashedPassword = await bcryptjs.hash(password,salt)


       const newUser = new User({
        fullName,
        email,
        password:hashedPassword,
       })

       const savedUser = await newUser.save()
       console.log(savedUser)

       return NextResponse.json({massege: 'user creted succesfully' ,success : true, savedUser })
    } catch (error : any) {
        return NextResponse.json({error : error.message},{status:500})
    }
}