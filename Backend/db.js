import mongoose, { mongo } from "mongoose";

const connectMongoDB = async () => {
	try {
        const mongo_uri = "mongodb+srv://ninjacoder811:sG7hRS9fe2rNxZzp@cluster0.oy9be.mongodb.net/AlmametaDB?retryWrites=true&w=majority&appName=Cluster0"
		const conn = await mongoose.connect(mongo_uri);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};
export default connectMongoDB;