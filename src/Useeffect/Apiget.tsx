
// import { useEffect, useState } from "react";

// const Apiget=()=>{
//     const [count,setCount]=useState<number>(1);
//     const [count1,setCount1]=useState<number>(1);
//     useEffect(()=>{
//         console.log("useEffect Called")
//     },[count,count1])//dependency array parameter
//     const increment=()=>{
//         setCount(count+1);
//     }
//     const increment1=()=>{
//         setCount1(count1+1);
//     }
//     return(
//         <>
//            <h2>Count is  : {count}</h2>
//            <button onClick={increment} className="btn btn-success">Increment</button>
//            <h2>Count 1 is :{count1}</h2>
//            <button onClick={increment1} className="btn btn-success">Increment1</button>
//         </>
//     )
// }
//  export default Apiget;


//   useEffect Hooks point to be noted
//   =================================
// Notes:  seen1:  useEffect(()=>{
//     console.log("useEffect Called")   =>useeffect hooks called for the time while component will be  rendered for first time
//                                          =>When state will update the useeffect hooks called autometically
// })



// seen2:  useEffect(()=>{
//     console.log("useEffect Called")
// },[])=>=>useeffect hooks called for the time while component will be  rendered for first time
// =>When state will update the useeffect hooks not called autometically.



// seen3:  useEffect(()=>{
//     console.log("useEffect Called")
// },[value]) =>useeffect hooks called for the time while component will be  rendered for first time
// =>When state will update the useeffect hooks  called autometically with given state update only.


// ================================================================================================================



// import axios from "axios"
// import { useEffect, useState } from "react"
// interface abc{
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }

// const Apiget=()=>{
//     const [info,setInfo]=useState<abc[]>([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{setInfo(res.data)})
//     })
//     return(
//         <>
//         <div className="container">
//             <table className="table table-bordered">
//                 <thead className="bg-dark text-white">
//                     <th>UserId</th>
//                     <th>Id</th>
//                     <th>Title</th>
//                     <th>Body</th>
//                 </thead>
//                 {
//                     info.map((item:abc)=>{
//                         return(
//                             <tr>
//                                 <td>{item.userId}</td>
//                                 <td>{item.id}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.body}</td>
//                             </tr>
//                         )

//                     })
//                 }
//             </table>
//         </div>


//         </>
//     )
// }
// export default Apiget


// ==================================================================================











// import axios from "axios"
// import { useEffect, useState } from "react"
// interface abc{

//     id:number,
//     fname:string,
//     lname:string,
//     username:string,
//     avatar:string
// }

// const Apiget=()=>{
//     const [info,setInfo]=useState<abc[]>([]);
//     const [matched,setMatched]=useState<any>([]);
//     useEffect(()=>{
//         axios.get('https://www.melivecode.com/api/users').then((res)=>{setInfo(res.data)})
//     })
//     const showitem=(id:any)=>{
//         // alert(id);
//         axios.get(`https://www.melivecode.com/api/users/${id}`).then((item:any)=>{

//             setMatched(item.data.user)
//         })


//     }
//     return(
//         <>
//         <div className="container">
//             <table className="table table-bordered">
//                 <thead className="bg-dark text-white">

//                     <th>Id</th>
//                     <th>fname</th>
//                     <th>lname</th>
//                     <th>username</th>
//                     <th>avatar</th>
//                     <th>Action</th>
//                 </thead>
//                 {
//                     info.map((item:abc)=>{
//                         return(
//                             <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.fname}</td>
//                                 <td>{item.lname}</td>
//                                 <td>{item.username}</td>
//                                 <td><img src = {item.avatar}alt="avatar" style={{width :"50px",height:"50px",borderRadius:"50px",}}/></td>

//                                 <td><button onClick={()=>{showitem(item.id)}} className="btn btn-success">Show</button></td>
//                             </tr>
//                         )

//                     })
//                 }
//             </table>
//         </div>

//         <div className="card">
//             <div className="card-header">
//                 <h2>User Information : </h2>
//             </div>
//             <div className="card-body">


//                     {
// <>

//                 <p>Id  : {matched?.id}</p>
//                 <p>Fname : {matched?.fname}</p>
//                 <p>Lname :{matched?.lname}</p>
//                 <p>UserName : {matched?.username}</p>
//                 <p>Avatar  : <img src={matched?.avatar}alt="avatar"style={{width:"50px",height:"50px",borderRadius:"50px",}}/></p>

//                 </>
//             }
//             </div>
//         </div>


//         </>
//     )
// }
// export default Apiget






// import axios from "axios";
// import { useEffect, useState } from "react";

// interface abc {
//   id: number;
//   fname: string;
//   lname: string;
//   username: string;
//   avatar: string;
// }

// const Apiget = () => {
//   const [info, setInfo] = useState<abc[]>([]);
//   const [matched, setMatched] = useState<abc | null>(null);
//   const [isUpdate, setIsUpdate] = useState<boolean>(false);

//   const [id, setId] = useState<number | string>(""); // Changed to string for input flexibility
//   const [fname, setFname] = useState<string>("");
//   const [lname, setLname] = useState<string>("");
//   const [username, setUsername] = useState<string>("");
//   const [avatar, setAvatar] = useState<string>("");

//   useEffect(() => {
//     axios.get("https://www.melivecode.com/api/users/update',updateData").then((res) => {
//       setInfo(res.data);
//     });
//   }, []); // Added empty dependency array to fetch data only once on mount

//   const showItem = (id: number) => {
//     axios.get(`https://www.melivecode.com/api/users/${id}`).then((item) => {
//       setMatched(item.data.user);
//     });
//   };

//   const deleteData = (id: number) => {
//     axios.delete(` https://www.melivecode.com/api/users/delete${id}`);
//   };

