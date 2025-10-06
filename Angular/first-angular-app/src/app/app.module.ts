import { NgModule } from "@angular/core";
import { App } from "./app";

@NgModule({
    declarations: [App],  //declare and register components, directives, pipes that need to work togerther
    bootstrap: [App],  //specify the root component that Angular should bootstrap when it starts the application
    imports: [],
    exports: []
})
export class AppModule {

}