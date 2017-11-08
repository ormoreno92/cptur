import { Router } from '@angular/router';
import { CustomAppPipesPipe } from '../custom-app-pipes.pipe';
import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.less']
})
export class PressComponent implements OnInit {
  alliesN;
  alliesI;
  lastNew;
  lastNews;
  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    this.dataService.getPressAllies()
      .subscribe(dataH => this.drawAllies(dataH), error => console.log(error));
    this.dataService.getLastNew('PRESIDENCY')
      .subscribe(dataH => this.lastNew = dataH, error => console.log(error));
    this.dataService.getlastNews()
      .subscribe(dataH => this.drawNews(dataH), error => console.log(error));
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

  private drawAllies(dataH: any): any {
    const alliesN = [];
    const alliesI = [];
    for (let i = 0; i < dataH.length; i++) {
      if (dataH[i].allieNewsType === 'NATIONAL') {
        alliesN.push(dataH[i]);
      } else {
        alliesI.push(dataH[i]);
      }
    }
    this.alliesI = alliesI;
    this.alliesN = alliesN;
  }

  private drawNews(dataH: any): any {
    console.log(dataH);
    const news = [];
    for (let i = 0; i < 3; i++) {
      news.push(dataH[i]);
    }
    this.lastNews = news;
  }

  public redirectToLast(url: string): void {
    this.dataService.getLastNew(url)
      .subscribe(dataH => this.saveAndRedirect(dataH), error => console.log(error));
  }

  public redirectToSpecific(newId: string): void {
    this.dataService.getSpecificNew(newId)
      .subscribe(dataH => this.saveAndRedirect(dataH), error => console.log(error));
  }

  public redirectToSpecificReplacement(newId: string): void {
    this.dataService.getSpecificNew(newId)
      .subscribe(dataH => this.saveAndReplace(dataH), error => console.log(error));
  }

  private saveAndReplace(dataH: any) {
    this.lastNew = dataH;
  }

  private saveAndRedirect(dataH: any) {
    localStorage.removeItem('CurrentPress');
    localStorage.setItem('CurrentPress', JSON.stringify(dataH));
    window.open('/Noticia', '_blank');
  }

  public redirectToHistory(): void {
    this.router.navigate(['./Historial']);
  }

  public OpenOtherNews(url: string): void {
    window.open(url, '_blank');
  }
}
