import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String
    },
    isVerified: {
      type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;