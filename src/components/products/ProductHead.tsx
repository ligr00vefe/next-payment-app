import { User } from '@prisma/client';
import React from 'react'
import Heading from '../heading/Heading';
import styles from './ProductHead.module.scss';
import HeartButton from '../HeartButton.tsx/HeartButton';
import Image from 'next/image';

interface IProductHeadProps {
  id: string;
  title: string;
  imageSrc: string;
  currentUser?: User | null;
}

const ProductHead = ({
  id,
  title,
  imageSrc,
  currentUser
}: IProductHeadProps) => {
  return (
    <>
      <Heading title={title} />
      <div className={styles['wrapper']}>
        <Image
          src={imageSrc} 
          fill
          className={styles['image']}
          alt='product-image'
        />
        <div className={styles['heart-btn']}>
          <HeartButton
            productId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  )
}

export default ProductHead