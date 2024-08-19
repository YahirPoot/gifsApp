import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  private _tagHistory: string[] = [];
  constructor() { }

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
    console.log(this.tagHistory);
  }

}
