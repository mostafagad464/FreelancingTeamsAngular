import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countriesurl = "https://restcountries.com/v2/all?fields=name";
  citiesurl ="https://countriesnow.space/api/v0.1/countries/cities";
  codeurl = "https://countriesnow.space/api/v0.1/countries/codes";

  constructor(public http: HttpClient) { }

  getAllCountries() {
    return this.http.get<any[]>(this.countriesurl);
  }

  getCountryCities(countryName: string){
    return this.http.post<any>(this.citiesurl,{"country":countryName})
  }

  getCountryDialCode(countryName: string){
    return this.http.post<any>(this.codeurl,{"country":countryName})
  }
}
