import {toRaw} from "vue";
import {openToast} from "../components/Tool/openToast";

const fetchReceive = () => {
    return JSON.parse(localStorage.getItem('receiveItem')!) || []
}
const addReceive=(res:[])=>{
    console.log(toRaw(res));
    const array=toRaw(res)
    const tmp:Array<object>=[]
    array.forEach(item=>{
        tmp.push(item)
    })
    localStorage.setItem('receiveItem',JSON.stringify(tmp))
    openToast({tip:'结算成功'})
}
export {fetchReceive,addReceive}