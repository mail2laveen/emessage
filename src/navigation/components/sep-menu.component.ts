import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sep-menu',
    templateUrl: '../views/sep-menu.component.html'
})

export class SepMenuComponent implements OnInit {
    constructor() { }

    menuItems: string[]=[
        "images/logo_emessage.png",
    ];
    ngOnInit() { }
}