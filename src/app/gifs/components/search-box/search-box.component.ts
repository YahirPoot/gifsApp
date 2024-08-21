import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="bg-success border rounded-3">
    <h5 class="text-light pt-2 px-2">Buscar:</h5>
    <div class="p-2">
      <input type="text"
        class="form-control"
        placeholder="Busar gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput>

    </div>
  </div>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) {}


  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // console.log({newTag});
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }
}
