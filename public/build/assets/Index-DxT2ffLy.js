import{j as o,r as b,R as U,b as q,a as re,y as J}from"./app-B5jXR_UL.js";import{A as ne}from"./AuthenticatedLayout-CGqHYQml.js";import{c as ie,g as P,d as D,s as x,_ as u,e as z,f as B,h as T,b as Y,u as G,j as ce,k as le,l as M,m as K,n as de,o as ue,S as H,a as pe,p as Q,A as ge}from"./ActionBar-CRW-oneb.js";import{C as he,d as me}from"./Delete-Dq4jaARQ.js";import{C as fe,A as be}from"./Autocomplete-Di86PA01.js";import{c as Z}from"./Close-BOeC0UwB.js";import{u as xe,S as Ce,A as ve}from"./Snackbar-BPBlFCMq.js";import{T as ee,I as ye}from"./Typography-Cg8NwYh1.js";import{u as we,a as ke,B as Se,F as je,T as $e,L as Ae}from"./TextField-zA5jSdED.js";import{B as Re}from"./Box-CcXo1liw.js";import{d as Me}from"./CloudUpload-ClhLOn0T.js";import"./ApplicationLogo-DEdiEKoR.js";import"./transition-CTjdevOO.js";const Be=ie(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Fe(e){return P("MuiAvatar",e)}D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ie=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Ne=Z(),Pe=e=>{const{classes:t,variant:s,colorDefault:a}=e;return T({root:["root",s,a&&"colorDefault"],img:["img"],fallback:["fallback"]},Fe,t)},De=x("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:u({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:u({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),ze=x("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Te=x(Be,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Ee({crossOrigin:e,referrerPolicy:t,src:s,srcSet:a}){const[r,n]=b.useState(!1);return b.useEffect(()=>{if(!s&&!a)return;n(!1);let c=!0;const i=new Image;return i.onload=()=>{c&&n("loaded")},i.onerror=()=>{c&&n("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=s,a&&(i.srcset=a),()=>{c=!1}},[e,t,s,a]),r}const Oe=b.forwardRef(function(t,s){const a=Ne({props:t,name:"MuiAvatar"}),{alt:r,children:n,className:c,component:i="div",slots:l={},slotProps:p={},imgProps:g,sizes:h,src:C,srcSet:y,variant:$="circular"}=a,F=z(a,Ie);let v=null;const I=Ee(u({},g,{src:C,srcSet:y})),k=C||y,A=k&&I!=="error",S=u({},a,{colorDefault:!A,component:i,variant:$}),R=Pe(S),[d,m]=xe("img",{className:R.img,elementType:ze,externalForwardedProps:{slots:l,slotProps:{img:u({},g,p.img)}},additionalProps:{alt:r,src:C,srcSet:y,sizes:h},ownerState:S});return A?v=o.jsx(d,u({},m)):n||n===0?v=n:k&&r?v=r[0]:v=o.jsx(Te,{ownerState:S,className:R.fallback}),o.jsx(De,u({as:i,ownerState:S,className:B(R.root,c),ref:s},F,{children:v}))}),Ue=Oe;function He(e){return P("MuiCardActionArea",e)}const _e=D("MuiCardActionArea",["root","focusVisible","focusHighlight"]),V=_e,Le=["children","className","focusVisibleClassName"],Ve=e=>{const{classes:t}=e;return T({root:["root"],focusHighlight:["focusHighlight"]},He,t)},qe=x(Y,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${V.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${V.focusVisible} .${V.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),Ge=x("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),We=b.forwardRef(function(t,s){const a=G({props:t,name:"MuiCardActionArea"}),{children:r,className:n,focusVisibleClassName:c}=a,i=z(a,Le),l=a,p=Ve(l);return o.jsxs(qe,u({className:B(p.root,n),focusVisibleClassName:B(c,p.focusVisible),ref:s,ownerState:l},i,{children:[r,o.jsx(Ge,{className:p.focusHighlight,ownerState:l})]}))}),Xe=We;function Je(e){return P("MuiCardContent",e)}D("MuiCardContent",["root"]);const Ke=["className","component"],Qe=e=>{const{classes:t}=e;return T({root:["root"]},Je,t)},Ye=x("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Ze=b.forwardRef(function(t,s){const a=G({props:t,name:"MuiCardContent"}),{className:r,component:n="div"}=a,c=z(a,Ke),i=u({},a,{component:n}),l=Qe(i);return o.jsx(Ye,u({as:n,className:B(l.root,r),ownerState:i,ref:s},c))}),et=Ze;function tt(e){return P("MuiCardMedia",e)}D("MuiCardMedia",["root","media","img"]);const ot=["children","className","component","image","src","style"],st=e=>{const{classes:t,isMediaComponent:s,isImageComponent:a}=e;return T({root:["root",s&&"media",a&&"img"]},tt,t)},at=x("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:a,isImageComponent:r}=s;return[t.root,a&&t.media,r&&t.img]}})(({ownerState:e})=>u({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),rt=["video","audio","picture","iframe","img"],nt=["picture","img"],it=b.forwardRef(function(t,s){const a=G({props:t,name:"MuiCardMedia"}),{children:r,className:n,component:c="div",image:i,src:l,style:p}=a,g=z(a,ot),h=rt.indexOf(c)!==-1,C=!h&&i?u({backgroundImage:`url("${i}")`},p):p,y=u({},a,{component:c,isMediaComponent:h,isImageComponent:nt.indexOf(c)!==-1}),$=st(y);return o.jsx(at,u({className:B($.root,n),as:c,role:!h&&i?"img":void 0,ref:s,style:C,ownerState:y,src:h?i||l:void 0},g,{children:r}))}),ct=it;function lt(e){return P("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const dt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ut=e=>{const{classes:t,checked:s,disabled:a,edge:r}=e,n={root:["root",s&&"checked",a&&"disabled",r&&`edge${M(r)}`],input:["input"]};return T(n,lt,t)},pt=x(Y)(({ownerState:e})=>u({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),gt=x("input",{shouldForwardProp:ce})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ht=b.forwardRef(function(t,s){const{autoFocus:a,checked:r,checkedIcon:n,className:c,defaultChecked:i,disabled:l,disableFocusRipple:p=!1,edge:g=!1,icon:h,id:C,inputProps:y,inputRef:$,name:F,onBlur:v,onChange:I,onFocus:k,readOnly:A,required:S=!1,tabIndex:R,type:d,value:m}=t,_=z(t,dt),[N,E]=le({controlled:r,default:!!i,name:"SwitchBase",state:"checked"}),j=we(),te=w=>{k&&k(w),j&&j.onFocus&&j.onFocus(w)},oe=w=>{v&&v(w),j&&j.onBlur&&j.onBlur(w)},se=w=>{if(w.nativeEvent.defaultPrevented)return;const X=w.target.checked;E(X),I&&I(w,X)};let O=l;j&&typeof O>"u"&&(O=j.disabled);const ae=d==="checkbox"||d==="radio",L=u({},t,{checked:N,disabled:O,disableFocusRipple:p,edge:g}),W=ut(L);return o.jsxs(pt,u({component:"span",className:B(W.root,c),centerRipple:!0,focusRipple:!p,disabled:O,tabIndex:null,role:void 0,onFocus:te,onBlur:oe,ownerState:L,ref:s},_,{children:[o.jsx(gt,u({autoFocus:a,checked:r,defaultChecked:i,className:W.input,disabled:O,id:ae?C:void 0,name:F,onChange:se,readOnly:A,ref:$,required:S,ownerState:L,tabIndex:R,type:d},d==="checkbox"&&m===void 0?{}:{value:m},y)),N?n:h]}))}),mt=ht;function ft(e){return P("MuiSwitch",e)}const f=D("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),bt=["className","color","edge","size","sx"],xt=Z(),Ct=e=>{const{classes:t,edge:s,size:a,color:r,checked:n,disabled:c}=e,i={root:["root",s&&`edge${M(s)}`,`size${M(a)}`],switchBase:["switchBase",`color${M(r)}`,n&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=T(i,ft,t);return u({},t,l)},vt=x("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.edge&&t[`edge${M(s.edge)}`],t[`size${M(s.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${f.thumb}`]:{width:16,height:16},[`& .${f.switchBase}`]:{padding:4,[`&.${f.checked}`]:{transform:"translateX(16px)"}}}}]}),yt=x(mt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.switchBase,{[`& .${f.input}`]:t.input},s.color!=="default"&&t[`color${M(s.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${f.checked}`]:{transform:"translateX(20px)"},[`&.${f.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${f.checked} + .${f.track}`]:{opacity:.5},[`&.${f.disabled} + .${f.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${f.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:K(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{[`&.${f.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:K(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?de(e.palette[t].main,.62):ue(e.palette[t].main,.55)}`}},[`&.${f.checked} + .${f.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),wt=x("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),kt=x("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),St=b.forwardRef(function(t,s){const a=xt({props:t,name:"MuiSwitch"}),{className:r,color:n="primary",edge:c=!1,size:i="medium",sx:l}=a,p=z(a,bt),g=u({},a,{color:n,edge:c,size:i}),h=Ct(g),C=o.jsx(kt,{className:h.thumb,ownerState:g});return o.jsxs(vt,{className:B(h.root,r),sx:l,ownerState:g,children:[o.jsx(yt,u({type:"checkbox",icon:C,checkedIcon:C,ref:s,ownerState:g},p,{classes:u({},h,{root:h.switchBase})})),o.jsx(wt,{className:h.track,ownerState:g})]})}),jt=St,$t=({data:e,foregroundColor:t,backgroundColor:s,color:a})=>o.jsx(fe,{size:"small",sx:{backgroundColor:s,color:a,margin:"2px 2px"},avatar:o.jsx(Ue,{sx:{backgroundColor:t,color:a},children:e[0]}),label:e});let At="21|7WiAwk3nkyfyUxHm4NHbvW3J9qsTdwvN99l0sMO37fc076cd";const Rt=({data:e,actionButtonClick:t})=>{const[s,a]=U.useState(e.type.split(", ")),[r,n]=U.useState(!!e.show),c={Background:{fg:"#03AED2",bg:"#68D2E8",tc:"white"},Pattern:{fg:"#F8C794",bg:"#FFF2D7",tc:"black"},Sticker:{fg:"#6AD4DD",bg:"#97E7E1",tc:"black"},Solid:{fg:"#9BBEC8",bg:"#DDF2FD",tc:"black"},Gradient:{fg:"#5DEBD7",bg:"#8DECB4",tc:"black"}},i=async()=>{n(!r),await q.get(route("toggle.category")+"?id="+e.id,{headers:{Authorization:`Bearer ${At}`}})};return o.jsxs(he,{sx:{maxWidth:345,margin:"20px"},children:[o.jsx(Xe,{children:o.jsx(ct,{sx:{minHeight:"200px",objectFit:"cover",opacity:r==!0?.8:.6},component:"img",image:`https://ui-avatars.com/api/?background=random&name=${e.name[0]+e.name[1]}&font-size=0.5&size=256`,alt:e.name})}),o.jsxs(et,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[o.jsxs(H,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(ee,{gutterBottom:!0,variant:"h6",component:"div",children:e.name}),o.jsx(jt,{edge:"end",size:"small",onChange:i,checked:r,inputProps:{"aria-labelledby":e.name+e.id}})]}),o.jsx(H,{direction:"row",flexWrap:"wrap",children:s.map((l,p)=>o.jsx($t,{data:l,color:c[l].tc,foregroundColor:c[l].fg,backgroundColor:c[l].bg},p))}),o.jsx(H,{sx:{position:"absolute",bottom:"4px",right:"7px",display:"flex",flexDirection:"row"},children:o.jsx(ye,{"aria-label":"delete",size:"small",color:"disabled",onClick:()=>t(e.id,e.name,"delete"),children:o.jsx(me,{sx:{width:"20px",height:"20px",color:"#d60032"}})})})]})]})},Mt=Rt,Bt={position:"absolute",overflow:"hidden",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:2},Ft=({isOpen:e=!1,href:t,closed:s,children:a})=>{const[r,n]=b.useState(e),c=()=>n(!1);return b.useEffect(()=>{n(e)},[e]),b.useEffect(()=>{r||(document.body.style.overflow="auto",s(t))},[r]),o.jsxs("div",{children:[document.body.style.overflow=="hidden",o.jsx(ke,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:c,closeAfterTransition:!0,slots:{backdrop:Se},slotProps:{backdrop:{timeout:500}},children:o.jsx(je,{in:r,children:o.jsxs(Re,{sx:Bt,children:[t==="addCategories"&&o.jsx(ee,{variant:"h6",component:"h2",children:"Add Category"}),a]})})})]})},It=Ft,Nt=x("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function Pt({name:e="",title:t="Thumbnail",onFileSelect:s=""}){const a=r=>{const n=r.target.files[0];s(n)};return o.jsxs(pe,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:o.jsx(Me,{}),children:[t,o.jsx(Nt,{name:e,type:"file",onChange:a})]})}const Dt=({onClick:e,sx:t={},variant:s="filledTonal",isGray:a=!0,submit:r=!1,className:n="",children:c,...i})=>{const l=x(Q)(({theme:p})=>({color:"#202020",backgroundColor:"rgba(0,0,0,0.1)"}));return a?o.jsx(l,{type:r?"submit":"button",color:"primary",size:"small",variant:s,onClick:e,className:n,...i,sx:t,children:c}):o.jsx(Q,{type:r?"submit":"button",color:"primary",size:"small",variant:s,onClick:e,className:n,...i,sx:t,children:c})},zt=Dt;function Tt({categories:e,handleCategoryChangeInModal:t}){return o.jsx(be,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:e,getOptionLabel:s=>s,onChange:t,renderInput:s=>o.jsx($e,{...s,label:"Categories",placeholder:"Select types"}),sx:{width:"100%",margin:"20px 0px"}})}function Qt({auth:e,data:t,type:s,categories:a,title:r,headerOptions:n}){const[c,i]=b.useState(null);b.useState("");const[l,p]=U.useState({status:!1,message:"",color:""}),[g,h]=b.useState({}),[C,y]=U.useState(""),$=(d,m)=>{console.log(m.join(", ")),y(m.join(", "))};U.useEffect(()=>{let d=n[0];h({title:d.title,isOpen:!1,href:d.href})},[]);const F=()=>{p({status:!1,message:"",color:""})},v=b.useRef(null),I=d=>{i(d)},k=(d,m)=>{},A=(d,m=!1)=>{m=!g.isOpen,h(m?{...g,isOpen:!0}:{...g,isOpen:!1})},S=(d,m,_)=>{const N=new FormData;N.append("uni",d),_=="delete"&&(N.append("actionType","delete"),q.post(route("manage.category"),N).then(E=>{J.reload({only:["data"]}),p({status:!0,message:E.data.message,color:"error"}),setTimeout(()=>{F()},3500)}).catch(E=>{console.error("Error uploading file: ",E)}))},R=()=>{const d=new FormData;d.append("name",v.current.value),d.append("type",C),d.append("actionType","store"),q.post(route("manage.category"),d,{headers:{"Content-Type":"multipart/form-data"}}).then(m=>{J.reload({only:["data"]}),p({status:!0,message:"New category added",color:"success"}),setTimeout(()=>{F()},3500)}).catch(m=>{console.error("Error uploading file: ",m)})};return o.jsxs(ne,{user:e.user,header:o.jsx("h2",{className:"font-bold text-xl text-gray-800 leading-tight",children:r}),actionBar:o.jsx(ge,{type:s,headerOptions:n,handleChange:A}),children:[o.jsx(re,{title:"Categories"}),o.jsxs("div",{className:"square-pattern-bg ",children:[l.status&&o.jsx(Ce,{anchorOrigin:{vertical:"top",horizontal:"right"},open:l.status,autoHideDuration:3500,onClose:k,children:o.jsx(ve,{onClose:k,severity:l.color,variant:"filled",sx:{width:"100%"},children:l.message})}),o.jsx(It,{href:g.href,isOpen:g.isOpen,closed:d=>A(d,!0),children:o.jsxs(H,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minHeight:"200px"},children:[o.jsx("input",{ref:v,type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4",placeholder:"Category name",required:!0}),o.jsx(Tt,{handleCategoryChangeInModal:$,categories:a}),o.jsxs(H,{sx:{marginTop:"5px",display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"},children:[o.jsx(Pt,{width:"48%",onFileSelect:I}),o.jsx(zt,{sx:{width:"48%"},onClick:R,children:"Create"})]})]})}),o.jsx(Ae,{className:"categoriey-items",sx:{width:"100%",padding:"30px"},children:t.map((d,m)=>o.jsx(Mt,{data:d,actionButtonClick:S},d.id))})]})]})}export{Qt as default};
