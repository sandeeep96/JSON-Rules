import { Component, OnInit } from '@angular/core';

import { CustomServiceService } from '../custom-service.service';
import { JsonRulerService } from '../jsonRuler.service';

JsonRulerService
// import { switchMap } from 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-custom-comp1',
  templateUrl: './custom-comp1.component.html',
  styleUrls: ['./custom-comp1.component.css']
})
export class CustomComp1Component implements OnInit {

  public countriesList: any = "";
  public countryName: string = "";
  public countryObj: any = "";
  public result:string="";

  constructor(private countriesService: CustomServiceService,
    private jsonService:JsonRulerService) { }

  ngOnInit() {
    this.countriesService.getCountriesNames().subscribe(res => { console.log(res.json()); this.countriesList = res.json(); });
    //console.log("1"+this.countriesList);
  }

  public getCountryInfo() {
    this.countriesService.getCountryDetail(this.countryName).subscribe(res => { 
      this.countryObj = res.json();
       console.log("getInfo",this.countryObj);
      this.result= this.jsonService.applyRulesOfJSON(this.countryObj);

    });
    
  }


}
