import { useContext } from "react"
import { CartContext } from "../context/contextApi"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";

function Cart() {

    // const { cartData, setCartData } = useContext(CartContext)
    // console.log(cartData)

    const cartData = useSelector((state) => state.cartSlice.cartItems)
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

    function handleClearCart() {
        dispatch(clearCart())
        toast.success("Your Cart has been cleared now . . .")
        // setCartData([])
        // localStorage.setItem("cartData", JSON.stringify([])) // or below one
        // localStorage.clear() // should be used when nothing needs to be remained like any credentials or something like that 
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
                            <div className="flex flex-col gap-5">
                                <h2 className="text-2xl font-semibold">{data.name}</h2>
                                <h2>₹{(data.price) / 100 || (data.defaultPrice) / 100}</h2>
                            </div>
                            <div className='w-[20%] relative h-full'>
                                <img className='rounded-xl aspect-square object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`} alt="" />
                                <button onClick={() => handleRemoveFromCart(i)} className='py-2 px-8 rounded-xl bg-red-500 drop-shadow text-white text-base font-bold absolute -bottom-4 left-2 cursor-pointer'>REMOVE</button>
                            </div>
                        </div>
                    ))
                }
                <h1>Total : ₹{totalPrice}</h1>
                <button onClick={handleClearCart} className="px-8 py-3 bg-red-400 text-white font-semibold rounded-xl cursor-pointer">Clear All</button>
            </div>
        </div>
    )
}

export default Cart