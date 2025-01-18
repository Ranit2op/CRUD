interface type{
    val:any
 }
 const Child:React.FC<type>=(props)=>{



    return(
        <div className="card">
            <div className="card-header">
                <h3>User Details </h3>

            </div>
            <div className="card-body">
            {
                props.val.map((item:any)=>{
                    return (
                        <div>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.add}</p>
                            <p><button className="btn btn-danger">Delete</button></p>
                         
                        </div>
                    )

                })

            }
            </div>
           

        </div>
    )
}
export default Child;


