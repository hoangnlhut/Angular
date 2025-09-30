import { ITask } from "../tasks/task/task.model";

export interface IUser
{ 
  id: string; 
  name: string; 
  avatar: string;
  tasks: ITask[] 
};
