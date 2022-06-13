import React from "react";
import ButtonComponents from "./components/ButtonComponent"
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

const per_page=100;
 function App () {
    const [currentpage ,setCurrentPage]=useState(0);
    const [data , setData]=useState([]);

    useEffect(()=>{
   fetchData();
    },[])
   function fetchData(){
       fetch('https://json-server-mocker-masai.herokuapp.com/cities')
       .then((res)=>res.json())
       .then((data)=>{
           setData(data)
       });
   }
   function handlePageClick({selected : selectedPage}){
   console.log("selectedpage" , selectedPage);
 setCurrentPage(selectedPage); 
}

const offset =currentpage*per_page;

const currentPerData =data
.slice(offset,offset+per_page)
.map((res,index) => <div key={index}>{res.name},{res.country},{res.population}</div>)

const pageCount = Math.ceil(data.length/per_page);
return(
    <div>
         <h1>PLEASE GO THROUGH MY CODE </h1>
        
        {currentPerData};
       

        
        <ButtonComponents
        
        
        
        />
        <ReactPaginate 
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        />
        
    </div>
)

 }

 export default App;