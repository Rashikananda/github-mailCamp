import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  Data  from "../assets/arrival-rate-raw.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
   
  }
  ngOnInit(): void {
    this.topicsArray=Array.from(new Set(Data.map(rData => rData.topic)));
    this.seriesData=this.getProcessedArrivalData(Data);
    this.chartOptions.series=this.seriesData;
    this.chartOptions.xAxis.categories=this.topicsArray;
  }
  getProcessedArrivalData(rawData){
    let processedSeriesData = [];
    const self=this;
    this.topicsArray.forEach(topic => {
        const topicData = rawData.filter(trData => trData.topic === topic);
        const consumersList = Array.from(new Set(rawData.map(rData => rData.consumer)));
        consumersList.forEach(consumer => {
            let index = processedSeriesData.findIndex(psData => psData.name === consumer);
            if(index === -1) {
              processedSeriesData.push({name: consumer,data:[]});
              index=processedSeriesData.length-1;
            }
            let count = 0;
            const consumerData = topicData.filter(tData => tData.consumer === consumer);
            count = consumerData.reduce((acc, dataItem) => (
                dataItem.topic === topic ? acc + 1 : acc
            ), 0);
            processedSeriesData[index]["data"].push(count);
        });
    });
  return processedSeriesData;
  }
  title = 'demo1';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  seriesData;
  topicsArray;
  chartOptions = { 
    title: {
        text: 'Consumers Requests vs Topic'
    },
    yAxis: {
        title: {
            text: 'Requests Count'
        }
    },
    xAxis: {
        categories: []
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    series: [],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}// required
//   updateFlag = false; // optional boolean
//   oneToOneFlag = true; // optional boolean, defaults to false
}
