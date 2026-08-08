import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftStroke, ArrowRightStroke, Search, StarCircle } from '@boxicons/react';


function RestaurantMenu() {

    const { id } = useParams()
    // console.log(id.split("-").at(-1));
    let mainId = id.split("-").at(-1).slice(4)
    // let mainId = id
    // console.log(mainId);


    const [menuData, setMenuData] = useState([])
    const [restaurantData, setRestaurantData] = useState([])
    const [discountData, setDiscountData] = useState([])
    const [value, setValue] = useState(0)


    // async function fetchMenu() {

    //     const response = await fetch("/menu.json")
    //     const result = await response.json();
    //     let data = result;
    //     console.log(result);

    //     setRestaurantData(result?.data?.cards[2]?.card?.card?.info);
    //     setDiscountData(result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    //     setMenuData(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    //     console.log(result?.data?.cards[2]?.card?.card?.info);

    // }

    async function fetchMenu() {
        const response = await fetch("/menu.json");
        const result = await response.json();

        const menuRoot = result?.[mainId]; // <-- key match here

        const cards = menuRoot?.data?.cards || [];

        setRestaurantData(cards[2]?.card?.card?.info || {});
        setDiscountData(cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
        // setMenuData(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || []);
        // console.log(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        let actualMenu = (cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((data) => (data?.card?.card?.itemCards))
        setMenuData(actualMenu);
    }


    function handlePrev() {
        if (value > 0)
            setValue((prev) => prev - 100)
        // console.log(value);
    }

    function handleNext() {
        if (value > 200)
            return
        setValue((prev) => prev + 100)
        // console.log(value);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <div className=' w-200 flex flex-col gap-5 p-1 mt-5'>
                <p className='text-xs'>
                    <Link to="/">
                        <span className='text-slate-500 mr-1 ml-1 cursor-pointer hover:text-slate-800'>Home</span>
                    </Link> /
                    <span className='text-slate-500 mr-1 ml-1 cursor-pointer hover:text-slate-800'>{restaurantData?.city}</span> /
                    <span className='text-slate-800 mr-1 ml-1'>{restaurantData?.name}</span>
                </p>
                <h1 className='text-2xl font-bold'>{restaurantData?.name}</h1>
                <div className='w-full min-h-[206px] rounded-2xl px-4 pb-4 bg-linear-to-t from-slate-200/50'>
                    <div className='w-full h-full border border-slate-200 rounded-2xl bg-white'>

                        <div className='p-4 '>
                            <div className='flex gap-1 font-semibold'>
                                <StarCircle className='text-green-400' />
                                <span>
                                    {restaurantData?.avgRating}
                                </span>
                                <span>
                                    ({restaurantData?.totalRatingsString})
                                </span>
                                .
                                <span>
                                    {restaurantData?.costForTwoMessage}
                                </span>

                            </div>

                            <span className='font-semibold underline text-orange-400'>
                                {restaurantData?.cuisines?.join(", ")}
                            </span>

                            <div className=' flex pt-3 gap-2'>
                                <div className=''>
                                    <div className=' w-2 h-2 bg-slate-400 rounded-xl'></div>
                                    <div className='ml-[2px] w-[3px] h-8 bg-slate-400 rounded-xl'></div>
                                    <div className=' w-2 h-2 bg-slate-400 rounded-xl'></div>
                                </div>
                                <div className=' flex flex-col gap-2 text-sm'>
                                    <div>
                                        <span className='font-semibold'>Outlet &nbsp;&nbsp;&nbsp;</span>
                                        <span className='font-semibold text-gray-500'>{restaurantData?.locality}</span>
                                    </div>
                                    <span className='font-semibold'>{restaurantData?.sla?.slaString}</span>
                                </div>
                            </div>
                        </div>
                        <hr className=' border-slate-400/60 mt-4 w-full' />
                    </div>
                </div>

                <div className='w-full flex justify-between items-end'>
                    <h1 className="text-xl font-bold mt-10">Deals For You</h1>
                    <div className='flex gap-5'>
                        <ArrowLeftStroke onClick={handlePrev} className={`w-8 h-8 rounded-2xl cursor-pointer ` + (value === 0 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                        <ArrowRightStroke onClick={handleNext} className={`w-8 h-8 bg-gray-300 rounded-2xl cursor-pointer ` + (value > 200 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                    </div>
                </div>

                <div className="flex gap-3 overflow-hidden">
                    {discountData.map(({ info: { header, offerLogo, couponCode, description } }, i) => {
                        return (
                            <div
                                key={i} style={{ translate: `-${value}%` }}
                                className="duration-500 flex min-w-82 min-h-15 overflow-hidden border border-slate-500/50 rounded-xl px-2 py-3"
                            >
                                <img
                                    className="w-12 h-12 mr-3"
                                    src={
                                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
                                        (offerLogo || "")
                                    }
                                    alt=""
                                />
                                <div>
                                    <h2 className="font-extrabold">{header}</h2>
                                    <p className="text-slate-700/70 font-bold text-sm">
                                        {couponCode || description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='w-full flex p-3 text-center font-semibold text-gray-500 rounded-xl bg-gray-300/50'>
                    <p className='m-auto'>Search for dishes</p>
                    <Search />
                </div>

                <div className='w-full border'>
                    {
                        menuData.map(({ card: { card: { itemCards, title } } }) => (
                            <h1>{title} {itemCards.length}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu