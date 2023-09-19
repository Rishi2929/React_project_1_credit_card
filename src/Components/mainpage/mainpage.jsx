import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import "./mainpage.css";
import Card from "../Card/Card";

const inputs = [
  {
    label: "CARDHOLDER NAME",
    name: "fullName",
    type: "text",
    value: "",
    placeholder: "e.g. Jane Appleseed",
    errorMessage: "Cardholder name invalid (Character length: 3-16)",
    pattern: "^[A-Za-z]{3,16}$",
    id: 0,
    required: true,
  },
  {
    label: "CARD NUMBER",
    name: "cardNumber",
    type: "text",
    value: "",
    placeholder: "e.g. 1234 5678 9123 0000",
    errorMessage: "Card Number invalid (Characters length: 16)",
    pattern: "^[0-9]{16}$",
    id: 1,
    required: true,
    minLength:16,
    maxLength:16
  },
  {
    label: "EXP. DATE",
    name: "expMonth",
    type: "text",
    value: "",
    placeholder: "MM",
    errorMessage: "Enter valid month",
    pattern: "^[0-9]{1,2}",
    id: 2,
    required: true,
    maxLength:2
  },
  {
    label: "(MM/YY)",
    name: "expYear",
    type: "text",
    value: "",
    placeholder: "YY",
    errorMessage: "Enter valid year",
    pattern: "^[0-9]{2}",
    id: 3,
    required: true,
    maxLength:4

  },
  {
    label: "CVC",
    name: "cvc",
    type: "text",
    value: "",
    placeholder: "e.g. 123",
    errorMessage: "Enter valid CVC",
    pattern: "^[0-9]{3}",
    id: 4,
    required: true,
    maxLength:3
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonDetail({ ...personDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonData(personDetail);
    setPersonDetail(detailsObj2);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          
        

          <div className="formbox">
        <FormInput  key={inputs[0].id} {...inputs[0]} value={personDetail[inputs[0].name]} onChange={handleChange} className="name"/>
          <FormInput key={inputs[1].id} {...inputs[1]} value={personDetail[inputs[1].name]} onChange={handleChange}className="number" />
          <div className="my">
          <FormInput key={inputs[2].id} {...inputs[2]} value={personDetail[inputs[2].name]} onChange={handleChange} className="month"/>
          <FormInput key={inputs[3].id} {...inputs[3]} value={personDetail[inputs[3].name]} onChange={handleChange} className="year" />
          <FormInput key={inputs[4].id} {...inputs[4]} value={personDetail[inputs[4].name]} onChange={handleChange} className="cvc" />    
          </div>
          <button>Confirm</button>

        </div>

        </form>
      </div>

      <div className="c">
        <Card {...personData} />
      </div>
    </>
  );
};

export default Main;
