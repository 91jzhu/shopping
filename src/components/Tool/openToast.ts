import {createApp, h} from "vue";
import Toast from "./Toast.vue";

const openToast=()=>{
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
            },{tip:'已收藏111 '})
        }
    })
    app.mount(div)
    return div
}

export {openToast}