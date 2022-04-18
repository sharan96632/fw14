import { useState } from "react";

export const Form = () =>{
    const [formData,setFormData]=useState({
        firstname :"",
        lastname:"",
        email:"",
        gender:"",
        age:"",
        tenthscore:"",
        twelthscore : "" ,
        barnch:""


    })
const handleChange=(e) =>{
    const {id,value}=e.target;
    setFormData({
        ...formData,
        [id]:value,
    })
}
 return (
<form>
 <input onChange={handleChange} type="text" placeholder="first name" id="firstname"/>

<input onChange={handleChange}  type="text" placeholder="last name"id="lastname"/>

<input onChange={handleChange}  type="text" placeholder="email" id="email"/>
<input onChange={handleChange}  type="text" placeholder="gender" id="gender"/>
<input onChange={handleChange}  type="number" placeholder="age" id="age"/>
<input onChange={handleChange}  type="number" placeholder="tenth score" id="tenthscore"/>
<input onChange={handleChange}  type="number" placeholder="12th score" id="tewlthscore"/>
<input  onChange={handleChange} type="text" placeholder="branch" id="branch"/>
<button>Submit</button>
 </form>
 );
};