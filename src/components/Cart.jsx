import { useContext, useState } from "react"
import { CartContext } from "../context/contextApi"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { Star } from "@boxicons/react";
import { toggleLogin } from "../utils/toggleSlice";

function Cart() {

    let veg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png&f=1&nofb=1&ipt=7b3936f0ac325863f9364bf749c4808add8b8129212b4e79d2f6d4c62407cb26"

    let nonVeg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistimg.pinclipart.com%2Fpicdir%2Fs%2F419-4194820_veg-icon-png-non-veg-logo-png-clipart.png&f=1&nofb=1&ipt=13908b280875dff4299cc843bab719ec0040d5a2a5162b450648858cea432443"

    // const { cartData, setCartData } = useContext(CartContext)
    // console.log(cartData)

    // const navigate = useNavigate()
    const cartData = useSelector((state) => state.cartSlice.cartItems)
    const restaurantData = useSelector((state) => state.cartSlice.restaurantData)
    // console.log(restaurantData?.id);

    const dispatch = useDispatch()

    let totalPrice = 0;
    // for (let i = 0; i < cartData.length; i++) {
    //     totalPrice = totalPrice + (cartData[i].price) / 100 || (cartData[i].defaultPrice) / 100;
    // }

    totalPrice = cartData.reduce((acc, currVal) => acc + (currVal.price) / 100 || (currVal.defaultPrice) / 100, 0)

    function handleRemoveFromCart(i) {
        if (cartData.length > 1) {
            let newArr = [...cartData]
            newArr.splice(i, 1);
            // setCartData(newArr)
            dispatch(deleteItem(newArr))
            // localStorage.setItem("cartData", JSON.stringify(newArr))
            toast.success("Food removed . . .")
        }
        else {
            handleClearCart()
        }
    }

    const userData = useSelector((state) => state.authSlice.userData)

    function handleClearCart() {
        dispatch(clearCart())
        toast.success("Your Cart has been cleared now . . .")
        // setCartData([])
        // localStorage.setItem("cartData", JSON.stringify([])) // or below one
        // localStorage.clear() // should be used when nothing needs to be remained like any credentials or something like that 
    }

    function handlePlaceOrder() {
        if (!userData) {
            toast.error("Please login first . . .")
            dispatch(toggleLogin())
            // navigate("/")
            return
        }
        toast.success("Order has been placed")
    }

    if (cartData.length === 0) {
        return (
            <div className="w-full">
                <div className="w-[65%] mx-auto flex flex-col items-center gap-5 mt-5">
                    <img className="w-[50%]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
                    <h1 className="text-2xl font-semibold">Your cart is empty, order something bro</h1>
                    <Link className="text-green-400 font-semibold text-xl" to="/">Order from here . . .</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full">

            <div className="w-[50%] m-auto">

                {/* <Link to={`/menu/${restaurantData?.id}`}> */}
                <Link to={`/menu/rest${restaurantData?.id}`}>
                    <div className="my-10 flex gap-10">
                        <img className='rounded-xl aspect-square object-cover w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurantData.cloudinaryImageId}`} alt="" />
                        <div className="flex flex-col gap-10">
                            <p className="text-4xl border-b-2 max-h-12">{restaurantData.name}</p>
                            <p className="text-2xl max-h-12">{restaurantData.areaName}</p>
                        </div>
                    </div>
                </Link>

                <div>
                    {
                        cartData.map(({ name,
                            price,
                            defaultPrice,
                            description = "",
                            imageId,
                            itemAttribute: { vegClassifier },
                            ratings: { aggregatedRating: { rating, ratingCountV2 } }
                        }, i) => {

                            // const [isMore, setIsMore] = useState(false);
                            let trimDesc = description.substring(0, 130) + ". . .";

                            return (
                                <>
                                    <div className='w-full flex justify-between py-5'>

                                        <div className='w-[70%] flex flex-col justify-between'>

                                            <img className='w-4' src={(vegClassifier === "VEG" ? veg : nonVeg)} alt="" />
                                            {/* <p>{vegClassifier}</p> */}
                                            <h2 className='font-bold text-lg text-black/70'>{name}</h2>
                                            <p className='font-semibold text-sm'>₹ {price ? price / 100 : defaultPrice / 100}</p>

                                            <div className='flex flex-col gap-2 py-1'>
                                                {
                                                    rating && <div className='flex text-xs font-bold'>
                                                        <Star pack="filled" className='text-green-500 w-4 h-4 mr-1' />
                                                        <span>{rating} </span>
                                                        <span className='text-gray-500'>({ratingCountV2})</span>
                                                    </div>
                                                }
                                                {description}
                                                {/* {description.length > 130 ? <div>
                                                    <span className='text-gray-500 font-semibold text-[16px]'>{isMore ? description : trimDesc}</span>
                                                    <button className='text-gray-500 font-bold text-[16px]' onClick={() => setIsMore(!isMore)}>{isMore ? "less" : "more"}</button>
                                                </div> : <span className='text-gray-500 font-semibold text-[16px]'>{description}</span>} */}
                                            </div>
                                        </div>

                                        <div className='w-[20%] relative h-full'>
                                            <img className='rounded-xl aspect-square object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt="" />
                                            <button onClick={handleRemoveFromCart} className='py-2 px-6 rounded-xl bg-white drop-shadow text-red-400 text-lg font-bold absolute -bottom-6 left-5 cursor-pointer'>REMOVE</button>
                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                </>)
                        })
                    }
                </div>

                <h1 className="text-xl font-semibold p-5">Total : ₹{totalPrice}</h1>
                <div className="flex justify-between px-4 mb-5">
                    <button onClick={handlePlaceOrder} className="px-8 py-3 bg-green-400 text-white font-semibold rounded-xl cursor-pointer">Place Order</button>
                    <button onClick={handleClearCart} className="px-8 py-3 bg-red-400 text-white font-semibold rounded-xl cursor-pointer">Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Cart