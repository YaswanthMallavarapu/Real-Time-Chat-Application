import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    console.log(`Error connecting to the host`);
  }
};
