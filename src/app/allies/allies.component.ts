import { CustomAppPipesPipe } from '../custom-app-pipes.pipe';
import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.less']
})
export class AlliesComponent implements OnInit {
  alliesCats = [];
  allies;
  images;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getAlliesImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
    this.dataService.getAlliesCats()
      .subscribe(dataH => this.drawAllies(dataH), error => console.log(error));
  }

  private drawAllies(dataH: any): void {
    dataH = this.shuffle(dataH);
    this.alliesCats = dataH;
    this.allies = this.getCurrentAllie(this.alliesCats[0].id).partnersList;
    this.PaginateContent();
  }

  public changeAllie(val: any): void {
    this.allies = this.getCurrentAllie(val).partnersList;
    this.PaginateContent();
  }

  private getCurrentAllie(val: any): any {
    for (let i = 0; i < this.alliesCats.length; i++) {
      if (this.alliesCats[i].id === val) {
        return this.alliesCats[i];
      }
    }
  }

  public goToAllie(url: string): void {
    if (url != null && url !== '') { window.open(url, '_blank'); }
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '' || data === 'null') { return true };
    return false;
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

  private shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
