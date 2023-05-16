import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-hot-toast'

export default function Login() {

  const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
    })
    console.log(data.email);

    const loginUser = async(e) =>{
        e.preventDefault();
       const {email, password} = data
       try {
        const {data} = await axios.post('/login',{
          email,
          password
        });
        if (data.error) {
          toast.error(data.error)
        }else{
          setData({});
            navigate('/dashboard')
        }
       } catch (error) {
        
       }
        

    }



  return (
    <div className='container my-5'>
        <h2 className='text-center'>Login</h2>
    <form onSubmit={loginUser}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.email} onChange={(e)=> setData({...data, email: e.target.value}) } />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={data.password} onChange={(e)=> setData({...data, password: e.target.value}) }/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <button type="button" className="btn btn-secondary mx-5" onClick={()=>navigate("/register")}>Sign Up</button>
</form>
</div>
  )
}
