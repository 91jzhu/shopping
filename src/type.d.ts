import {Ref} from "vue";

type Car={
    name:String,
    ref: Ref
    price:String
}
type Add = {
    name: String, price:String,key: string, error: String, success: String
}

type Remove={
    name:String,
    key:string
}

type DialogType={
    carFunc:Function,
    collectFunc:Function,
    title:String,
    leftIcon:String,
    rightIcon:String
}
export {Car,Add,Remove,DialogType}