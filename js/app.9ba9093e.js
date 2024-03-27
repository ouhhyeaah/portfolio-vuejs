(function(){"use strict";var t={3131:function(t,e,n){var o=n(5130),s=n(6768),r=n(4232),i=n(144),a=n(7383),l=n(153);const c=(0,s.Fv)('<label class="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full" for="light-switch"><svg class="w-4 h-4 dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path class="fill-current text-slate-400" d="M7 0h2v2H7V0Zm5.88 1.637 1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414ZM14 7h2v2h-2V7Zm-1.05 7.433-1.415-1.414 1.414-1.414 1.415 1.413-1.414 1.415ZM7 14h2v2H7v-2Zm-4.02.363L1.566 12.95l1.415-1.414 1.414 1.415-1.415 1.413ZM0 7h2v2H0V7Zm3.05-5.293L4.465 3.12 3.05 4.535 1.636 3.121 3.05 1.707Z"></path><path class="fill-current text-slate-500" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path></svg><svg class="w-4 h-4 hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path class="fill-current text-slate-400" d="M6.2 2C3.2 2.8 1 5.6 1 8.9 1 12.8 4.2 16 8.1 16c3.3 0 6-2.2 6.9-5.2C9.7 12.2 4.8 7.3 6.2 2Z"></path><path class="fill-current text-slate-500" d="M12.5 6a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 6Z"></path></svg></label>',1);var u={__name:"ThemeToggle",setup(t){const e=(0,a.C6J)({selector:"html"});return(t,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",name:"light-switch","onUpdate:modelValue":n[0]||(n[0]=t=>(0,i.i9)(e)?e.value=t:null),class:"light-switch sr-only"},null,512),[[o.lH,(0,i.R1)(e)]]),c]))}};const d=u;var h=d;const p={class:"w-full flex justify-between p-10"},f=(0,s.Lk)("div",{class:"p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower"},[(0,s.Lk)("a",{href:"#"}," Louis. ")],-1),v={class:"dark:text-white flex gap-6 mont-bold"},m=(0,s.Lk)("a",{href:"#education"},"Education",-1),x=[m];window.addEventListener("load",(()=>{k()}));const k=()=>{const t=document.getElementsByClassName("dark"),e=document.getElementById("toggleBtn");0!=t.length?(e.style.transition="translate .7s",e.style.translate="0px 40px"):(e.style.transition="translate .7s",e.style.translate="0px 0px")},g={name:"NavBar",components:{ThemeToggle:h}};var w=Object.assign(g,{setup(t){const e=(0,a.C6J)(),n=(0,l.eY)(e);return(t,o)=>((0,s.uX)(),(0,s.CE)("div",p,[f,(0,s.Lk)("div",null,[(0,s.Lk)("ul",v,[(0,s.Lk)("li",{class:(0,r.C4)(["p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"])},x,2),(0,s.Lk)("li",{class:(0,r.C4)(["p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"])},"Experience",2),(0,s.Lk)("li",{class:(0,r.C4)(["p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"])},"Projects",2),(0,s.Lk)("li",{class:(0,r.C4)(["p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"])},"Contact",2),(0,s.Lk)("li",{class:(0,r.C4)(["duration-300 ease-in-out hover:scale-105 hover:text-brown-color",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"]),onClick:k},[(0,s.bF)(h,{onClick:o[0]||(o[0]=t=>(0,i.R1)(n)()),id:"toggleBtn",style:{cursor:"none"}})],2)])])]))}});const b=w;var y=b,C=n.p+"img/me.50f82553.png";n(4114);const L=[{id:1,title:"Github",link:"https://github.com/ouhhyeaah",icon:"github"},{id:2,title:"Linkedin",link:"https://linkedin.com/in/louis-petitperrin",icon:"linkedin"}];var j=L,E=n(292),O=n(8950),F=n(4996);const V=["href"],_={name:"SocialView",props:{title:String,size:String,justify_type:String}};var R=Object.assign(_,{setup(t){O.Yv.add(F.Vz1,F.IAJ);const e=(0,i.KR)();return(0,s.sV)((()=>{let t=[];j.forEach((e=>{const n={id:e.id,title:e.title,link:e.link,icon:e.icon};t.push(n)})),e.value=t})),(n,o)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)(["flex flex-wrap mob:flex-nowrap link gap-10 w-full",t.justify_type])},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"flex flex-col"},[(0,s.Lk)("a",{href:e.link,class:"flex flex-col justify-center align-middle"},[(0,s.bF)((0,i.R1)(E.gc),{icon:["fab",e.icon],class:(0,r.C4)("size-"+t.size)},null,8,["icon","class"]),(0,s.Lk)("span",{style:(0,r.Tr)(t.title?"":"display: none"),class:"mx-auto"},(0,r.v_)(e.title),5)],8,V)])))),128))],2))}});const T=R;var X=T;const Z={class:"flex flex-col text-5xl p-10 font-extralight w-1/3 dark:text-white"},B=(0,s.Lk)("span",{class:"text-12xl pb-7 dark:text-white mont-bold"},"Hello 👋",-1),H=(0,s.Lk)("span",{class:"dark:text-white text-3xl mont-light text-wrap"},"I'm a cybersecurity student, but I'm also interested in different areas of computer science, such as programming. ",-1),M={class:"pt-10 flex gap-10 justify-center"},I=(0,s.Lk)("img",{class:"h-1/2 w-1/3 rounded-full transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl",src:C,alt:""},null,-1),N={name:"HeroView"};var J=Object.assign(N,{setup(t){const e=(0,a.C6J)();return(t,n)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)(["flex gap-6 justify-evenly dark:text-white py-16 w-4/5 mx-auto",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"])},[(0,s.Lk)("div",Z,[B,H,(0,s.Lk)("div",M,[(0,s.bF)(X,{justify_type:"justify-around",size:"16"})])]),I],2))}});const z=J;var A=z;const S=[{id:1,school:"I.U.T. Valence, Drôme, France 🇫🇷",description:"University Bachelor of Technology in Networks & Telecommunications (R&T), cyber-security course.",duration:3,start:2021},{id:2,school:"UQAC, QC, Canada 🇨🇦",description:"Exchange year in Quebec during my final year of the University Bachelor of Technology in Networks",duration:1,start:2023}];var U=S;const K={id:"education",class:"pt-20 flex justify-center"},P={class:"flex justify-around w-11/12 gap-6"},Q={class:"text-5xl py-8 mont-bold"},Y={class:"text-2xl mont-light"},q={class:"py-8 mont text-2xl"},D={name:"EducationView"};var G=Object.assign(D,{setup(t){const e=(0,a.C6J)(),n=(0,i.KR)();return(0,s.sV)((async()=>{let t=[];U.forEach((e=>{const n={id:e.id,school:e.school,duration:e.duration,start:e.start,description:e.description};t.push(n)})),n.value=t.reverse()})),(t,o)=>((0,s.uX)(),(0,s.CE)("section",K,[(0,s.Lk)("div",P,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.value,(t=>((0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)(["mx-auto neumorphism p-10 w-1/2 dark:text-white",(0,i.R1)(e)?"dark-neumorphism":"neumorphism"]),key:t.id},[(0,s.Lk)("h1",Q,(0,r.v_)(t.school),1),(0,s.Lk)("span",Y,(0,r.v_)(t.start)+" / "+(0,r.v_)(t.start+t.duration),1),(0,s.Lk)("p",q,(0,r.v_)(t.description),1)],2)))),128))])]))}});const W=G;var $=W;const tt={className:"mt-5 laptop:mt-40 p-2 laptop:p-0"},et={className:"mt-10"},nt={name:"FooterView"};var ot=Object.assign(nt,{setup(t){return(t,e)=>((0,s.uX)(),(0,s.CE)("div",tt,[(0,s.Lk)("div",null,[(0,s.Lk)("div",et,[(0,s.bF)(X,{title:"true",justify_type:"justify-center"})])])]))}});const st=ot;var rt=st;const it={class:"dark:bg-dark-mode h-full pb-32 dark:text-white"},at=(0,s.Lk)("div",{class:"gradient-circle"},null,-1),lt={name:"App",components:{EducationView:$,NavBar:y,Hero:A,FooterView:rt}};var ct=Object.assign(lt,{setup(t){const e=(0,a.C6J)();return(0,s.sV)((()=>{const t=document.querySelector(".customcc");function e(e){const n=e.clientX,o=e.clientY,s=t.offsetWidth/2,r=t.offsetHeight/2;t.style.transform="translate("+(n-s)+"px, "+(o-r)+"px)"}document.addEventListener("mousemove",(function(t){requestAnimationFrame((function(){e(t)}))}))})),(t,n)=>((0,s.uX)(),(0,s.CE)("div",it,[at,(0,s.Lk)("div",{class:(0,r.C4)(["customcc",(0,i.R1)(e)?"customcc-dark-theme":"customcc"])},null,2),(0,s.bF)(y),(0,s.bF)(A),(0,s.bF)($),(0,s.bF)(rt)]))}});const ut=ct;var dt=ut;(0,o.Ef)(dt).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],r=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/portfolio-vuejs/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var u=l(n)}for(e&&e(o);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkportfolio_vuejs"]=self["webpackChunkportfolio_vuejs"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3131)}));o=n.O(o)})();
//# sourceMappingURL=app.9ba9093e.js.map