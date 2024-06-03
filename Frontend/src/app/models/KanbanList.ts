import {User} from "./User";
import {Ticket} from "./Ticket";
import {Kanban} from "./Kanban";

export interface KanbanList{
  id?:String;
  title?:String;
  by_kanban_id?:String;
  created_at?:String;
  updated_at?:String;
  tickets?:[Ticket];
  belonging_kanban?:Kanban;
}
