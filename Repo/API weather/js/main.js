

let dataList = []

// Getcountry function
async function Getcountry(city = "london") {
    try {
        let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7610ec34bc78425cb11142129251307&q=${city}&days=3`)
        let finalData = await data.json()

        if (finalData.error) {
            document.querySelector('#container').innerHTML = `<h3 class="text-danger mx-auto">City not found!</h3>`
            return
        }

        dataList = finalData
        display()
    } catch (err) {
        document.querySelector('#container').innerHTML = `<h3 class="text-danger text-center">Error loading data!</h3>`
        console.log(err)
    }
}

// Display function
function display() {
    let cartoona = ``
    let forecast = dataList.forecast.forecastday

    for (let i = 0; i < forecast.length; i++) {
        cartoona += `
        <div class="col-md-4 mb-4">
            <div class="card bg-dark text-white rounded-0 p-4 shadow h-100">
                <div class="card-body text-center">
                    <h5 class="card-title fs-4 mb-3 border-info border border-2 rounded-pill p-2">${forecast[i].date}</h5>
                    <p class="card-text text-secondary fs-5">${dataList.location.name}</p>
                    <h1 class="fs-2">${forecast[i].day.avgtemp_c}°C</h1>
                    <img src="https:${forecast[i].day.condition.icon}" alt="icon">
                    <p class="text-info">${forecast[i].day.condition.text}</p>
                    <i class="fa-solid fa-umbrella fs-5 mt-2 p-2"></i> ${forecast[i].day.daily_chance_of_rain}%
                    <i class="fa-solid fa-wind fs-5 ms-2 mt-3 p-2"></i> ${forecast[i].day.maxwind_kph} km/h
                    <i class="fa-solid fa-compass fs-5 ms-2 mt-3 p-2"></i> ${dataList.current.wind_dir}
                </div>
            </div>
        </div>`
    }

    document.querySelector('#container').innerHTML = cartoona
}

// Event on button click
document.querySelector('.findBtn').addEventListener('click', function () {
    let input = document.querySelector('.inputsearch')
    let city = input.value.trim()
    if (city !== "") {
        Getcountry(city)
    }
})

// Load default city at start (london)
Getcountry()
