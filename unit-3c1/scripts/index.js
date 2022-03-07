let url=' https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';

let count=0;
async function getDishes(){
 try{
    let res = await fetch(" https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");

    let data = await res.json() ;

    console.log("data:",data);


    displayDish(data.categories);
}catch(err){
    console.log("error found");
}
}




