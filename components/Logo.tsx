import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({className}: {className?: string}) => {
    return (
    <Link href={"/"}>
        <h2 className={cn(
            `text-2xl text-shop-dark-green font-black tracking-[0.1rem] uppercase 
            hover:text-shop-light-green hoverEffect group font-sans`,
            className)}>
            SHOP<span className="text-shop-light-green">TIME</span>
        </h2>
    </Link>
    );
};

export default Logo;