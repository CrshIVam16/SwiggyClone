import React, { useState, useEffect } from 'react'
import Mind from './Mind'
import TopRestaurants from './TopRestaurants'
import OnlineFoodDelivery from './OnlineFoodDelivery'

function Body() {

    const [TopRestaurantsData, setTopRestaurantsData] = useState([])
    const [MindData, setMindData] = useState([])

    async function fetchData() {

        const response = await fetch(
            `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=26.83730&lng=80.91650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const result = await response.json();

        const val = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const val2 = result?.data?.cards[0]?.card?.card?.imageGridCards?.info

        // console.log(result);
        // console.log(val);
        // console.log(val2);
        setTopRestaurantsData(val)
        setMindData(val2)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full flex flex-col items-center p-10'>
            <Mind data={MindData} />
            <TopRestaurants data={TopRestaurantsData} />
            <OnlineFoodDelivery data={TopRestaurantsData} />
        </div>
    )
}

export default Body



