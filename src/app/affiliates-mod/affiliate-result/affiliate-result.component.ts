import { CustomAppPipesPipe } from '../../custom-app-pipes.pipe';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-affiliate-result',
  templateUrl: './affiliate-result.component.html',
  styleUrls: ['./affiliate-result.component.less']
})
export class AffiliateResultComponent implements OnInit {
  affiliates = [];
  departments;
  cities;
  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('hotelSearchObj'));
    this.dataService.getAffiliateResult(data.deparment, data.city, data.keyword)
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
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
    this.dataService.getAffiliateResult(hotelSearchObj.deparment, hotelSearchObj.city, hotelSearchObj.keyword)
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public goToHotel(id: any): void {
    localStorage.removeItem('currentHotel');
    localStorage.setItem('currentHotel', id);
    this.router.navigate(['./Afiliados']);
  }

  public htmlToPlaintext(text, limit) {
    let nText = text ? String(text).replace(/<[^>]+>/gm, '') : '';
    nText = nText.replace(/&aacute;/g, 'á');
    nText = nText.replace(/&eacute;/g, 'é');
    nText = nText.replace(/&iacute;/g, 'í');
    nText = nText.replace(/&oacute;/g, 'ó');
    nText = nText.replace(/&uacute;/g, 'ú');
    nText = nText.replace(/&ntilde;/g, 'ñ');
    nText = nText.replace(/&uuml;/g, 'ü');
    nText = nText.replace(/&Aacute;/g, 'Á');
    nText = nText.replace(/&Eacute;/g, 'É');
    nText = nText.replace(/&Iacute;/g, 'Í');
    nText = nText.replace(/&Oacute;/g, 'Ó');
    nText = nText.replace(/&Uacute;/g, 'Ú');
    nText = nText.replace(/&Ñtilde;/g, 'Ñ');
    nText = nText.replace(/&Üuml;/g, 'Ü');
    const trail = '...';
    return nText.length > limit ? nText.substring(0, limit) + trail : nText;
  }

  private PaginateContent(): void {
    $('#easyPaginate').easyPaginate({
      paginateElement: 'div',
      elementsPerPage: 3,
      effect: 'climb'
    });
  }

  private SetContent(dataH: any): void {
    this.affiliates = dataH;
    this.PaginateContent();
  }
}
