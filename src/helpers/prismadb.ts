import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

// 개발환경 옵션
// 개발환경에서만 globalThis의 prisma 객체를 client 인스턴스로 적용
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client