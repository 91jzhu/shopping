import {Ref} from "vue";

type Car={
    name:String,
    ref: Ref
    price:Number
}
type Add = {
    name: String, price:Number,key: string, error: String, success: String
}

type Remove={
    name:String,
    key:string
}

export {Car,Add,Remove}