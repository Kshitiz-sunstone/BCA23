function getweather() {
    let data = document.getElementById('data').value
    fetch("http://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=" + data).
        then(res => res.json()).
        then(result => {
            document.getElementById('temp').innerHTML = result.current.feelslike_c
            document.getElementById('location').innerHTML = result.location.name
        }
        )
}