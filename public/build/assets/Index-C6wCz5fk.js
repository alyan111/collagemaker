import{R as c,j as t,a as l}from"./app-Dnxnbd5t.js";import{A as p}from"./AuthenticatedLayout-BUEoN__A.js";import{A as x,S as d}from"./ActionBar-7_LjK_Of.js";import{A as h}from"./AssetImage-Dfev4QBE.js";import"./ApplicationLogo-RZf2Ivxe.js";import"./transition-BrGjxLvK.js";import"./Delete-6JCh1ahK.js";import"./Box-xPMhvo3M.js";import"./Typography-cLv90uqt.js";function S({auth:s,type:u,assets:r,title:e,headerOptions:i,apiToken:o}){c.useEffect(()=>{localStorage.setItem("apiToken",o)},[]);const n={Create:function(){handleSubmit()}};return t.jsxs(p,{user:s.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:e}),actionBar:t.jsx(x,{actions:n,headerOptions:i}),children:[t.jsx(l,{title:e}),t.jsx("div",{className:"square-pattern-bg",children:t.jsx("div",{className:"py-12",style:{width:"100%"},children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:t.jsx(d,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:r.map((a,m)=>t.jsx(h,{src:a.thumbnail,title:a.type},m))})})})})]})}export{S as default};