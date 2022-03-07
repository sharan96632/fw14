let key ="73f89722e771e39ab0b7553de6c90b1e";

async function getWeatherData(){

  try{
      let city = document.getElementById("city").value ;

      let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

      let data=await res.json();

      showWeather(data);
    
  } catch(err){
      console.log("err:",err);
  }
}

function showWeather(d){

  d.Object.forEach(function(elem){

    console.log()
    
  });


}