import { type ITaskModel } from "./task/task.model";
import { DUMMY_TASKS } from "../dummy-tasks";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasksData = DUMMY_TASKS;

    private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 9); // Generates a 7-character string
    }
    
    getAllTasks(userId: string) {
        return this.tasksData.filter(task => task.userId === userId);
    }

    getTask(idTask: string) {
        return this.tasksData.find(task => task.id === idTask);
    }

    addTaskToUser(userId: string, newTask : ITaskModel){
        this.tasksData.unshift({
            id: this.generateRandomId(),
            title: newTask.title,
            dueDate: newTask.dueDate,
            summary: newTask.summary,
            completed: false,
            userId: userId
        });
    }

    removeTask(idTask: string) {
        const task = this.getTask(idTask);
        if (task) {
            task.completed = !task.completed;
        }
    }
}