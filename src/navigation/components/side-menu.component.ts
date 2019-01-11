import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: '../views/side-menu.component.html'
})

export class SideMenuComponent implements OnInit {
    constructor() { }

    menuItems: string[]=[
        "images/logo_emessage.png",
        "Dashboard",
        "Mobile Message",
    ];
    ngOnInit() { }
}