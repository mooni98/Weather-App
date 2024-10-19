//http://api.weatherapi.com/v1/current.json?key=91f33c8281f14d869a502455242809&q=Virginia&aqi=no
const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector(".time_location p")
const dateandTimeField = document.querySelector(".time_location span")
const condtionhField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector('form')

form.addEventListener('submit', searchForLocation)

let target = 'Virginia';

const fetchresult = async (targetLocation)=>{

    let url= `http://api.weatherapi.com/v1/current.json?key=91f33c8281f14d869a502455242809&q=${targetLocation}&aqi=no`


    const res= await fetch(url);

     const data= await res.json();
    
     console.log(data);

     let temp = data.current.temp_f

     let locationName = data.location.name;

     let time = data.location.localtime;

     let condition = data.current.condition.text;
     
     updateDetails(temp , locationName , time , condition );
}   
    

    function updateDetails(temp , locationName , time , condition )
     
     {

        let splitDate = time.split(" ")[0];

        let splitTime = time.split(" ")[1];

        let currentDay = getDayName(new Date(splitDate).getDay()) 

       ,l,k  



        temperatureField.innerText = temp
        locationField.innerText = locationName
        dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
        condtionhField.innerText = condition
     }


     function searchForLocation(event){
         event.preventDefault();

        target = searchField.value

        fetchresult(target);
        

     }


     
     


fetchresult(target);

function getDayName(number){
  switch(number){
 case 0: 
     return 'Sunday'
     case 1: 
     return 'Monday'
     case 2: 
     return 'Tuesday'
     case 3: 
     return 'Wednesday'
     case 4: 
     return 'Thursday'
     case 5: 
     return 'Friday'
     case 6: 
     return 'Saturday'


  }
}