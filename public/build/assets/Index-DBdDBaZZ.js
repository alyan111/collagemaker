import{R as c,j as t,a as l}from"./app-5O6E9hwl.js";import{A as p}from"./AuthenticatedLayout-037XnLqM.js";import{A as x,S as d}from"./ActionBar-CwAF9SIU.js";import{A as h}from"./AssetImage-BwY7bJrD.js";import"./ApplicationLogo-mSvD4u09.js";import"./transition-BwPSAXvi.js";import"./Card-CKegMgVd.js";import"./Box-QApaQxI8.js";import"./Typography-CbCl7grq.js";function S({auth:s,type:u,assets:r,title:e,headerOptions:i,apiToken:o}){c.useEffect(()=>{localStorage.setItem("apiToken",o)},[]);const n={Create:function(){handleSubmit()}};return t.jsxs(p,{user:s.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:e}),actionBar:t.jsx(x,{actions:n,headerOptions:i}),children:[t.jsx(l,{title:e}),t.jsx("div",{className:"square-pattern-bg",children:t.jsx("div",{className:"py-12",style:{width:"100%"},children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:t.jsx(d,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:r.map((a,m)=>t.jsx(h,{src:a.thumbnail,title:a.type},m))})})})})]})}export{S as default};
