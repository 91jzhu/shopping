import {Add, Car} from "../type";
import {openToast} from "../components/Tool/openToast";

const fetchCollect = () => {
    return JSON.parse(localStorage.getItem('collectItem')!) || []
}
const collectOne=({name,price}:Partial<Car>)=>{
    const tmp = fetchCollect()
    const result = tmp.find((item: Partial<Add>) => item.name === name)
    if (result) {
        openToast({tip:'宝贝已在收藏夹'})
        return
    } else {
        tmp.push({name, price})
    }
    localStorage.setItem('collectItem', JSON.stringify(tmp))
    openToast({tip:'收藏成功'})
}
const deleteOne=(name:string)=>{
    const tmp = fetchCollect()
    const result = tmp.find((item: Partial<Add>) => item.name === name)
    if (result) {
        tmp.splice(tmp.indexOf(result),1)
        openToast({tip:'删除成功'})
    }
    localStorage.setItem('collectItem', JSON.stringify(tmp))
}
const clearCollect=()=>{
    localStorage.setItem('collectItem',JSON.stringify([]))
    openToast({tip:'收藏夹已清空'})
}
export {fetchCollect,collectOne,deleteOne,clearCollect}