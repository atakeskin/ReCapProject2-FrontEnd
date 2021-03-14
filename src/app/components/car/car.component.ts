import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailService } from 'src/app/services/carDetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetailDto[] = []
  dataLoaded:boolean=false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
}
