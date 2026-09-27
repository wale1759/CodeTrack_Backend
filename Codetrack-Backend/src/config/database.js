import mongoose from "mongoose";
import { environment } from "./environment.js";

export async function connectDatabase() {
  await mongoose.connect(environment.mongoUri);
  console.log(`Successfully Connected to MongoDB at port ${environment.port}`);
}
