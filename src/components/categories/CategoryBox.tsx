import React from 'react'
import { IconType } from 'react-icons';
import Link from 'next/link';
import styles from './Category.module.scss';
import classNames from 'classnames';

interface ICategoryBox {
  label: string;
  path: string;
  icon: IconType;
  selected?: boolean;
}
const CategoryBox = ({
  label,
  path,
  icon: Icon,
  selected,
}:ICategoryBox) => {
  return (
    <Link
      href={`/?category=${path}`}
      className={classNames(styles['category-box'], selected && styles['selected'])}
    >
      <Icon size={26} />
      <span>{label}</span>
    </Link>
  )
}

export default CategoryBox