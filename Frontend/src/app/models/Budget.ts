import { Project } from "./Project";

export interface Budget{
  id?:String;
  title?:String;
  description?:String;
  amount?:number;
  project?:Project;
}
