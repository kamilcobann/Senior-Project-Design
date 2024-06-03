import { User } from "./User";

export interface Project{
  id?:String;
  title?:String;
  description?:String;
  start_date?:String;
  end_date?:String;
  is_active?:Boolean;
  status?:String;
  members?:[User];
  owner?:User;
}
