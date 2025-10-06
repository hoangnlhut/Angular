import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Card } from "./shared/card/card";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { SharedModule } from "./shared/share.module";

@NgModule({
    declarations: [App, Tasks, User, Header, Task, NewTask],  //declare and register only modules
    bootstrap: [App],  //specify the root component that Angular should bootstrap when it starts the application
    imports: [BrowserModule, FormsModule, SharedModule ] //this array can be standalone components, modules or for including other modules
 //this array can be standalone components, modules or for including other modules
})
export class AppModule {

}