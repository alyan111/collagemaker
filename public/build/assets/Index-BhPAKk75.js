import{j as e,a as m,b as d}from"./app-DmjyuezX.js";import{A as p}from"./AuthenticatedLayout-B8NwpjC1.js";import{A as x,S as h}from"./ActionBar-BDMrh856.js";import{A as u}from"./AssetImage-D9IVipDx.js";import"./ApplicationLogo-BK6yXZps.js";import"./transition-Dgna_if1.js";import"./Delete-BeeBUaRl.js";import"./Box-DGleZsfy.js";import"./Typography-B3gijyeL.js";function B({auth:s,templates:i,title:a,headerOptions:o,token:n}){const l={Create:function(){handleSubmit()}},c=t=>{d.delete(route("delete.template",{uni:t}),{headers:{Accept:"application/json",Authorization:"Bearer "+n}}).then(r=>{console.log(r.data)}).catch(r=>{console.error("Error:",r)})};return e.jsxs(p,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:a}),actionBar:e.jsx(x,{actions:l,headerOptions:o}),children:[e.jsx(m,{title:a}),e.jsx("div",{className:"square-pattern-bg",children:e.jsx("div",{className:"py-12",style:{width:"100%"},children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:e.jsx(h,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:i.map((t,r)=>e.jsx(u,{src:t.thumbnail,uni:t.uni,title:t.title,handleRemoveFileInput:c},r))})})})})]})}export{B as default};
