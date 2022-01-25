import {NextFunction, Request, Response} from "express";
import { createCustomError } from "../error/custom_error";
import asyncWrapper from "../middleware/async";
import Task from '../model/task';


let getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.find({})
    res.status(200).json({status: true,
        msg: "Fetched All Tasks",
        data: {task, nbHits: task.length}});
})

let createTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        status: true,
        msg: "Task Created Successfully",
        task});
})

let getTask = asyncWrapper (async (req: Request, res: Response, next: NextFunction) => {
    const {id: taskID} = req.params
        const task = await Task.findOne({
           
            _id: taskID})

        if(!task){
            return next(createCustomError(`Task with ID: ${taskID} not found`, 404))
        }

        res.status(200).json({
            status: true,
            msg: "Success",
            task});
})

let updateTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true})
    
    if(!task){
        return next(createCustomError(`Task with ID: ${taskID} not found`, 404))
    }

    res.status(200).json({
        status: true,
        msg: "Task Updated Successfully",
        task});
})


let deleteTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndDelete({_id: taskID})

    if(!task){
        return next(createCustomError(`Task with ID: ${taskID} not found`, 404))
    }
    res.status(200).json({
        status: false,
        msg: "Task Deleted Successfully",
        task});

})

export  {getAllTasks, createTask, getTask, updateTask, deleteTask}