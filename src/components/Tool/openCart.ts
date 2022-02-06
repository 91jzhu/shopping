import {createApp, h, VueElement} from "vue";
import Icon from "./Icon.vue";
import Cart from "../Cart.vue";

type Cart={
    name:String,
    ref: {
        value
    },
    price:Number
}
const openCart=({name,ref,price}:Cart)=>{
    const div=document.createElement('div')
    ref&&ref.value.appendChild(div)
    const app=createApp({
        render(){
            return h(Cart,{
                name,
            },{name,price}
            )
        }
    })
    app.mount(div)
    return div
}

export {openCart}