import{ar as s,r as n,l as i}from"./index-2bb71daf.js";import{b as f}from"./userinfo-441d26cd.js";import{b as u}from"./request-d319ce4c.js";const p=s("tool_box_userinfo",()=>{const r=n({}),e=i(()=>r.value.avatar?u+"/upload/"+r.value.avatar:""),o=async()=>{r.value.id||await a()},a=async()=>{const t=await f();r.value=t.data.data};return{imageUrl:e,refreshUserinfo:a,userinfo:r,getUserinfo:o}});export{p as u};
