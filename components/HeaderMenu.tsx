"use client"
import React from 'react'
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

const HeaderMenu = () => {
    const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-7 text-sm 
    capitalized font-semibold text-light-color">
      {headerData?.map((e) => (
        <Link key={e?.title} href={e.href}
        className={`hover:text-shop-light-green hoverEffect relative group
        ${pathname === e?.href && "text-shop-light-green"}`}>
            {e?.title}
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 
                bg-shop-light-green group-hover:w-1/2 hoverEffect group-hover:left-0
                ${pathname === e?.href && "w-1/2"}`}/>
            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 
                bg-shop-light-green group-hover:w-1/2 hoverEffect group-hover:right-0
                 ${pathname === e?.href && "w-1/2"}`}/>
        </Link>
      ))}
      
    </div>
  );
};

export default HeaderMenu
