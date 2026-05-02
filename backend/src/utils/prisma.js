// src/utils/prisma.js
import { createPrismaClient } from "../config/database.js";

const prisma = createPrismaClient();

// Graceful shutdown
// process.on("beforeExit", async () => {
//   await prisma.$disconnect();
//   console.log("✅ Prisma client disconnected");
// });

export { prisma };
