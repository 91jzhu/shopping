import {Car} from "../type";

interface Data {
    createdAt: string,
    buyEd: []
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
    tmp.sort((a: Data, b: Data) => a.createdAt < b.createdAt ? 1 : -1)
    localStorage.setItem('data', JSON.stringify(tmp))
}
const fetchBuy = () => {
    const tmp = fetchData()
    return tmp.find((item: Data) => item.buyEd !== [])
}
const changeBuy = (createdAt: string) => {
    const tmp = fetchData()
    return tmp.find((item: Data) => item.createdAt === createdAt).buyEd
}
const getDates = () => {
    const tmp = fetchData()
    const result: string[] = []
    tmp.forEach((item: Data) => {
        result.push(item.createdAt)
    })
    return result
}
const getMonths = () => {
    const tmp = fetchData()
    const result: string[] = []
    tmp.forEach((item: Data) => {
        result.push(item.createdAt.slice(0, 8))
    })
    return result
}

const getPrice = (createdAt: string) => {
    const tmp = fetchData()
    const result = tmp.find((item: any) => item.createdAt.includes(createdAt))?.buyEd
    let sum = 0
    result?.forEach((item: any) => {
        sum += item.price
    })
    return sum
}
const getMonth=(month:string)=>{
    const tmp=fetchData()
    const result:string[]=[]
    tmp.forEach((item:any)=>{
        if(item.createdAt.includes(month)){
            result.push(item)
        }
    })
    return result
}
const initPrice=(month)=>{
    const tmp=fetchData()
    tmp.sort((a: Data, b: Data) => a.createdAt > b.createdAt ? 1 : -1)
    return tmp.map(item => {
        if (item.createdAt.includes(month)) {
            return getPrice(item.createdAt)
        }
    })
}

export {addBuy, fetchBuy, changeBuy, Data, getDates, getMonths, getPrice,getMonth,initPrice}