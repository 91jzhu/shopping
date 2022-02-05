import {createApp, h} from "vue";
import Toast from "./Toast.vue";

const openToast=(option:any)=>{
    const {tip='未设置'}=option
    const div=document.createElement('div')
    document.body.appendChild(div)
    const app=createApp({
        render(){
            return h(Toast,{
                active:true,
                delay:2000,
                'onUpdate:active':(val:Boolean)=>{
                    app.unmount()
                    div.remove()
                }
            },{tip})
        }
    })
    app.mount(div)
    return div
}

export {openToast}