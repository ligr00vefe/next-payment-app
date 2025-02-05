import React from 'react'
import { IconType } from 'react-icons'
import styles from './Category.module.scss';
import classNames from 'classnames';

interface ICategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  path: string;
  onClick: (value: string) => void;
}
const CategoryInput = ({
  icon: Icon,
  label,
  selected,
  onClick,
  path
}: ICategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(path)}
      className={classNames(styles['category-input'], selected && styles['selected'])}
    >
      <Icon size={30} />
      <span>
        {label}
      </span>
    </div>
  )
}

export default CategoryInput