import { Router } from '@angular/router';
declare var jQuery: any;
import { DataServiceService } from '../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.less']
})
export class Carousel2Component implements OnInit {
  images;
  model;
  departments;
  cities;
  constructor(private dataService: DataServiceService, private router: Router) { }
  ngOnInit() {
    this.dataService.getHomeAffiliatesImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
    this.dataService.getDepartments()
      .subscribe(dataH => this.departments = dataH, error => console.log(error));
  }

  public onChangeDepartment(code: number): void {
    this.dataService.getCities(code)
      .subscribe(dataH => this.cities = dataH, error => console.log(error));
  }

  public searchHotels(data): void {
    let deparment = null;
    let city = null;
    let keyword = null;
    let valid = false;
    if (!this.isNullOrEmpty(data.value.dpt)) { deparment = data.value.dpt; valid = true };
    if (!this.isNullOrEmpty(data.value.ct)) { city = data.value.ct; valid = true };
    if (!this.isNullOrEmpty(data.value.kw)) { keyword = data.value.kw; valid = true };
    if (!valid) {
      alert('Seleccione un departamento y/o una ciudad y agregue si desea una palabra clave.');
      return;
    }
    localStorage.removeItem('hotelSearchObj');
    const hotelSearchObj = { 'deparment': deparment, 'city': city, 'keyword': keyword };
    localStorage.setItem('hotelSearchObj', JSON.stringify(hotelSearchObj));
    this.router.navigate(['./BusquedaAfiliados']);
  }

  private isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public goToHotel(id: any): void {
    localStorage.removeItem('currentHotel');
    localStorage.setItem('currentHotel', id);
    this.router.navigate(['./Afiliados']);
  }
}

