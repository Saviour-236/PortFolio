import mongoose from "mongoose";



export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',() => {
            console.log('mongodb connected successfully')
        })
        connection.on('error',(err) => {
            console.log('MongoDb connection Error' + err);
        })
    }
    catch(error){
        console.log('somthing went wrong');
        console.log(error)
    }
}