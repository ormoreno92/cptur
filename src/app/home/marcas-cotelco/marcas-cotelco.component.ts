import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas-cotelco',
  templateUrl: './marcas-cotelco.component.html',
  styleUrls: ['./marcas-cotelco.component.less']
})
export class MarcasCotelcoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public redirect(url): void {
    window.open(url, '_blank');
  }
}
