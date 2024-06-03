import {User} from "./User";
import {Ticket} from "./Ticket";

export interface Comment{
  id?:String;
  content?:String;
  by_user_id?:String;
  by_ticket_id?:String;
  created_at?:String;
  updated_at?:String;
  ticket?:Ticket;
  owner?:User;
}
