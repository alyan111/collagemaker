import{j as r,r as s}from"./app-lDsYlq9Q.js";function i(n){const e=t=>`'${t.name}' of size '${t.size}' and type '${t.type}'`;return n.map(t=>r.jsx("li",{children:e(t)},t.name))}const a=({files:n})=>{if(n.length===0)return r.jsx("div",{children:"Nothing to display"});const e=s.useMemo(()=>i(n),[n]);return r.jsx("div",{children:e})};export{a as FileList};
