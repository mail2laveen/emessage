import { NgModule } from '@angular/core';


import { SepMenuComponent } from './components/sep-menu.component';
import { SideMenuComponent } from './components/side-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [SepMenuComponent, SideMenuComponent],
    declarations: [SepMenuComponent, SideMenuComponent],
    providers: [],
})
export class NavigationModule { }
