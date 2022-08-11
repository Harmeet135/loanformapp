import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adddata } from "./ContextProvider";
import { Link } from "react-router-dom";
import Personalpage from "./registerations/Personalpage";
import Businessdeets from "./registerations/Salary";
import LoanDetails from "./registerations/LoanDetails";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const formTitles = ["Personal Details", "Work Details", "Loan Details"];

  const Pagedetails = () => {
    if (page === 0) {
      return <Personalpage inpval={inpval} setdata={setdata} />;
    } else if (page === 1) {
      return <Businessdeets inpval={inpval} setdata={setdata} />;
    } else if (page === 2) {
      return <LoanDetails inpval={inpval} setdata={setdata} />;
    }
  };

  const [inpval, setInpval] = useState({
    name: "",
    lname: "",
    fname: "",
    email: "",
    age: "",
    mobile: "",
    address: "",
    boname: "",
    bolname: "",
    boemail: "",
    gstno: "",
    state: "",
    loan: "",
    timep: "",
    interest: "15",
    totalinterest: "",
    payback: "",
  });

  const setdata = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addInput = async (e) => {
    e.preventDefault();
    const {
      name,
      lname,
      fname,
      email,
      age,
      mobile,
      address,
      boname,
      bolname,
      boemail,
      gstno,
      state,
      loan,
      timep,
      interest,
      totalinterest,
      payback,
    } = inpval;
    const res = await fetch(
      "https://loanapplicationform.herokuapp.com/register",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          lname,
          fname,
          email,
          age,
          mobile,
          address,
          boname,
          bolname,
          boemail,
          gstno,
          state,
          loan,
          timep,
          interest,
          totalinterest,
          payback,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data.id, "data is here");

    if (res.status === 400 || res.status === 404 || !data) {
      alert("Please fill all the fields");
    } else if (res.status === 402) {
      alert("Email is already Registered");
    } else {
      setUdata(data);
      navigate("/");
    }
  };

  return (
    <div className="container">
      {/* <NavLink to="/">home</NavLink> */}
      <h1 class="d-flex justify-content-center mt-4">{formTitles[page]}</h1>
      {Pagedetails()}
      <div class="d-flex justify-content-around mt-3">
        <button
          class="btn btn-secondary"
          disabled={page === 0 ? true : false}
          onClick={() => {
            setPage((curpage) => curpage - 1);
          }}
        >
          Previous
        </button>
        {page === 2 ? (
          <button onClick={addInput} type="submit" class="btn btn-primary">
            Submit
          </button>
        ) : (
          <button
            class="btn btn-primary"
            disabled={page === formTitles.length - 1 ? true : false}
            onClick={() => {
              setPage((curpage) => curpage + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
