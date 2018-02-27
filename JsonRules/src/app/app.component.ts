import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { JsonRulerService } from './jsonRuler.service';
import { CustomServiceService } from './custom-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

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
