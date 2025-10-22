import { Injectable, signal } from "@angular/core";
import type { Task, TaskStatus }  from "./task.model";

// @Injectable({
//   providedIn: 'root',
// })
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
        this.tasks.update((oldTasks) => {
            return oldTasks.map(
                (task) => 
                task.id === taskId ? { ...task, status: status as Task['status'] } : task);
      });
        
    }

}