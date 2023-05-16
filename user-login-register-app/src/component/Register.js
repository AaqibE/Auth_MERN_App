import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-hot-toast';


export default function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',

    })

    const navigate = useNavigate();

    const registerUser = async(e)=>{
        e.preventDefault();
        const {name, email, password} = data
        try {
          const {data} = await axios.post('/register',{
            name, email, password
          })
          if (data.error) {
            toast.error(data.error)
          }else{
            setData({})
            toast.success('Login Succesful. Welcome!')
            navigate('/')
          }
        } catch (error) {
          console.log(error)
        }
    }


  return (
    <div className="container">
        <h2 className="text-center my-4">Registration</h2>
      <form onSubmit={registerUser}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
          value={data.name} onChange={(e)=> setData({...data, name: e.target.value}) }
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          value={data.email} onChange={(e)=> setData({...data, email: e.target.value}) }
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          value={data.password} onChange={(e)=> setData({...data, password: e.target.value}) }
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <button type="button" className="btn btn-secondary mx-5" onClick={()=>navigate("/")}>Login</button>
      </form>
    </div>
  );
}
