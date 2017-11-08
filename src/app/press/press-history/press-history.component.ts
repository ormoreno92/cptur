import { CustomAppPipesPipe } from '../../custom-app-pipes.pipe';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-press-history',
  templateUrl: './press-history.component.html',
  styleUrls: ['./press-history.component.less']
})
export class PressHistoryComponent implements OnInit {
  news;
  categories = [];
  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    this.dataService.getlastNews()
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
    this.dataService.getNewsTypes()
      .subscribe(dataH => this.categories = dataH, error => console.log(error));
  }

  public redirectToSpecific(newId: string): void {
    this.dataService.getSpecificNew(newId)
      .subscribe(dataH => this.saveAndRedirect(dataH), error => console.log(error));
  }

  private saveAndRedirect(dataH: any) {
    localStorage.removeItem('CurrentPress');
    localStorage.setItem('CurrentPress', JSON.stringify(dataH));
    window.open('/Noticia', '_blank');
  }

  private PaginateContent(): void {
    $('#easyPaginate').easyPaginate({
      paginateElement: 'div',
      elementsPerPage: 3,
      effect: 'climb'
    });
  }

  private SetContent(dataH: any): void {
    if (dataH == null) {
      this.news = [];
      return;
    }
    for (let index = 0; index < dataH.length; index++) {
      const currentTime = new Date(dataH[index].publicationDate)
      const month = currentTime.getMonth() + 1
      const day = currentTime.getDate()
      const year = currentTime.getFullYear()
      const date = day + '/' + month + '/' + year
      dataH[index].publicationDate = date;
    }
    this.news = dataH;
    this.PaginateContent();
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public searchNews(data): void {
    let date = null;
    let type = null;
    let keyword = null;
    let valid = false;
    if (!this.isNullOrEmpty(data.value.date)) {
      date = data.value.date;
      valid = true
    };
    if (!this.isNullOrEmpty(data.value.type)) { type = data.value.type; valid = true };
    if (!this.isNullOrEmpty(data.value.kw)) { keyword = data.value.kw; valid = true };
    if (!valid) {
      alert('Seleccione alguna opción o agregue si desea una palabra clave.');
      return;
    }
    this.dataService.getNewsFilter(date, type, keyword)
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }
}
