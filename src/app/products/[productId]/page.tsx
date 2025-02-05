import React from 'react'
import getProductById, { IParams } from '@/app/actions/getProductById'
import Container from '@/components/container/Container'
import getCurrentUser from '@/app/actions/getCurrentUser';
import ProductClient from './ProductClient';
import EmptyState from '@/components/emptyState/EmptyState';

const ProductPage = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  // console.log('product: ', product);
  const currentUser = await getCurrentUser();

  if (!product) {
    return (
      <EmptyState />
    )
  }
  return (
    <ProductClient 
      product={product} 
      currentUser={currentUser} 
    />
  )
}

export default ProductPage