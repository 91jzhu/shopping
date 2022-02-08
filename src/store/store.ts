import {reactive} from "vue";
import {openToast} from "../components/Tool/openToast";
import {Add, Car, Remove} from "../type";

const carItem = JSON.parse(localStorage.getItem('carItem')!) || reactive<String[]>([])
const fetchCar=(key:string)=>{
    return JSON.parse(localStorage.getItem(key)!) || reactive<String[]>([])
}
const addCar = ({name,price}:Partial<Add>) => {
    const tmp=fetchCar('carItem')
    const result=tmp.find((item:Partial<Add>)=> item.name===name)
    if(result){
        result.count++
    }else{
        tmp.push({name,price,count:0})
    }
    localStorage.setItem('carItem', JSON.stringify(tmp))
    openToast({tip: '添加成功，宝贝在购物车等您'})
}
// const deleteCar = (name: String) => {
//     remove({name, key: 'carItem'})
// }


// 收藏夹 api
// const collectItem = JSON.parse(localStorage.getItem('collectItem')!) || reactive<String[]>([])
// const addCollect = ({name,price}:Partial<Add>) => {
//     console.log(name);
//     console.log(price);
//     add(<Add>{
//         name,
//         price,
//         key: 'collectItem',
//         error: '宝贝已经在收藏夹里啦',
//         success: '收藏成功，宝贝在收藏夹等您'
//     })
// }
// const deleteCollect = (name: String) => {
//     remove({name, key: 'collectItem'})
// }
//

// const add = ({name,price, key, error, success}:Add) => {
//     const tmp=fetchCar(key)
//     const result=tmp.some((item:Partial<Add>)=> item.name===name)
//     if(result){
//         openToast({tip: error})//todo
//         return
//     }
//     tmp.push({name,price,count})//todo
//     localStorage.setItem('carItem', JSON.stringify(tmp))
//     openToast({tip: success})
// }
//
// const remove = ({name, key}:Remove) => {
//     const tmp=fetchCar(key)
//     const result=tmp.find((item:Partial<Add>)=> item.name===name)
//     if(!result){
//         openToast({tip:'删除失败'})
//         return
//     }
//     tmp.splice(tmp.indexOf(result),1)
//     localStorage.setItem('carItem', JSON.stringify(tmp))
// }

export {carItem,fetchCar,addCar}
// , deleteCar,addCollect,deleteCollect