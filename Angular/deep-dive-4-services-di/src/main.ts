import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { Inject, InjectionToken } from '@angular/core';

//custom DI token and provider
export const TasksServiceToken = new InjectionToken<TasksService>('hoang-hahhahahah');

bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksService}],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
