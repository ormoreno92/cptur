import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-publishings',
  templateUrl: './publishings.component.html',
  styleUrls: ['./publishings.component.less']
})
export class PublishingsComponent implements OnInit {
  images;
  categories;
  sCategories;
  themes;
  library = [];
  innerMessage = 'Realice una búsqueda.';
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPublicaciones()
      .subscribe(dataH => this.DrawPublications(dataH), error => console.log(error));
    this.dataService.getCategoriesDocs()
      .subscribe(dataH => this.categories = dataH, error => console.log(error));
    this.dataService.getSubcategoriesDocs()
      .subscribe(dataH => this.sCategories = dataH, error => console.log(error));
    this.dataService.getTopicsDocs()
      .subscribe(dataH => this.themes = dataH, error => console.log(error));
  }

  private DrawPublications(dataH: any): void {
    this.images = dataH;
    setTimeout(function () {
      $('.carousel[data-type="multi"] .item').each(function () {
        let next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (let i = 0; i < 2; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      });
    }, 1000);
  }

  public searchLibrary(data): void {
    let cat = null;
    let scat = null;
    let theme = null;
    let keyword = null;
    let valid = false;
    if (!this.isNullOrEmpty(data.value.cat)) { cat = data.value.cat; valid = true };
    if (!this.isNullOrEmpty(data.value.scat)) { scat = data.value.scat; valid = true };
    if (!this.isNullOrEmpty(data.value.theme)) { theme = data.value.theme; valid = true };
    if (!this.isNullOrEmpty(data.value.kw)) { keyword = data.value.kw; valid = true };
    if (!valid) {
      alert('Seleccione alguna opción o agregue si desea una palabra clave.');
      return;
    }
    this.dataService.getlibraryResult(cat, scat, theme, keyword)
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }
  private SetContent(dataH: any): void {
    this.library = dataH;
    if (this.library != null) {
      if (this.library.length < 1) {
        this.innerMessage = 'No se encontraron resultados para su búsqueda.';
        return;
      }
    } else {
      this.innerMessage = 'No se encontraron resultados para su búsqueda.';
      return;
    }
    this.library.forEach(el => {
      if (el.image == null || el.image === 'null' || el.image === '') {
        el.image = './assets/img/sala_prensa_black.png';
      }
    });
    this.PaginateContent();
  }

  public DownloadDocument(url: string, valid: boolean): void {
    if (!valid) {
      window.open(url, '_blank');
      return;
    }
    localStorage.setItem('redirectLoginUrl', url);
    $('#loginModal').click();
  }

  private PaginateContent(): void {
    $('#easyPaginate').easyPaginate({
      paginateElement: 'div',
      elementsPerPage: 3,
      effect: 'climb'
    });
  }
}
