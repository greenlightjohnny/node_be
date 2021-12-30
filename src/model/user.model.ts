import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, require: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as UserDocument;

  if (!user.isModified) {
  }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
