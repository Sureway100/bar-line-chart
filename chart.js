//grab your imports
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');

var xValues = ["FIRST YEAR", "SECOND YEAR", "THIRD YEAR", "FOURTH YEAR", "FIFTH YEAR"];
//var yValues = [122, 49, 44, 24, 105];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
//call a new chart lib to your your canvas id mychart
let mychart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: [0, 0, 0, 0, 0]
        }]
    },
});

let michart = new Chart("myCharx", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            // your input field values will be inserted into this data and this is what your function does
            data: [0, 0, 0, 0, 0]
        }]
    },
});


//mychart meets object data, data meets object datasets, datasets calls arrays then meets object data, data calls arrays
const updatechartt = (input, dataorder) => {
    input.addEventListener('change', e => {
        //whatever dataorder selected, input becomes the corresponding value
        // if data[dataorder] = 2, input will be 'second' query selector
        mychart.data.datasets[0].data[dataorder] = e.target.value;
        //this helps update fields in every newly added input value
        mychart.update();
    });

};

updatechartt(first, 0);
updatechartt(second, 1);
updatechartt(third, 2);
updatechartt(fourth, 3);
updatechartt(fifth, 4);

//-----------------------second function
const updatechart = (input, dataorder) => {
    input.addEventListener('change', e => {
        //whatever dataorder selected, input becomes the corresponding value
        // if data[dataorder] = 2, input will be 'second' query selector
        michart.data.datasets[0].data[dataorder] = e.target.value;
        michart.update();
    });

};

updatechart(first, 0);
updatechart(second, 1);
updatechart(third, 2);
updatechart(fourth, 3);
updatechart(fifth, 4);