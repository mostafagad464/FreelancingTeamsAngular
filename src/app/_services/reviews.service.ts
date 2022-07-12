import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../_models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

baseUrl3='https://localhost:7152/api/Reviews';


  constructor(public http:HttpClient) { }

  getReviews(){
    return this.http.get<Review[]>(this.baseUrl3)
  }
  
}
