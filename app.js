const apiKey="e92c875469b92ce593e6a8ec8a04883c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector(".city_name");
const temp=document.querySelector(".temp_deg");
const humi=document.querySelector(".humi");
const speed=document.querySelector(".sp");
let input=document.querySelector(".inpu");
let btn=document.querySelector(".search button");
let img=document.querySelector(".cloud_img");
let search=document.querySelector(".search");

let weather=document.querySelector(".weather");
let temperature=document.querySelector(".temp");
let citys=document.querySelector(".city");
let details=document.querySelector(".details");

btn.addEventListener("click",()=>{
    let cityName=input.value;
    checkWeather(cityName);
});
async function checkWeather(cityName){
    const res=await fetch(apiUrl+cityName+`&appid=${apiKey}`);
    if(res.status==404){
        city.innerText="Incorrect City Name";
        temp.innerText="";
        humi.innerText="--";
        speed.innerText="--";
        img.style.display="none";

    }else{
        img.style.display="block";
        const data=await res.json();
        console.log(data);
        city.innerText=data.name; 
        let city_temp=Math.floor(data.main.temp);
        temp.innerText=city_temp+'°C';
        humi.innerText=data.main.humidity+'%';
        speed.innerText=data.wind.speed+'Km/hr';
        if(data.weather[0].main=='Mist'){
            img.setAttribute("src","weather-app-img/images/mist.png");
        }else if(data.weather[0].main=='Clouds'){
            img.setAttribute("src","weather-app-img/images/clouds.png");
        }else if(data.weather[0].main=='Clear'){
            img.setAttribute("src","weather-app-img/images/clear.png");
        }else if(data.weather[0].main=='Rain'){
            img.setAttribute("src","weather-app-img/images/rain.png");
        }else if(data.weather[0].main=='Drizzle'){
            img.setAttribute("src","weather-app-img/images/drizzle.png");
        }
    }
    
}
