import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/RentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44390/api/rentals/getrentaldetail";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl);
  }
}