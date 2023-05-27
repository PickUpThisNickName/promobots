import { Product } from "../../../models/models";

export function TransformProductsData(arr:Product[]) {
    arr.map((product)=>{
        product.Visible = true;
        product.Age = ParseDate(product.ReleaseDate)
    })
    return arr;
}
export function ParseDate(date:string) {
    // const release = date.split('-')
    // let releseNums = []
    // release.map(item=>{
    //     releseNums.push(Number(item))
    // })
    //
    // let today = new Date();
    // const now = today.toLocaleDateString('en-US');
    // let nowNums = []
    // release.map(item=>{
    //     nowNums.push(Number(item))
    // })
    let today = new Date();
    var first = today.toLocaleDateString('en-US');
    var second = date;

    console.log(first, second)

    var x = new Date(first);
    var y = new Date(second);
    console.log(x, y)
    // @ts-ignore
    let Days = Math.floor((x - y) / (1000 * 60 * 60 * 24))
    console.log(Days)
    // @ts-ignore
    return  Number(Days);
}