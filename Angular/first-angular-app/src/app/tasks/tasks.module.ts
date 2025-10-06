import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/share.module";


@NgModule({
    declarations: [Tasks, Task, NewTask], //all components belongs to TasksModule
    exports: [Tasks], // components can be used in outside module if exported
    imports: [CommonModule, FormsModule, SharedModule], // modules that can be used in components of decalarations

})
export class TasksModule {

}