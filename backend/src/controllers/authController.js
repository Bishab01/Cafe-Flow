// src/controllers/auth.controller.js
import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma.js";

// ─── Register ───────────────────────────────────────────────────────────────
export const register = async (req, res, next) => {
  try {
    const { full_name, email, password, phone, role_name } = req.body;

    if (!full_name || !email || !password) {
      return res
        .status(400)
        .json({ message: "full_name, email and password are required" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const role = await prisma.role.findUnique({
      where: { role_name: role_name || "staff" },
    });
    if (!role) {
      return res
        .status(400)
        .json({ message: `Role '${role_name}' does not exist` });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        full_name,
        email,
        password: hashedPass,
        phone: phone || null,
        status: "active",
        role: {
          connect: { role_name: role.role_name },
        },
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        status: true,
        created_at: true,
        role: {
          select: { role_name: true },
        },
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Login ──────────────────────────────────────────────────────────────────
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        role: { select: { role_name: true } },
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.status !== "active") {
      return res
        .status(403)
        .json({ message: "Account is inactive. Contact admin." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = {
      user_id: user.user_id,
      email: user.email,
      role_name: user.role.role_name,
    };

    const accessToken = jwt.sign(payload, process.env.KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });

    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      data: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Logout ─────────────────────────────────────────────────────────────────
export const logout = async (req, res, next) => {
  try {
    // Since JWTs are stateless, logout is handled client-side by discarding the token.
    // If you add a token blacklist or refresh token table later, invalidate it here.
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
