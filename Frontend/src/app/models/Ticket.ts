import {User} from "./User";
import {Comment} from "./Comment";

export interface Ticket{
  id?:String;
  title?:String;
  description?:String;
  by_user_id?:String;
  by_kanban_list_id?:String;
  created_at?:String;
  updated_at?:String;
  assigned_users?:[User];
  comments?:[Comment];
}
