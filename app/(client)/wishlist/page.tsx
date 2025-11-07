import NoAccess from '@/components/NoAccess';
import WishListProducts from '@/components/WishListProducts';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const WishlistPage = async () => {
    const user = await currentUser();
  return (
    <>
        {user ? (<div>
                <WishListProducts/>
            </div>) : (
            <NoAccess details='Log in to view your wishlist items. Don&apos;t miss out on your cart products to make the payment!'/>
        )}
    </>
  )
}

export default WishlistPage;
