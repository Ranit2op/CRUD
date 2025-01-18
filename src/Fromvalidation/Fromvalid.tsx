import { useRef, useState } from "react";


const Formvalid = () => {
  // Defined useRef hooks
  const fnameref = useRef<any>();
  const lnameref = useRef<any>();
  const succfname = useRef<any>();
  const errfname = useRef<any>();
  const succlname = useRef<any>();
  const errlname = useRef<any>();
  const succpass = useRef<any>();
  const errpass = useRef<any>();
  const passref = useRef<any>();
  const cpassref = useRef<any>();

  // State to manage button enable/disable
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // First Name Validation
  const fnamech = () => {
    if (fnameref.current.value.length <= 4) {
      succfname.current.innerHTML = "";
      fnameref.current.classList.add("is-invalid");
      errfname.current.innerHTML = "Error, Name must be 5 or more characters";
    } else {
      fnameref.current.classList.remove("is-invalid");
      fnameref.current.classList.add("is-valid");
      errfname.current.innerHTML = "";
      succfname.current.innerHTML = "Success";
    }
  };

  // Last Name Validation
  const lnamech = () => {
    if (lnameref.current.value.length <= 3) {
      succlname.current.innerHTML = "";
      lnameref.current.classList.add("is-invalid");
      errlname.current.innerHTML = "Error, Name must be 4 or more characters";
    } else {
      lnameref.current.classList.remove("is-invalid");
      lnameref.current.classList.add("is-valid");
      errlname.current.innerHTML = "";
      succlname.current.innerHTML = "Success";
    }
  };

  // Password and Confirm Password Validation
  const passch = () => {
    if (passref.current.value === cpassref.current.value) {
      errpass.current.innerHTML = "";
      cpassref.current.classList.remove("is-invalid");
      cpassref.current.classList.add("is-valid");
      succpass.current.innerHTML = "Password Matched";
      setIsButtonEnabled(true); // Enable button
    } else {
      succpass.current.innerHTML = "";
      cpassref.current.classList.remove("is-valid");
      cpassref.current.classList.add("is-invalid");
      errpass.current.innerHTML = "Password Mismatched";
      setIsButtonEnabled(false); // Disable button
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                ref={fnameref}
                onKeyUp={fnamech}
              />
              <p ref={succfname} style={{ color: "green" }}></p>
              <p ref={errfname} style={{ color: "red" }}></p>
            </div>
            <div className="col">
              <label htmlFor="">Last Name</label>
              <input type="text"name=""id="" className="form-control"ref={lnameref}onKeyUp={lnamech}/>
              <p ref={succlname} style={{ color: "green" }}></p>
              <p ref={errlname} style={{ color: "red" }}></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  ref={passref}
                  name=""
                  id=""
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="">Confirm Password</label>
                <input type="password"name="" ref={cpassref}id=""className="form-control" onKeyUp={passch} />
                <p ref={succpass} style={{ color: "green" }}></p>
                <p ref={errpass} style={{ color: "red" }}></p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary" disabled={!isButtonEnabled} > Submit</button>
      </div>
    </>
  );
};

export default Formvalid;




// import { useRef } from "react";
// const Formvalid = () => {
//     const fnameref = useRef<any>();
//     const lnameref = useRef<any>();
//     const ageref = useRef<any>();
//     const fileref = useRef<any>();

//     const succfname = useRef<any>();
//     const errfname = useRef<any>();
//     const succlname = useRef<any>();
//     const errlname = useRef<any>();
//     const succage = useRef<any>();
//     const errage = useRef<any>();
//     const succfile = useRef<any>();
//     const errfile = useRef<any>();

//     const fnamech = () => {
//         if (fnameref.current.value.length <= 4) {
//             succfname.current.innerHTML = "";
//             fnameref.current.classList.add("is-invalid");
//             errfname.current.innerHTML = 'Error, Name must be 5 or more characters';
//         } else {
//             fnameref.current.classList.remove("is-invalid");
//             fnameref.current.classList.add("is-valid");
//             errfname.current.innerHTML = "";
//             succfname.current.innerHTML = "Success";
//         }
//     };

//     const lnamech = () => {
//         if (lnameref.current.value.length <= 3) {
//             succlname.current.innerHTML = "";
//             lnameref.current.classList.add("is-invalid");
//             errlname.current.innerHTML = 'Error, Name must be 4 or more characters';
//         } else {
//             lnameref.current.classList.remove("is-invalid");
//             lnameref.current.classList.add("is-valid");
//             errlname.current.innerHTML = "";
//             succlname.current.innerHTML = "Success";
//         }
//     };

//     const agech = () => {
//         const age = parseInt(ageref.current.value, 10);
//         if (isNaN(age) || age <= 0 || age > 120) {
//             succage.current.innerHTML = "";
//             ageref.current.classList.add("is-invalid");
//             errage.current.innerHTML = 'Error, Age must be a valid number between 1 and 120';
//         } else {
//             ageref.current.classList.remove("is-invalid");
//             ageref.current.classList.add("is-valid");
//             errage.current.innerHTML = "";
//             succage.current.innerHTML = "Success";
//         }
//     };

//     const filech = () => {
//         const file = fileref.current.files[0];
//         if (!file) {
//             succfile.current.innerHTML = "";
//             fileref.current.classList.add("is-invalid");
//             errfile.current.innerHTML = 'Error, Please upload a file';
//         } else {
//             fileref.current.classList.remove("is-invalid");
//             fileref.current.classList.add("is-valid");
//             errfile.current.innerHTML = "";
//             succfile.current.innerHTML = "File uploaded successfully";
//         }
//     };

//     return (
//         <>
//             <div className="container">
//                 <div className="form-group">
//                     <div className="row">
//                         {/* First Name */}
//                         <div className="col">
//                             <label htmlFor="fname">First Name</label>
//                             <input
//                                 type="text"
//                                 id="fname"
//                                 className="form-control"
//                                 ref={fnameref}
//                                 onKeyUp={fnamech}
//                             />
//                             <p ref={succfname} style={{ color: 'green' }}></p>
//                             <p ref={errfname} style={{ color: 'red' }}></p>
//                         </div>

//                         {/* Last Name */}
//                         <div className="col">
//                             <label htmlFor="lname">Last Name</label>
//                             <input
//                                 type="text"
//                                 id="lname"
//                                 className="form-control"
//                                 ref={lnameref}
//                                 onKeyUp={lnamech}
//                             />
//                             <p ref={succlname} style={{ color: 'green' }}></p>
//                             <p ref={errlname} style={{ color: 'red' }}></p>
//                         </div>
//                     </div>

//                     <div className="row mt-3">
//                         {/* Age */}
//                         <div className="col">
//                             <label htmlFor="age">Age</label>
//                             <input
//                                 type="number"
//                                 id="age"
//                                 className="form-control"
//                                 ref={ageref}
//                                 onKeyUp={agech}
//                             />
//                             <p ref={succage} style={{ color: 'green' }}></p>
//                             <p ref={errage} style={{ color: 'red' }}></p>
//                         </div>

//                         {/* File Upload */}
//                         <div className="col">
//                             <label htmlFor="file">File Upload</label>
//                             <input
//                                 type="file"
//                                 id="file"
//                                 className="form-control"
//                                 ref={fileref}
//                                 onChange={filech}
//                             />
//                             <p ref={succfile} style={{ color: 'green' }}></p>
//                             <p ref={errfile} style={{ color: 'red' }}></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Formvalid;