import {Car} from "../type";

const fetchData=()=>{
    return JSON.parse(localStorage.getItem('data')!)||{}
}
const addBuy=({name,price,count}:Partial<Car>)=>{
    console.log({name,price:Number(price!.slice(1))*Number(count)})
    const tmp=fetchData()
    if(!tmp['buy']){
        tmp.buy=[]
    }
    tmp.buy.push({name,price:Number(price)*Number(count)})
    localStorage.setItem('data',JSON.stringify(tmp))
}
export {addBuy}