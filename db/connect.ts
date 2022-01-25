import mongoose from "mongoose";
import logger from "../util/logger";

export async function connectDB(url: string) {
    try {
        await mongoose.connect(url);
        logger.info("DB connected");
      } catch (error) {
        logger.error(`Could not connect to db: ${error}`);
        process.exit(1);
      }
}

