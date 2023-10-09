import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const[showPassword, setShowPassoword] = useState(false)

    const navigate = useNavigate()

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }

    function sumbitHandler(event){
        event.preventDefault()
        setIsLoggedIn("true")
        toast.success("logged In")
        console.log("Printing the formData: ")
        console.log(formData)
        navigate("/dashboard")
    }

    
    return (
    <form onSubmit={sumbitHandler}
    className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full'>
            <p
            className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
            >Email Address <sup className='text-pink-200'>*</sup></p>

            <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Address' 
                name='email'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        
        <label className='w-full relative'>
            <p
            className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
            >Password <sup className='text-pink-200'>*</sup></p>

            <input
                required
                type={showPassword ?("text"): ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer '
            onClick={() => setShowPassoword((prev) => !prev)}>
                {showPassword? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                 (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xm mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5'>
            Sign In
        </button>

        
    </form>
  )
}

export default LoginForm