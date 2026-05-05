// src/controllers/guest.controller.js
import { prisma } from "../utils/prisma.js";

// ─── Create Guest ────────────────────────────────────────────────────────────
export const createGuest = async (req, res, next) => {
  try {
    const { full_name, phone } = req.body;

    if (!full_name) {
      return res.status(400).json({ message: "full_name is required" });
    }

    const guest = await prisma.guest.create({
      data: {
        full_name,
        phone: phone || null,
      },
    });

    return res.status(201).json({
      message: "Guest created successfully",
      data: guest,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Get All Guests ──────────────────────────────────────────────────────────
export const getAllGuests = async (req, res, next) => {
  try {
    const guests = await prisma.guest.findMany({
      orderBy: { created_at: "desc" },
    });

    if (guests.length === 0) {
      return res.status(200).json({
        message: "No guests found",
        data: [],
      });
    }

    return res.status(200).json({
      message: "Guests fetched successfully",
      data: guests,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Get Guest By ID ─────────────────────────────────────────────────────────
export const getGuestById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const guest = await prisma.guest.findUnique({
      where: { guest_id: Number(id) },
      include: {
        stays: true,
        food_orders: true,
        billings: true,
      },
    });

    if (!guest) {
      return res.status(404).json({ message: "Guest not found" });
    }

    return res.status(200).json({
      message: "Guest fetched successfully",
      data: guest,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Update Guest ────────────────────────────────────────────────────────────
export const updateGuest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { full_name, phone } = req.body;

    const existing = await prisma.guest.findUnique({
      where: { guest_id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Guest not found" });
    }

    const guest = await prisma.guest.update({
      where: { guest_id: Number(id) },
      data: {
        full_name: full_name ?? existing.full_name,
        phone: phone ?? existing.phone,
      },
    });

    return res.status(200).json({
      message: "Guest updated successfully",
      data: guest,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Delete Guest ────────────────────────────────────────────────────────────
export const deleteGuest = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await prisma.guest.findUnique({
      where: { guest_id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Guest not found" });
    }

    await prisma.guest.delete({
      where: { guest_id: Number(id) },
    });

    return res.status(200).json({ message: "Guest deleted successfully" });
  } catch (error) {
    next(error);
  }
};
