import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData, removeUserData } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'
import { toggleLogin } from '../utils/toggleSlice'

function SignInBtn() {

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
        dispatch(toggleLogin())
        navigate("/")
    }

    async function handleLogout() {
        await signOut(auth)
        dispatch(removeUserData())
        dispatch(toggleLogin())
    }
    return (
        <>
            {
                userData ?
                    <button onClick={handleLogout} className='cursor-pointer px-8 py-3 rounded-xl border bg-orange-400 text-white font-semibold'>
                        Logout
                    </button>
                    :
                    <button onClick={handleAuth} className='cursor-pointer px-8 py-3 rounded-xl border bg-orange-400 text-white font-semibold'>
                        Login with google
                    </button>
            }
        </>
    )
}

export default SignInBtn