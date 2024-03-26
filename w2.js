function getweather(){
    let data=document.getElementById('data').value
    console.log(data)
    let key="0bab7dd1bacc418689b143833220304";
    let url="http://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q="+data
    fetch(url).then(res=>res.json()).then(result=>{
        console.log(result);
        document.getElementById('result').innerHTML=result.current.feelslike_c
    })
}