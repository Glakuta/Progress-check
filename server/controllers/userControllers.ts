import { Request, Response } from "express";
import { getAllUsersService } from "../services/user.services";

export const getAllUsers = async (req: Request, res: Response) => {
  const results = await getAllUsersService();
  res.status(200).json(results);
};
