import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public loaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL is required.');
  }

  onLoad() {
    // setTimeout(() => {
    // }, 1000)
    this.loaded = true;
  }

}
