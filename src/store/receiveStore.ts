import {reactive, toRaw} from "vue";
import {openToast} from "../components/Tool/openToast";
import {Car} from "../type";

const receiveItem=JSON.parse(localStorage.getItem('receiveItem')!) || reactive([])
const fetchReceive = () => {
    return JSON.parse(localStorage.getItem('receiveItem')!) || reactive([])
}

const addReceive=(res:[])=>{
    const array=toRaw(res)
    const tmp:Array<object>=[]
    array.forEach(item=>{
        tmp.push(item)
    })
    localStorage.setItem('receiveItem',JSON.stringify(tmp))
    openToast({tip:'结算成功'})
}

const deleteReceive=(name:string)=>{
    const tmp=fetchReceive()
    const result=tmp.find((item:Partial<Car>)=>item.name===name)
    tmp.splice(tmp.indexOf(result),1)
    localStorage.setItem('receiveItem',JSON.stringify(tmp))
    openToast({tip:'收货成功'})
}
export {receiveItem,fetchReceive,addReceive,deleteReceive}