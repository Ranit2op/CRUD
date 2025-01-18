// import { useState } from "react";
// interface abc {
//     id: number,
//     name: string,
//     loc: string
// }
// const Cruditem = () => {

//     const [data, setData] = useState<abc[]>([
//         { id: 1, name: "Akash", loc: 'Kolkata' },
//         { id: 2, name: "Subham", loc: 'Burdwan' },
//         { id: 3, name: "John", loc: 'Hooghly' }
//     ])
//     const [id, setId] = useState<number>();
//     const [names, setNames] = useState<string>();
//     const [locs, setLocs] = useState<string>();
//     const [isupdate, setIsupdate] = useState<boolean>(false);
//     const deleteitem = (id: any) => {
//         //alert(id);
//         let deleteddata: any = data.filter((item: abc) => {
//             return item.id != id
//         })
//         //console.log(deleteddata);
//         setData(deleteddata);


//     }
//     const updateitem = (id: number) => {
//         //alert(id);
//         let updateddata = data.filter((item: abc) => {
//             return item.id == id
//         })
//         // console.log(updateddata);
//         setIsupdate(true);
//         setId(id);
//         setNames(updateddata[0].name);
//         setLocs(updateddata[0].loc);

//     }
//     const finalupdate = () => {
//         let index = data.map((item: any) => {
//             return item.id //[1,2,3]
//         }).indexOf(id)
//         // alert(index)
//         let dt: any = [...data];
//         dt[index].name = names;
//         dt[index].loc = locs;
//         setData(dt);
//         cleared();
//         setIsupdate(false)
//     }
//     const cleared = () => { 
//         setNames('');
//         setLocs("");
//     }

//     const saveitem = () => {
//         let newdata: any =
//         {
//             id: data.length + 1,
//             name: names,
//             loc: locs
//         }

//         setData([...data, newdata]);
//         cleared();
//     }
//     return (
//         <>
//             <div className="container">
//                 <div className="form-group">
//                     <div className="row">
//                         <div className="col">
//                             <label htmlFor="">Name</label>
//                             <input type="text" name="" value={names} onChange={(e) => setNames(e.target.value)} id="" className="form-control" />
//                         </div>
//                         <div className="col">
//                             <label htmlFor="">Location</label>
//                             <input type="text" name="" id="" value={locs} onChange={(e) => setLocs(e.target.value)} className="form-control" />
//                         </div>

//                         <div className="col">
//                             <label htmlFor="">Action 1</label>
//                             {
//                                 (isupdate) ? (<input type="button" value="Update" onClick={finalupdate} className="form-control" />) : (<input type="button" value="Save" onClick={saveitem} className="form-control" />)
//                             }

//                         </div>
//                         <div className="col">
//                             <label htmlFor="">Action 2</label>
//                             <input type="button" value="Clear" onClick={cleared} className="form-control" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <table className="table table-bordered">
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Location</th>
//                     <th>Delete</th>
//                     <th>Update</th>
//                     {
//                         data.map((item: abc) => {
//                             return (
//                                 <tr>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.loc}</td>
//                                     <td><button className="btn btn-danger" onClick={() => { deleteitem(item.id) }}>Delete</button></td>
//                                     <td><button className="btn btn-info" onClick={() => { updateitem(item.id) }}>Update</button></td>
//                                 </tr>
//                             )

//                         })
//                     }

//                 </table>

//             </div>
//         </>
//     )
// }
// export default Cruditem;

import { useState } from "react";
interface abc {
    id: number,
    name: string,
    loc: string
}
const Cruditem = () => {

    const [data, setData] = useState<abc[]>([
        { id: 1, name: "Ranit", loc: 'APD' },
        { id: 2, name: "Akash", loc: 'MDT' },
        { id: 3, name: "Bikram", loc: 'KOLKATA' }
    ])
    const [id, setId] = useState<number>();
    const [names, setNames] = useState<string>();
    const [locs, setLocs] = useState<string>();
    const [isupdate, setIsupdate] = useState<boolean>(false);
    const deleteitem = (id: any) => {
        //alert(id);
        let deleteddata: any = data.filter((item: abc) => {
            return item.id != id
        })
        //console.log(deleteddata);
        setData(deleteddata);


    }
    const updateitem = (id: number) => {
        //alert(id);
        let updateddata = data.filter((item: abc) => {
            return item.id == id
        })
        // console.log(updateddata);
        setIsupdate(true);
        setId(id);
        setNames(updateddata[0].name);
        setLocs(updateddata[0].loc);

    }
    const finalupdate = () => {
        let index = data.map((item: any) => {
            return item.id //[1,2,3]
        }).indexOf(id)
        alert(index)
        let dt: any = [...data];
        dt[index].name = names;
        dt[index].loc = locs;
        setData(dt);
        cleared();
        setIsupdate(false)
    }
    const cleared=()=>{
        setNames('');
        setLocs("");
    }
    return (
        <>
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name</label>
                            <input type="text" name="" value={names} onChange={(e) => setNames(e.target.value)} id="" className="form-control" />
                        </div>
                        <div className="col">
                            <label htmlFor="">Location</label>
                            <input type="text" name="" id="" value={locs} onChange={(e) => setLocs(e.target.value)} className="form-control" />
                        </div>

                        <div className="col">
                            <label htmlFor="">Action 1</label>
                            {
                                (isupdate) ? (<input type="button" value="Update" onClick={finalupdate} className="form-control" />) : (<input type="button" value="Save" className="form-control" />)
                            }

                        </div>
                        <div className="col">
                            <label htmlFor="">Action 2</label>
                            <input type="button" value="Clear" onClick={cleared} className="form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <table className="table table-bordered">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Delete</th>
                    <th>Update</th>
                    {
                        data.map((item: abc) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.loc}</td>
                                    <td><button className="btn btn-danger" onClick={() => { deleteitem(item.id) }}>Delete</button></td>
                                    <td><button className="btn btn-info" onClick={() => { updateitem(item.id) }}>Update</button></td>
                                </tr>
                            )

                        })
                    }

                </table>

            </div>
        </>
    )
}
export default Cruditem;