import { Request, response, Response } from "express";

import taskModel from "../model/taskModel";

const postTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { task, status, description } = req.body;
    const newTask = await taskModel.create({
      task,
      status,
      description,
    });

    return res.status(201).json({
      message: "Task Created Successfully",
      data: newTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

const getAlltasks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allTasks = await taskModel.find();
    return res.status(200).json({
      message: "Tasks gotten successfully",
      data: allTasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

const getOnetask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const oneTask = await taskModel.findById(req.params.id);
    return res.status(200).json({
      message: "one task gotten successfully",
      data: oneTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

const updateTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { task, status, description } = req.body;
    const update = await taskModel.findByIdAndUpdate(
      req.params.id,
      { task, status, description },
      { new: true }
    );
    return res.status(200).json({
      message: "data updated successfully",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

const deteleTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const Delete = await taskModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "data deleted successfully",
      data: Delete,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
    });
  }
};

export { postTask, getAlltasks, getOnetask, updateTask, deteleTask };
