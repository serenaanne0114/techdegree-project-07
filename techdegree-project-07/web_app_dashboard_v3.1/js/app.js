//Chart js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

//Alert Notification
const alertNotification = document.getElementById('alert');

alertNotification.innerHTML =
`<div class="alert-notification">
    <p><strong>ALERT!</strong>THERE ARE<strong>6</strong><strong>NEW NOTIFICATIONS</strong></p><p class="alert-notication-close"></p>
</div>`

alertNotification.addEventListener ('click',(e) => {
    const element = e.target;
    if(elemnt.classList.contains('alert-notification-close')) {
        alertNotification.style.display = 'none';
    }
});

//Traffic Chart
const trafficChart = document.getElementById('.traffic-chart');

let dataHour = {
    labels: ['1', '3', '5','7','9', '11', '13',
     '15', '17', '19', '21', '24'],
    datasets: [{data: [10, 14, 11, 22, 28, 38, 69, 120, 90, 72, 52],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,} ],
};

let dataDay = {
    labels: ['1', '5', '9', '13', '17', '21', '25', '29', '31'],
    datasets: [{data: [50, 150, 400, 859, 1500, 800, 1250, 1850, 1000, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1, }],
};

let dataWeek = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', 
    '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1, }],
};

let dataMonth = {
    labels: ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"],
    datasets: [{data: [120, 350, 200, 950, 780, 1100, 1300, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,}],
};

let trafficSelections = {
    responsive: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

// Bar Graph
const dataCanvas = document.getElementById('#daily-chart');

const dataDaily = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 102, 115, 225, 200, 90, 104],
        backgroundColor: lavenderblush,
        borderWidth: 1,
    }]
};

const optionsDaily = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero
            }
        }]
    }, 
    legend: {
        display: false
    }
}

let chartDaily = new Chart(canvasDaily, {
    type: 'bar',
    data: dataDaily,
    options: optionsDaily
});

//Mobile chart
const canvasMobile = document.getElementById('.mobile-chart');

const dataMobile ={
    labels: ['Desktop', 'Tablet', 'Phone'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0, 
        backgroundColor: [
            'lavenderblush',
            'lightslategray',
            'gray'
        ]
    }]
};

const optionsMobile = {
    legend: {
        position: 'right', 
        lebels: {
            fontStyle: 'bold',
            boxWidth: 20
        }
    }
};

let chartMobile = new Chart(canvasMobile, {
    options: optionsMobile,
    data: dataMobile,
    type: 'doughnut'
});

//User Search
const user = document.getElementById('fieldUser');
const message = document.getElementById("fieldMessage");
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    if(user.value && message.value === ""){
        alert("Please fill out user message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out message field before sending");
    } else if (message.value === "") {
        alert("Please fill out user field before sending");
    } else {
        alert("Message sent to $(user.value)");
    }
});






