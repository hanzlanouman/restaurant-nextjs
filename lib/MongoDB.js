import mongoose from 'mongoose';
const ConnectMongoDB = async () => {
    // Check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Consider whether you want to throw the error or handle it differently
        throw error;
    }
};

export default ConnectMongoDB;
