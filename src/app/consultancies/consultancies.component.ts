import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultancies',
  templateUrl: './consultancies.component.html',
  styleUrls: ['./consultancies.component.less']
})
export class ConsultanciesComponent implements OnInit {
  consultancies;
  current;
  current_title = 'PROYECTOS HOTELEROS';
  current_color = '#F9B42B';
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getConsultancies()
      .subscribe(dataH => this.drawConsultors(dataH), error => console.log(error));
  }

  public isNullOrEmpty(data: any): boolean {
    if (data === null || data === '') { return true };
    return false;
  }

  public changeSelector(val: any, type: number): void {
    this.current = this.getCurrentAllie(val).linesList;
    this.current_title = this.getCurrentAllie(val).name;
    switch (type) {
      case 0:
        this.current_color = '#F9B42B';
        break;
      case 1:
        this.current_color = '#184A91';
        break;
      case 2:
        this.current_color = '#E02727';
        break;
      default:
        this.current_color = '#F9B42B';
        break;
    }
    console.log(this.current_color);
  }

  private drawConsultors(dataH: any): void {
    this.consultancies = dataH
    this.current_title = this.consultancies[0].name;
    this.current = this.getCurrentAllie(this.consultancies[0].id).linesList;
  }

  private getCurrentAllie(val: any): any {
    for (let i = 0; i < this.consultancies.length; i++) {
      if (this.consultancies[i].id === val) {
        return this.consultancies[i];
      }
    }
  }
}
