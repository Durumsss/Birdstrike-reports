console.log('Happy developing ✨')

const ctx = document.getElementById('incidentsChart').getContext('2d');

const data = {
    labels: [
        '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
        '2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
        '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019',
        '2020','2021','2022'
    ],
    datasets: [{
        label: 'Total Incidents',
        data: [
            2105,2510,2650,2624,2706,2821,3025,3554,3802,5113,
            6002,5822,6216,5990,6559,7235,7248,7735,7624,9495,
            9899,10109,10909,11408,13688,13778,13333,14783,16205,17344,
            11622,15593,8362
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Birdstrike Incidents per Year',
                font: {
                    size: 20
                }
            },
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Incidents'
                }
            }
        }
    }
};

const incidentsChart = new Chart(ctx, config);