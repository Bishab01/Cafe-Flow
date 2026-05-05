// prisma/seed.js
import dotenv from "dotenv";
dotenv.config();

import { prisma } from "../src/utils/prisma.js";
import bcrypt from "bcryptjs";

const createDefaultRoles = async () => {
  try {
    const roles = [
      {
        role_name: "admin",
        description: "System administrator with full access",
      },
      { role_name: "cashier", description: "Handles billing and payments" },
      { role_name: "staff", description: "General staff member" },
    ];

    for (const roleData of roles) {
      const existingRole = await prisma.role.findUnique({
        where: { role_name: roleData.role_name },
      });

      if (!existingRole) {
        await prisma.role.create({ data: roleData });
        console.log(`✓ Role '${roleData.role_name}' created successfully`);
      } else {
        console.log(`✓ Role '${roleData.role_name}' already exists`);
      }
    }
  } catch (error) {
    console.error("Error creating default roles:", error.message);
  }
};

export const createAdmin = async () => {
  try {
    await createDefaultRoles();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminName = process.env.ADMIN_NAME;
    const adminPhone = process.env.ADMIN_PHONE;

    if (!adminEmail || !adminPassword || !adminName) {
      console.log(
        "⚠ Admin credentials missing in .env - skipping admin creation",
      );
      return;
    }

    const existingAdmin = await prisma.user.findFirst({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      console.log("✓ Admin user already exists");
      return;
    }

    const hashedPass = await bcrypt.hash(adminPassword, 10);

    const admin = await prisma.user.create({
      data: {
        full_name: adminName,
        email: adminEmail,
        password: hashedPass,
        phone: adminPhone,
        status: "active",
        role: {
          connect: { role_name: "admin" },
        },
      },
    });

    console.log(
      `✓ Admin '${admin.full_name}' created successfully with role ADMIN`,
    );
  } catch (error) {
    console.error("Error in seed:", error.message);
  } finally {
    await prisma.$disconnect();
  }
};

// Run seed
createAdmin();
