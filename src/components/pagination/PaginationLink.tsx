'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { PRODUCTS_PER_PAGE } from '@/constants';
import Link from 'next/link';
import qs from 'query-string';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

interface IPaginationLinkProps {
  page?: number;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const PaginationLink = ({
  page,
  active,
  disabled,
  children
}: IPaginationLinkProps) => {
  const params = useSearchParams();
  const limit = PRODUCTS_PER_PAGE;
  const skip = page ? (Number(page) - 1) * limit : 0;

  let currentQuery = {};

  if (params) {
    currentQuery = qs.parse(params.toString());
  }

  const updateQuery: any = {
    ...currentQuery,
    page,
    skip
  }

  return (
    <Link 
      href={{ query: updateQuery }}
      className={classNames(styles['link'], active && styles['active'], disabled && styles['disabled'])}
    >
      {children}
    </Link>
  )
}

export default PaginationLink