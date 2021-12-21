import mongoose from "mongoose";
import logger from "../util/logger";

export async function connectDB(url: any) {
    try {
        await mongoose.connect(url);
        logger.info("DB connected");
      } catch (error) {
        logger.error("Could not connect to db");
        process.exit(1);
      }
}

