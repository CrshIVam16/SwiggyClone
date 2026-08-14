import { useContext } from "react"
import { CartContext } from "../context/contextApi"
import { Link } from "react-router-dom"

function Cart() {

    const { cartData, setCartData } = useContext(CartContext)
    // console.log(cartData)

    function handleRemoveFromCart(i) {
        let newArr = [...cartData]
        newArr.splice(i, 1);
        setCartData(newArr)
        localStorage.setItem("cartData", JSON.stringify(newArr))
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
                {
                    cartData.map((data, i) => (
                        <div className="w-full flex justify-between items-center my-5 p-5">
                            <h2 className="text-2xl font-semibold">{data.name}</h2>
                            <div className='w-[20%] relative h-full'>
                                <img className='rounded-xl aspect-square object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`} alt="" />
                                <button onClick={() => handleRemoveFromCart(i)} className='py-2 px-8 rounded-xl bg-red-500 drop-shadow text-white text-base font-bold absolute -bottom-4 left-2 cursor-pointer'>REMOVE</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart