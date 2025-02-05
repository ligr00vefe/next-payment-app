import { NextResponse } from 'next/server';
import prisma from '@/helpers/prismadb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const body = await request.json();
  // console.log('body: ', body);
  
  const {
    email,
    name,
    password
  } = body;

  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  })

  return NextResponse.json(user);
}