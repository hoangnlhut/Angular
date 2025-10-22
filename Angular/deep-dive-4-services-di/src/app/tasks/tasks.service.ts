import { Injectable, signal } from "@angular/core";
import type { Task }  from "./task.model";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
    tasks = signal<Task[]>([]);

    addTask(task: { title: string, description: string }) {
        const newTask : Task = {
            id: Math.random().toString(),
            title: task.title,
            description: task.description,
            status: 'OPEN',
        };

        this.tasks.update((currentTasks) => [...currentTasks, newTask]);   
    }      

}