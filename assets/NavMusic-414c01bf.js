import{_ as M}from"./app-bbd369a7.js";import{c as v,r as f,o as g,z as h,s as y,S as T,a8 as b,a9 as E,x as p,V as i,a4 as P,af as x,aQ as w}from"./framework-c3f43f5f.js";const C="/music/",r=a=>{const n=`${C}${a.artist}/${a.name}`;return{name:a.name,artist:a.artist,url:`${n}/audio.${a.urlType}`,cover:`${n}/cover.${a.coverType}`,lrc:`${n}/lyrics.lrc`}},I=[r({name:"水星记",artist:"郭顶",urlType:"m4a",coverType:"webp"}),r({name:"若把你",artist:"Kirsty刘瑾睿",urlType:"m4a",coverType:"jpg"}),r({name:"想去海边",artist:"夏日入侵企画",urlType:"m4a",coverType:"jpg"})];const k={class:"MyMusic"},N=i("div",{id:"GlobalAPlayer"},null,-1),$=v({__name:"NavMusic",setup(a){let n;const o=f(!1),_=()=>{o.value=!o.value},l=()=>{o.value=!1},u=()=>{const s=document.querySelector("#app");if(!s)return;if(!document.querySelector("#MyMusic_Menu")){const e=document.createElement("div");e.id="MyMusic_Menu",e.classList.add("nav-item"),e.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',s.appendChild(e)}const t=document.querySelector("#MyMusic_Menu"),c=document.querySelector(".MyMusic");t.onclick=e=>{_(),e.stopPropagation()},c.onclick=e=>{e.stopPropagation()}},d=s=>{if(!s)return;const t=document.getElementById("GlobalAPlayer");!t||t.classList.contains("aplayer")||(n=new s({container:document.getElementById("GlobalAPlayer"),audio:I,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),n.on("play",()=>{var e;(e=document.getElementById("MyMusic_icon"))==null||e.setAttribute("data-spin","")}),n.on("pause",()=>{var e;(e=document.getElementById("MyMusic_icon"))==null||e.removeAttribute("data-spin")}))},m=()=>{window.location.pathname.includes("/music/")&&n&&n.pause()};return g(()=>{const s=h();M(()=>import("./APlayer.min-aaba9428.js").then(t=>t.A),["assets/APlayer.min-aaba9428.js","assets/app-bbd369a7.js","assets/framework-c3f43f5f.js"]).then(({default:t})=>{y(()=>{u(),d(t),m(),window.document.body.onclick=()=>{l()}}),s.beforeEach(()=>{y(()=>{setTimeout(()=>{u(),d(t)},50),setTimeout(()=>{m()},2e3)})})}),window.addEventListener("keydown",t=>{t.keyCode===27&&o.value==!0&&l()})}),(s,t)=>{const c=p("MyIcon"),e=p("ClientOnly");return T(),b(e,null,{default:E(()=>[i("div",k,[i("div",{class:P(["MyMusic_Play",{hide:!o.value}])},[i("div",{class:"close",onClick:l},[x(c,{name:"guanbi"})]),N],2)])]),_:1})}}});const L=w($,[["__file","NavMusic.vue"]]);export{L as default};