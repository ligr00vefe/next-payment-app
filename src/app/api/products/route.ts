import { NextResponse } from 'next/server';
import prisma from '@/helpers/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const {
        title,
        description,
        imageSrc,
        category,
        latitude,
        longitude,
        price,
    } = body;
    console.log('body: ', body);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const product = await prisma.product.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            latitude,
            longitude,
            price: Number(price),
            userId: currentUser.id,
        }
    })

  return NextResponse.json(product);
}