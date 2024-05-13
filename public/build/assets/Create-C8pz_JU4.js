import{g as Y,r as x,j as t,R as T,a as J,b as K}from"./app-7CpG763H.js";import{A as Q}from"./AuthenticatedLayout-3ZpT2C0N.js";import{g as R,a as X,s as C,B as L,r as Z,_ as w,b as k,u as ee,c as te,d as ae,e as oe,f as F,h as se,i as re,j as ne,k as ie,l as B,S as z,A as le}from"./ActionBar-BdhY-SIY.js";import{L as A,P as V,G,a as de,C as ce,M as pe,A as ue,T as ge,b as v,I as me,S as fe,c as xe,d as be,e as he}from"./CloudUpload-Be-qMYoa.js";import"./ApplicationLogo-D0lUOW8W.js";import"./transition-NJfOyhhc.js";var U={exports:{}},ye="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ve=ye,Ce=ve;function W(){}function H(){}H.resetWarningCache=W;var Ie=function(){function e(s,l,n,c,m,p){if(p!==Ce){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function a(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:H,resetWarningCache:W};return o.PropTypes=o,o};U.exports=Ie();var je=U.exports;const _=Y(je),Se=R("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),D=Se,we=R("MuiListItemIcon",["root","alignItemsFlexStart"]),N=we,$e=R("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),E=$e;function Te(e){return X("MuiMenuItem",e)}const ke=R("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=ke,Re=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Oe=(e,a)=>{const{ownerState:o}=e;return[a.root,o.dense&&a.dense,o.divider&&a.divider,!o.disableGutters&&a.gutters]},Pe=e=>{const{disabled:a,dense:o,divider:s,disableGutters:l,selected:n,classes:c}=e,p=se({root:["root",o&&"dense",a&&"disabled",!l&&"gutters",s&&"divider",n&&"selected"]},Te,c);return w({},c,p)},_e=C(L,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Oe})(({theme:e,ownerState:a})=>w({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${S.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${S.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${S.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${S.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${S.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${D.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${D.inset}`]:{marginLeft:52},[`& .${E.root}`]:{marginTop:0,marginBottom:0},[`& .${E.inset}`]:{paddingLeft:36},[`& .${N.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&w({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${N.root} svg`]:{fontSize:"1.25rem"}}))),Be=x.forwardRef(function(a,o){const s=ee({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:n="li",dense:c=!1,divider:m=!1,disableGutters:p=!1,focusVisibleClassName:d,role:I="menuitem",tabIndex:i,className:f}=s,y=te(s,Re),u=x.useContext(A),b=x.useMemo(()=>({dense:c||u.dense||!1,disableGutters:p}),[u.dense,c,p]),j=x.useRef(null);ae(()=>{l&&j.current&&j.current.focus()},[l]);const O=w({},s,{dense:b.dense,divider:m,disableGutters:p}),h=Pe(s),P=oe(j,o);let $;return s.disabled||($=i!==void 0?i:-1),t.jsx(A.Provider,{value:b,children:t.jsx(_e,w({ref:P,role:I,tabIndex:$,component:n,focusVisibleClassName:F(h.focusVisible,d),className:F(h.root,f)},y,{ownerState:O,classes:h}))})}),Me=Be;var M={},Fe=ne;Object.defineProperty(M,"__esModule",{value:!0});var q=M.default=void 0,Ae=Fe(re()),De=t;q=M.default=(0,Ae.default)((0,De.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");function Ne({options:e,changeAssetType:a}){const[o,s]=x.useState(!1),l=x.useRef(null),[n,c]=x.useState(0),m=()=>{console.info(`You clicked ${e[n]}`)},p=(i,f)=>{c(f),a(f),s(!1)},d=()=>{s(i=>!i)},I=i=>{l.current&&l.current.contains(i.target)||s(!1)};return t.jsxs(x.Fragment,{children:[t.jsxs(ie,{variant:"contained",ref:l,"aria-label":"Button group with a nested menu",children:[t.jsx(B,{onClick:m,children:e[n]}),t.jsx(B,{size:"small","aria-controls":o?"split-button-menu":void 0,"aria-expanded":o?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:d,children:t.jsx(q,{})})]}),t.jsx(V,{sx:{zIndex:1},open:o,anchorEl:l.current,role:void 0,transition:!0,disablePortal:!0,children:({TransitionProps:i,placement:f})=>t.jsx(G,{...i,style:{transformOrigin:f==="bottom"?"center top":"center bottom"},children:t.jsx(de,{children:t.jsx(ce,{onClickAway:I,children:t.jsx(pe,{id:"split-button-menu",autoFocusItem:!0,children:e.map((y,u)=>t.jsx(Me,{disabled:u===0,selected:u===n,onClick:b=>p(b,u),children:y},y))})})})})})]})}function Ee({categories:e,changeCategory:a}){return t.jsx(z,{sx:{width:"180px",margin:"0px 20px",height:"20px"},children:t.jsx(ue,{disablePortal:!0,id:"combo-box-demo",size:"small",options:e,getOptionLabel:o=>o.name,onChange:a,renderInput:o=>t.jsx(ge,{...o,label:"Category"})})})}C("div")(({theme:e})=>({[`& .${v.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${v.listbox}`]:{backgroundColor:e.palette.mode==="light"?"#fff":"#1c2128",padding:0,[`& .${v.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid  ${e.palette.mode==="light"?" #eaecef":"#30363d"}`,'&[aria-selected="true"]':{backgroundColor:"transparent"},[`&.${v.focused}, &.${v.focused}[aria-selected="true"]`]:{backgroundColor:e.palette.action.hover}}},[`&.${v.popperDisablePortal}`]:{position:"relative"}}));_.any,_.bool,_.bool.isRequired;C(V)(({theme:e})=>({border:`1px solid ${e.palette.mode==="light"?"#e1e4e8":"#30363d"}`,boxShadow:`0 8px 24px ${e.palette.mode==="light"?"rgba(149, 157, 165, 0.2)":"rgb(1, 4, 9)"}`,borderRadius:6,width:300,zIndex:e.zIndex.modal,fontSize:13,color:e.palette.mode==="light"?"#24292e":"#c9d1d9",backgroundColor:e.palette.mode==="light"?"#fff":"#1c2128"}));C(me)(({theme:e})=>({padding:10,width:"100%",borderBottom:`1px solid ${e.palette.mode==="light"?"#eaecef":"#30363d"}`,"& input":{borderRadius:4,backgroundColor:e.palette.mode==="light"?"#fff":"#0d1117",padding:8,transition:e.transitions.create(["border-color","box-shadow"]),border:`1px solid ${e.palette.mode==="light"?"#eaecef":"#30363d"}`,fontSize:14,"&:focus":{boxShadow:`0px 0px 0px 3px ${e.palette.mode==="light"?"rgba(3, 102, 214, 0.3)":"rgb(12, 45, 107)"}`,borderColor:e.palette.mode==="light"?"#0366d6":"#388bfd"}}}));C(L)(({theme:e})=>({fontSize:13,width:"100%",textAlign:"left",paddingBottom:8,color:e.palette.mode==="light"?"#586069":"#8b949e",fontWeight:600,"&:hover,&:focus":{color:e.palette.mode==="light"?"#0366d6":"#58a6ff"},"& span":{width:"100%"},"& svg":{width:16,height:16}}));const Le=C("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function qe({auth:e,type:a,title:o,categories:s,headerOptions:l}){const[n,c]=T.useState({status:!1,message:"",severity:""}),[m,p]=T.useState(null),[d,I]=T.useState(0),[i,f]=T.useState({name:"",id:""}),y=r=>{p(r.target.files[0])},u=(r,g)=>{c({status:!0,message:r,severity:g})},b=(r,g)=>{g!=="clickaway"&&c(!1)},j=async()=>{if(!m){u("No file selected","warning");return}if(d==0){u("Select the asset type first","warning");return}if(i.name===""){u("Select a category first","warning");return}const r=new FormData;r.append("type",h[d]),r.append("image",m),r.append("category_id",i.id),r.append("category_name",i.name),r.append("user_id",e.user.id),K.post(route("save.single.asset"),r,{headers:{"Content-Type":"multipart/form-data"}}).then(g=>{u(g.data.message,"success")}).catch(g=>{console.error("Error : ",g)})},O={Create:function(){j()}},h=["Select Type","Pattern","Sticker","Background","Solid Color","Gradient"],P=(r,g)=>{g&&f({name:g.name,id:g.id})},$=r=>{I(r)};return t.jsxs(Q,{user:e.user,header:t.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[d!=0&&"Upload "+h[d],d==0&&"Upload Assets"]}),actionBar:t.jsxs(le,{actions:O,headerOptions:l,children:[t.jsx(Ee,{categories:s,changeCategory:P}),t.jsx(Ne,{changeAssetType:$,options:h})]}),children:[t.jsx(J,{title:"Dashboard"}),n.status&&t.jsx(fe,{open:n.status,autoHideDuration:4e3,onClose:b,TransitionComponent:G,anchorOrigin:{vertical:"top",horizontal:"right"},children:t.jsx(xe,{onClose:b,severity:n.severity,variant:"filled",sx:{width:"100%"},children:n.message})}),t.jsx("div",{className:"square-pattern-bg ",children:t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative"},children:t.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg py-5",children:t.jsxs(z,{padding:20,children:[t.jsx(be,{variant:"h1",component:"h1",children:"Select asset file"}),t.jsxs(B,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:t.jsx(he,{}),style:{padding:"20px 10px"},children:["Upload file",t.jsx(Le,{type:"file",onChange:y})]})]})})})})})]})}export{qe as default};
