import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Title } from './ui/text';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';
import ProductSideMenu from './ProductSideMenu';

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className='text-sm border-[1px] border-dark-blue/20 rounded-md bg-white group'>
        <div className='relative group overflow-hidden bg-shop-light-bg'>
            {product?.images && (
                <Link href={`/product/${product?.slug?.current}`}>
                    <Image
                        src={urlFor(product?.images[0]).url()}
                        alt='Product Image'
                        loading='lazy'
                        width={700}
                        height={700}
                        className={`w-full h-64 object-contain overflow-hidden transition-transform 
                         bg-shop-light-bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105":
                        "opacity:60"}`}
                />
                </Link>
            )}
            <ProductSideMenu product={product}/>
            {product?.status === "sale" && (
            <p className='absolute top-2 left-2 z-10 text-xs border border-dark-color/50 
            px-2 rounded-full group-hover:border-shop-light-green 
            group-hover:text-shop-light-green hoverEffect'>
                Sale
            </p>
            )}
            {product?.status === "new" && (
            <p className='absolute top-2 left-2 z-10 text-xs border border-dark-color/50 
            px-2 rounded-full group-hover:border-shop-light-green 
            group-hover:text-shop-light-green hoverEffect'>
                New
            </p>
            )}
            {product?.status === "hot" && (
            <Link href={"/deal"}
                className='absolute top-2 left-2 z-10 border border-shop-orange/50
                p-1 rounded-full group-hover:border-shop-orange
                hover:text-shop-dark-green hoverEffect'>
                <Flame
                    size={18}
                    fill='#fb6c08'
                    className='text-shop-orange/50 group-hover:text-shop-orange
                    hoverEffect'
                />
            </Link>
            )}
        </div>
        <div className='p-3 flex flex-col gap-2'>
            {product?.categories && (
            <p 
            className='uppercase line-clamp-1 text-xs text-shop-light-text'>
                {product?.categories?.map((cat) => cat).join(", ")}
            </p>
            )}
            <Title className='text-sm line-clamp-1'>{product?.name}</Title>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-0.5'>
                    {[...Array(5)].map((_,index) => (
                        <StarIcon key={index}
                        size={15}
                        className={index < 4 ? "text-shop-lighter-green": "text-shop-light-text"}
                        fill={index < 4 ? "#93d991" : "#ababab"}/>
                    ))}
                </div>
                <p className='text-shop-light-text text-xs tracking-wide'>5 Reviews</p>
            </div>
            <div className='flex items-center gap-2.5'>
                <p className='font-medium'>In Stock</p>
                <p className={`${product?.stock === 0 ? 
                    "text-red-600" : 
                    "text-shop-light-green font-semibold"}`}
                >
                    {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
                </p>
            </div>
            <PriceView
                price={product?.price}
                discount={product?.discount}
                className="text-sm"/>
            <AddToCartButton 
                product={product} 
                className="w-36 rounded-full"/>
        </div>
    </div>
  )
}

export default ProductCard;
