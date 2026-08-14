import React from 'react'
import RestaurantsCards from './RestaurantsCards'

function OnlineFoodDelivery({ data, title }) {
    return (
        <>
            <div className='flex flex-col w-[78%] mt-10'>
                <h1 className=" text-2xl font-bold">{title}</h1>
                <div className=' w-full m-auto overflow-hidden grid grid-cols-3 gap-3'>
                    {data.map(({ info, cta: { link } }, id) => (
                        <div key={id}
                            className=' hover:scale-95 duration-200 p-2 flex flex-col gap-3 '>
                            {/* <RestaurantsCards info={info} /> */}
                            <RestaurantsCards {...info} link={link} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className='w-[77%] border mt-10 text-gray-400/40' />
        </>
    )
}

export default OnlineFoodDelivery