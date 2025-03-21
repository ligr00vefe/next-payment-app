import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/helpers/prismadb';

interface IParams {
  productId?: string;
}

export async function POST (
  request: Request,
  { params } : { params: IParams}
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { productId } = params;
  // console.log('productId: ', productId);

  if (!productId || typeof productId !== 'string') {
    throw new Error('Invalid ID');
  }

  const favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(productId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds: favoriteIds
    }
  })

  return NextResponse.json(user);
}

export async function DELETE (
  request: Request,
  { params } : { params: IParams}
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { productId } = params;
  // console.log('productId: ', productId);

  if (!productId || typeof productId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter(id => id !== productId);

  const user = await prisma?.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      favoriteIds: favoriteIds
    }
  })

  return NextResponse.json(user);
}