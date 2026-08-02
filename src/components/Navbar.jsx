import React from 'react'
import { CartPlus, ChevronDown, Discount, Handshake, Search, Shopify, ShoppingBag, User } from '@boxicons/react';

function Navbar() {
    
    const dishes = [
        {
            name: "Swiggy Corporate",
            image: <ShoppingBag />
        },
        {
            name: "Search",
            image: <Search />
        },
        {
            name: "Offers",
            image: <Discount />
        },
        {
            name: "Help",
            image: <Handshake />
        },
        {
            name: "Sign In",
            image: <User />
        },
        {
            name: "Cart",
            image: <CartPlus />
        }
    ]

    return (
        <div className='border-black p-5 shadow-xl'>

            <div className='w-[70%] border-black flex justify-between m-auto'>

                <div className='flex gap-5 items-center'>
                    <img className='w-15' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FS%2Fswiggy-logo-8EF8260FA4-seeklogo.com.png&f=1&nofb=1&ipt=03d9c25a6d2338f06aa58d10bf40ab4de7d536788f6785ef1e90b9cf62beebed" alt="" />
                    <p className='flex underline underline-offset-5 decoration-2 font-bold'>Other
                        <ChevronDown className='text-orange-500 ml-3' />
                    </p>
                </div>


                <div className='flex justify-around items-center font-semibold w-[70%]'>
                    {dishes.map(({ name, image, id }) => (
                        <p key={id} className='flex text-gray-600 gap-1'>{image} {name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar