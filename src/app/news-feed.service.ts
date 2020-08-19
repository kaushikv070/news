import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {



  private REST_API_SERVER = 'https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(page): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + page);

  }


}


