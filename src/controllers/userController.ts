import express from "express";
import User from "../models/user";

class userCotroller {
  getAllUser = async (request: express.Request, response: express.Response) => {
    try {
      const product = await User.find();
      return response.status(200).json({ data: product });
    } catch (error) {
      return response.sendStatus(400);
    }
  };
  getUser = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.status(200).json({ data: user });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  createUser = async (req: express.Request, res: express.Response) => {
    try {
      const { name, email, password, passwordConfirm } = req.body;
      const user = new User({
        name,
        email,
        password,
        passwordConfirm,
      });
      await user.save();
      return res.status(200).json({
        status: "success",
        message: "User Created Successfully!",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  };

  updateUser = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      const { name, email, password, passwordConfirm } = req.body;
      const user = await User.findByIdAndUpdate(id);
      if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
        user.passwordConfirm = passwordConfirm;

        await user.save();
        return res.status(200).json({ message: "user updated", data: user });
      }
      return res.status(200).json({ message: "user Created!", data: user });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  };

  deleteUser = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      const user = await User.findOneAndDelete({ _id: id });
      return res.status(200).json({ message: "user deleted", data: user });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  };
}

export default new userCotroller();
