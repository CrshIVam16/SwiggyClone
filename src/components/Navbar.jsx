import React, { useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { CartPlus, ChevronDown, Discount, Handshake, Search, Shopify, ShoppingBag, User, X, Location } from '@boxicons/react';
import { CartContext, Visibility } from '../context/contextApi';
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin, toggleSearchBar } from '../utils/toggleSlice';
import SignInBtn from './SignInBtn';

function Navbar() {

    // const [visible, setVisible] = useState(false);

    // const { visible, setVisible } = useContext(Visibility);

    // access data form redux store using useSelector
    const visible = useSelector((state) => state.toggleSlice.searchBarToggle)
    const loginVisible = useSelector((state) => state.toggleSlice.loginToggle)
    const dispatch = useDispatch()

    // const { cartData, setCartData } = useContext(CartContext);
    const cartData = useSelector((state) => state.cartSlice.cartItems)
    const userData = useSelector((state) => state.authSlice.userData)

    const [searchResult, setSearchResult] = useState([]);


    const dishes = [
        {
            name: "Swiggy Corporate",
            image: <ShoppingBag />,
            path: "/corporate"
        },
        {
            name: "Search",
            image: <Search />,
            path: "/search"
        },
        {
            name: "Offers",
            image: <Discount />,
            path: "/offers"
        },
        {
            name: "Help",
            image: <Handshake />,
            path: "/help"
        },
        {
            name: "Sign In",
            image: <User />,
            path: "/signin"
        },
        {
            name: "Cart",
            image: <CartPlus />,
            path: "/cart"
        }
    ]

    const data = {
        "data": [
            {
                "description": "Goa, India",
                "place_id": "ChIJQbc2YxC6vzsRkkDzYv-H-Oo",
                "types": [
                    "administrative_area_level_1",
                    "geocode",
                    "political"
                ],
                "matched_substrings": [
                    {
                        "length": 3,
                        "offset": 0
                    }
                ],
                "terms": [
                    {
                        "value": "Goa",
                        "offset": 0
                    },
                    {
                        "value": "India",
                        "offset": 5
                    }
                ],
                "structured_formatting": {
                    "main_text": "Goa",
                    "main_text_matched_substrings": [
                        {
                            "length": 3,
                            "offset": 0
                        }
                    ],
                    "secondary_text": "India"
                }
            },
            {
                "description": "Goa International Airport (GOI), Airport Road, Dabolim, Goa, India",
                "place_id": "ChIJTfgMjPrHvzsRV3U0LSIp1Lc",
                "types": [
                    "airport",
                    "establishment",
                    "point_of_interest"
                ],
                "matched_substrings": [
                    {
                        "length": 3,
                        "offset": 0
                    }
                ],
                "terms": [
                    {
                        "value": "Goa International Airport (GOI)",
                        "offset": 0
                    },
                    {
                        "value": "Airport Road",
                        "offset": 33
                    },
                    {
                        "value": "Dabolim",
                        "offset": 47
                    },
                    {
                        "value": "Goa",
                        "offset": 56
                    },
                    {
                        "value": "India",
                        "offset": 61
                    }
                ],
                "structured_formatting": {
                    "main_text": "Goa International Airport (GOI)",
                    "main_text_matched_substrings": [
                        {
                            "length": 3,
                            "offset": 0
                        }
                    ],
                    "secondary_text": "Airport Road, Dabolim, Goa, India"
                }
            },
            {
                "description": "Goa beach, Maddo Waddo, MADDO VADDO, Calangute, Goa, India",
                "place_id": "ChIJ6dgmPADBvzsRw231CmbGUKk",
                "types": [
                    "establishment",
                    "point_of_interest"
                ],
                "matched_substrings": [
                    {
                        "length": 3,
                        "offset": 0
                    }
                ],
                "terms": [
                    {
                        "value": "Goa beach",
                        "offset": 0
                    },
                    {
                        "value": "Maddo Waddo",
                        "offset": 11
                    },
                    {
                        "value": "MADDO VADDO",
                        "offset": 24
                    },
                    {
                        "value": "Calangute",
                        "offset": 37
                    },
                    {
                        "value": "Goa",
                        "offset": 48
                    },
                    {
                        "value": "India",
                        "offset": 53
                    }
                ],
                "structured_formatting": {
                    "main_text": "Goa beach",
                    "main_text_matched_substrings": [
                        {
                            "length": 3,
                            "offset": 0
                        }
                    ],
                    "secondary_text": "Maddo Waddo, MADDO VADDO, Calangute, Goa, India"
                }
            }
        ]
    }

    function handleVisibility() {
        // setVisible(prev => !prev)
        dispatch(toggleSearchBar())
    }

    function handleLogin() {
        dispatch(toggleLogin())
    }

    async function searchResultFun(val) {

        // not working so harcoded goa data
        // if (val = "") return
        // const response = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`)
        // const result = await response.json()
        setSearchResult(data.data)
    }

    return (
        <>
            <div className='w-full' >
                <div onClick={handleVisibility} className={'w-full min-h-full bg-black/50 absolute z-30 ' + (visible ? "visible" : "invisible")}></div>
                <div className={'w-[40%] h-full bg-white absolute p-5 z-50 duration-500 ' + (visible ? "left-0" : "-left-full")}>
                    <div className='flex flex-col gap-5 w-[65%] absolute right-0 p-5'>
                        <p className='p-5 w-20 cursor-pointer' onClick={handleVisibility}><X /></p>
                        <input type="text" className='border border-gray-400 w-full p-5 focus:outline-none shadow-lg' onChange={(e) => searchResultFun(e.target.value)} />
                        <div>
                            <ul>
                                {searchResult.map((data, index) => {
                                    const isLast = (index === searchResult.length - 1)
                                    return (
                                        <div className='mb-1'>
                                            <div className='flex gap-2 align-middle'>
                                                <Location />
                                                <li onClick={handleVisibility} className='font-semibold mb-3'>{data.structured_formatting.main_text}
                                                    <br />
                                                    <span className='text-xs opacity-50'>{data.structured_formatting.secondary_text}</span>
                                                    <br />

                                                    {!isLast &&
                                                        <span className='opacity-30'>--------------------------------------------------</span>}
                                                </li>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <div className='w-full' >
                <div onClick={handleLogin} className={'w-full min-h-full bg-black/50 absolute z-30 ' + (loginVisible ? "visible" : "invisible")}></div>
                <div className={'flex flex-col w-[40%] h-full bg-white absolute p-5 z-50 duration-500 ' + (loginVisible ? "right-0" : "-right-full")}>
                    <div className='w-[65%]'>
                        <p className='p-5 w-20 cursor-pointer' onClick={handleLogin}><X /></p>
                    </div>
                    <div className='flex justify-between items-center-safe p-5 w-[65%]'>
                        <h2 className='text-3xl font-semibold border-b-3 pb-4'>Login</h2>
                        <img className='w-30' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_145,h_140/Image-login_btpq7r" alt="" />
                    </div>
                    <div className='w-[65%] flex flex-col gap-2 justify-center'>
                        {/* <button className='cursor-pointer px-8 py-3 rounded-xl border bg-orange-400 text-white font-semibold'>Login with google</button> */}
                        <SignInBtn />
                        <p className='text-xs font-semibold'>
                            <span className='text-black/70'>By clicking on Login, I accept the </span>
                            Terms & Conditions & Privacy Policy</p>
                    </div>
                </div>
            </div >

            <div className="relative w-full">
                <div className="border-black p-5 shadow-xl sticky top-0 bg-white z-10">
                    <div className="w-[70%] border-black flex justify-between m-auto">
                        <div className="flex gap-5 items-center">
                            <Link to="/">
                                <img
                                    className="w-15"
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FS%2Fswiggy-logo-8EF8260FA4-seeklogo.com.png&f=1&nofb=1&ipt=03d9c25a6d2338f06aa58d10bf40ab4de7d536788f6785ef1e90b9cf62beebed"
                                    alt=""
                                />
                            </Link>

                            <p
                                onClick={handleVisibility}
                                className="flex underline underline-offset-5 decoration-2 font-bold cursor-pointer"
                            >
                                Other <ChevronDown className="text-orange-500 ml-3" />
                            </p>
                        </div>

                        <div className="flex justify-around items-center font-semibold w-[70%]">
                            {dishes.map(({ name, image, id, path }) => (
                                name === "Sign In"
                                    ?
                                    <div onClick={handleLogin} key={id}>
                                        <p className="flex text-gray-600 gap-1 justify-center items-center">
                                            {userData ? <img className='w-10 rounded-[50%]' src={userData.photo} /> : image}
                                            {userData ? userData.name : name}
                                            {name === "Cart" &&
                                                <span>{cartData.length}</span>
                                            }
                                        </p>
                                    </div>
                                    :
                                    <Link to={path} key={id}>
                                        <p className="flex text-gray-600 gap-1">
                                            {image} {name}
                                            {name === "Cart" &&
                                                <span>{cartData.length}</span>
                                            }
                                        </p>
                                    </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Outlet />
            </div >
        </>
    );

}

export default Navbar