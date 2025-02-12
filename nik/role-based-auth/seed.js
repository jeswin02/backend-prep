import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const seedSuperAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: 'superadmin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('superadmin123', 10);
      const superAdmin = new User({
        username: 'superadmin',
        email: 'superadmin@example.com',  // ✅ Provide a valid email
        password: hashedPassword,
        role: 'superadmin',
        status: 'approved',
      });
      await superAdmin.save();

      const token = jwt.sign(
        { id: superAdmin._id, role: superAdmin.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      console.log(`Super Admin Token: ${token}`);
    } else {
      console.log('Super Admin already exists');
    }
  } catch (error) {
    console.error('Error seeding super admin:', error);
  }
};
