import {Ref} from "vue";

type Car={
    name:String,
    ref: Ref
    price:String,
    count:Number,
    expect:Number,
    createdAt:String
}
type Add = {
    name: String, price:String,key: string, error: String, success: String
}

type Remove={
    name:String,
    key:string
}

type DialogType={
    leftFunc:Function,
    rightFunc:Function,
    title:String,
    leftIcon:String,
    rightIcon:String,
    good:String,
    count:Number
}
export {Add,Remove,DialogType,Car}