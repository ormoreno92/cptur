import { forEach } from '@angular/router/src/utils/collection';
import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

declare var Jquery: any;
declare var $: any;
declare var Chart: any;

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.less']
})
export class ChaptersComponent implements OnInit {
  currentObj;
  departments;
  allDepts;
  public barChartLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartData: Dtt[] = [{
    data: [],
    label: ''
  }];
  public colors = [{ backgroundColor: [] }];
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getDepartments()
      .subscribe(dataH => this.departments = dataH, error => console.log(error));
    this.dataService.getRandom()
      .subscribe(dataH => this.drawInfo(dataH), error => console.log(error));
    this.dataService.getDeptsFile()
      .subscribe(dataH => this.allDepts = dataH, error => console.log(error));
  }

  private drawInfo(dataH: any): void {
    this.currentObj = dataH;
    this.drawMap();
    if (this.currentObj.ictrcReportsList) {
      this.currentObj.ictrcReportsList.forEach(el => {
        this.barChartLabels.push(el.criterio);
      });
      this.currentObj.ictrcReportsList.forEach(el => {
        this.barChartData[0].data.push(el.score);
      });
      this.barChartData[0].label = this.currentObj.departament;
      this.currentObj.ictrcReportsList.forEach(el => {
        this.colors[0].backgroundColor.push(el.color);
      });
    }
    this.setNewVals(this.filterContent(this.currentObj.deptoCode, 1));
  }

  private drawMap(): void {
    const _self = this;
    $('#map-colombia').CSSMap({
      'size': 960,
      'mapStyle': 'blue',
      'cities': true,
      'tooltips': false,
      'responsive': 'auto',
      'tapOnce': true,
      'pins': {
        'enable': true,
        'pinsId': '#demo-markers',
        'mapSize': 960,
        'markerPosition': 'middle',
        'tooltipPosition': 'top',
        'tooltipOnClick': false,
        'clickableRegions': true
      },
      activateOnLoad: [
        'co5'
      ],
      onClick: function (e) {
        const rLink = e.children('A').eq(0).attr('href'),
          rText = e.children('A').eq(0).text(),
          rClass = e.attr('class').split(' ')[0];
        const filter = rText.trim().toUpperCase();
        let changed = false;
        /*_self.chapters.forEach(dept => {
          if (filter === dept.name.trim().toUpperCase()) {
            _self.chapter = dept;
            $('.spn-1').html(dept.name);
            $('.spn-2').html(dept.executiveDirector);
            $('.spn-3').html(dept.executiveDirector);
            $('.imgLlo').attr('src', dept.url);
            $('.addr').html(dept.address);
            $('.clpo').html(dept.cellPhone);
            $('.emil').html(dept.email);
            $('.wst').html(dept.webSite);
            $('.hfgr').attr('href', dept.webSite);
            changed = true;
          }
        });
        if (!changed) {
          _self.chapters.forEach(dept => {
            if (dept.id == 15) {
              _self.chapter = dept;
              $('.spn-1').html(dept.name);
              $('.spn-2').html(dept.executiveDirector);
              $('.spn-3').html(dept.executiveDirector);
              $('.imgLlo').attr('src', dept.url);
              $('.addr').html(dept.address);
              $('.clpo').html(dept.cellPhone);
              $('.emil').html(dept.email);
              $('.wst').html(dept.webSite);
              $('.hfgr').attr('href', dept.webSite);
              changed = true;
            }
          });
        }*/
      }
    });
  }

  public filterContent(val: string, type: number): void {
    var nVal;
    switch (type) {
      case 1:
        this.allDepts.forEach(el => {
          if (el.code == val) {
            nVal = el;
          }
        });
        break;
      case 2:
        this.allDepts.forEach(el => {
          if (el.name == val) {
            nVal = el;
          }
        });
        break;
      case 3:
        this.allDepts.forEach(el => {
          if (el.map == val) {
            nVal = el;
          }
        });
        break;
    }
    return nVal;
  }

  private setNewVals(val: any): void {
    $('#sltCities').val(val.code);
    $('#' + val.map).click();
  }
}

export class Dtt {
  public data: string[] = [];
  public label: string = '';
}

export class Dta {
  public backgroundColor: string[] = [];
}