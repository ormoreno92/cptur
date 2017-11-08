import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.less']
})
export class OurServicesComponent implements OnInit {
  consultancies;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getCotelcoServices()
      .subscribe(dataH => this.consultancies = dataH, error => console.log(error));
  }

}
