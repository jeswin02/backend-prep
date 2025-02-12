import User from "../models/User.js";

export const getPendingUsers = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "pending" });
    res.render("superadmin", { pendingUsers });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const superAdminAction = async (req, res) => {
  const { userId, action } = req.body;

  console.log(req.body);
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (action === "approve") {
    user.status = "approved";
    await user.save();
    return res.redirect("/api/users/superadmin");
  }
  if (action === "deactivate") {
    user.status = "deactivated";
    await user.save();
    return res.redirect("/api/users/superadmin");
  }
  res.status(400).json({ message: "Invalid action" });
};
