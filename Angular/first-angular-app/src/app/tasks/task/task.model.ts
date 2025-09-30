export interface ITask
{ 
  id: string; 
  title: string; 
  completed: boolean;
  dueDate: string | Date;
  summary: string; 
}