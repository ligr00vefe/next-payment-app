'use client';

import React from 'react';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBoatFishing, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

import CategoryBox from './CategoryBox';
import styles from './Category.module.scss';

export const categories = [
  {
    label: 'Burgers',
    path: 'burgers',
    icon: TbBeach,
    description: '버거 카테고리입니다.',
  },
  {
    label: 'Set',
    path: 'set',
    icon: GiWindmill,
    description: '세트메뉴 카테고리입니다.',
  },
  {
    label: 'Fries & Sides',
    path: 'side',
    icon: MdOutlineVilla,
    description: '사이드메뉴 카테고리입니다.',
  },
  {
    label: 'Beverages',
    path: 'beverages',
    icon: TbMountain,
    description: '음료 카테고리입니다.',
  },
  {
    label: 'Dessert',
    path: 'dessert',
    icon: TbPool,
    description: '디저트 카테고리입니다.',
  },
]

const Categories = () => {

  const params = useSearchParams();
  // console.log('params: ', params);

  const category = params?.get('category');
  // console.log('category: ', category);

  return (
    <div
      className={styles['wrapper']}
    >
      {categories.map((item) => (
        <CategoryBox 
          key={item.label}
          label={item.label}
          path={item.path}
          icon={item.icon}
          selected={category === item.path}
        />
      ))}
    </div>
  )
}

export default Categories