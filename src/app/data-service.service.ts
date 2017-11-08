import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataServiceService {

  private services = {
    ListaProyectos: 'http://apps.jirka.co/JSih/webresources/CPTurREST/getRamdomDepartmentIndicator/2016',
    ListaNoticias: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNews',
    ListaStreaming: 'http://apps.jirka.co/JSih/webresources/CPTurREST/getStreamings',
    ListaImagenesPortal: 'http://apps.jirka.co/JSih/webresources/CPTurREST/getImagesPortal',
    ListaAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliates',
    ListaEventos: 'http://apps.jirka.co/JSih/webresources/EventsREST/getEvents',
    ListaDocumentos: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/getDocumentsInstitutionnels',
    ListaAliados: 'http://apps.jirka.co/JSih/webresources/PartnersREST/getPartnersCategories',
    AfiliadoHotel: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliate/',
    ListaPublik: 'http://apps.jirka.co/JSih/webresources/PublikREST/getMessagues',
    ListaPublicaciones: 'http://apps.jirka.co/JSih/webresources/PublicationsREST/getPublications',
    ListaDepartamentos: 'http://apps.jirka.co/JSih/webresources/UtilityREST/getDepartaments',
    ListaImagenesAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getRamdomAffiliates',
    ListaCiudades: 'http://apps.jirka.co/JSih/webresources/UtilityREST/getCities/',
    ObtenerResultadoAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/searchHotels/',
    ObtenerSubCategorias: 'http://apps.jirka.co/JSih/webresources/UtilityREST/getSubcategories',
    validateRnt: 'http://apps.jirka.co/JSih/webresources/ValidatorREST/validateRntIfExist/',
    validateEmail: 'http://apps.jirka.co/JSih/webresources/ValidatorREST/validateMailIfExist/',
    getFuncs: 'http://apps.jirka.co/JSih/webresources/UserREST/getFunctionariesCotelco',
    getAlliesImages: 'http://apps.jirka.co/JSih/webresources/PartnersREST/getCommercialAllie',
    getConsultancies: 'http://apps.jirka.co/JSih/webresources/ConsultancyREST/getConsultancies',
    getEventDetails: 'http://apps.jirka.co/JSih/webresources/EventsREST/getEvent/',
    getEventSearch: 'http://apps.jirka.co/JSih/webresources/EventsREST/searchEvents/',
    getContactTypes: 'http://apps.jirka.co/JSih/webresources/SuggestionREST/getSuggestionsTypes',
    getCotelcoServices: 'http://apps.jirka.co/JSih/webresources/UtilityREST/getServicesCotelco',
    getPressAllies: 'http://apps.jirka.co/JSih/webresources/NewsREST/getAlliesNews',
    getLastNew: 'http://apps.jirka.co/JSih/webresources/NewsREST/getLastNewsByType/',
    getLastNews: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNews',
    getCategoriesDocs: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/getCategoriesDocs',
    getSubcategoriesDocs: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/getSubcategoriesDocs',
    getTopicsDocs: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/getTopicsDocs',
    searchDocs: 'http://apps.jirka.co/JSih/webresources/GeneralDocumentsREST/searchDocs/',
    filterNews: 'http://apps.jirka.co/JSih/webresources/NewsREST/searchNews/',
    sendContact: 'http://apps.jirka.co/JSih/webresources/SuggestionREST/',
    sendAfiliese: 'http://apps.jirka.co/JSih/webresources/ValidatorREST',
    checkLogin: 'http://apps.jirka.co/JSih/webresources/UserREST/authenticateUser/',
    getNewsTypes: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNewsTypes',
    getTrainningChapters: 'http://apps.jirka.co/JSih/webresources/TrainingREST/getTrainingByChapters',
    searchTrainnings: 'http://apps.jirka.co/JSih/webresources/TrainingREST/searchTrainings/',
    getTrainnings: 'http://apps.jirka.co/JSih/webresources/TrainingREST/getTrainings',
    getTrainningsByChapter: 'http://apps.jirka.co/JSih/webresources/TrainingREST/getTrainingsByChapter/',
    getSpecificTrainning: 'http://apps.jirka.co/JSih/webresources/TrainingREST/getTraining/',
    deptsFIle: '/assets/extras/departmentData.json'
  };
  private headers = new Headers({ 'Accept': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getHomeBannerImages(): Observable<HomeBannerImages[]> {
    return this.http.get(this.services.ListaImagenesPortal, this.options)
      .map(res => res.json());
  }

  public getHomeVideo(): Observable<any[]> {
    return this.http.get(this.services.ListaStreaming, this.options)
      .map(res => res.json());
  }

  public getInstitutionalDocuments(): Observable<any[]> {
    return this.http.get(this.services.ListaDocumentos, this.options)
      .map(res => res.json());
  }

  public getPublicaciones(): Observable<PublicacionesMagazines[]> {
    return this.http.get(this.services.ListaPublicaciones, this.options)
      .map(res => res.json());
  }

  public getCapacitaciones(): Observable<any[]> {
    return this.http.get(this.services.ListaEventos, this.options)
      .map(res => res.json());
  }

  private getServicesUrl(): Observable<ServiceUrl> {
    return this.http.get('this.heroesUrl', this.options)
      .map(res => res.json());
  }

  public getHomeAffiliatesImages(): Observable<AffiliatesHomeImages[]> {
    return this.http.get(this.services.ListaImagenesAfiliados, this.options)
      .map(res => res.json());
  }

  public getDepartments(): Observable<Departments[]> {
    return this.http.get(this.services.ListaDepartamentos, this.options)
      .map(res => res.json());
  }

  public getDeptsFile(): Observable<Departments[]> {
    return this.http.get(this.services.deptsFIle, this.options)
      .map(res => res.json());
  }

  public getEvents(): Observable<Departments[]> {
    return this.http.get(this.services.ListaEventos, this.options)
      .map(res => res.json());
  }

  public getCities(id: any): Observable<Cities[]> {
    return this.http.get(this.services.ListaCiudades + id, this.options)
      .map(res => res.json());
  }

  public getAffiliateResult(dep: any, cit: any, key: any): Observable<AffiliateResult[]> {
    return this.http.get(this.services.ObtenerResultadoAfiliados + dep + '/' + cit + '/' + key, this.options)
      .map(res => res.json());
  }

  public getEventResult(dep: any, cit: any, key: any): Observable<any[]> {
    return this.http.get(this.services.getEventSearch + dep + '/' + cit + '/' + key, this.options)
      .map(res => res.json());
  }

  public getHotelDetails(hotelId: any): Observable<any> {
    return this.http.get(this.services.AfiliadoHotel + hotelId, this.options)
      .map(res => res.json());
  }

  public getTrainningDetails(id: any): Observable<any> {
    return this.http.get(this.services.getSpecificTrainning + id, this.options)
      .map(res => res.json());
  }

  public getEventDetails(eventId: any): Observable<any> {
    return this.http.get(this.services.getEventDetails + eventId, this.options)
      .map(res => res.json());
  }

  public getSubcategories(): Observable<any> {
    return this.http.get(this.services.ObtenerSubCategorias, this.options)
      .map(res => res.json());
  }

  public getContactTypes(): Observable<any> {
    return this.http.get(this.services.getContactTypes, this.options)
      .map(res => res.json());
  }

  public getRandom(): Observable<any> {
    return this.http.get(this.services.ListaProyectos, this.options)
      .map(res => res.json());
  }

  public validateRnt(rnt: any): Observable<any> {
    return this.http.get(this.services.validateRnt + rnt, this.options)
      .map(res => res.json());
  }

  public validateEmail(email: any): Observable<any> {
    return this.http.get(this.services.validateEmail + email, this.options)
      .map(res => res.json());
  }

  public getFuncs(): Observable<any> {
    return this.http.get(this.services.getFuncs, this.options)
      .map(res => res.json());
  }

  public getAlliesCats(): Observable<any> {
    return this.http.get(this.services.ListaAliados, this.options)
      .map(res => res.json());
  }

  public getAlliesImages(): Observable<any> {
    return this.http.get(this.services.getAlliesImages, this.options)
      .map(res => res.json());
  }

  public getConsultancies(): Observable<any> {
    return this.http.get(this.services.getConsultancies, this.options)
      .map(res => res.json());
  }

  public getCotelcoServices(): Observable<any> {
    return this.http.get(this.services.getCotelcoServices, this.options)
      .map(res => res.json());
  }

  public getPressAllies(): Observable<any> {
    return this.http.get(this.services.getPressAllies, this.options)
      .map(res => res.json());
  }

  public getLastNew(url: string): Observable<any> {
    return this.http.get(this.services.getLastNew + url, this.options)
      .map(res => res.json());
  }

  public getSpecificNew(url: string): Observable<any> {
    return this.http.get(this.services.ListaNoticias + '/' + url, this.options)
      .map(res => res.json());
  }

  public getlastNews(): Observable<any> {
    return this.http.get(this.services.getLastNews, this.options)
      .map(res => res.json());
  }

  public getNewsTypes(): Observable<any[]> {
    return this.http.get(this.services.getNewsTypes, this.options)
      .map(res => res.json());
  }

  public getCategoriesDocs(): Observable<any> {
    return this.http.get(this.services.getCategoriesDocs, this.options)
      .map(res => res.json());
  }

  public getSubcategoriesDocs(): Observable<any> {
    return this.http.get(this.services.getSubcategoriesDocs, this.options)
      .map(res => res.json());
  }

  public getTopicsDocs(): Observable<any> {
    return this.http.get(this.services.getTopicsDocs, this.options)
      .map(res => res.json());
  }

  public getlibraryResult(cat: any, scat: any, theme: any, keyword: any): Observable<any[]> {
    return this.http.get(this.services.searchDocs + cat + '/' + scat + '/' + theme + '/' + keyword, this.options)
      .map(res => res.json());
  }

  public getNewsFilter(date: any, type: any, keyword: any): Observable<any[]> {
    return this.http.get(this.services.filterNews + date + '/' + type + '/' + keyword, this.options)
      .map(res => res.json());
  }

  public sendContactForm(dataH: string): any {
    return this.http.post(this.services.sendContact, dataH, this.options)
      .map(res => res.json());
  }
  public sendAfilieseForm(dataH: string): any {
    return this.http.post(this.services.sendAfiliese, dataH, this.options)
      .map(res => res.json());
  }

  public checkLogin(user: string, password: string): Observable<any> {
    return this.http.get(this.services.checkLogin + user + '/' + password, this.options)
      .map(res => res.json());
  }

  public getTrainnings(): Observable<any> {
    return this.http.get(this.services.getTrainnings, this.options)
      .map(res => res.json());
  }

  public getTrainningChapters(): Observable<any> {
    return this.http.get(this.services.getTrainningChapters, this.options)
      .map(res => res.json());
  }

  public getTrainningsByChapter(id: number): Observable<any[]> {
    return this.http.get(this.services.getTrainningsByChapter + id, this.options)
      .map(res => res.json());
  }
}

export class HomeBannerImages {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  link: string;
  order: number;
  state: number;
}

export class PublicacionesMagazines {
  id: number;
  name: string;
  email: string;
  fax: string;
  url: string;
  webSite: string;
  phone: string;
  cellPhone: string;
  address: string;
  state: number;
  departament: string;
  executiveDirector: string;
  requestsAffiliates: string;
  pendingAffiliations: string;
  requestsChangeDaily: string;
  requestsChangeMonthly: string;
}

export class Capacitaciones {
  id: number;
  name: string;
  summary: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
  place: string;
  addres: string;
  advertisingPiece: string;
  url: string;
  videoLink: string;
  color: string;
  introductionFile: string;
  scheduleFile: string;
  speakersFile: string;
  programFile: string;
  inversionFile: string;
  hotelRatesFile: string;
  reportsFile: string;
  registrationFile: string;
  registrationAltFile: string;
  registratioLink: string;
  registrationAltLink: string;
  state: number;
}

export class Departments {
  code: number;
  name: string;
  capital; string;
  state: any;
}

export class Cities {
  code: any;
  name: string;
  departament; string;
  state: any;
}

export class AffiliatesHomeImages {
  id: number;
  tradename: string;
  description: string;
  logoUrl: string;
  city: string;
}

export class ServiceUrl {
  ListaProyectos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaNoticias: 'http://apps.jirka.co/JSih/webresources/NewsREST/getNews';
  ListaStreaming: 'http://apps.jirka.co/JSih/webresources/StreamingREST/getStreamings';
  ListaImagenesPortal: 'http://apps.jirka.co/JSih/webresources/ImagesPortalREST/getImagesPortal';
  ListaAfiliados: 'http://apps.jirka.co/JSih/webresources/AffiliateREST/getAffiliates';
  ListaEventos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaDocumentos: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaAliados: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  AfiliadoHotel: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaPublik: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
  ListaPublicaciones: 'http://apps.jirka.co/JSih/webresources/ChapterREST/getChapters';
}

export class AffiliateResult {
  id: number;
  establishmentName: string;
  tradename: string;
  description: string;
  rnt: any;
  rut: any;
  webSite: string;
  phone: string;
  logoUrl: string;
  commercialAddress: string;
}

export class Affiliate extends AffiliateResult {
  cotelcoCode: string;
  legalRepresentative: string;
  cellPhone: string;
  emailAddress: string;
  emailReservation: string;
  latitude: any;
  longitude: any;
  correspondence: any;
  averageRate: any;
  numberRooms: any;
  numerBeds: any;
  eventRooms: any;
  eventRoomsCapacity: any;
  numberEmployees: any;
  enrollmentDate: any;
  disenrollmentDate: any;
  logoUrl: any;
  photo: any;
}
