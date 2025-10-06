import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { SharedModule } from "./shared/share.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [App, User, Header],  //declare and register only modules
    bootstrap: [App],  //specify the root component that Angular should bootstrap when it starts the application
    imports: [BrowserModule, SharedModule, TasksModule ] //this array can be standalone components, modules or for including other modules
 //this array can be standalone components, modules or for including other modules
})
export class AppModule {

}