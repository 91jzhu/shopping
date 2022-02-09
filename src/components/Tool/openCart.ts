import {createApp, h, Ref, VueElement} from "vue";
import Icon from "./Icon.vue";
import {Car} from "../../type";
import Cart from '../Cart.vue'
import {randomNum} from "../../lib/randomNum";

const openCart=({name,ref,price,count,expect}:Car)=>{
    const div=document.createElement('div')
    div.classList.add('bottle')
    const app=createApp({
        render(){
            return h(Cart,{
                name,
                price,
                count,
                expect,
                visible:true,
                'onUpdate:visible':(val:Boolean)=>{
                    if(!val){
                        app.unmount()
                        div.remove()
                    }
                }
            },{name,price,count,expect})
        }
    })
    app.mount(div)
    return div
}

export {openCart}