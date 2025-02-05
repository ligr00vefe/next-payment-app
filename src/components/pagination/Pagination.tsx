'use client';
import React from 'react'
import styles from './Pagination.module.scss';
import PaginationLink from './PaginationLink';
import usePagination from '@lucasmogari/react-pagination';

interface IPaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: IPaginationProps) => {
  const { fromItem, toItem, getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 3,
  });

  const firstPage = 1;
  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, firstPage);
  const arr = new Array(totalPages + 2);

  return (
    <div className={styles['wrapper']}>
      {[...arr].map((_, i) => {
        const { page, disabled, current } = getPageItem(i);

        if (page === 'previous') {
          return (
            <PaginationLink 
              key={page}
              page={prevPage} 
              disabled={disabled} 
            >
              {'<'}
            </PaginationLink>
          );
        }

        if (page === 'gap') {
          return <span key={`${page}-${i}`}>...</span>;
        }

        if (page === 'next') {
          return (
            <PaginationLink 
              key={page}
              page={nextPage} 
              disabled={disabled} 
            >
              {'>'}
            </PaginationLink>
          )
        }

        return (<PaginationLink 
          key={i} 
          active={current}
          page={page}
        >{page}</PaginationLink>)
      })}
    </div>
  )
}

export default Pagination