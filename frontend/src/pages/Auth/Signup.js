import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import axios from "axios"

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/v1/auth/register`, { name, email, password, phone, address, answer })
      if (res && res.data.success) {
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  return (
    <Layout title={"Sign up - Younglife"}>
      <div className="register">
        <h1>Create Account</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" placeholder='First and Last name' className="form-control" id="exampleInputName" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="email" placeholder='Enter Email' className="form-control" id="exampleInputEmail1" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" placeholder='Enter Password' className="form-control" id="exampleInputPassword1" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="tel" placeholder='Mobile Number' className="form-control" id="exampleInputphone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="text" placeholder='Communication Address' className="form-control" id="exampleInputAddress" required value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="text" placeholder='What is your Favorite sports ?' className="form-control" id="exampleInputAddress" required value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </Layout>
  )
}

export default Signup
