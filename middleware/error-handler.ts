import { CustomApiError } from "../error/custom_error";
import logger from "../util/logger";

 
let errorHandler = (err: Error, req: any, res: any, next: any) => {
    if(err instanceof CustomApiError){
        return res.status(400).json({msg: err.message})
    }
    return res.status(500).json({msg: err.message})
}

export default errorHandler