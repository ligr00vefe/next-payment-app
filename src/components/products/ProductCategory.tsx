import React from 'react'
import { IconType } from 'react-icons'
import styles from './ProductCategory.module.scss';

interface IProductCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ProductCategory = ({ 
  icon: Icon,
  label,
  description,
}: IProductCategoryProps) => {
  return (
    <>
      <div className={styles['wrapper']}>
        <Icon size={40} className={styles['icon']} />
        <div className={styles['content']}>
          <div className={styles['label']}>
            {label}
          </div>
          <div className={styles['description']}>
            {description}
          </div>
        </div>        
      </div>
    </>
  )
}

export default ProductCategory