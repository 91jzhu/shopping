import {createApp, h, Ref, VueElement} from "vue";
import Icon from "./Icon.vue";
import {Car} from "../../type";
import Cart from '../Cart.vue'

const openCart=({name,ref,price}:Car)=>{
    const div=document.createElement('div')
    div.classList.add('bottle')
    ref&&ref.value.appendChild(div)
    const app=createApp({
        render(){
            return h(Cart,{
                name,
                price,
                visible:true,
                'onUpdate:visible':(val:Boolean)=>{
                    if(!val){
                        app.unmount()
                        div.remove()
                    }
                }
            },{name,price})
        }
    })
    app.mount(div)
    return div
}

export {openCart}