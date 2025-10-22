import { Injectable, signal } from "@angular/core";
import type { Task }  from "./task.model";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    getById(id: string) {
        return this.tasks().find((task) => task.id === id);
    }

    addTask(task: { title: string, description: string }) {
        const newTask : Task = {
            id: Math.random().toString(),
            title: task.title,
            description: task.description,
            status: 'OPEN',
        };

        this.tasks.update((currentTasks) => [...currentTasks, newTask]);   
    }
    
    updateTaskStatus(taskId: string, status: string) {
        this.tasks.update((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, status: status as Task['status'] };
                }
                return task;
            });
        });
    }

}