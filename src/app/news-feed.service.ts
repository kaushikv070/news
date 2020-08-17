import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  

  private REST_API_SERVER = "https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(page){
    return this.httpClient.get(this.REST_API_SERVER+page);
    
  }

  public getData(){
    return this.httpClient.get(this.REST_API_SERVER+0);
  }
}


