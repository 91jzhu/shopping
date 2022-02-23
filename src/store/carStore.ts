import {openToast} from "../components/Tool/openToast";
import {Add, Car} from "../type";
import {randomNum} from "../lib/randomNum";
import dayjs from "dayjs";

const fetchCar = () => {
    return JSON.parse(localStorage.getItem('carItem')!) || []
}
const addCar = ({name, price, count}: Partial<Car>) => {
    const tmp = fetchCar()
    const result = tmp.find((item: Partial<Add>) => item.name === name)
    if (result) {
        result.count += count
    } else {
        tmp.push({
            name,
            price,
            count,
            expect: randomNum(3, 5),
            createdAt: dayjs().format('YYYY年MM月DD日')
        })
    }
    localStorage.setItem('carItem', JSON.stringify(tmp))
    openToast({tip: '添加成功'})
}

const modifyCount = ({name, count}: Partial<Car>) => {
    const tmp = fetchCar()
    const result = tmp.find((item: Partial<Add>) => item.name === name)
    result.count = count
    localStorage.setItem('carItem', JSON.stringify(tmp))
}

const deleteCar = ({name}: Partial<Car>) => {
    const tmp = fetchCar()
    const result = tmp.find((item: Partial<Add>) => item.name === name)
    tmp.splice(tmp.indexOf(result), 1)
    localStorage.setItem('carItem', JSON.stringify(tmp))
    openToast({tip: '删除成功'})
}

const clearCar = () => {
    const tmp = fetchCar()
    tmp.length = 0
    localStorage.setItem('carItem', JSON.stringify(tmp))
}

//
const fetchCash = () => {
    return JSON.parse(localStorage.getItem('cash')!) || 1000
}
const changeCash = (price: Number) => {
    // @ts-ignore
    const result = fetchCash() - price
    if (result < 0) {
        openToast({tip: '开心币不足，请稍等'})
        return false
    }
    localStorage.setItem('cash', JSON.stringify(result))
    openToast({tip: '结算成功'})
    return true
}

export {fetchCar, addCar, deleteCar, modifyCount, changeCash, clearCar, fetchCash}
