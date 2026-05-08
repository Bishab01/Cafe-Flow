import { prisma } from "../utils/prisma.js";

// CREATE ROLE
export const createRole = async (req, res) => {
  try {
    const { role_name, description } = req.body;

    const role = await prisma.role.create({
      data: {
        role_name,
        description,
      },
    });

    res.status(201).json({
      message: "Role created successfully",
      role,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET ALL ROLES
export const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();

    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET ROLE BY ID
export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await prisma.role.findUnique({
      where: {
        role_id: parseInt(id),
      },
    });

    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// UPDATE ROLE
export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_name, description } = req.body;

    const updatedRole = await prisma.role.update({
      where: {
        role_id: parseInt(id),
      },
      data: {
        role_name,
        description,
      },
    });

    res.status(200).json({
      message: "Role updated successfully",
      updatedRole,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE ROLE
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.role.delete({
      where: {
        role_id: parseInt(id),
      },
    });

    res.status(200).json({
      message: "Role deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
