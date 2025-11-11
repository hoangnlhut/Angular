import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUsername, resolveUserTaskTitle, UserNameResolverClass, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {routes as routesUser} from "./users/users.routes";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No user selected'
    },
    {
        path: 'users/:userId', // <your-domain>/users/<uid>
        component: UserTasksComponent,
        children: routesUser,
        data: {
            message: 'Hello world'
        },
        resolve: {
            userName: resolveUsername,
            userNameClass: UserNameResolverClass,
            // otherData: otherResolve
        },
        title: resolveUserTaskTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]