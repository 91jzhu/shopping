
import {reactive, readonly} from "vue";

const carItem=JSON.parse(localStorage.getItem('carItem')!)||reactive<String[]>([])

const addCar=(name:String)=>{
  const tmp=JSON.parse(localStorage.getItem('carItem')||'[]')
  tmp.push(name)
  localStorage.setItem('carItem',JSON.stringify(tmp))
}
const deleteCar=(name:String)=>{
  const tmp=JSON.parse(localStorage.getItem('carItem')||'[]')
  tmp.splice(carItem.indexOf(name),1)
  localStorage.setItem('carItem',JSON.stringify(tmp))
}

const collectItem=JSON.parse(localStorage.getItem('collectItem')!)||reactive<String[]>([])
const addCollect=(name:String)=>{
  const tmp=JSON.parse(localStorage.getItem('collectItem')||'[]')
  tmp.push(name)
  localStorage.setItem('collectItem',JSON.stringify(tmp))
}
const deleteCollect=(name:String)=>{
  const tmp=JSON.parse(localStorage.getItem('collectItem')||'[]')
  tmp.splice(carItem.indexOf(name),1)
  localStorage.setItem('collectItem',JSON.stringify(tmp))
}
export {carItem,addCar,deleteCar,addCollect,deleteCollect}
