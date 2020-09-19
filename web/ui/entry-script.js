/* eslint-disable */

let cars = ["aa", "bb", "cc"] // TODO: change

var car_template_a = '<div class="car mb-3"><div class="input-group mb-5"><input type="text" class="form-control" placeholder="'
var car_template_b = '" aria-label="'
var car_template_c = '" aria-describedby="basic-addon2" disabled style="background:lightgrey;font-weight: bold;"><div class="input-group-append"><button class="btn btn-primary" type="button"onclick="sendLap('
var car_template_d = ')">Lap</button></div></div></div>'

var createCar = function (name, number) {
    let title = `${number}: ${name}`
    return `${car_template_a}${title}${car_template_b}${title}${car_template_c}${number}${car_template_d}`
}

var setCarText = function(text) {
    $('.car-dropdown-text').html(text)
}

var addCarToDropdown = function (name, number) {
    $('.car-dropdown').append(`<a class="dropdown-item" href="#" onclick="setCarText('${number}: ${name}')">${number}: ${name}</a>`)
}

var sendLap = function (number) {
    alert(number)
}

var setActionText = function (text) {
    $('span.action-dropdown').html(text)
}

$( document ).ready(function () {
    cars.forEach((car, index) => {
        $('div.bruh').append(createCar(car, index))
        addCarToDropdown(car, index)
    })
})

var submit = function () {
    alert(1)
}