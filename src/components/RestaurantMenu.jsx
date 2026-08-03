import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import menu from '../public/menu'

function RestaurantMenu() {

    const { id } = useParams()
    // console.log(id.split("-").at(-1));
    let mainId = id.split("-").at(-1).slice(4)
    console.log(mainId);
    

    const [menuData, setMenuData] = useState("")

    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=871340&catalog_qa=undefined&query=Pizza&submitAction=ENTER

    async function fetchMenu() {

        // const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=60379&catalog_qa=undefined&submitAction=ENTER`);
        const res = await fetch("/menu.json")

        const data = await res.json();
        const restaurantMenu = data[mainId];
        // console.log(restaurantMenu);

        console.log(restaurantMenu?.data?.cards[0]?.card?.card?.text);
        setMenuData(restaurantMenu?.data?.cards[0]?.card?.card?.text);
        // console.log(data)
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <p>RestaurantMenu -- {mainId}  {menuData}</p>
    )
}

export default RestaurantMenu