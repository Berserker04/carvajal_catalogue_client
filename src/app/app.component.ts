import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'carvajal_catalogue_client';
  ngOnInit(): void {
    initFlowbite();
  }
}
