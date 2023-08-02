import { Request, Response } from "express";

const tasks = (req: Request, res: Response) => {
  console.log("All my tasks");
};

module.exports = {
  tasks,
};
