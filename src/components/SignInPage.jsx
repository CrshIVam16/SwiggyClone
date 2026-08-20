import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData, removeUserData } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'

function SignInPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.authSlice.userData)

    async function handleAuth() {
        let data = await signInWithPopup(auth, provider)
        // console.log(data);
        const userData = {
            name: data.user.displayName,
            photo: data.user.photoURL
        }
        dispatch(addUserData(userData))
        navigate("/")
    }

    async function handleLogout() {
        await signOut(auth)
        dispatch(removeUserData())
    }
    return (
        <div className='rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)] w-[30%] mx-auto p-5 m-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>SignInPage</h1>
            <p className='text-xl font-semibold'>Please login first . . .</p>
            <button onClick={handleAuth} className='cursor-pointer rounded-xl bg-green-400 p-3 mt-5'>Login</button>
            {
                userData &&
                <button onClick={handleLogout} className='cursor-pointer rounded-xl bg-red-400 p-3'>Logout</button>
            }
        </div>
    )
}

export default SignInPage