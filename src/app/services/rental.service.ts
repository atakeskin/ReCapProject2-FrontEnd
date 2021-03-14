import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44390/api/rentals/getrentaldetail";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}