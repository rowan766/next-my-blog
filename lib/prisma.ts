import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: 'postgresql://postgres:zh1280044839@database-2.cluster-c5u60a8g6uxx.us-east-2.rds.amazonaws.com:5432/postgres?sslmode=require'
      }
    }
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
