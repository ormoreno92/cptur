import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  funcs;
  docs;
  p = 0;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getFuncs()
      .subscribe(dataH => this.funcs = dataH, error => console.log(error));
    this.dataService.getInstitutionalDocuments()
      .subscribe(dataH => this.SetContent(dataH), error => console.log(error));
  }

  public SelectTargetTab(identifier: string): void {
    console.log(identifier);
  }

  public htmlToPlaintext(text, limit) {
    if (text != null && text !== '') {
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
    return text;
  }

  public downloadDocument(url: string, valid: boolean): void {
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

  private SetContent(dataH: any): void {
    this.docs = dataH;
    this.docs.forEach(el => {
      if (el.image == null || el.image === 'null' || el.image === '') {
        el.image = './assets/img/sala_prensa_black.png';
      }
    });
    this.PaginateContent();
  }
}

