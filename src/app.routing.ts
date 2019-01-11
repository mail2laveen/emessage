import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const defaultRoute: Routes = [
    {
        path: "",
        loadChildren: "./home/sep-home.module#SepHomeModule"
    }

];
const homeRoute: Routes = [
    {
        path: "home",
        loadChildren: "./home/sep-home.module#SepHomeModule"
    }

];

const employeesRoute: Routes = [{
    path: "employees",
    loadChildren: "./employees/employees.module#EmployeesModule"
}];

const mobileMsgRoute: Routes = [{
    path: "mobile",
    loadChildren: "./mobile-messages/mobile.msg.module#MobileMsgModule"
}];

const personalisedMsgRoute: Routes = [{
    path: "personalised",
    loadChildren: "./personalised-messages/personalised.msg.module#PersonalisedMsgModule"
}];

const addressBookRute: Routes = [{
    path: "address",
    loadChildren: "./address-book/addressBook.module#AddressBook"
}];

const templateRute: Routes = [{
    path: "template",
    loadChildren: "./templates/template.module#Template"
}];

const appRoutes: Routes = [
    ...homeRoute,
    ...mobileMsgRoute,
    ...personalisedMsgRoute,
    ...addressBookRute,
    ...templateRute,
    ...defaultRoute
];
export const rootRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);