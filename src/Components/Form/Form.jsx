// import React, { useState } from 'react';
// import "./Form.css";

// function Form() {
//     const[firstName,setFirstName]=useState('')
//     const[lastName,setLastName]=useState('')
//     const[error,setError]=useState('')
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         if(firstName.length==0||lastName.length==0){
//             setError(true);
//         }
//         console.log(firstName,lastName)
//     }
//   return (
//     <>
//     <form className='form' onSubmit={handlesubmit}>

//         <div>
//             <h1>CARDHOLDER NAME</h1>
//             <input onChange={e=>setFirstName(e.target.value)} placeholder='e.g. Jane Appleseed'/>
//             <div className='error-1'>
//             {error&&firstName.length<=0?
//             <label>Cardholder name required</label>:""}
//             </div>
//         </div>
        
       

//         <div>
//             <h2>CARD NUMBER</h2>
//             <input onChange={e=>setLastName(e.target.value)} placeholder='e.g. 1234 5678 9123 0000'/>
//             <div className='error-2'>
//             {error&&lastName.length<=0?
//         <label>Card number required </label>:""}
//             </div>
//         </div>

        

            
//           <div className='col-3'>
//              <h3>EXP. DATE &nbsp;(MM/YY)</h3>

//           <div className='wrapper-1'>
//           <input className='month'/>
//            <input className='year'/>
//            <h4>CVC</h4>
//            <input className='cvc'/>
//           </div>
//           </div>




//         <div>
//             <button>
//                 Confirm
//             </button>
//         </div>
//     </form>
//     </>
//   );
// }

// export default Form;