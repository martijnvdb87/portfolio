(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,4,5,6,9,10],{309:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("414bc4b6",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.r(e);n(313);var r=n(52),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("e27cc43e",content,!0,{sourceMap:!1})},312:function(t,e,n){"use strict";n.r(e);n(317),n(68),n(53),n(30),n(146);var r=n(2).a.extend({name:"Icon",props:{type:{type:String,default:""},stroke:{type:String,default:"2"},size:{type:Number,default:5},color:{type:String,default:"black"}},computed:{getSize:function(){return"w-".concat(this.size," h-").concat(this.size)},getColor:function(){return["white","black"].includes(this.color)?"text-".concat(this.color):"text-".concat(1===this.color.split("-").length?"".concat(this.color,"-500"):this.color)}}}),o=n(52),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon icon-tabler",class:[t.getSize,t.getColor],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":t.stroke}},["github"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}})]:"codepen"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M3 15l9 6l9 -6l-9 -6l-9 6"}}),t._v(" "),n("path",{attrs:{d:"M3 9l9 6l9 -6l-9 -6l-9 6"}}),t._v(" "),n("line",{attrs:{x1:"3",y1:"9",x2:"3",y2:"15"}}),t._v(" "),n("line",{attrs:{x1:"21",y1:"9",x2:"21",y2:"15"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"3",x2:"12",y2:"9"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"21"}})]:"linkedin"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"2"}}),t._v(" "),n("line",{attrs:{x1:"8",y1:"11",x2:"8",y2:"16"}}),t._v(" "),n("line",{attrs:{x1:"8",y1:"8",x2:"8",y2:"8.01"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"11"}}),t._v(" "),n("path",{attrs:{d:"M16 16v-3a2 2 0 0 0 -4 0"}})]:"instagram"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"4"}}),t._v(" "),n("circle",{attrs:{cx:"12",cy:"12",r:"3"}}),t._v(" "),n("line",{attrs:{x1:"16.5",y1:"7.5",x2:"16.5",y2:"7.501"}})]:"email"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"3",y:"5",width:"18",height:"14",rx:"2"}}),t._v(" "),n("polyline",{attrs:{points:"3 7 12 13 21 7"}})]:"id"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"3",y:"4",width:"18",height:"16",rx:"3"}}),t._v(" "),n("circle",{attrs:{cx:"9",cy:"10",r:"2"}}),t._v(" "),n("line",{attrs:{x1:"15",y1:"8",x2:"17",y2:"8"}}),t._v(" "),n("line",{attrs:{x1:"15",y1:"12",x2:"17",y2:"12"}}),t._v(" "),n("line",{attrs:{x1:"7",y1:"16",x2:"17",y2:"16"}})]:"building-skyscraper"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("line",{attrs:{x1:"3",y1:"21",x2:"21",y2:"21"}}),t._v(" "),n("path",{attrs:{d:"M5 21v-14l8 -4v18"}}),t._v(" "),n("path",{attrs:{d:"M19 21v-10l-6 -4"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"9",x2:"9",y2:"9.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"12",x2:"9",y2:"12.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"15",x2:"9",y2:"15.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"18",x2:"9",y2:"18.01"}})]:"sofa"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"}}),t._v(" "),n("path",{attrs:{d:"M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3"}}),t._v(" "),n("path",{attrs:{d:"M12 5v9"}})]:"code"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("polyline",{attrs:{points:"7 8 3 12 7 16"}}),t._v(" "),n("polyline",{attrs:{points:"17 8 21 12 17 16"}}),t._v(" "),n("line",{attrs:{x1:"14",y1:"4",x2:"10",y2:"20"}})]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n(309)},314:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\nbody{\n  font-family:"Inter",sans-serif;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\nmain{\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:2rem;\n  padding-bottom:2rem\n}\n@media (min-width: 768px){\nmain{\n    padding-top:4rem;\n    padding-bottom:4rem\n}\n}\n@media (min-width: 1024px){\nmain{\n    padding-top:6rem;\n    padding-bottom:6rem\n}\n}\nmain{\n  width:48rem;\n  margin:auto;\n  max-width:100vw\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},315:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"Status"}),o=n(52),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span")}),[],!1,null,"33f08f1f",null);e.default=component.exports},316:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("3247e967",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var r=n(13),o=n(0),l=n(4),c=n(115),d=n(16),f=n(14),h=n(214),v=n(46),m=n(88),_=n(213),y=n(5),x=n(89).f,w=n(35).f,k=n(18).f,I=n(318),M=n(215).trim,S="Number",z=o.Number,C=z.prototype,N=o.TypeError,j=l("".slice),E=l("".charCodeAt),L=function(t){var e=_(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,r,o,l,c,d,code,f=_(t,"number");if(m(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(e=E(f,0))||45===e){if(88===(n=E(f,2))||120===n)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=j(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(S,!z(" 0o1")||!z("0b1")||z("+0x1"))){for(var O,H=function(t){var e=arguments.length<1?0:z(L(t)),n=this;return v(C,n)&&y((function(){I(n)}))?h(Object(e),n,H):e},F=r?x(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;F.length>T;T++)f(z,O=F[T])&&!f(H,O)&&k(H,O,w(z,O));H.prototype=C,C.constructor=H,d(o,S,H)}},318:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},319:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("3d0e5a44",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n(311)},321:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-3cf6f994]{\n  display:inline-flex;\n  border-radius:50%;\n  display:grid;\n  height:1.75rem;\n  width:1.75rem;\n  place-content:center\n}\n.visually-hidden[data-v-3cf6f994]{\n  border:0;\n  padding:0;\n  margin:0;\n  position:absolute!important;\n  height:1px;\n  width:1px;\n  overflow:hidden;\n  clip:rect(1px 1px 1px 1px);\n  clip:rect(1px,1px,1px,1px);\n  -webkit-clip-path:inset(50%);\n          clip-path:inset(50%);\n  white-space:nowrap\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},322:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("99cd8248",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"IconLink",props:{href:{type:String,default:"#"},target:{type:String,default:"_self"},description:{type:String,default:""}}}),o=(n(320),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href,target:t.target,rel:"noreferrer noopener"}},[""!=t.description?n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.description))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"3cf6f994",null);e.default=component.exports},325:function(t,e,n){"use strict";n(316)},326:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-1ef6a0cd]{\n  display:inline-flex;\n  align-items:center;\n  gap:.125em;\n  line-height:1.3em;\n  border-bottom:1px solid #666\n}\n.link-container[data-v-1ef6a0cd]{\n  position:relative\n}\n.link-placholder[data-v-1ef6a0cd]{\n  opacity:0;\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  -o-user-select:none;\n  user-select:none\n}\n.link-visible[data-v-1ef6a0cd]{\n  position:absolute;\n  top:0;\n  left:-1em;\n  right:-1em;\n  text-align:center;\n  pointer-events:none;\n  transition:all .2s ease\n}\na:hover .link-visible[data-v-1ef6a0cd]{\n  font-weight:700;\n  letter-spacing:-.025em\n}\nsvg[data-v-1ef6a0cd]{\n  display:inline-block;\n  width:1rem;\n  height:1rem;\n  stroke-width:1.5px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},327:function(t,e,n){"use strict";n(319)},328:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nul[data-v-f99b6e00]{\n  display:flex\n}\nli[data-v-f99b6e00]{\n  margin-right:0.5rem\n}\nli[data-v-f99b6e00]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n(322)},330:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.avatar[data-v-076d0fca]{\n  position:relative;\n  margin-bottom:2rem;\n  height:6rem;\n  width:6rem;\n  border-radius:9999px;\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n  background-image:url(https://avatars.githubusercontent.com/u/41451264);\n  background-size:cover\n}\n.status[data-v-076d0fca]{\n  position:absolute;\n  bottom:0;\n  right:0;\n  display:flex;\n  height:2rem;\n  width:2rem;\n  align-items:center;\n  justify-content:center;\n  border-radius:9999px;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity))\n}\nsvg[data-v-076d0fca]{\n  stroke-width:2px;\n  height:1.25rem;\n  width:1.25rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},331:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"Link",props:{href:{type:String,default:"#"},target:{type:String,default:"_self"}}}),o=(n(325),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href,target:t.target,rel:"noreferrer noopener"}},[n("span",{staticClass:"link-container"},[n("span",{staticClass:"link-placholder",attrs:{"aria-hidden":"true"}},[t._t("default")],2),t._v(" "),n("span",{staticClass:"link-visible"},[t._t("default")],2)]),t._v(" "),"_blank"==t.target?n("svg",{staticClass:"icon icon-tabler icon-tabler-external-link",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"}}),t._v(" "),n("line",{attrs:{x1:"10",y1:"14",x2:"20",y2:"4"}}),t._v(" "),n("polyline",{attrs:{points:"15 4 20 4 20 9"}})]):t._e()])}),[],!1,null,"1ef6a0cd",null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(312),l=r.a.extend({name:"Socials",components:{Icon:o.default}}),c=(n(327),n(52)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("IconLink",{staticClass:"bg-gray-700",attrs:{href:"https://github.com/martijnvdb87",target:"_blank",description:"Visit my Github page (opens in new tab)"}},[n("Icon",{attrs:{type:"github",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-green-500",attrs:{href:"https://codepen.io/Martijnvdb87",target:"_blank",description:"Visit my Codepen page (opens in new tab)"}},[n("Icon",{attrs:{type:"codepen",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-blue-500",attrs:{href:"https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190/",target:"_blank",description:"Visit my LinkedIn page (opens in new tab)"}},[n("Icon",{attrs:{type:"linkedin",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-pink-500",attrs:{href:"https://www.instagram.com/martijnvdb87/",target:"_blank",description:"Visit my Instagram page (opens in new tab)"}},[n("Icon",{attrs:{type:"instagram",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-yellow-500",attrs:{href:"mailto:martijnvdb87@gmail.com",target:"_blank",description:"Send me an email"}},[n("Icon",{attrs:{type:"email",color:"white"}})],1)],1)])}),[],!1,null,"f99b6e00",null);e.default=component.exports;installComponents(component,{Icon:n(312).default,IconLink:n(324).default})},333:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(315),l=r.a.extend({name:"Avatar",components:{Status:o.default}}),c=(n(329),n(52)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar"},[e("Status")],1)}),[],!1,null,"076d0fca",null);e.default=component.exports;installComponents(component,{Status:n(315).default})},334:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("58f8e402",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n(334)},337:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nh1[data-v-6f072e7c]{\n  font-size:1.25rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity))\n}\nheader[data-v-6f072e7c]{\n  margin-bottom:4rem\n}\nheader p[data-v-6f072e7c]{\n  margin-bottom:2rem\n}\nh2[data-v-6f072e7c]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n  font-weight:600\n}\narticle p[data-v-6f072e7c]{\n  margin-bottom:3.5rem;\n  font-size:1rem;\n  line-height:1.5rem\n}\nsection header[data-v-6f072e7c]{\n  display:flex;\n  align-items:center;\n  gap:.5em;\n  margin-bottom:0.5rem;\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},352:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(310),l=n(331),c=n(332),d=n(333),f=n(312),h=r.a.extend({name:"IndexPage",components:{App:o.default,Link:l.default,Socials:c.default,Avatar:d.default,Icon:f.default},head:{title:"Home — Martijn van den Bosch"}}),v=(n(336),n(52)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("App",[n("Avatar"),t._v(" "),n("header",[n("h1",[t._v("Martijn van den Bosch")]),t._v(" "),n("p",[t._v("Full Stack Developer")])]),t._v(" "),n("article",[n("section",[n("header",[n("Icon",{attrs:{type:"id",size:"4",color:"gray-900"}}),t._v(" "),n("h2",[t._v("Introduction")])],1),t._v(" "),n("p",[t._v("\n        I'm a self-thought full stack developer from the Netherlands. I\n        started developing websites when I was 12 years old and today, more\n        than 20 years later, I still love every second of it.\n      ")])]),t._v(" "),n("section",[n("header",[n("Icon",{attrs:{type:"building-skyscraper",size:"4",color:"gray-900"}}),t._v(" "),n("h2",[t._v("Work")])],1),t._v(" "),n("p",[t._v("\n        Currently, I'm working as lead developer at\n        "),n("Link",{attrs:{href:"https://www.skillstown.com",target:"_blank"}},[t._v("SkillsTown")]),t._v(", which is a company part of the\n        "),n("Link",{attrs:{href:"https://www.saltagroup.com/",target:"_blank"}},[t._v("Salta Group")]),t._v("\n        (formerly known as the NCOI Group). We are using the\n        "),n("Link",{attrs:{href:"https://en.wikipedia.org/wiki/LAMP_(software_bundle)",target:"_blank"}},[t._v("LAMP stack")]),t._v("\n        for our online learning platform.\n      ")],1)]),t._v(" "),n("section",[n("header",[n("Icon",{attrs:{type:"sofa",size:"4",color:"gray-900"}}),t._v(" "),n("h2",[t._v("Free time")])],1),t._v(" "),n("p",[t._v("\n        Besides watching series on Netflix and spending time with my wife, I\n        like working on multiple\n        "),n("Link",{attrs:{href:"https://github.com/martijnvdb87?tab=repositories",target:"_blank"}},[t._v("personal projects")]),t._v(".\n      ")],1)]),t._v(" "),n("Socials")],1)],1)}),[],!1,null,"6f072e7c",null);e.default=component.exports;installComponents(component,{Avatar:n(333).default,Icon:n(312).default,Link:n(331).default,Socials:n(332).default,App:n(310).default})}}]);