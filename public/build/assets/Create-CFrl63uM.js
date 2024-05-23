import{j as e,R as S,r as u,b as R,a as _}from"./app-lDsYlq9Q.js";import{A as D}from"./AuthenticatedLayout-PrxKUAef.js";import{A as W,S as p}from"./ActionBar-D2xbTte6.js";import{d as L}from"./Delete-DMrR1Qe8.js";import{C as U}from"./Card-ylA3yK0k.js";import{B as h}from"./Box-CqDEun_C.js";import{T as d}from"./Typography-Dm0rIzOB.js";import{I as q}from"./Autocomplete-CUJJcvXs.js";import{C as z}from"./CustomSelectCategoryBox-Bb5s8JE0.js";import{T as f}from"./TextField-CDKOeNcs.js";import"./ApplicationLogo-BSviFKmm.js";import"./transition-BfpbosAH.js";function H({index:n,handleFileChange:b,handleCheckboxChange:y,handleRemoveFileInput:j,selectedFile:r,type:w}){let x=!0;try{x=r.src&&!1}catch{}return e.jsxs(U,{className:"mb-4",sx:{width:"300px",height:"300px",margin:"20px",position:"relative",overflow:"hidden"},children:[e.jsx(h,{sx:{position:"absolute",bottom:"0px",left:"0px",width:"100%",backgroundColor:"lightblue"},children:e.jsx("input",{type:"file",onChange:l=>b(n,l)})}),x&&e.jsx(h,{sx:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(d,{variant:"h5",component:"h2",color:"#444",children:"Select "+w})}),r&&e.jsxs("div",{className:"mt-2",children:[r.src&&e.jsx(h,{sx:{width:"100%",height:"100%"},children:e.jsx("img",{src:r.src,alt:`Selected file ${n}`,style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs(h,{sx:{position:"absolute",top:"10px",left:"10px"},children:[e.jsx("input",{type:"checkbox",id:`isFrame-${n}`,checked:r.isFrame,onChange:l=>y(n,l)}),e.jsx("label",{htmlFor:`isFrame-${n}`,className:"ml-2",children:"Frame"})]})]}),e.jsx(h,{sx:{position:"absolute",top:"10px",right:"10px"},children:e.jsx(q,{onClick:()=>j(n),"aria-label":"delete",children:e.jsx(L,{color:"warning"})})})]},n)}function te({auth:n,type:b,title:y,headerOptions:j,categories:r,apiToken:w}){const[x,l]=S.useState({name:"",id:""}),I=(t,s)=>{s&&l({name:s.name,id:s.id})};S.useEffect(()=>{localStorage.setItem("apiToken",w)},[]);const[c,v]=u.useState([]),[m,F]=u.useState([]),[o,k]=u.useState({title:"",tags:"",height:"",width:""}),g=(t,s)=>{k(a=>({...a,[t]:s}))},T=(t,s)=>{const a=s.target.files[0];if(a){const i=[...c];i[t]={id:a.name,src:URL.createObjectURL(a),x:0,y:0,rotation:0,image:a,isFrame:!1},v(i)}},$=(t,s)=>{const a=[...c];a[t]&&(a[t].isFrame=s.target.checked,v(a))},A=t=>{const s=m.filter((i,C)=>C!==t),a=c.filter((i,C)=>C!==t);F(s),v(a)},E=()=>{F([...m,m.length])},B=u.useCallback(()=>{const t=new FormData;c.forEach((a,i)=>{t.append(`items[${i}][id]`,a.id),t.append(`items[${i}][src]`,a.src),t.append(`items[${i}][x]`,a.x),t.append(`items[${i}][y]`,a.y),t.append(`items[${i}][rotation]`,a.rotation),t.append(`items[${i}][image]`,a.image),t.append(`items[${i}][isFrame]`,a.isFrame?"1":"0")}),t.append("user_id",n.user.id),t.append("title",o.title),t.append("tags",o.tags),t.append("height",o.height),t.append("width",o.width),t.append("source","panel"),t.append("category_id",x.id);const s=localStorage.getItem("apiToken");R.post(route("save.template"),t,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${s}`}}).then(a=>{window.location.href=route("view.all.templates")}).catch(a=>{})},[c]),N={Create:function(){B()},"Add Image":function(){E()}};return e.jsxs(D,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Template"}),actionBar:e.jsx(W,{actions:N,headerOptions:j,children:e.jsx(z,{categories:r,changeCategory:I})}),children:[e.jsx(_,{title:"Dashboard"}),e.jsx("div",{className:"square-pattern-bg",children:e.jsx("div",{className:"py-12",style:{width:"100%"},children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:[e.jsxs(p,{spacing:5,direction:"row",justifyContent:"center",sx:{padding:"30px 0px",backgroundColor:"white",width:"100%"},children:[e.jsxs(p,{spacing:1,children:[e.jsx(d,{variant:"p",component:"p",children:"Enter title for template"}),e.jsx(f,{onChange:t=>{g("title",t.target.value)},value:o.title,sx:{width:"200px"},id:"outlined-basic",label:"Title",variant:"outlined"})]}),e.jsxs(p,{spacing:1,children:[e.jsx(d,{variant:"p",component:"p",children:"Enter tags for template"}),e.jsx(f,{onChange:t=>{g("tags",t.target.value)},value:o.tags,sx:{width:"200px"},id:"outlined-basic",label:"Tags",variant:"outlined"})]}),e.jsxs(p,{spacing:1,children:[e.jsx(d,{variant:"p",component:"p",children:"Enter width for template"}),e.jsx(f,{onChange:t=>{g("width",t.target.value)},value:o.width,sx:{width:"200px"},id:"outlined-basic",label:"Width",variant:"outlined"})]}),e.jsxs(p,{spacing:1,children:[e.jsx(d,{variant:"p",component:"p",children:"Enter height for template"}),e.jsx(f,{onChange:t=>{g("height",t.target.value)},value:o.height,sx:{width:"200px"},id:"outlined-basic",label:"Height",variant:"outlined"})]})]}),m.length==0&&e.jsx(h,{sx:{width:"100%",height:"30vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(d,{variant:"h5",component:"h2",color:"#444",children:'Click "Add Image" button to add files'})}),e.jsx(p,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:m.map((t,s)=>e.jsx(H,{index:s,handleFileChange:T,handleRemoveFileInput:A,handleCheckboxChange:$,selectedFile:c[s],type:s>1?"image":s==0?"thumbnail":"shade"},s))})]})})})]})}export{te as default};