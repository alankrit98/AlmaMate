import mongoose, { mongo } from "mongoose";

const connectMongoDB = async () => {
	try {
        const mongo_uri = "mongodb+srv://alan_agarwal_P2:COTclWAgA1igWjBp@cluster0.4tqfu.mongodb.net/alma-mate"
		const conn = await mongoose.connect(mongo_uri);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};
export default connectMongoDB;