
import {reactive, readonly} from "vue";

const carItem=reactive<String[]>([])
const addCar=(name:String)=>{
  carItem.push(name)
  console.log(carItem);
}
const deleteCar=(name:String)=>{
  carItem.splice(carItem.indexOf(name),1)
}

const collectItem=reactive<String[]>([])
const addCollect=(name:String)=>{
  collectItem.push(name)
  console.log(collectItem)
}
const deleteCollect=(name:String)=>{
  collectItem.splice(collectItem.indexOf(name),1)
}
export {carItem,addCar,deleteCar,addCollect,deleteCollect}
