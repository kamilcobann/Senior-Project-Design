export interface User{
    id?:String;
    name?:String;
    email?:String;
    address?:String;
    phone?:String;
    token?:String;
    password?:String;
    c_password?:String;
    owned_projects_count?:number,
    assigned_projects_count?:number
}
