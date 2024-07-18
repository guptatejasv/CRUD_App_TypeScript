import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Product Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirm: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating Model out of the schema
const User = mongoose.model("User", userSchema);
export default User;
