/* eslint-disable */

let raceTimeLeft = '1:35'
let leader = 'RIT'

let cars = [
    {
        name: 'aa',
        number: '2',
        last: '3:43',
        numLaps: '10',
        three: '3:25',
        five: '4:00',
        avg: '3:55',
        next: '1:20',
        pits: '5'
    },
    {
        name: 'bb',
        number: '7',
        last: '3:33',
        numLaps: '10',
        three: '3:45',
        five: '3:50',
        avg: '4:01',
        next: '1:09',
        pits: '4'
    }
]

var createRow = function(list) {
    let retVal = '<tr>'
    list.forEach(item => {
        retVal += `<td>${item}</td>`
    })
    return retVal + '</tr>'
}

var createStatRow = function(item) {
    let items = ['number', 'name', 'last', 'numLaps', 'three', 'five', 'avg', 'next', 'pits']
    items.forEach((name, index) => {
        items[index] = item[name]
    })
    return createRow(items)
}

var setup = function () {
    console.log(1) // TODO
}

$( document ).ready(function () {
    setup()
    cars.forEach(car => {
        console.log(car)
        $('tbody').append(createStatRow(car))
    })
    $('span#time-left').html(raceTimeLeft)
    $('span#leader').html(leader)
})