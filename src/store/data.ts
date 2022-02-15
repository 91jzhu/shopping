import {Car} from "../type";

interface Data{
    createdAt:string,
    buyEd:[]
}
const fetchData = () => {
    return JSON.parse(localStorage.getItem('data')!) || []
}
const addBuy = ({name, price, count, createdAt}: Partial<Car>) => {
    const tmp = fetchData()
    const result = tmp.find((item: Partial<Car>) => item.createdAt === createdAt)
    const obj = {name, price: Number(price!.slice(1)) * Number(count)}
    if (!result) {
        tmp.push({createdAt, buyEd: [obj]})
    } else {
        const good = result.buyEd.find((item: Partial<Car>) => item.name === name)
        if (good) {
            good.price += obj.price
        } else {
            result.buyEd.push(obj)
        }
    }
    tmp.sort((a:Data, b:Data) => a.createdAt < b.createdAt ? 1 : -1)
    localStorage.setItem('data', JSON.stringify(tmp))
}

export {addBuy}