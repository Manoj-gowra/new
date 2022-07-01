
let datas = [{ Month: "January", Value: 34 },
{ Month: "February", Value: 45 },
{ Month: "March", Value: 27 }];

function generateTableHead(table, data)
{
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data)
    {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data)
{
    for (let element of data)
    {
        let row = table.insertRow();
        for (key in element)
        {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.getElementById('previous_cycle_status');
let data = Object.keys(datas[0]);

generateTable(table, datas);
generateTableHead(table, data);



let days = [{ Day: 'day1', Status: '10%' },
{ Day: 'day2', Status: '20%' },
{ Day: 'day3', Status: '30%' },
{ Day: 'day4', Status: '40%' },
{ Day: 'day5', Status: '50%' },
{ Day: 'day6', Status: '60%' }]

let status = document.getElementById('status');
let day = Object.keys(days[0])
generateTable(status, days)
generateTableHead(status, day)


let canvasElement_1 = document.getElementById('cookiechart-1')
const labels1 = datas.map((x) =>
{
    return x.Month
})
console.log(labels1)
const label_data1 = datas.map((x) => { return x.Value })
console.log(label_data1);
const data_graph1 = {
    labels: labels1,
    datasets: [{
        label: "Previous Cycle Status Data",
        backgroundColor:
            'rgba(0, 204, 204,0.5)',
        borderColor: 'rgba(255, 99, 132,1)',
        data: label_data1,
    }]
};

var config1 = {
    type: 'bar',
    data: data_graph1,

}


var cookiechart1 = new Chart(canvasElement_1, config1)


let canvasElement_2 = document.getElementById('cookiechart-2')

const labels2 = days.map((x) => { return x.Day })
console.log(labels2)
const label_data2 = days.map((x) => { return parseInt(x.Status.substring(0, 2)) })
console.log(label_data2)
const data_graph2 = {
    labels: labels2,
    datasets: [{
        label: "Deployment Status Data",
        backgroundColor:
            'rgba(0, 204, 204,0.5)',
        borderColor: 'rgba(255, 99, 132,1)',
        data: label_data2,
    }]
};

var config2 = {
    type: 'pie',
    data: data_graph2,

}


var cookiechart2 = new Chart(canvasElement_2, config2)
