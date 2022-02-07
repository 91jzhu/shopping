import {reactive} from "vue";
import {openToast} from "../components/Tool/openToast";
import {Add, Remove} from "../type";

const carItem = JSON.parse(localStorage.getItem('carItem')!) || reactive<String[]>([])
const fetch=(key:string)=>{
    return JSON.parse(localStorage.getItem(key)!) || reactive<String[]>([])
}
const addCar = ({name,price}:Partial<Add>) => {
    add(<Add>{
        name,
        price,
        key: 'carItem',
        error: '宝贝已经在购物车啦',
        success: '添加成功，宝贝在购物车等您'
    })
    console.log(carItem);
}
const deleteCar = (name: String) => {
    remove({name, key: 'carItem'})
}

const collectItem = JSON.parse(localStorage.getItem('collectItem')!) || reactive<String[]>([])
const addCollect = ({name,price}:Partial<Add>) => {
    console.log(name);
    console.log(price);
    add(<Add>{
        name,
        price,
        key: 'collectItem',
        error: '宝贝已经在收藏夹里啦',
        success: '收藏成功，宝贝在收藏夹等您'
    })
}
const deleteCollect = (name: String) => {
    remove({name, key: 'collectItem'})
}

const add = ({name,price, key, error, success}:Add) => {
    const tmp = fetch(key)
    const result=tmp.some((item:Partial<Add>)=> item.name===name)
    if(result){
        openToast({tip: error})
        return
    }
    tmp.push({name,price})
    localStorage.setItem('carItem', JSON.stringify(tmp))
    openToast({tip: success})
}

const remove = ({name, key}:Remove) => {
    const tmp = JSON.parse(localStorage.getItem(key) || '[]')
    tmp.forEach((item:Partial<Add>)=>{
        if(item.name===name){
            tmp.splice(tmp.indexOf(item),1)
        }
    })
    localStorage.setItem('carItem', JSON.stringify(tmp))
}

export {carItem, fetch,addCar, deleteCar, addCollect, deleteCollect}
