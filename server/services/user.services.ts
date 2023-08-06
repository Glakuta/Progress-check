import { getAllUsersDb } from "../database/userQuerie";

export const getAllUsersService = async () => {
  try {
    return await getAllUsersDb();
  } catch (error) {
    console.log("Failed to get users");
  }
};
