import{_ as M}from"./app-b1fcec59.js";import{c as v,r as f,o as h,y as g,s as y,X as b,a2 as T,a7 as P,x as p,Z as i,a8 as x,a6 as E,a4 as w,_ as C}from"./framework-8b166872.js";const I="/music/",r=s=>{const n=`${I}${s.artist}/${s.name}`;return{name:s.name,artist:s.artist,url:`${n}/audio.${s.urlType}`,cover:`${n}/cover.${s.coverType}`,lrc:`${n}/lyrics.lrc`}},N=[r({name:"水星记",artist:"郭顶",urlType:"m4a",coverType:"webp"}),r({name:"若把你",artist:"Kirsty刘瑾睿",urlType:"m4a",coverType:"jpg"}),r({name:"想去海边",artist:"夏日入侵企画",urlType:"m4a",coverType:"jpg"})];const $={class:"MyMusic"},k=i("div",{id:"GlobalAPlayer"},null,-1),A=v({__name:"NavMusic",setup(s){let n;const o=f(!1),_=()=>{o.value=!o.value},l=()=>{o.value=!1},u=()=>{const a=document.querySelector("#app");if(!a)return;if(!document.querySelector("#MyMusic_Menu")){const e=document.createElement("div");e.id="MyMusic_Menu",e.classList.add("nav-item"),e.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',a.appendChild(e)}const t=document.querySelector("#MyMusic_Menu"),c=document.querySelector(".MyMusic");t.onclick=e=>{_(),e.stopPropagation()},c.onclick=e=>{e.stopPropagation()}},m=a=>{if(!a)return;const t=document.getElementById("GlobalAPlayer");!t||t.classList.contains("aplayer")||(n=new a({container:document.getElementById("GlobalAPlayer"),audio:N,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),n.on("play",()=>{var e;(e=document.getElementById("MyMusic_icon"))==null||e.setAttribute("data-spin","")}),n.on("pause",()=>{var e;(e=document.getElementById("MyMusic_icon"))==null||e.removeAttribute("data-spin")}))},d=()=>{window.location.pathname.includes("/music/")&&n&&n.pause()};return h(()=>{const a=g();M(()=>import("./APlayer.min-a37cd21c.js").then(t=>t.A),["assets/APlayer.min-a37cd21c.js","assets/commonjsHelpers-725317a4.js"]).then(({default:t})=>{y(()=>{u(),m(t),d(),window.document.body.onclick=()=>{l()}}),a.beforeEach(()=>{y(()=>{setTimeout(()=>{u(),m(t)},50),setTimeout(()=>{d()},2e3)})})})}),(a,t)=>{const c=p("MyIcon"),e=p("ClientOnly");return b(),T(e,null,{default:P(()=>[i("div",$,[i("div",{class:x(["MyMusic_Play",{hide:!o.value}])},[i("div",{class:"close",onClick:l},[E(c,{name:"close"})]),w(` <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="100%"
          height="550"
          src="//music.163.com/outchain/player?type=0&id=8056247134&auto=0&height=430"
        ></iframe> `),k],2)])]),_:1})}}});const q=C(A,[["__file","NavMusic.vue"]]);export{q as default};