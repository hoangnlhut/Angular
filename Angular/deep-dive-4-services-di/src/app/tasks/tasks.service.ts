import { inject, Injectable, signal } from "@angular/core";
import type { Task, TaskStatus }  from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);

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
        this.loggingService.log(`Task added: ${newTask.title}`);   
    }
    
    updateTaskStatus(taskId: string, status: string) {
        this.tasks.update((oldTasks) => {
            return oldTasks.map(
                (task) => 
                task.id === taskId ? { ...task, status: status as Task['status'] } : task);
      });
        this.loggingService.log(`Task status updated: ${taskId} to ${status}`);
    }

}