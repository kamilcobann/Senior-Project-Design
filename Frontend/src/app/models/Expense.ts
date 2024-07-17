import { Budget } from "./Budget";

export interface Expense{
  id?:String;
  title?:String;
  description?:String;
  amount?:number;
  budget?:Budget;
}
