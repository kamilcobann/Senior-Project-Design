import { KanbanList } from "./KanbanList";
import { Project } from "./Project";
import {User} from "./User";

export interface Kanban{
  id?:String;
  name?:String;
  is_active?:Boolean;
  by_user_id?:bigint;
  by_project_id?:bigint;
  members?:[User];
  kanban_lists:KanbanList[];
  created_at?:String;
  updated_at?:String;
  related_project?:Project
}
