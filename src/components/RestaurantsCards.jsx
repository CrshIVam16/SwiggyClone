import React from 'react'
import { Link } from 'react-router-dom'
import { StarCircle } from '@boxicons/react'

/*
? <RestaurantsCards info={info}  --->  function RestaurantsCards({ info }) { ... }  />
? <RestaurantsCards {...info} /> --->  function RestaurantsCards(info) { ... }
? <RestaurantsCards {...info} /> --->  function RestaurantsCards({ name, cloudinaryImageId, avgRating, ... }) { ... }
*/
function RestaurantsCards(info) {  //can be used when passing done like {...info}

    // console.log(info.link.split("/"));
    // console.log(info.link.split("/").at(-1));
    
    return (
        <Link to={`/menu/${info.link.split("/").at(-1)}`}>
            <div className=" min-w-75 h-45 relative">

                <img
                    className="w-full h-full object-cover rounded-2xl cursor-pointer aspect-square"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
                    alt=""
                />

                <div className="absolute top-0 rounded-2xl w-full h-full bg-linear-to-t from-black form 1%">
                    <p className="absolute bottom-2 ml-3 text-white font-semibold text-2xl">

                        {
                            info?.aggregatedDiscountInfoV3
                                ? (info.aggregatedDiscountInfoV3.subHeader
                                    ? `${info.aggregatedDiscountInfoV3.header} ${info.aggregatedDiscountInfoV3.subHeader}`
                                    : `${info.aggregatedDiscountInfoV3.header} ${info.aggregatedDiscountInfoV3.discountTag}`)
                                : null
                        }


                    </p>
                </div>

            </div>

            <div className='font-semibold text-black/60'>
                <p className='text-black'>{info?.name}</p>
                <div className='flex gap-1 text-black'> <StarCircle className='text-green-400 rounded-2xl' />
                    <p>{info?.avgRating}<span> . {info?.sla?.slaString}</span></p>
                </div>
                <p className='line-clamp-1'>{info?.cuisines.join(", ")}</p>
                <p className='line-clamp-1'>{info?.locality}</p>
            </div></Link>
    )
}

export default RestaurantsCards