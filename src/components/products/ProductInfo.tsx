import { User } from '@prisma/client';
import React from 'react'
import { IconType } from 'react-icons';
import styles from './ProductInfo.module.scss';
import Avatar from '../avatar/Avatar';
import ProductCategory from './ProductCategory';
import { formatTime } from '@/helpers/dayjs';

interface IProductInfoProps {
  user: User;  
  description: string;
  createdAt: Date;
  category: {
    icon: IconType,
    label: string,
    description: string
  } | undefined;
}

const ProductInfo = ({
  user,
  category,
  description,
  createdAt
}: IProductInfoProps) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['avatar-wrapper']}>
        <div className={styles['avatar-box']}>
          <Avatar src={user?.image} />
          <p>{user?.name}</p>
        </div>
        <div className={styles['product-date']}>
          {formatTime(createdAt)}
        </div>
      </div>
      <hr />
      {category && 
        <ProductCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      }
      <div>
        {description}
      </div>
    </div>
  )
}

export default ProductInfo