import {createApp, h, render} from "vue";
import Dialog from "./Dialog.vue";
import {DialogType} from "../../type";

const openDialog = ({carFunc,collectFunc,title,leftIcon,rightIcon}:DialogType) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render(){
            return h(Dialog,{
                visible:true,
                title,
                leftIcon,
                rightIcon,
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