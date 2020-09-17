//Chart js
const traffic = document.getElementById('myChart').getContext('2d');
const daily = document.getElementById('dailyChart').getContext('2d');
const mobile = document.getElementById('doughnutChart').getContext('2d');

var chart1 = new Chart(traffic, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29','30-5','6-12','13-19',
        '20-26', '27-3', '4-10','11-17', '18-24','25-31'],
        datasets: [{
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderColor: 'rgba(176, 179, 231, 1)',
            borderWidth: 1.5,
            pointRadius: 6,
            pointBackgroundColor: 'rgba(251, 251,251, 1)',
            pointBorderWidth:'2',
            pointBorderColor: 'rgba(116, 120, 191, 1)',
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }    
});



//Bar chart
var chart2 = new Chart(daily, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
        datasets: [{
            label: '# of Hits',
            barPercentage: 0.5, 
             barThickness: 25,   
             maxBarThickness: 30,
            minBarLength: 2,
            data: [50, 100, 250, 125, 235, 200, 100],
             backgroundColor: '#7477BF',
            borderWidth: 1
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }    
});


//mobile users
var chart3 = new Chart(mobile, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Users',
            data: [550, 500, 2000],
            borderWidth: 0,
            backgroundColor: ["#74CF82", "#51B6C8","7477BF"],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: "right",
            label: {
                boxWidth: 20,
                fontStyle: "bold"
            }
    } 
},   
});