export interface Product {
    ID:number;
    Model:string;
    Serial:string;
    IP:string;
    Company:string;
    ReleaseDate:string;
    IsAdmin?:boolean;
    Visible?:boolean;
    Age?:number;
}
export interface ListProducts{
    arr:Product[];
}
