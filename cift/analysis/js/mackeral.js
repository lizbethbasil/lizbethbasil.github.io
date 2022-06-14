//PV 
var x1 = ['Day 1', 'Day 2', 'Day 4', 'Day 5', 'Day 6', 'Day 8', 'Day 11', 'Day 12', 'Day 13'];
var y1 = [4.7, 1.8, 15.0, 5.0, 8.6, 9.0, 48.5, 10.7, 15.1];

var lim1 = 15;
var ylim1 = [];
var ylim1 = new Array(x1.length).fill(lim1);

var ymin1 = [];
var ymax1 = [];
var max1 = 5;

for(let i = 0; i < x1.length; i++)
	ymin1[i] = y1[i] - y1[i];

for(let i = 0; i < y1.length; i++)
    ymax1[i] = y1[i] + max1;

var yi1 = y1.slice(0,1)

new Chart("chart-1", {
	type: "line", data: {
		labels: x1, datasets: [{
			fill: false, lineTension: 0, pointStyle:"circle", 
			backgroundColor: "rgba(13,110,253,1.0)", data: yi1},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim1} //limit
			]},
		options: {legend: {display: false}, 
		scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});

// slider
var slider = document.getElementById("pvSlider");
var output = document.getElementById("pvsliderVal");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
	y = this.value;
	y11 = y1.slice(0,y);
	ymin11 = ymin1.slice(0,y);
	ymax11 = ymax1.slice(0,y);
	
	new Chart("chart-1", {
	type: "line", data: {labels: x1, 
		datasets: [{fill: 0, lineTension: 0, borderColor: "rgba(13,110,253,1.0)", 
			borderWidth: 3,	pointStyle:"circle", data: y11},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim1}, //limit
			{fill: 0, lineTension: 0, backgroundColor: "rgba(13,110,253,0.55)", //lower band
			borderWidth: 1, pointStyle:"line", data: ymin11},
			{fill: 0, lineTension: 0, backgroundColor: "rgba(13,110,253,0.25)", //upper band
			borderWidth: 1,	pointStyle:"line", data: ymax11}]},
		options: {legend: {display: false}, scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});
}

//TVBN 
var x2 = ['Day 1', 'Day 2', 'Day 4', 'Day 5', 'Day 6', 'Day 8', 'Day 11', 'Day 12', 'Day 13'];
var y2 = [1.7, 3.8, 4.5, 14.0, 12.6, 2.4, 9.1, 10.5, 10.8];

var lim2 = 15;
var ylim2 = [];
var ylim2 = new Array(x2.length).fill(lim2);

var ymin2 = [];
var ymax2 = [];
var max2 = 5;

for(let i = 0; i < x2.length; i++)
    ymin2[i] = y2[i] - y2[i];

for(let i = 0; i < x2.length; i++)
    ymax2[i] = y2[i] + max2;

var yi2 = y2.slice(0,1)

new Chart("chart-2", {
	type: "line", data: {
		labels: x2, datasets: [{
			fill: false, lineTension: 0, pointStyle:"circle", 
			backgroundColor: "rgba(204,102,0,1.0)", data: yi2},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim2}, //limit
			]},
		options: {legend: {display: false}, 
		scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});

// slider
var slider = document.getElementById("tvbnSlider");
var output = document.getElementById("tvbnsliderVal");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
	y = this.value;
	y22 = y2.slice(0,y);
	ymin22 = ymin2.slice(0,y);
	ymax22 = ymax2.slice(0,y);
	
	new Chart("chart-2", {
	type: "line", data: {labels: x2, 
		datasets: [{fill: 0, lineTension: 0, borderColor: "rgba(204,102,0,1.0)", 
			borderWidth: 3,	pointStyle:"circle", data: y22},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim2}, //limit
			{fill: 0, lineTension: 0, backgroundColor: "rgba(204,102,0,0.5)", //lower band
			borderWidth: 1, pointStyle:"line", data: ymin22},
			{fill: 0, lineTension: 0, backgroundColor: "rgba(204,102,0,0.25)", //upper band
			borderWidth: 1,	pointStyle:"line", data: ymax22}]},
		options: {legend: {display: false}, scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});
}

//TMA 
var x3 = ['Day 1', 'Day 2', 'Day 4', 'Day 5', 'Day 6', 'Day 8', 'Day 11', 'Day 12', 'Day 13'];
var y3 = [1.4, 1.4, 2.1, 0.7, 0.7, 1.4, 2.1, 0.7, 1.7];

var lim3 = 15;
var ylim3 = [];
var ylim3 = new Array(x3.length).fill(lim3);

var ymin3 = [];
var ymax3 = [];
var max3 = 5;

for(let i = 0; i < x3.length; i++)
    ymin3[i] = y3[i] - y3[i];

for(let i = 0; i < x3.length; i++)
    ymax3[i] = y3[i] + max3;

var yi3 = y3.slice(0,1)

new Chart("chart-3", {
	type: "line", data: {
		labels: x3, datasets: [{
			fill: false, lineTension: 0, pointStyle:"circle", 
			backgroundColor: "rgba(255,192,0,1.0)", data: yi3},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim3}, //limit			
			]},
		options: {legend: {display: false}, 
		scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});

