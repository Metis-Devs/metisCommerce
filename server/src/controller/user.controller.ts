import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  findOneUser: async (req: Request, res: Response) => {
    try {
      const userId = req.body.userId;

      const user = await userService.findOneUser(userId);

      res.status(200).send(user);
    } catch (err: any) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const { userId, data, name } = req.body;

      await userService.updateUser(userId, name, data);

      res.status(200).json({ userId });
    } catch (err: any) {
      res.status(500).json({ msg: err.message });
    }
  },
};
