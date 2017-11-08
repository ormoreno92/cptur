import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public redirectPse(): void {
    window.open('https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=525', '_blank');
  }

  public goLogin(): void {
    $('#loginModal').click();
  }
}
