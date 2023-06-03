import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import axios from "axios"


const ForgotPassword = () => {                                                                                                                                                                                                                                                                                                                                                                                  
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")


    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`/api/v1/auth/forget-password`, { email, newPassword, answer })
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate('/login')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }
    return (
        <Layout title={'Forgot Password - Younglife'}>
            <div className="register">
                <h1>Reset Password</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" placeholder='Enter Email' className="form-control" id="exampleInputEmail1" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Enter Password' className="form-control" id="exampleInputPassword1" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Enter your favorite sports' className="form-control" id="exampleInputEmail1" required value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Reset Password</button>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword
