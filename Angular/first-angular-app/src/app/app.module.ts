import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [App],  //declare and register only non-standalone components
    bootstrap: [App],  //specify the root component that Angular should bootstrap when it starts the application
    imports: [BrowserModule, Header, Tasks, User] //this array can be standalone components, modules or for including other modules
})
export class AppModule {

}