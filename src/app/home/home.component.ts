import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  images;
  video;
  sanitizer: DomSanitizer;
  constructor(private dataService: DataServiceService, private router: Router,
    sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.dataService.getHomeBannerImages()
      .subscribe(dataH => this.images = dataH, error => console.log(error));
    this.dataService.getHomeVideo()
      .subscribe(dataH => this.video = dataH[0], error => console.log(error));
  }
  private drawBannerImages(data: any): void {
    console.log(data);
  }
  public RedirectTo(url: string): void {
    this.router.navigate(['./' + url]);
  }
  public RedirectToExternal(url: string): void {
    window.open(url, '_blank');
  }
  public hideVideo(): void {
    $('#video').remove();
  }
  public isNullOrEmpty(data: string): boolean {
    if (data === null || data === '') { return true };
    return false;
  }
  public getVideoUrl(url: string): SafeResourceUrl {
    url = url.replace('watch?v=', 'embed/');
    url += '?autoplay=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  public checkYoutube(url: string): boolean {
    return (url.includes('youtube') || url.includes('tube'))
  }
  public checkHttp(url: string): SafeResourceUrl {
    console.log(url);
    if (!url.includes('http') || !url.includes('http')) {
      url = 'http://' + url;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
