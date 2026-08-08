import React, { useEffect, useState } from 'react'
import { ArrowLeftStroke, ArrowRightStroke } from '@boxicons/react'
import RestaurantsCards from './RestaurantsCards'

function TopRestaurants({ data }) {

    // const [data, setData] = useState([])
    // console.log(data);
    

    const [value, setValue] = useState(0)

    // async function fetchData() {
    //     const response = await fetch("https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const result = await response.json()

    //     const val = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     console.log(val);
    //     setData(val)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    function handlePrev() {
        if (value > 0)
            setValue((prev) => prev - 60)
        // console.log(value);
    }

    function handleNext() {
        if (value > 450)
            return
        setValue((prev) => prev + 60)
        // console.log(value);
    }

    return (
        <>
            <div className='w-[78%] flex justify-between items-end'>
                <h1 className="text-2xl font-bold mt-10">Top restaurant chains in Lucknow</h1>
                <div className='flex gap-5'>
                    <ArrowLeftStroke onClick={handlePrev} className={`w-8 h-8 rounded-2xl cursor-pointer ` + (value === 0 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                    <ArrowRightStroke onClick={handleNext} className={`w-8 h-8 bg-gray-300 rounded-2xl cursor-pointer ` + (value > 420 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                </div>
            </div>

            <div className=' w-[77%] m-auto overflow-hidden'>
                <div style={{ transform: `translateX(-${value}%)` }}
                    className='flex duration-1000'>
                    {data.map(({ info, cta:{link} }, id) => (
                        <div key={id}
                            className=' hover:scale-95 duration-200 p-2 flex flex-col gap-3 '>
                            {/* <RestaurantsCards info={info} /> */}
                            <RestaurantsCards {...info} link={link}/>
                        </div>
                    ))}
                </div>
            </div>

            <hr className='w-[77%] border mt-10 text-gray-400/40' />
        </>
    )
}
export default TopRestaurants