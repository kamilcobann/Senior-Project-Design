import { Project } from "./Project";
import {Expense} from "./Expense";

export interface Budget{
  id?:String;
  title?:String;
  description?:String;
  amount?:number;
  project?:Project;
  current_budget?:number;
  expenses?: Expense[];
}
