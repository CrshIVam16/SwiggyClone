import React, { useEffect, useState } from 'react'
import { ArrowLeftStroke, ArrowRightStroke } from '@boxicons/react'

function Mind() {

    const val = [
        {
            "id": "750581",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                "text": "North Indian",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for north indian",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750107",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
                "text": "Dessert",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for dessert",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750579",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                "text": "Pizzas",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for pizza",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750589",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                "text": "Burgers",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for burger",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750587",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                "text": "Chinese",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for chinese",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750591",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                "text": "Biryani",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for biryani",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750222",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                "text": "Rolls",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for roll",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "749868",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                "text": "Cakes",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for cake",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750585",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                "text": "South Indian",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for south indian",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "749768",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                "text": "Momos",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for momos",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "749772",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                "text": "Noodles",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for noodles",
                "altTextCta": "open"
            },
            "entityId": "80463",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750201",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                "text": "Paratha",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for paratha",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750596",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                "text": "Ice Cream",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for icecream",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750131",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                "text": "Dosa",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for dosa",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750206",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                "text": "Pasta",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for pasta",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750208",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                "text": "Pastry",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for Pastry",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750225",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                "text": "Salad",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for salad",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "749876",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                "text": "Chole Bhature",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for chhole bhatoore",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "750586",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
            "action": {
                "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
                "text": "Gulab Jamun",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for gulab jamun",
                "altTextCta": "open"
            },
            "entityId": "80430",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        },
        {
            "id": "2594473",
            "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_waffle.png",
            "action": {
                "link": "https://www.swiggy.com/collections/116178?collection_id=116178&tags=dessert&type=rcv2",
                "text": "Waffle",
                "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for waffle",
                "altTextCta": "open"
            },
            "entityId": "116178",
            "frequencyCapping": {},
            "externalMarketing": {},
            "overlayIcon": {},
            "footerOverlay": {
                "title": {},
                "subtitle": {},
                "cta": {}
            }
        }
    ]

    const [data, setData] = useState([])
    const [value, setValue] = useState(0)

    async function fetcData() {
        // const response = await fetch("https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const result = await response.json()

        // const val = result?.data?.cards[0]?.card?.card?.imageGridCards?.info
        // console.log(val);
        setData(val)
    }

    useEffect(() => {
        fetcData()
    }, [])

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