import React, { useState, useEffect } from 'react'
import Mind from './Mind'
import TopRestaurants from './TopRestaurants'
import OnlineFoodDelivery from './OnlineFoodDelivery'
import { useSelector } from 'react-redux';

function Body() {

    const [TopRestaurantsData, setTopRestaurantsData] = useState([])
    const [MindData, setMindData] = useState([])
    const [topResTitle, setTopResTitle] = useState("")
    const [onlineTitle, setOnlineTitle] = useState("")

    async function fetchData() {

        const response = await fetch("https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=26.953975&lng=80.985831&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const result = await response.json()


        const val = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const val2 = result?.data?.cards[0]?.card?.card?.imageGridCards?.info

        // console.log(result?.data?.cards[1]?.card?.card?.header?.title);
        // console.log(result?.data?.cards[2]?.card?.card?.title);
        // console.log(result);
        // console.log(val2);
        // console.log(val);
        // console.log(val2);
        setTopRestaurantsData(val)
        setMindData(val2)
        setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title)
        setOnlineTitle(result?.data?.cards[2]?.card?.card?.title)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filterVal = useSelector((state => state.filterSlice.filterVal))
    console.log(filterVal);

    console.log(TopRestaurantsData);

    const filteredData = TopRestaurantsData.filter((item) => {
        if (!filterVal)
            return true;

        switch (filterVal) {
            case "Ratings 4.0+": return item?.info?.avgRating > 4;
            case "Offers": return item?.info?.aggregatedDiscountInfoV3?.header;
            case "Rs. 300-Rs. 600": return item?.info?.costForTwo?.slice(1, 4) >= "300" && item?.info?.costForTwo?.slice(1, 4) <= "600";
            case "Less then Rs. 300": return item?.info?.costForTwo?.slice(1, 4) <= "300";
            default: return true;
        }
    })

    return (
        <div className='w-full flex flex-col items-center p-10'>
            <Mind data={MindData} />
            <TopRestaurants data={TopRestaurantsData} title={topResTitle} />
            <OnlineFoodDelivery data={filterVal ? filteredData : TopRestaurantsData} title={onlineTitle} />
        </div>
    )
}

export default Body



