import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.less']
})
export class TrainingsComponent implements OnInit {
  capacitaciones;
  capitulos;
  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    this.dataService.getTrainnings()
      .subscribe(dataH => this.drawCapacitaciones(dataH), error => console.log(error));
    this.dataService.getTrainningChapters()
      .subscribe(dataH => this.capitulos = dataH, error => console.log(error));
  }
  public RedirectTo(id: string): void {
    localStorage.removeItem('currentTrainning');
    localStorage.setItem('currentTrainning', id);
    this.router.navigate(['./Capacitacion']);
  }
  public getByChapter(id: number): void {
    this.dataService.getTrainningsByChapter(id)
      .subscribe(dataH => this.drawCapacitaciones(dataH), error => console.log(error));
  }

  private drawCapacitaciones(dataH: any): void {
    dataH.forEach(el => {
      if (el.piece == null || el.piece === 'null' || el.piece === '') {
        el.piece = './assets/img/genericHotel.png';
      }
      el.startDate = new Date(el.startDate);
    });
    this.capacitaciones = dataH;
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
}
