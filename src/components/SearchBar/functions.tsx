import React, {useState} from "react";

export function ToogleVisible(text:string, attributes:string[],ignore:string[] ,state:any[]){
    let pattern = text.trim().toLowerCase();
    const newState = [...state];
    newState.forEach((item)=>{
        if (pattern == "" && Object.keys(item).indexOf("visible")>-1)
            item["visible"]=true;
        else
        {
            item["visible"] = false;
            let attValue = "";
            if(attributes.length === ignore.length){
                for(let i=0;i<attributes.length;i++){
                    attValue = item[attributes[i]].toLowerCase();
                    if (ignore[i].length===1)
                        attValue = attValue.replaceAll(ignore[i],"");
                    if (ignore[i].length>1)
                        attValue = attValue.replaceAll(new RegExp(ignore[i],"mg"),"")
                    if (
                        Object.keys(item).indexOf(attributes[i]) >-1
                        &&
                        attValue.indexOf(pattern)>-1
                    ){
                        item.visible=true;
                    }
                }
            }
        }
    })
    return newState;
}