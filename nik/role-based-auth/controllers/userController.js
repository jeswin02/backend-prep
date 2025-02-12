import User from "../models/User.js";

export const superAdminAction = async (req, res) => {
  const { userId, action } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (action === "approve") {
    user.status = "approved";
    await user.save();
    return res.json({ message: "User approved by Super Admin" });
  }

  if (action === "deactivate") {
    user.status = "deactivated";
    await user.save();
    return res.json({ message: "User deactivated by Super Admin" });
  }
  res.status(400).json({ message: "Invalid action" });
};
