

let dataList = []
// function to get and send data yo server by fetch
async function Getcountry() {
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7610ec34bc78425cb11142129251307&q=lond&days=3`)
    dataList = await data.json()
    console.log(dataList);

    display()
}
Getcountry()


function display() {
    let cartoona = ``
    for (let i = 0; i < dataList.length; i++) {
        cartoona += `<div class="col-md-4 d-flex w-100 ">
                    <div class="card bg-dark text-white rounded-3 p-5 w-100 shadow">
                        <div class="card-body text-center">
                            <h5 class="card-title fs-3 mb-4  border-info border border-2 rounded-pill  p-2">${dataList[i].date}</h5>
                            <p class="card-text text-secondary fs-5">
                                ${dataList[i].name}
                            </p>
                            <h1 class="fs-1">
                                ${dataList[i].temp_c} cel
                            </h1>
                            <i class="fs-1 p-2">${dataList[i].condition.icon}</i>
                            <p class="text-info">${dataList[i].condition.text}</p>
                            <i class="fa-solid fa-umbrella fs-3  mt-2 p-2" ></i>${dataList[i].cloud}
                            <i class="fa-solid fa-wind fs-3 ms-2 mt-3 p-2"></i>${dataList[i].wind_kph}
                            <i class="fa-solid fa-compass fs-3 ms-2 mt-3 p-2"></i>${dataList[i].wind_dir}
                        </div>
                    </div>
                    <div class="card bg-secondary-subtle rounded-3 p-5 w-100 shadow">
                        <div class="card-body text-center">
                            <h5 class="card-title fs-3 mb-4 rounded-pill bg-info p-2">${dataList[i].date}</h5>
                            <p class="card-text text-secondary fs-5">
                               ${dataList[i].name}
                            </p>
                            <h1 class="fs-1">
                               ${dataList[i].forecastday.day.avgtemp_c} cel
                            </h1>
                            <i class="fs-1 p-2">${dataList[i].forecastday.day.condition.icon}</i>
                            <p class="text-info">${dataList[i].forecastday.day.condition.text}</p>
                            <i class="fa-solid fa-umbrella fs-3  mt-2 p-2" ></i>${dataList[i].forecastday.day.daily_will_it_rain}
                            <i class="fa-solid fa-wind fs-3 ms-2 mt-3 p-2"></i>${dataList[i].forecastday.day.maxwind_kph}
                            <i class="fa-solid fa-compass fs-3 ms-2 mt-3 p-2"></i>${dataList[i].wind_dir}
                        </div>
                    </div>
                    <div class="card bg-dark text-white rounded-3 p-5 w-100 shadow">
                        <div class="card-body text-center">
                            <h5 class="card-title fs-3 mb-4 border-info border border-2 rounded-pill p-2">${dataList[i].date}</h5>
                            <p class="card-text text-secondary fs-5">
                               ${dataList[i].name}
                            </p>
                            <h1 class="fs-1">
                                ${dataList[i].forecastday.day.avgtemp_c} cel
                            </h1>
                            <i class=" fs-1 p-2">${dataList[i].forecastday.day.condition.icon}</i>
                            <p class="text-info">${dataList[i].condition.text}</p>
                            <i class="fa-solid fa-umbrella fs-3  mt-2 p-2" ></i>${dataList[i].forecastday.day.daily_will_it_rain}
                            <i class="fa-solid fa-wind fs-3 ms-2 mt-3 p-2"></i>${dataList[i].forecastday.day.maxwind_kph}
                            <i class="fa-solid fa-compass fs-3 ms-2 mt-3 p-2"></i>${dataList[i].wind_dir}
                        </div>
                    </div>
                </div>
            </div>`
    } document.querySelector('#container').innerHTML = cartoona;
}

let inputsearch = document.querySelector('.inputsearch')
inputsearch.addEventListener('blur', function () {
    Getcountry(this.value)
})
