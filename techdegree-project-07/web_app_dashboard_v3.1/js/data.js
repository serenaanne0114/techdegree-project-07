//Chart js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
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
            data: [500, 1000, 1500, 2000, 2500]
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

let trafficData1 = [350, 1450, 1000, 1200, 1500, 950, 580, 1050, 1250, 1000, 1500];

let trafficData2 = [950, 1250, 400, 1500, 1500, 2550, 100, 1350, 2250, 1200, 1500];

let trafficData3 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

let trafficData4 = [750, 1750, 1500, 1800, 1500, 2050, 840, 1350, 950, 700, 1500];

const trafficNav = document.querySelector('.traffic-nav');
const trafficAll = document.querySelector('.traffic-nav-link');

trafficNav.addEventListener('click', e => {
    const navSelected = e.target;

    if (navSelected.tagName === 'LI') {
        trafficAll.forEach(element =>{
            element.classList.remove('active');
        });
        navSelected.classList += 'active';
    }

    if (navSelected.innerText === 'Hourly') {
        trafficChart.data.datasets[0].data = trafficData1;
        trafficChart.update();
    }
     else if (navSelected.innerText === 'Daily') {
        trafficChart.data.datasets[0].data = trafficData2;
        trafficChart.update();
    }
     else if (navSelected.innerText === 'Weekly') {
        trafficChart.data.datasets[0].data = trafficData3;
        trafficChart.update();
    }
     else if (navSelected.innerText === 'Monthly') {
        trafficChart.data.datasets[0].data = trafficData4;
        trafficChart.update();
    }
});

//Bar chart
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

 let dailyData = {
    labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

let dailyOptions = {
    scales:{
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    },
    layout: {
        padding: {
            left: 10, 
            right: 40,
            bottom: 30
        }
    }
}

//mobile users
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

 let mobileData = {
     legend: {
         position: {
             'right'
         }
     }
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Phones',
        'Tablets',
        'Desktop'
    ]
};