import{R as s,b as h,j as t,a as T}from"./app-B5jXR_UL.js";import{A as k}from"./AuthenticatedLayout-CGqHYQml.js";import{A as N,S as E,T as F}from"./ActionBar-CRW-oneb.js";import{A as P}from"./AssetImage-63z-Rd0b.js";import{C as z}from"./CustomSelectCategoryBox-CnmwFlge.js";import{S as G,A as I}from"./Snackbar-BPBlFCMq.js";import{G as L}from"./TextField-zA5jSdED.js";import{B as M}from"./Box-CcXo1liw.js";import"./ApplicationLogo-DEdiEKoR.js";import"./transition-CTjdevOO.js";import"./Delete-Dq4jaARQ.js";import"./Typography-Cg8NwYh1.js";import"./Autocomplete-Di86PA01.js";import"./Close-BOeC0UwB.js";function ee({auth:x,templates:O,title:c,headerOptions:f,token:g,categories:y}){const[o,l]=s.useState({status:!1,message:"",severity:""}),m=s.useRef(),i=s.useRef(),[C,d]=s.useState([]),[r,p]=s.useState(1),[n,j]=s.useState({name:"All Categories",id:"all"}),v=()=>{p(r+1)};s.useEffect(()=>{m.current!==void 0&&i.current!==void 0&&i.current!==n&&d([]),S(n.name),m.current=r,i.current=n},[r,n]);const S=(a="All Categories")=>{h.get(route("v2.get.all.template.for.a.category",{category_name:a})+"?page="+r).then(e=>{d(R=>[...R,...e.data.templates])})},A=(a,e)=>{e&&(j({name:e.name,id:e.id}),r!=1&&p(1))},w=(a,e)=>{l({status:!0,message:a,severity:e})},u=(a,e)=>{e!=="clickaway"&&l(!1)},b={Create:function(){handleSubmit()}},B=a=>{h.delete(route("delete.template",{uni:a}),{headers:{Accept:"application/json",Authorization:"Bearer "+g}}).then(e=>{w("Template and its assets have been deleted","success")}).catch(e=>{console.error("Error:",e)})};return t.jsxs(k,{user:x.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:c}),actionBar:t.jsx(N,{actions:b,headerOptions:f,children:t.jsx(z,{categories:y,changeCategory:A})}),children:[t.jsx(T,{title:c}),o.status&&t.jsx(G,{open:o.status,autoHideDuration:4e3,onClose:u,TransitionComponent:L,anchorOrigin:{vertical:"top",horizontal:"right"},children:t.jsx(I,{onClose:u,severity:o.severity,variant:"filled",sx:{width:"100%"},children:o.message})}),t.jsx("div",{className:"square-pattern-bg",children:t.jsx("div",{className:"py-12",style:{width:"100%"},children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:[t.jsx(E,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:C.map((a,e)=>t.jsx(P,{src:a.thumbnail,uni:a.uni,title:a.title,handleRemoveFileInput:B},e))}),t.jsx(M,{direction:"row",flexWrap:"wrap",justifyContent:"center",sx:{width:"100%",display:"flex"},my:4,children:t.jsx(F,{action:v,type:"action",href:"",children:"Load More"},"abc")})]})})})]})}export{ee as default};