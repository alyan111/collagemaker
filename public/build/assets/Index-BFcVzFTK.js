import{R as h,j as e,a as x,b as f}from"./app-DUCMwQ2M.js";import{A as j}from"./AuthenticatedLayout-BZxVPbhz.js";import{A as v,S as g}from"./ActionBar-BWsUPliD.js";import{A}from"./AssetImage-CrjjCvK0.js";import{S as y,A as b}from"./Snackbar-hPs8qCcX.js";import{G as w}from"./Grow-1_MzHztr.js";import"./ApplicationLogo-hcYrfw57.js";import"./transition-CrDLaNFg.js";import"./Delete-CV07z5Aw.js";import"./Box-CAgV0I35.js";import"./Typography-COmaUPwt.js";import"./Close-CmErL3D8.js";function q({auth:n,templates:l,title:r,headerOptions:c,token:m}){const[a,i]=h.useState({status:!1,message:"",severity:""}),d=(s,t)=>{i({status:!0,message:s,severity:t})},o=(s,t)=>{t!=="clickaway"&&i(!1)},p={Create:function(){handleSubmit()}},u=s=>{f.delete(route("delete.template",{uni:s}),{headers:{Accept:"application/json",Authorization:"Bearer "+m}}).then(t=>{d("Template and its assets have been deleted","success"),console.log(t.data)}).catch(t=>{console.error("Error:",t)})};return e.jsxs(j,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:r}),actionBar:e.jsx(v,{actions:p,headerOptions:c}),children:[e.jsx(x,{title:r}),a.status&&e.jsx(y,{open:a.status,autoHideDuration:4e3,onClose:o,TransitionComponent:w,anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(b,{onClose:o,severity:a.severity,variant:"filled",sx:{width:"100%"},children:a.message})}),e.jsx("div",{className:"square-pattern-bg",children:e.jsx("div",{className:"py-12",style:{width:"100%"},children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:e.jsx(g,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:l.map((s,t)=>e.jsx(A,{src:s.thumbnail,uni:s.uni,title:s.title,handleRemoveFileInput:u},t))})})})})]})}export{q as default};