import React, { useEffect, useState } from 'react'
import { ArrowLeftStroke, ArrowRightStroke } from '@boxicons/react'

function Mind({ data }) {

    // const [data, setData] = useState([])

    const [value, setValue] = useState(0)

    // async function fetchData() {
    //     const response = await fetch("https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const result = await response.json()

    //     const val = result?.data?.cards[0]?.card?.card?.imageGridCards?.info
    //     console.log(val);
    //     setData(val)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    function handlePrev() {
        if (value > 0)
            setValue((prev) => prev - 300)
    }

    function handleNext() {
        if (value <= 900) {
            setValue((prev) => prev + 300)
            // console.log(value);
            return
        }
    }

    return (
        <>
            <div className='w-[78%] flex justify-between'>
                <h1 className=" text-2xl font-bold">What's on your mind?</h1>
                <div className='flex gap-5'>
                    <ArrowLeftStroke onClick={handlePrev} className={`w-8 h-8 rounded-2xl cursor-pointer ` + (value === 0 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                    <ArrowRightStroke onClick={handleNext} className={`w-8 h-8 bg-gray-300 rounded-2xl cursor-pointer ` + (value === 1200 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                </div>
            </div>

            <div className=' w-[77%] flex justify-between duration-1000 m-auto overflow-hidden'>
                {data.map((item, id) => (
                    <img key={id} style={{ translate: `-${value}%` }}
                        className={`w-35 duration-500`} src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="" />
                ))}
            </div>

            <hr className='w-[77%] border mt-10 text-gray-400/40' />

        </>
    )
}

export default Mind 