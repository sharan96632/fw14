import React from "react";
import Pagination from "./components/Pagination"
import AddProduct from "./components/Addproduct1"
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://gmuw80.sse.codesandbox.io/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> </h1> </div> ;
 
        return (
        <div className = "App">
          <AddProduct />
            {
                items.map((item) => ( 
                <ol key = { item.id } >
                  <br></br>
                    <img src={item.imageSrc} alt="icons" />,
                    <br></br>
                    { item.title }, 
                    <br></br>
                    { item.category }, 
                    <br></br>
                    { item.price }
                    </ol>
                ))
                
                
            }
        </div>
    );
}
}
   
export default App;
/*
import React from "react";

 this.state = {
  items: [],
  DataisLoaded: false
};

function App  () {
  fetch('https://gmuw80.sse.codesandbox.io/products')
  .then((r)=>r.json())
  .then((json)=>{
    this.setState({
      items: json,
      DataisLoaded: true
  });
  })
};
return (
  <div className = "App">
     {
          items.map((item) => ( 
          <ol key = { item.id } >
              
              </ol>
          ))
      }
  </div>
);
    
export default App;

*/