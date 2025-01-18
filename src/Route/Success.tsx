import { useNavigate } from "react-router-dom"

const Successful=()=>{
    const navigate=useNavigate();
    const back=()=>{
        navigate(-1);

    }
    const st:any={
        'fontFamily':'monospace'
    }
    return(
        <>
          <h3 style={st}>Login successful.</h3>
          <button  onClick={back}>Back</button>
        </>
    )
}
export default Successful;