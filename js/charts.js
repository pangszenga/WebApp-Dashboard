const traffic = document.getElementById("chartLine");
const dailyTraf = document.getElementById("chartBar");
const mobileUsers = document.getElementById("chartDoughnut");

let myCharts = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'Novemebr', 'December'],
        datasets: [{
            // label: false,
            data: [700, 1200, 1100, 1200, 2000, 1500, 1600, 1100, 1200, 1800, 1300, 1600],
            backgroundColor: [
                'rgba(63, 191, 191, .7)',
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)',
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointRadius: '4',
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
}
});

myCharts += new Chart(dailyTraf, {
    type: 'bar',
    data: {
        labels: ["Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(63, 191, 191, .8)',
                'rgba(63, 191, 191, .8)',
                'rgba(63, 191, 191, .8)',
                'rgba(63, 191, 191, .8)',
                'rgba(63, 191, 191, .8)',
                'rgba(63, 191, 191, .8)',
            ],
            borderColor: [
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

myCharts += new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(63, 100, 180, .8)',
                'rgba(63, 191, 191, .8)',
                'rgba(176, 179, 251, 1)',

            ],
            borderColor: [
                'rgba(56, 59, 131, .6)',
                'rgba(56, 59, 131, .6)',
                'rgba(56, 59, 131, .6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        scales: {
          xAxes: [{
                      gridLines: {
                          display:false
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display:false
                      }
                  }]
          }
    }
});
