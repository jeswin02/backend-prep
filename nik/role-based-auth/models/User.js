import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true }, // Added required email
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["pending", "approved", "deactivated"],
    default: "pending",
  },
});

export default mongoose.model("User", UserSchema);
