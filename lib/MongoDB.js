import mongoose from 'mongoose';

const ConnectMongoDB = async ()=> {
    try {
        await mongoose.Connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
        }
        catch(error)
        {
            console.log(error);
        }
}
export default ConnectMongoDB;