import {Add, Car} from "../type";
import {openToast} from "../components/Tool/openToast";

const collectItem = JSON.parse(localStorage.getItem('collectItem')!) || []
const fetchReceive = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!) || []
}
const collectOne=({name,price}:Partial<Car>)=>{
    const tmp = fetchReceive('collectItem')
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
    const tmp = fetchReceive('collectItem')
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
export {fetchReceive,collectOne,deleteOne,clearCollect}