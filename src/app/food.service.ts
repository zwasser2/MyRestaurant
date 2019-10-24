import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {stringify} from 'querystring';
import {Food} from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(
    private http: HttpClient
  ) { }
  getFood() {
    return this.http.get('/assets/data.json');
  }
}
