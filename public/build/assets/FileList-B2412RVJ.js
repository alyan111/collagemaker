import{j as o,r}from"./app-7CpG763H.js";function s(t){const e=n=>`'${n.name}' of size '${n.size}' and type '${n.type}'`;return t.map(n=>o.jsx("li",{children:e(n)},n.name))}const a=({files:t})=>{if(console.log(t),t.length===0)return o.jsx("div",{children:"Nothing to display"});const e=r.useMemo(()=>s(t),[t]);return o.jsx("div",{children:e})};export{a as FileList};
