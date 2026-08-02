import React from 'react'
import Mind from './Mind'
import TopRestaurants from './TopRestaurants'

function Body() {


    return (
        <div className='w-full flex flex-col items-center p-10'>
            <Mind />
            <TopRestaurants />
        </div>
    )
}

export default Body

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING  //! Not applicable dut to CORS policy



  