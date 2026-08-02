import React, { useEffect, useState } from 'react'
import { ArrowLeftStroke, ArrowRightStroke } from '@boxicons/react'

function TopRestaurants() {

    const val = [
        {
            "info": {
                "id": "396434",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/862b2475-c23a-4a57-8a40-ceccee4fc84f_396434.JPG",
                "locality": "Sector 132",
                "areaName": "Sector 132",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.3,
                "parentId": "721",
                "avgRatingString": "4.3",
                "totalRatingsString": "2.0K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "572"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/pizza-hut-sector-132-rest396434",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "594685",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Gautam Buddha Nagar",
                "areaName": "Sector 110",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4,
                "parentId": "61955",
                "avgRatingString": "4.0",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Top-rated for Chinese, based on user votes."
                        },
                        {
                            "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                            "description": "Top-rated for Momo, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Chinese, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                        "theme": ""
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Top-rated for Momo, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "70% OFF",
                    "subHeader": "UPTO ₹140"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/chinese-wok-gautam-buddha-nagar-sector-110-rest594685",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "142001",
                "name": "Salad Days",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/ba670277-2ba8-471f-8dec-66380630ce4f_142001.jpg",
                "locality": "Golf Course Road",
                "areaName": "Sector 46, Noida",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Salads"
                ],
                "avgRating": 4.6,
                "parentId": "796",
                "avgRatingString": "4.6",
                "totalRatingsString": "11K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-45 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                        },
                        {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Meals with high protein, low calorie and no added sugar",
                                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                        "theme": ""
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                        "imageId": "newg.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹68"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "322"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/salad-days-golf-course-road-sector-46-noida-rest142001",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "818593",
                "name": "Theobroma",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/de59224b-1d49-4792-9c7d-ca4ea9919ace_818593.JPG",
                "locality": "Sector 104",
                "areaName": "Sector 104",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.5,
                "parentId": "1040",
                "avgRatingString": "4.5",
                "totalRatingsString": "2.0K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                        "imageId": "newg.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.7",
                        "ratingCount": "95"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/theobroma-sector-104-rest818593",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "772025",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/6d8628a7-ca49-4cf5-94c2-d8751d258268_772025.JPG",
                "locality": "Grand Street",
                "areaName": "Sector 132",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "American",
                    "Fast Food",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "630",
                "avgRatingString": "4.3",
                "totalRatingsString": "5.8K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 02:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Top-rated for Bolt, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Bolt, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹52"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/mcdonalds-grand-street-sector-132-rest772025",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "353956",
                "name": "Bakingo",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/17/cf277aee-d98e-4724-a46e-bd76dc429422_353956.JPG",
                "locality": "A Block",
                "areaName": "Sector 83",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.6,
                "parentId": "3818",
                "avgRatingString": "4.6",
                "totalRatingsString": "11K+",
                "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 03:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                        },
                        {
                            "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                            "description": "Top-rated for Cakes & Desserts, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "bolt!",
                                        "imageId": "android/static-assets/icons/big_rx.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Top-rated for Cakes & Desserts, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹59"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/bakingo-a-block-sector-83-rest353956",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "634136",
                "name": "Subway",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9ff1ea90-f0f0-4f5f-9d83-32775969afae_634136.jpg",
                "locality": "Sector 98",
                "areaName": "Gautam Buddha Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "sandwich",
                    "Salads",
                    "wrap",
                    "Healthy Food"
                ],
                "avgRating": 4.3,
                "parentId": "2",
                "avgRatingString": "4.3",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Meals with high protein, low calorie and no added sugar",
                                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹69"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/subway-sector-98-gautam-buddha-nagar-rest634136",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "570254",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9eb1f660-8e14-47de-8c7d-f6d8e12ad05a_570254.jpg",
                "locality": "sector 129",
                "areaName": "sector 129",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Burger, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹59"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/burger-king-sector-129-rest570254",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "177495",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "ugemttaiukyqfhxkfs9i",
                "locality": "Sector 104",
                "areaName": "Hajipur",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.8,
                "parentId": "4961",
                "avgRatingString": "3.8",
                "totalRatingsString": "18K+",
                "sla": {
                    "deliveryTime": 37,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-45 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 05:29:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "70% OFF",
                    "subHeader": "UPTO ₹140"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.5",
                        "ratingCount": "15"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-104-hajipur-rest177495",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "252695",
                "name": "Wow! Momo",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/5744d382-ecbc-494a-899c-f4fb41e1fccf_252695.JPG",
                "locality": "Sector 142",
                "areaName": "Fairfox EON (Relo)",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Momos",
                    "Chinese",
                    "fastfood",
                    "Asian",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "1776",
                "avgRatingString": "4.1",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                            "description": "Top-rated for Momo, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Momo, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹69"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.7",
                        "ratingCount": "249"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/wow-momo-sector-142-fairfox-eon-relo--rest252695",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "571461",
                "name": "Hong's Kitchen - Hearty! Tasty! Chinese!",
                "cloudinaryImageId": "hfo97622qjkgz6dm9nuy",
                "locality": "Vishwkarma Road",
                "areaName": "Hajipur",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan"
                ],
                "avgRating": 4.2,
                "parentId": "9547",
                "avgRatingString": "4.2",
                "totalRatingsString": "5.5K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 03:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                            "description": "Top-rated for Momo, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Momo, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹49"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/hongs-kitchen-hearty-tasty-chinese-vishwkarma-road-hajipur-rest571461",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "28797",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/5/2e6a784d-03c3-49cb-839a-3323b3107342_28797.JPG",
                "locality": "A 3rd Block",
                "areaName": "Sector 110",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "2456",
                "avgRatingString": "4.3",
                "totalRatingsString": "7.4K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Top-rated for Bolt, based on user votes."
                        },
                        {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Top-rated for Pizza, based on user votes."
                        },
                        {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Top-rated for quick Bolt delivery, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Bolt, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                        "theme": ""
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Top-rated for Pizza, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                        "theme": ""
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Top-rated for quick Bolt delivery, based on user votes.",
                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹27"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/dominos-pizza-a-3rd-block-sector-110-rest28797",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "631044",
                "name": "Dum Safar Biryani",
                "cloudinaryImageId": "npstmrctxe5c01ithedk",
                "locality": "Jp Wishtown",
                "areaName": "Sector 133",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "Kebabs",
                    "North Indian",
                    "barbeque"
                ],
                "avgRating": 4,
                "parentId": "351013",
                "avgRatingString": "4.0",
                "totalRatingsString": "1.8K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-40 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/dum-safar-biryani-jp-wishtown-sector-133-rest631044",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "89969",
                "name": "Baskin Robbins - Ice Cream Desserts",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/40cdcad1-f6ab-4871-ae72-48c82a7f8d3e_89969.jpg",
                "locality": "Sector 104",
                "areaName": "Hajipur",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Ice Cream"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "5588",
                "avgRatingString": "4.6",
                "totalRatingsString": "880",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                        },
                        {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Top-rated for Ice Cream, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Meals with high protein, low calorie and no added sugar",
                                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                        "theme": ""
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Top-rated for Ice Cream, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/baskin-robbins-ice-cream-desserts-sector-104-hajipur-rest89969",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "594715",
                "name": "Big Bowl",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_594715.JPG",
                "locality": "Block- A",
                "areaName": "Sector 110",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "434792",
                "avgRatingString": "4.1",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "70% OFF",
                    "subHeader": "UPTO ₹140"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/big-bowl-block-a-sector-110-rest594715",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "142009",
                "name": "Burger Singh(Big Punjabi Burgers)",
                "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
                "locality": "Sector 137",
                "areaName": "Sector 135",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Snacks",
                    "Fast Food",
                    "Indian",
                    "American",
                    "Beverages",
                    "Desserts",
                    "Mughlai",
                    "North Indian",
                    "Biryani"
                ],
                "avgRating": 4.4,
                "parentId": "772431",
                "avgRatingString": "4.4",
                "totalRatingsString": "12K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 05:29:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "95"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/burger-singh-big-punjabi-burgers-sector-137-sector-135-rest142009",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "400158",
                "name": "NIC Ice Creams",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/82082dd7-aa55-45c1-a897-5da4e38febac_400158.JPG",
                "locality": "Ghari Shahdara",
                "areaName": "Sector 135",
                "costForTwo": "₹120 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "6249",
                "avgRatingString": "4.6",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Top-rated for Ice Cream, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Ice Cream, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹42"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/nic-ice-creams-ghari-shahdara-sector-135-rest400158",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "314442",
                "name": "Natural Ice Cream",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/762b87db-d98c-42db-ac9f-91bf6a3bdbef_314442.jpg",
                "locality": "B Block",
                "areaName": "Sector 83",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "2093",
                "avgRatingString": "4.5",
                "totalRatingsString": "1.2K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 3.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "3.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Top-rated for Ice Cream, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Ice Cream, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/natural-ice-cream-b-block-sector-83-rest314442",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "837938",
                "name": "The Pizza Project by Oven Story",
                "cloudinaryImageId": "f1b907b0b8f86c62e4fc347c6b1434e6",
                "locality": "B Block",
                "areaName": "Sector 83",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.6,
                "parentId": "497031",
                "avgRatingString": "3.6",
                "totalRatingsString": "136",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 3.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-01 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/the-pizza-project-by-oven-story-b-block-sector-83-rest837938",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "68184",
                "name": "Rollsking",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/12/1fe5add4-b1d3-43f8-a3f8-f09a6ebbc6dd_68184.JPG",
                "locality": "Rohillapur",
                "areaName": "Sector 132",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Rolls & Wraps",
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "North Indian"
                ],
                "avgRating": 4.4,
                "parentId": "4697",
                "avgRatingString": "4.4",
                "totalRatingsString": "13K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2026-08-02 04:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                            "description": "Top-rated for Rolls, based on user votes."
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Top-rated for Rolls, based on user votes.",
                                        "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                        "theme": ""
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹95"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-972162f4-32b8-4780-bbc8-4dc500e06e25"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/noida-1/rollsking-rohillapur-sector-132-rest68184",
                "type": "WEBLINK"
            }
        }
    ]

    const [data, setData] = useState([])
    const [value, setValue] = useState(0)

    async function fetcData() {
        // const response = await fetch("https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const result = await response.json()

        // const val = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(val);
        setData(val)
    }

    useEffect(() => {
        fetcData()
    }, [])

    function handlePrev() {
        if (value > 0)
            setValue((prev) => prev - 110)
    }

    function handleNext() {
        if (value > 1660)
            return
        setValue((prev) => prev + 110)
        console.log(value);
    }

    return (
        <>
            <div className='w-[78%] flex justify-between items-end'>
                <h1 className="text-2xl font-bold mt-10">Top restaurant chains in Delhi</h1>
                <div className='flex gap-5'>
                    <ArrowLeftStroke onClick={handlePrev} className={`w-8 h-8 rounded-2xl cursor-pointer ` + (value === 0 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                    <ArrowRightStroke onClick={handleNext} className={`w-8 h-8 bg-gray-300 rounded-2xl cursor-pointer ` + (value >= 1650 ? "bg-gray-200 text-gray-400" : "bg-gray-300")} />
                </div>
            </div>

            <div className=' w-[77%] flex duration-1000 m-auto overflow-hidden gap-5 mt-10'>
                {data.map(({ info }, id) => (
                    <div style={{ translate: `-${value}%` }}
                        className={`min-w-75 h-45 duration-500`}>
                        <img key={id} className='w-full h-full object-cover rounded-2xl cursor-pointer aspect-square'
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`} alt="" />
                    </div>
                ))}
            </div>

            <hr className='w-[77%] border mt-10 text-gray-400/40' />

        </>
    )
}
export default TopRestaurants