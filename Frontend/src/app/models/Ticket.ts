import {User} from "./User";
import {Comment} from "./Comment";

export interface Ticket{
  id?:String;
  title?:String;
  description?:String;
  by_user_id?:number;
  by_kanban_list_id?:number;
  created_at?:String;
  updated_at?:String;
  assigned_users?:[User];
  comments?:[Comment];
}
