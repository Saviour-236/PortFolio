import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/user.models';
import {NextRequest , NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { stat } from 'fs'
connect ();





export  async function POST(request :NextRequest) {
    try {
        console.log(' in route file')
        const a = await request.json();
        console.log('fething done')
        const {email ,password} = a 
        console.log(email)
        //check if user  exits or not

       const user = await User.findOne({email:a.email});
       console.log('user fetched')
       console.log(user)
       if (user){
       console.log('in if section')
       const match = await bcryptjs.compare(password, a.email);
       console.log('comparing done')
       return NextResponse.json({massege: 'user Log In success' ,success : true },user)
       }
    } catch (error : any) {
        return NextResponse.json({error : 'user not  exits'},{status:400})
    }
}