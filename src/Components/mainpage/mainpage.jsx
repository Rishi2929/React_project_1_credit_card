import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import "./mainpage.css";
import Card from "../Card/Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inputs = [
  {
    label: "CARDHOLDER NAME",
    name: "fullName",
    type: "text",
    value: "",
    placeholder: "e.g. Jane Appleseed",
    errorMessage: "Cardholder name required",
    // pattern: "^[A-Za-z]{3,16}$",
    id: 0,
    // required: true,
    minLength: 0,
  },
  {
    label: "CARD NUMBER",
    name: "cardNumber",
    type: "text",
    value: "",
    placeholder: "e.g. 1234 5678 9123 0000",
    errorMessage: "Card Number required",
    pattern: "^[0-9]{4}(?: [0-9]{4}){3}$",
    id: 1,
    // required: true,
    minLength:19,
    maxLength:19,
  },
  {
    label: "",
    name: "expMonth",
    type: "text",
    value: "",
    placeholder: "MM",
    errorMessage: "Enter valid month",
    pattern: "^[0-9]{1,2}",
    id: 2,
    // required: true,
    maxLength: 2,
    minLength: 2,
    min: '1',
    max: "12",
  },
  {
    label: "",
    name: "expYear",
    type: "text",
    value: "",
    placeholder: "YY",
    errorMessage: "Enter valid year",
    pattern: "^[0-9]{2}",
    id: 3,
    // required: true,
    maxLength:2,
    minLength: 2,
    min: "23",
  },
  {
    label: "",
    name: "cvc",
    type: "text",
    value: "",
    placeholder: "e.g. 123",
    errorMessage: "CVC must be numeric",
    pattern: "^[0-9]{3}",
    id: 4,
    // required: true,
    maxLength: 3,
    minLength: 3,
    min: "0",
  },
];

const detailsObj = {
  fullName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expMonth: "00",
  expYear: "00",
  cvc: "000",
};

const detailsObj2 = {
  fullName: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",

};

const Main = () => {
  const [personDetail, setPersonDetail] = useState(detailsObj2);
  const [personData, setPersonData] = useState(detailsObj);
  const [error, setError] = useState(false);

  const popup = () => {
    toast(   
      <div className="centered-toast">
      Card Added Successfully ✅ 
    </div>
      , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "fullName") {
      value = value.replace(/[^a-zA-Z\s]/g, ''); // Allow alphabetic characters and spaces
    }
    else if(name == "cardNumber") {
      value = value.replace(/[^0-9]/g, '')
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
    }
    else if(name == "expMonth") {
      value = value.replace(/[^0-9]/g, '')
    }
    else if(name == "expYear") {
      value = value.replace(/[^0-9]/g, '')
    }
    else if(name == "cvc") {
      value = value.replace(/[^0-9]/g, '')
    }

    setPersonDetail({ ...personDetail, [name]: value});
  };

  // console.log("personDetail", personDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = handleError();
    if (err == false) {
      setPersonData(personDetail);
      setPersonDetail(detailsObj2);
      setError(false);
      popup();
    } else {
      console.log("err value is: ", err);
    }
  };

  const handleError = (e) => {
    let {fullName: name, cardNumber, expMonth: month, expYear: year, cvc} = personDetail;
    console.log(name, cardNumber, month, year, cvc);
    if (
      name.length === 0 ||
      name.length <= 0 ||
      cardNumber.length === 0 ||
      cardNumber.length < 19 ||
      month.length === 0 ||
      month.length < 2 ||
      year.length === 0 ||
      year.length < 2 ||
      cvc.length === 0 ||
      cvc.length < 3
    ) {
      setError(true);
      console.log("in handle error: ", error);
      return true;
    }
    else 
      return false;
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          
        

          <div className="formbox">
        <FormInput  key={inputs[0].id} {...inputs[0]} value={personDetail[inputs[0].name]} onChange={handleChange} error={error} className="name"/>
          <FormInput key={inputs[1].id} {...inputs[1]} value={personDetail[inputs[1].name]} onChange={handleChange} error={error} className="number" />
          <label>EXP. DATE (MM/YY)</label>
          <label className="cvc_label"> CVC</label>
          <div className="col_3">
          <FormInput key={inputs[2].id} {...inputs[2]} value={personDetail[inputs[2].name]} onChange={handleChange} error={error} className="month"/>
          <FormInput key={inputs[3].id} {...inputs[3]} value={personDetail[inputs[3].name]} onChange={handleChange} error={error} className="year" />
          <FormInput key={inputs[4].id} {...inputs[4]} value={personDetail[inputs[4].name]} onChange={handleChange} error={error} className="cvc" />    
          </div>
          <button>Confirm</button>

        </div>
        <ToastContainer />


        </form>
      </div>

      <div className="c">
        <Card {...personData} />
      </div>
    </>
  );
};

export default Main;
