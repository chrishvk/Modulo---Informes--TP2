import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-sublevel-navbar',
  standalone: true,
  imports: [],
  template: ``,
})
export class SublevelNavbarComponent {
  // @Input() data: Routes = {
  //   routeLink: '',
  //   icon: '',
  //   label: '',
  //   items: [],
  // };

  @Input() collapsed = false;
  @Input() expanded = false;

  ngOnInit() {}
}
