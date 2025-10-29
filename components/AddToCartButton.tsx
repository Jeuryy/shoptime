"use client"
import { Product } from '@/sanity.types';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({product, className}:Props) => {
    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        alert("Item added to cart successfully!")
    }

  return (
    <div>
      <Button
      onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn("w-full text-shop-light-bg bg-shop-dark-green/80 shadow-none border border-shop-dark-green/80 font-semibold tracking-wide hover:text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect", className)}>
        <ShoppingBag/> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  )
}

export default AddToCartButton;