//   const updateData = (id: number) => {
//     axios.get(`https://www.melivecode.com/api/users/update${id}`).then((val) => {
//       const user = val.data.info;
//       setId(user.id);
//       setFname(user.fname);
//       setLname(user.lname);
//       setUsername(user.username);
//       setAvatar(user.avatar);
//     });
//     setIsUpdate(true);
//   };

//   const allClear = () => {
//     setId("");
//     setFname("");
//     setLname("");
//     setUsername("");
//     setAvatar("");
//     setIsUpdate(false);
//   };

//   const finalUpdate = () => {
//     const updatedData = {
//       Id: id,
//       Fname: fname,
//       Lname: lname,
//       Username: username,
//       Avatar: avatar,
//     };
//     axios.put(`http://localhost:8000/db/updateuser/${id}`, updatedData);
//     setIsUpdate(false);
//     allClear();
//   };

//   return (
//     <>
//       <div className="container">
//         <form>
//           <div className="form-group">
//             <div className="row">
//               <div className="col">
//                 <label>Id</label>
//                 <input
//                   type="text"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col">
//                 <label>Fname</label>
//                 <input
//                   type="text"
//                   value={fname}
//                   onChange={(e) => setFname(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col">
//                 <label>Lname</label>
//                 <input
//                   type="text"
//                   value={lname}
//                   onChange={(e) => setLname(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col">
//                 <label>Username</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col">
//                 <label>Avatar</label>
//                 <input
//                   type="text"
//                   value={avatar}
//                   onChange={(e) => setAvatar(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col">
//                 <label>Action 1</label>
//                 {isUpdate ? (
//                   <input
//                     type="button"
//                     value="Update"
//                     onClick={finalUpdate}
//                     className="form-control"
//                   />
//                 ) : (
//                   <input type="button" value="Save" className="form-control" />
//                 )}
//               </div>
//               <div className="col">
//                 <label>Action 2</label>
//                 <input
//                   type="button"
//                   value="Clear"
//                   onClick={allClear}
//                   className="form-control"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="container">
//         <table className="table table-bordered">
//           <thead className="bg-dark text-white">
//             <tr>
//               <th>Id</th>
//               <th>Fname</th>
//               <th>Lname</th>
//               <th>Username</th>
//               <th>Avatar</th>
//               <th>Action 1</th>
//               <th>Action 2</th>
//               <th>Action 3</th>
//             </tr>
//           </thead>
//           <tbody>
//             {info.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.fname}</td>
//                 <td>{item.lname}</td>
//                 <td>{item.username}</td>
//                 <td>
//                   <img
//                     src={item.avatar}
//                     alt="avatar"
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       borderRadius: "50%",
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => showItem(item.id)} className="btn btn-success">
//                     Show
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => updateData(item.id)}
//                     className="btn btn-warning"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => deleteData(item.id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {matched && (
//         <div className="card">
//           <div className="card-header">
//             <h2>User Information :</h2>
//           </div>
//           <div className="card-body">
//             <p>Id: {matched.id}</p>
//             <p>Fname: {matched.fname}</p>
//             <p>Lname: {matched.lname}</p>
//             <p>UserName: {matched.username}</p>
//             <p>
//               Avatar:
//               <img
//                 src={matched.avatar}
//                 alt="avatar"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "50%",
//                 }}
//               />
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Apiget;
// import axios from "axios"
// import { useEffect, useState } from "react"
// interface abc {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// }
// const Apiget = () => {
//   const [info, setInfo] = useState<abc[]>([]);
//   const [matched, setMatched] = useState<any>([]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => { setInfo(res.data) })
//   })
//   const showitem = (id: any) => {
//     // alert(id);
//     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((item: any) => {
//       setMatched(item.data)
//     })

//   }
//   return (
//     <>
//       <div className="container">
//         <table className="table table-bordered">
//           <thead className="bg-dark text-white">
//             <th>UserId</th>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Action</th>
//           </thead>
//           {
//             info.map((item: abc) => {
//               return (
//                 <tr>
//                   <td>{item.userId}</td>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td>{item.body}</td>
//                   <td><button onClick={() => { showitem(item.id) }} className="btn btn-success">Show</button></td>
//                 </tr>
//               )

//             })
//           }
//         </table>
//       </div>
//       <div className="card">
//         <div className="card-header">
//           <h2>User Information : </h2>
//         </div>
//         <div className="card-body">
//           {
//             <>
//               <p>Id  : {matched?.id}</p>
//               <p>User Id : {matched?.userId}</p>
//               <p>Title  : {matched?.title}</p>
//               <p>Body : {matched?.body}</p>
//             </>
//           }
//         </div>
//       </div>


//     </>
//   )
// }
// export default Apiget

















import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Apiget = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    axios.get('https://www.melivecode.com/api/users').then((val) => { setData(val.data) });
  })
  const sentdata = () => {
    axios.post('https://www.melivecode.com/api/users/create&#39',
      {
        "fname": "Hello",
        "lname": "Chat",
        "username": "jshkdjasgdckj@gmail.com",
        "password": "1234",
        "email": "cat.chat@melivecode.com",
        "avatar": "https://www.melivecode.com/users/cat.png&quot",
      })
  }
  return (
    <>
      {
        data.map((item: any) => {
          return (
            <>

              <div>
                <p>{item.id}</p>
                <p>{item.fname}</p>
                <p>{item.lname}</p>
                <p>{item.username}</p>
                <p>{item.password}</p>
                <p>{item.email}</p>
                <p>{item.avatar}</p>
              </div>
            </>
          )

        })
      }
      <button onClick={sentdata}>Sent</button>

    </>
  )
}
export default Apiget;







