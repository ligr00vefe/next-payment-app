'use client';
import React from 'react';
import { Product, User } from '@prisma/client'
import { fromNow } from '@/helpers/dayjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HeartButton from '../HeartButton.tsx/HeartButton';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  // 로그인을 하지 않으면 currentUser는 값이 없을 수 있음
  currentUser?: User | null;
  data: Product;
}

const ProductCard = ({ currentUser, data }: IProductCardProps) => {
  
  const router = useRouter();
  
  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className={styles['card-wrapper']}  
    >
      <div className={styles['card-container']}>
        <div
          className={styles['image-area']}
        >
          <Image
            fill
            sizes='auto'
            className={styles['card-image']}
            src={data.imageSrc}
            alt='Listing'
          />
          <div className={styles['heart-btn']}>
            <HeartButton
              productId={data.id}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className={styles['card-title']}>
          {data.title}
        </div>
        <div className={styles['card-category']}>
          {data.category}
        </div>
        <div className={styles['text-area']}>
          <div className={styles['card-price']}>
            {data.price}{" "}<span className='font-light'>원</span>
          </div>
          <div>
            {fromNow(data.createdAt)}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ProductCard