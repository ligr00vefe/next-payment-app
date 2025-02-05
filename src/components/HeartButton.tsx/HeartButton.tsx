'use client';

import useFavorite from '@/hooks/useFavorite';
import { User } from '@prisma/client';
import React from 'react'
import styles from './HeartButton.module.scss';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface IHeartButtonProps {
  productId: string;
  currentUser?: User | null;
}

const HeartButton = ({ 
  productId,
  currentUser
}: IHeartButtonProps) => {

  const { hasFavorited, toggleFavorite } = useFavorite({
    productId,
    currentUser
  });

  return (
    <div
      onClick={toggleFavorite}
      className={styles['wrapper']}
    >
      <AiOutlineHeart 
        size={28}
        className={styles['outline-heart']}
      />
      <AiFillHeart 
        size={24}
        className={
          hasFavorited ? styles['fill-heart'] : styles['fill-heart-gray']
        }
      />
    </div>
  )
}

export default HeartButton