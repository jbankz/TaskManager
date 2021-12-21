import express  from "express";
import { connectDB } from "./db/connect";
import errorHandler from "./middleware/error-handler";
import { notFound } from "./middleware/notfound";
import tasks from "./routes/tasks";
import logger from "./util/logger";
require('dotenv').config();

const app = express();

const port =  process.env.PORT || 3000;


//? Middleware
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound); 
app.use(errorHandler); 

//* Routes
app.get('/hello', (req, res)=> {
    res.send('Task Manager Project');
});


async function start(){
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=> logger.info(`App is running at http://localhost:${port}`));
    } catch (error) {
        logger.error(error);
    }
}
  

start();