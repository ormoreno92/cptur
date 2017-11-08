import { CustomAppPipesPipe } from '../../custom-app-pipes.pipe';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-events-result',
  templateUrl: './events-result.component.html',
  styleUrls: ['./events-result.component.less']
})
export class EventsResultComponent implements OnInit {
  departments;
  cities;
  events = [];

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('eventSearchObj'));
    this.dataService.getDepartments()
      .subscribe(dataH => this.departments = dataH, error => console.log(error));
    this.dataService.getEvents()
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }

  public onChangeDepartment(code: number): void {
    this.dataService.getCities(code)
      .subscribe(dataH => this.cities = dataH, error => console.log(error));
  }

  public searchEvents(data): void {
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
    localStorage.removeItem('eventSearchObj');
    const eventSearchObj = { 'deparment': deparment, 'city': city, 'keyword': keyword };
    localStorage.setItem('eventSearchObj', JSON.stringify(eventSearchObj));
    this.dataService.getEventResult(eventSearchObj.deparment, eventSearchObj.city, eventSearchObj.keyword)
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public goToEvent(id: any): void {
    localStorage.removeItem('eventSearchObj');
    localStorage.setItem('eventSearchObj', id);
    window.open('./Evento', '_blank');
    // this.router.navigate(['./Evento']);
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
    console.log(dataH);
    this.events = dataH;
    this.PaginateContent();
  }
}
