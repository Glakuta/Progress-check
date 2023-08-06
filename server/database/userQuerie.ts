import { Request, Response } from "express";
import { pool } from "./database";

export const getAllUsersDb = async () => {
  const { rows: users } = await pool.query("select * from user_table");
  return users;
};
