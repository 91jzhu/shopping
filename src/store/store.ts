import {reactive} from "vue";
import {openToast} from "../components/Tool/openToast";

const carItem = JSON.parse(localStorage.getItem('carItem')!) || reactive<String[]>([])
const addCar = (name: String) => {
    add({
        name,
        key: 'carItem',
        error: '宝贝已经在购物车啦',
        success: '添加成功，宝贝在购物车等您'
    })
}
const deleteCar = (name: String) => {
    remove({name, key: 'carItem'})
}

const collectItem = JSON.parse(localStorage.getItem('collectItem')!) || reactive<String[]>([])
const addCollect = (name: String) => {
    add({
        name,
        key: 'collectItem',
        error: '宝贝已经在收藏夹里啦',
        success: '收藏成功，宝贝在收藏夹等您'
    })
}
const deleteCollect = (name: String) => {
    remove({name, key: 'collectItem'})
}

type Add = {
    name: String, key: string, error: String, success: String
}
type Remove={
    name:String,
    key:string
}
const add = ({name, key, error, success}:Add) => {
    const tmp = JSON.parse(localStorage.getItem(key) || '[]')
    if (tmp.includes(name)) {
        openToast({tip: error})
        return
    }
    tmp.push(name)
    localStorage.setItem('carItem', JSON.stringify(tmp))
    openToast({tip: success})
}

const remove = ({name, key}:Remove) => {
    const tmp = JSON.parse(localStorage.getItem(key) || '[]')
    tmp.splice(carItem.indexOf(name), 1)
    localStorage.setItem('carItem', JSON.stringify(tmp))
}

export {carItem, addCar, deleteCar, addCollect, deleteCollect}