// slider
var slider = document.getElementById("tmaSlider");
var output = document.getElementById("tmasliderVal");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
	y = this.value;
	y33 = y3.slice(0,y);
	ymin33 = ymin3.slice(0,y);
	ymax33 = ymax3.slice(0,y);
	
	new Chart("chart-3", {
	type: "line", data: {labels: x3, 
		datasets: [{fill: 0, lineTension: 0, borderColor: "rgba(255,192,0,1.0)", 
			borderWidth: 3,	pointStyle:"circle", data: y33},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim3}, //limit
			{fill: 0, lineTension: 0, backgroundColor: "rgba(255,192,0,0.5)", //lower band
			borderWidth: 1, pointStyle:"line", data: ymin33},
			{fill: 0, lineTension: 0, backgroundColor: "rgba(255,192,0,0.25)", //upper band
			borderWidth: 1,	pointStyle:"line", data: ymax33}]},
		options: {legend: {display: false}, scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});
}

//TBA 
var x4 = ['Day 1', 'Day 2', 'Day 4', 'Day 5', 'Day 6', 'Day 8', 'Day 11', 'Day 12', 'Day 13'];
var y4 = [0.76, 2.64, 4.39, 2.31, 7.45, 4.21, 7.57, 4.44, 5.92];

var lim4 = 15;
var ylim4 = [];
var ylim4 = new Array(x4.length).fill(lim4);

var ymin4 = [];
var ymax4 = [];
var max4 = 5;

for(let i = 0; i < x4.length; i++)
    ymin4[i] = y4[i] - y4[i];

for(let i = 0; i < x4.length; i++)
    ymax4[i] = y4[i] + max4;

var yi4 = y4.slice(0,1)

new Chart("chart-4", {
	type: "line", data: {
		labels: x4, datasets: [{
			fill: false, lineTension: 0, pointStyle:"circle", 
			backgroundColor: "rgba(128,128,0,1.0)", data: yi4},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim4}, //limit
			]},
		options: {legend: {display: false}, 
		scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});

// slider
var slider = document.getElementById("tbaSlider");
var output = document.getElementById("tbasliderVal");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
	y = this.value;
	y44 = y4.slice(0,y);
	ymin44 = ymin4.slice(0,y);
	ymax44 = ymax4.slice(0,y);
	
	new Chart("chart-4", {
	type: "line", data: {labels: x4, 
		datasets: [{fill: 0, lineTension: 0, borderColor: "rgba(128,128,0,1.0)", 
			borderWidth: 3,	pointStyle:"circle", data: y44},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim4}, //limit			
			{fill: 0, lineTension: 0, backgroundColor: "rgba(128,128,0,0.5)", //lower band
			borderWidth: 1, pointStyle:"line", data: ymin44},
			{fill: 0, lineTension: 0, backgroundColor: "rgba(128,128,0,0.25)", //upper band
			borderWidth: 1,	pointStyle:"line", data: ymax44}]},
		options: {legend: {display: false}, scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});
}

//APC 
var x5 = ['Day 1', 'Day 2', 'Day 4', 'Day 5', 'Day 6', 'Day 8', 'Day 11', 'Day 12', 'Day 13'];
var y5 = [4.55, 4.04, 4.46, 4.59, 4.19, 4.62, 4.92, 4.40, 4.60];

var lim5 = 15;
var ylim5 = [];
var ylim5 = new Array(x5.length).fill(lim5);

var ymin5 = [];
var ymax5 = [];
var max5 = 5;

for(let i = 0; i < x5.length; i++)
    ymin5[i] = y5[i] - y5[i];

for(let i = 0; i < x5.length; i++)
    ymax5[i] = y5[i] + max5;

var yi5 = y5.slice(0,1)

new Chart("chart-5", {
	type: "line", data: {
		labels: x5, datasets: [{
			fill: false, lineTension: 0, pointStyle:"circle", 
			backgroundColor: "rgba(0,153,51,1.0)", data: yi5},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim5}, //limit						
			]},
		options: {legend: {display: false}, 
		scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});

// slider
var slider = document.getElementById("apcSlider");
var output = document.getElementById("apcsliderVal");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
	y = this.value;
	y55 = y5.slice(0,y);
	ymin55 = ymin5.slice(0,y);
	ymax55 = ymax5.slice(0,y);
	
	new Chart("chart-5", {
	type: "line", data: {labels: x5, 
		datasets: [{fill: 0, lineTension: 0, borderColor: "rgba(0,153,51,1.0)", 
			borderWidth: 3,	pointStyle:"circle", data: y55},
			{fill: false, lineTension: 0, borderWidth: 10, pointStyle:"line", 
			borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.5)", data: ylim5}, //limit						
			{fill: 0, lineTension: 0, backgroundColor: "rgba(0,153,51,0.5)", //lower band
			borderWidth: 1, pointStyle:"line", data: ymin55},
			{fill: 0, lineTension: 0, backgroundColor: "rgba(0,153,51,0.25)", //upper band
			borderWidth: 1,	pointStyle:"line", data: ymax55}]},
		options: {legend: {display: false}, scales: {yAxes: [{ticks: {min: 0, max:80}}],}}});
}