import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiKey: string = 'v2hBTB0RQuVsCCSeWmZD56Vg8hAiFkCx';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs'
  constructor(private http: HttpClient) { }

  get tagHistory() {
    return [...this._tagHistory];
  }

  //realizar un metodo que no agregue tags repetidos y que solo muestre 10 tags
  private organizedHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.slice(0, 10);
  }

  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizedHistory(tag);

    //Uso de HttpParams para enviar parametros en la peticion (Uso del HttpClientModulo de Angular)
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(response => {
        this.gifList = response.data;
        // console.log({gifs: this.gifList});
      })
    // console.log(this.tagHistory);
  }

}
