//5fd21c02
var timerid;

let search_div=document.getElementById("search");

async function myfunction(){
 try{
     let imp=document.getElementById("text").value ;

     let res=await fetch(
         `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);

         let data=await res.json();
         
         console.log(data);
         appendData(data);
                  }
 catch(err){
     console.log("err:",err);
 }
 function appendData(data){
     console.log(data);
     data.Search.forEach(function(ele){
     console.log(ele);

     let holder = document.createElement("div");
     holder.setAttribute("id", "holder");

     var imagebox = document.createElement("div");
     imagebox.setAttribute("id","imagebox");

     var image = document.createElement("img");
     image.setAttribute("src", ele.Poster);

     imagebox.append(image);

     var content = document.createElement("div");
     content.setAttribute("id", "content");

     var name = document.createElement("h3");
     name.textContent = ele.Title;

     var release = document.createElement("p");
     release.textContent = `Release Year: ${ele.Year}`;
     release.setAttribute("id", "date");

     var type = document.createElement("p");
     type.textContent = `Type: ${ele.Type}`;

     content.append(name,release,type);

     holder.append(imagebox,content);

     document.querySelector("#container").append(holder);
     });
 }
 
}
