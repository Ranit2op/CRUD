import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();
    const succusername = useRef<any>();
    const errusername = useRef<any>();
    const succpassword = useRef<any>();
    const errpassword = useRef<any>();

    const usernamech = () => {

        const username = usernameRef.current?.value || "";

        if (username.length > 5) {
            errusername.current.innerHTML ="valid username";
            errusername.current.style.color = "green";
            usernameRef.current.classList.add("is-valid");
            usernameRef.current.classList.remove("is-invalid");
          
            

        } else {
           errusername.current.innerHTML = "5 word r besi";
           errusername.current.style.color = "red";
           usernameRef.current.classList.add("is-invalid");
           usernameRef.current.classList.remove("is-valid");
                
             }
        };

        const passwordch = () => {
             const password = passwordRef.current?.value || "";

            if (password.length > 4) {

                errpassword.current.innerHTML ="valid password";
                errpassword.current.style.color="green";
               
                passwordRef.current.classList.add("is-valid");
                
               
                passwordRef.current.classList.remove("is-invalid");
             

            } else {
                errpassword.current.innerHTML = "4 word r besi lagbe";
                errpassword.current.style.color="red";
                
                passwordRef.current.classList.add("is-invalid");
                passwordRef.current.classList.remove("is-valid");
               
            }
        };
        const hLogin = () => {
            const usernamech = usernameRef.current.classList.contains("is-valid");
            const passwordch = passwordRef.current.classList.contains("is-valid");

            if (usernamech && passwordch) {
                navigate("/succ");
            } else {
                alert("Sob  kichu fill koro");
            }
        };


        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h2>Login</h2>

                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">USERNAME</label>
                                     <input type="text" name="username" id="" className="form-control" ref={usernameRef} onKeyUp={usernamech} />
                                   <p ref={errusername}></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">PASSWORD</label>
                                    <input type="password" name="password" id="" className="form-control" ref={passwordRef} onKeyUp={passwordch} />
                                    <p ref={errpassword}></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="button" onClick={hLogin} value="login"  className="form-control btn btn-success" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>







            </>
        )
    }
    export default Home;








