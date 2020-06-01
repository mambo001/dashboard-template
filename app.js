window.addEventListener('DOMContentLoaded', () => {
//        getSheetData();
    getVerticalData();
});

function loadLineChart(){
    var ctx = document.getElementById('lineChart1').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}


//    function getSheetData(){
//        google.script.run.withSuccessHandler(showData).getData();
//    }
//
//    function showData(sheetData){
//    console.log(sheetData)
//    console.log(JSON.parse(sheetData))
//    }

function getVerticalData(){
    google.script.run.withSuccessHandler(showVerticalData).getOnlyVerticals();
}

function showVerticalData(sheetData){
    console.log(Object.values(sheetData))
    // return Object.values(sheetData)
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
        datasets: [{
            // data: [10, 20, 30]
            data: Object.values(sheetData),
            // #66bb6a,#43a047 - green
            // #ec407a,#d81b60 - pink
            // #26c6da,#00acc1 - cyan/blue
            // #ffa726,#fb8c00 - orange
            backgroundColor: [
                "#003f5c",
                "#43a047",
                "#d81b60",
                "#00acc1",
                "#fb8c00"
            ]
        }],
        
        // These labels appear in the legend and in the tooltips when hovering different arcs
        // labels: [
        //     'Red',
        //     'Yellow',
        //     'Blue'
        // ]
        labels: Object.keys(sheetData)
        };
    var myDoughnutChart = new Chart(ctx, {
        // type: 'doughnut',
        type: 'polarArea',
        data: data,
        options: {}
    });
}

console.log(showVerticalData())
    
        
    
    
    
    
    
    