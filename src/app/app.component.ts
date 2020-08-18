import { Component, Inject } from '@angular/core';
import { NewsFeedService } from './news-feed.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface News {
  hits:[
    {
      objectID:String,
      points:String,
      num_comments:String,
      created_at:String,
      title:String,
      url:String,
      author:String
  
  }
],
page:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent {
  title = 'news';
  

  news=[];
  votes = [];
  Ids = [];
  chart = [];
  STORAGE_KEY = 'local_todolist';
  currentPage:number;
  //private News: News[] = [];
  constructor(private service:NewsFeedService) { }
  currentTodoList = [];
  ngOnInit(): void {
  
    this.loaddata(false);

  }
  bookmark(){
    localStorage.setItem("pageNo",JSON.stringify(this.currentPage));
    alert("This Page has been bookmarked!");
  }

  loaddata(fromPagination){

    if(!fromPagination && sessionStorage.getItem('news')){
      //console.log("insessionStroge");
      this.news=JSON.parse(sessionStorage.getItem('news'));
      this.currentPage=JSON.parse(sessionStorage.getItem('currentPage'));
     
      this.news.forEach(y => {
        this.Ids.push(y.objectID);
        this.votes.push(y.points);
      });
    }else{
      //console.log("inservicecall");
      if(!fromPagination && localStorage.getItem("pageNo")){
        this.currentPage=JSON.parse(localStorage.getItem("pageNo"));
      }
      this.service.sendGetRequest(this.currentPage?this.currentPage:0).subscribe((news: News)=>{
       
        this.news=news.hits;
        this.currentPage=news.page;
        sessionStorage.setItem('currentPage',JSON.stringify(this.currentPage));
        //console.log(this.news);
        sessionStorage.setItem('news',JSON.stringify(this.news));
       
        
       this.news.forEach(y => {
          this.Ids.push(y.objectID);
          this.votes.push(y.points);
        });
        this.lineChartData[0]['data']=this.votes;
        this.lineChartLabels=this.Ids;
        this.lineChartData = this.lineChartData.slice();
        this.lineChartLabels=this.lineChartLabels.slice();

  
    });
     
    }
  }
 
  castVote(id,index){
    this.news[index].points++;
    sessionStorage.setItem('news',JSON.stringify(this.news));
    this.lineChartData[0]['data'][index]=this.news[index].points;
    this.lineChartData = this.lineChartData.slice();
    this.lineChartLabels=this.lineChartLabels.slice();

  }
  removeItem(index,vote,id){
    
    
    this.news.splice(index, 1);
    if(this.news.length==0){
      return this.nextData();
    }
    sessionStorage.setItem('news',JSON.stringify(this.news));
    // const indexVote:number=this.lineChartData[0]['data'].indexOf(vote);
    // const indexId:number=this.lineChartLabels.indexOf(id);
    this.lineChartData[0]['data'].splice(index,1);
    this.lineChartLabels.splice(index,1);
    this.lineChartData = this.lineChartData.slice();
    this.lineChartLabels=this.lineChartLabels.slice();
   
  }
  nextData(){
    this.currentPage=this.currentPage+1;
    this.Ids=[];
    this.votes=[];
    this.loaddata(true);
  }
prevData(){
  this.currentPage=this.currentPage-1;
  this.Ids=[];
    this.votes=[];
    this.loaddata(true);
}
  lineChartData: ChartDataSets[] = [
    { data: this.votes, label: 'Votes' },
  ];

  lineChartLabels: Label[] = this.Ids;

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'VOTES'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'IDS'
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#ff6600',
      //backgroundColor: '#ff6600',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
      
 
}
