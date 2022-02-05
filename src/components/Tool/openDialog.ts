import {createApp, h, render} from "vue";
import Dialog from "./Dialog.vue";

const openDialog = (option:any) => {
    const {carFunc,collectFunc}=option
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render(){
            return h(Dialog,{
                visible:true,
                'onUpdate:visible':(val:Boolean)=>{
                    if(!val){
                        app.unmount()
                        div.remove()
                    }
                },
                carFunc,collectFunc
            })
        }
    })
    app.mount(div)
    return div
}
export {openDialog}