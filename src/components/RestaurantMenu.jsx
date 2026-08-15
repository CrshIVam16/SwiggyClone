import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftStroke, ArrowRightStroke, ChevronDown, ChevronUp, Search, StarCircle, Star } from '@boxicons/react';
import { CartContext } from '../context/contextApi';
// import fetch from 'node-fetch';
// import { HttpsProxyAgent } from 'https-proxy-agent';


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

    //** for dependent dropdowns */ 
    // const [currentIndex, setCurrentIndex] = useState(null) // no dropdown will be open
    // const [currentIndex, setCurrentIndex] = useState(0) // first dropdown will be open by default


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
        // const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);

        const response = await fetch("/menu.json");
        const result = await response.json();

        const menuRoot = result?.[mainId]; // <-- key match here

        const cards = menuRoot?.data?.cards || [];

        setRestaurantData(cards[2]?.card?.card?.info || {});
        setDiscountData(cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
        // setMenuData(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || []);
        // console.log(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        let actualMenu = (cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((data) => (data?.card?.card?.itemCards) || (data?.card?.card?.categories))
        setMenuData(actualMenu);
        // console.log(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]);

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

    function toggle(i) {
        setCurrentIndex(i === currentIndex ? null : i)
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

                {/* <div className='w-full border'>
                    {
                        menuData.map(({ card: { card: { itemCards, title } } }, i) => (
                            <div>
                                <div className='flex border justify-between'>
                                    <h1>{title} {itemCards.length}</h1>
                                    <ChevronUp onClick={() => toggle(i)} />
                                </div>
                                
                              { currentIndex==i &&
                                  <div className='m-4'>
                                    {
                                        itemCards.map(({ card: { info } }) => (
                                            <h1>{info.name}</h1>
                                        ))
                                    }
                                </div>
                              }
                            </div>
                        ))
                    }
                </div> */}

                <div className='w-full p-2'>
                    {
                        menuData.map(({ card: { card } }, i) => (
                            <MenuCard card={card} restaurantData={restaurantData} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function MenuCard({ card, restaurantData }) {

    let check = false;
    if (card['@type']) {
        check = true;
    }

    const [isOpen, setIsOpen] = useState(check);

    function toggleDropDown() {
        setIsOpen((prev) => !prev)
    }

    if (card.itemCards) {
        const { title, itemCards } = card;
        return (
            <div>
                <div className='flex justify-between mt-4'>
                    <h1 className={'font-bold text-' + (card['@type'] ? "lg" : "base")}>{title} ({itemCards.length})</h1>
                    {isOpen ? (<ChevronUp onClick={toggleDropDown} />) : (<ChevronDown onClick={toggleDropDown} />)}
                </div>
                {
                    isOpen && <DetailMenu itemCards={itemCards} restaurantData={restaurantData} />
                }
                <hr className={'my-5 text-slate-300/50 border-' + (card['@type'] ? "5" : "1")} />
            </div >
        )
    }
    else {
        const { title, categories } = card;
        return (
            <div>
                <h1 className='font-bold text-[18px]'>{card.title}</h1>
                {
                    categories.map((data) => (
                        <MenuCard card={data} restaurantData={restaurantData} />
                    ))
                }
                {/* <hr /> */}
            </div >
        )
    }
}

function DetailMenu({ itemCards, restaurantData }) {

    let veg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png&f=1&nofb=1&ipt=7b3936f0ac325863f9364bf749c4808add8b8129212b4e79d2f6d4c62407cb26"

    let nonVeg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistimg.pinclipart.com%2Fpicdir%2Fs%2F419-4194820_veg-icon-png-non-veg-logo-png-clipart.png&f=1&nofb=1&ipt=13908b280875dff4299cc843bab719ec0040d5a2a5162b450648858cea432443"

    return (
        <div className='my-4 min-h-45.5'>

            {
                itemCards.map(({ card: { info } }) => {
                    const {
                        name,
                        price,
                        defaultPrice,
                        description = "",
                        imageId,
                        itemAttribute: { vegClassifier },
                        ratings: { aggregatedRating: { rating, ratingCountV2 } }
                    } = info;
                    // console.log(info);


                    const { cartData, setCartData } = useContext(CartContext);

                    const [isMore, setIsMore] = useState(false);
                    let trimDesc = description.substring(0, 130) + ". . .";

                    function handleAddToCart() {
                        // console.log(restaurantData);

                        const isAdded = cartData.find((data) => data.id === info.id)
                        let getRestaurantDataFromStorage = JSON.parse(localStorage.getItem("restaurantData")) || []
                        console.log(getRestaurantDataFromStorage);

                        if (!isAdded) {
                            if (getRestaurantDataFromStorage.name === restaurantData.name || getRestaurantDataFromStorage.length === 0) {
                                setCartData(prev => [...prev, info]);
                                localStorage.setItem("cartData", JSON.stringify([...cartData, info]))
                                localStorage.setItem("restaurantData", JSON.stringify(restaurantData))
                            }
                            else {
                                alert("Different Restaurant item")
                            }

                        }
                        else {
                            alert("Already Added...")
                        }
                        // console.log(info);
                    }
                    return (

                        <>
                            <div className='w-full flex justify-between py-5'>

                                <div className='w-[70%] flex flex-col justify-between'>

                                    <img className='w-4' src={(vegClassifier === "VEG" ? veg : nonVeg)} alt="" />
                                    {/* <p>{vegClassifier}</p> */}
                                    <h2 className='font-bold text-lg text-black/70'>{name}</h2>
                                    <p className='font-semibold text-sm'>₹ {price ? price / 100 : defaultPrice / 100}</p>

                                    <div className='flex flex-col gap-2 py-1'>
                                        {
                                            rating && <div className='flex text-xs font-bold'>
                                                <Star pack="filled" className='text-green-500 w-4 h-4 mr-1' />
                                                <span>{rating} </span>
                                                <span className='text-gray-500'>({ratingCountV2})</span>
                                            </div>
                                        }
                                        {description.length > 130 ? <div>
                                            <span className='text-gray-500 font-semibold text-[16px]'>{isMore ? description : trimDesc}</span>
                                            <button className='text-gray-500 font-bold text-[16px]' onClick={() => setIsMore(!isMore)}>{isMore ? "less" : "more"}</button>
                                        </div> : <span className='text-gray-500 font-semibold text-[16px]'>{description}</span>}
                                    </div>
                                </div>

                                <div className='w-[20%] relative h-full'>
                                    <img className='rounded-xl aspect-square object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt="" />
                                    <button onClick={handleAddToCart} className='py-2 px-10 rounded-xl bg-white drop-shadow text-green-400 text-lg font-bold absolute -bottom-5 left-5 cursor-pointer'>ADD</button>
                                </div>
                            </div>
                            <hr className='my-4' />
                        </>
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu