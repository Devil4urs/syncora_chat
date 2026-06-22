import mongoose from "mongoose";

async function connectDB() {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI is required");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB Connected", connectDB.connection.host);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
}

export default connectDB;
