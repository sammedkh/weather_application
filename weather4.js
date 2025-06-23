// let btn = document.getElementById('btn')
// btn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     let city = document.getElementById("city").value
//     let apiKey = "345b31e0eb936e7352a899f52877d349f";
//     let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
//     try 
//     {
//         if (city === "")
//              {
//             alert("enter the city name")
//              }
//         else
//         {
//             let rawData = await fetch(apiUrl)
//             let data = await rawData.json()
//             let weatherCard=document.getElementById("weatherCard")
//             if (data.cod === 200) 
//                 {
//                 weatherCard.innerHTML=`
//                 <h1>City: <span>${data.name}</span></h1>
//                 <h1>Temperature: <span>${data.main.temp}</span></h1>
//                 <h1>Country: <span>${data.sys.country}</span></h1>
//                 <h1>Country: <span>${data.weather[0].description}</span></h1>`
//                 console.log(data)
//                 } 
//             else 
//                  {
//                     alert("Enter proper city name !!")
//                  }
//         }
//     } 
//     catch (error)
//      {
//         console.log("URL Error",error.message)
//      }
// })




let btn = document.getElementById('btn');
btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let city = document.getElementById("city").value.trim();
    console.log("City entered:", city);  // 👈 Add this

    let apiKey = "0f7de23761e2f456cefc226ae10d11d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        if (city === "") {
            alert("Enter the city name");
        } else {
            console.log("Fetching from:", apiUrl); // 👈 Add this
            let rawData = await fetch(apiUrl);
            let data = await rawData.json();
            let weatherCard = document.getElementById("weatherCard");

            if (data.cod === 200) {
                weatherCard.innerHTML = `
                    <h1>City: <span>${data.name}</span></h1>
                    <h1>Temperature: <span>${data.main.temp}°C</span></h1>
                    <h1>Country: <span>${data.sys.country}</span></h1>
                    <h1>Description: <span>${data.weather[0].description}</span></h1>
                `;
                console.log("Weather data:", data); // 👈 Add this
            } else {
                alert("Enter a proper city name!");
                weatherCard.innerHTML = "";
            }
        }
    } catch (error) {
        console.log("Fetch error:", error.message);
    }
});
