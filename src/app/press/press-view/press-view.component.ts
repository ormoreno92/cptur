import { Component, OnInit } from '@angular/core';

declare var Jquery: any;
declare var $: any;

@Component({
  selector: 'app-press-view',
  templateUrl: './press-view.component.html',
  styleUrls: ['./press-view.component.less']
})
export class PressViewComponent implements OnInit {
  hg;
  constructor() { }

  ngOnInit() {
    this.hg = $(window).height();
    $('body').css('padding-top', '0');
    $('app-header').hide();
    $('app-footer').hide();
    const jsonData = JSON.parse(localStorage.getItem('CurrentPress'));
    console.log(jsonData);
    this.drawNew(jsonData);
  }

  private drawNew(data: any): void {
    if (parseInt(data.type, null) === 1) {
      $('.labhe').html('Carta de Presidencia');
      $('.newHeader').css('background', '#104A5D');
      $('#newsImage').attr('src', './assets/img/noti/marcaPresidencia.png');
    } else if (parseInt(data.type, null) === 2) {
      $('.labhe').html('Circular Informativa');
      $('.newHeader').css('background', '#5FA098');
      $('#newsImage').attr('src', './assets/img/noti/marcaInformatica.png');
    } else if (parseInt(data.type, null) === 3) {
      $('.labhe').html('Comunicado de Prensa');
      $('.newHeader').css('background', '#992630');
      $('#newsImage').attr('src', './assets/img/noti/marcaComunicado.png');
    } else if (parseInt(data.type, null) === 4) {
      $('.labhe').html('Boletín Informativo');
      $('.newHeader').css('background', '#87B037');
      $('#newsImage').attr('src', './assets/img/noti/marcaCircular.png');
      $('.imhe').css('width', '11pc');
      $('.dvhe').css('right', '8.5pc');
    } else if (parseInt(data.type, null) === 5) {
      $('.labhe').html('Circular Informativa');
      $('.newHeader').css('background', '#5FA098');
      $('#newsImage').attr('src', './assets/img/noti/marcaInformatica.png');
    }
    $('#nombre1').append(data.title);
    const date = new Date(data.publicationDate);
    $('.dtd').html('Fecha de publicación: ' + date.getUTCFullYear() + '/' + (date.getUTCMonth() + 1) + '/' + date.getDate());
    // debugger;
    if (!this.StringIsNullOrEmpty(data.description)) {
      $('.newBody').append('<label class="prever">' + data.summary + '<label>');
      if (!this.StringIsNullOrEmpty(data.image)) {
        $('.newBody').append('<img src="' + data.image + '" alt="" style="display: block;margin: 0 auto;width: 100%;height: auto;" />');
      }
      $('.newBody').append('<p name="campo3" readonly="readonly" class="textotabla"' +
        'type="textarea" cols="10" rows="2" id="nombre3">' + data.description + '</p>');
    } else {
      $('.newBody').append('<label class="prever">' + data.summary + '<label>');
      $('.newBody').append('<a href="' + data.hyperlink + '" target="_blank">' +
        // tslint:disable-next-line:max-line-length
        '<img src=' + data.image + ' alt="" class="imgCenteredNews" style="display: block;margin: 0 auto;width: 100%;height: auto;" /> </a>');
    }
  }

  private StringIsNullOrEmpty(data: string): Boolean {
    return false;
  }
}
