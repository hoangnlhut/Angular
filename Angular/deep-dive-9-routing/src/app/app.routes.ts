import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUsername, resolveUserTaskTitle, UserNameResolverClass, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {routes as routesUser} from "./users/users.routes";
import { inject } from "@angular/core";

export const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 0.5) return true;

    return new RedirectCommand(router.parseUrl('/unauthorized'));

};


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
        canMatch: [dummyCanMatch],
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