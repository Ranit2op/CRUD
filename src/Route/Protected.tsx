import { Navigate} from "react-router-dom";

interface abc{
    signin:any,
    children:any
}
const Protected:React.FC<abc>=({signin,children})=>{
   
   if(!signin){
    <Navigate to='/' replace/>
   }
   else{
    return children
   }
 
    return(
        <>
        
        </>
    )
}
export default Protected;
