export interface ITask
{ 
  id: string;
  userId: string; 
  title: string; 
  completed: boolean;
  dueDate: string ;
  summary: string; 
}

export interface ITaskModel {
   title: string; 
   dueDate: string;
   summary: string;
}