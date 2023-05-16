import { useContext } from "react";
import { UserContext } from "./Context";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate();
  return (
    <>
    <div className="container">
        <h1>Dashboard</h1>
        {!!user && (<h2>Hii {user.name}! </h2>)  }
        <button className="btn btn-primary" onClick={()=>navigate("/login")}>Logout</button>
    </div>
    </>
  )
}
