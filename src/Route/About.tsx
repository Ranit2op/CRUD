import { Link } from "react-router-dom"

const About=()=>{

    return(
        <>
     <div className="card">
     <div className="card-header">
     <h2>Login</h2>
        </div>
        <div className="card-body">
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id=""className="form-control"/>
                    </div>
                </div>
                </div>
                <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">phone</label>
                        <input type="text" name="" id=""className="form-control"/>
                    </div>
                </div>
           </div>
                <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Password</label>
                        <input type="Password" name="" id=""className="form-control"/>
                    </div>
                </div>
          </div>
    
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="button" value="Register" className="form-control btn btn success" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link to ='/about/courses'>Courses</Link>

        </>
    )
}
export default About