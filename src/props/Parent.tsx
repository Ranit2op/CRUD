import { useState } from "react";
import Child from "./Child";
interface abc {
    id: number,
    name: string,
    add: string
}


const Parent = () => {
    const [check,setCheck]=useState<boolean>(false);
    const [data, setData] = useState<abc[]>([
        {
            id: 1, name: 'Ranit Saha', add: 'Alipurduar'
        },
        {
            id: 2, name: 'akash Saha', add: 'Madarihat'
        },
        {
            id: 3, name: 'bikram mandal', add: 'Madarihat'
        }
    ])
    const sentdata=()=>{
      setCheck(true);
    }
    return (
        <div>
            <button onClick={sentdata}>Sent</button>
       {
        (check)?(<Child val={data}/>):(null)
       }
        </div>
    )
}
export default Parent;



 