// src/controllers/menuCategory.controller.js
import { prisma } from "../utils/prisma.js";

// ─── Create Menu Category ─────────────────────────────────────────────────────
export const createMenuCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }

    const existing = await prisma.menuCategory.findFirst({ where: { name } });
    if (existing) {
      return res
        .status(409)
        .json({ message: `Category '${name}' already exists` });
    }

    const category = await prisma.menuCategory.create({ data: { name } });

    return res.status(201).json({
      message: "Menu category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Get All Menu Categories ──────────────────────────────────────────────────
export const getAllMenuCategories = async (req, res, next) => {
  try {
    const categories = await prisma.menuCategory.findMany({
      orderBy: { category_id: "asc" },
      include: { menu_items: true },
    });

    if (categories.length === 0) {
      return res.status(200).json({
        message: "No menu categories found",
        data: [],
      });
    }

    return res.status(200).json({
      message: "Menu categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Get Menu Category By ID ──────────────────────────────────────────────────
export const getMenuCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await prisma.menuCategory.findUnique({
      where: { category_id: Number(id) },
      include: { menu_items: true },
    });

    if (!category) {
      return res.status(404).json({ message: "Menu category not found" });
    }

    return res.status(200).json({
      message: "Menu category fetched successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Update Menu Category ─────────────────────────────────────────────────────
export const updateMenuCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const existing = await prisma.menuCategory.findUnique({
      where: { category_id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Menu category not found" });
    }

    if (name && name !== existing.name) {
      const duplicate = await prisma.menuCategory.findFirst({
        where: { name },
      });
      if (duplicate) {
        return res
          .status(409)
          .json({ message: `Category '${name}' already exists` });
      }
    }

    const category = await prisma.menuCategory.update({
      where: { category_id: Number(id) },
      data: { name: name ?? existing.name },
    });

    return res.status(200).json({
      message: "Menu category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

// ─── Delete Menu Category ─────────────────────────────────────────────────────
export const deleteMenuCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await prisma.menuCategory.findUnique({
      where: { category_id: Number(id) },
      include: { menu_items: true },
    });

    if (!existing) {
      return res.status(404).json({ message: "Menu category not found" });
    }

    if (existing.menu_items.length > 0) {
      return res.status(400).json({
        message:
          "Cannot delete category with existing menu items. Remove or reassign them first.",
      });
    }

    await prisma.menuCategory.delete({ where: { category_id: Number(id) } });

    return res
      .status(200)
      .json({ message: "Menu category deleted successfully" });
  } catch (error) {
    next(error);
  }
};
