(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5],{309:function(t,e,n){"use strict";n.r(e);n(68),n(53),n(30),n(146);var r=n(2).a.extend({name:"Icon",props:{type:{type:String,default:""},stroke:{type:String,default:"2"},size:{type:String,default:"5"},color:{type:String,default:"black"}},computed:{getSize:function(){return"w-".concat(this.size," h-").concat(this.size)},getColor:function(){return["white","black"].includes(this.color)?"text-".concat(this.color):"text-".concat(1===this.color.split("-").length?"".concat(this.color,"-500"):this.color)}}}),l=n(52),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon icon-tabler",class:[t.getSize,t.getColor],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":t.stroke}},["github"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}})]:"codepen"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M3 15l9 6l9 -6l-9 -6l-9 6"}}),t._v(" "),n("path",{attrs:{d:"M3 9l9 6l9 -6l-9 -6l-9 6"}}),t._v(" "),n("line",{attrs:{x1:"3",y1:"9",x2:"3",y2:"15"}}),t._v(" "),n("line",{attrs:{x1:"21",y1:"9",x2:"21",y2:"15"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"3",x2:"12",y2:"9"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"21"}})]:"linkedin"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"2"}}),t._v(" "),n("line",{attrs:{x1:"8",y1:"11",x2:"8",y2:"16"}}),t._v(" "),n("line",{attrs:{x1:"8",y1:"8",x2:"8",y2:"8.01"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"11"}}),t._v(" "),n("path",{attrs:{d:"M16 16v-3a2 2 0 0 0 -4 0"}})]:"instagram"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"4"}}),t._v(" "),n("circle",{attrs:{cx:"12",cy:"12",r:"3"}}),t._v(" "),n("line",{attrs:{x1:"16.5",y1:"7.5",x2:"16.5",y2:"7.501"}})]:"email"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"3",y:"5",width:"18",height:"14",rx:"2"}}),t._v(" "),n("polyline",{attrs:{points:"3 7 12 13 21 7"}})]:"id"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("rect",{attrs:{x:"3",y:"4",width:"18",height:"16",rx:"3"}}),t._v(" "),n("circle",{attrs:{cx:"9",cy:"10",r:"2"}}),t._v(" "),n("line",{attrs:{x1:"15",y1:"8",x2:"17",y2:"8"}}),t._v(" "),n("line",{attrs:{x1:"15",y1:"12",x2:"17",y2:"12"}}),t._v(" "),n("line",{attrs:{x1:"7",y1:"16",x2:"17",y2:"16"}})]:"building-skyscraper"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("line",{attrs:{x1:"3",y1:"21",x2:"21",y2:"21"}}),t._v(" "),n("path",{attrs:{d:"M5 21v-14l8 -4v18"}}),t._v(" "),n("path",{attrs:{d:"M19 21v-10l-6 -4"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"9",x2:"9",y2:"9.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"12",x2:"9",y2:"12.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"15",x2:"9",y2:"15.01"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"18",x2:"9",y2:"18.01"}})]:"sofa"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"}}),t._v(" "),n("path",{attrs:{d:"M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3"}}),t._v(" "),n("path",{attrs:{d:"M12 5v9"}})]:"code"==t.type?[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("polyline",{attrs:{points:"7 8 3 12 7 16"}}),t._v(" "),n("polyline",{attrs:{points:"17 8 21 12 17 16"}}),t._v(" "),n("line",{attrs:{x1:"14",y1:"4",x2:"10",y2:"20"}})]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("e27cc43e",content,!0,{sourceMap:!1})},318:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("3d0e5a44",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n(312)},320:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-3cf6f994]{\n  display:inline-flex;\n  border-radius:50%;\n  display:grid;\n  height:1.75rem;\n  width:1.75rem;\n  place-content:center\n}\n.visually-hidden[data-v-3cf6f994]{\n  border:0;\n  padding:0;\n  margin:0;\n  position:absolute!important;\n  height:1px;\n  width:1px;\n  overflow:hidden;\n  clip:rect(1px 1px 1px 1px);\n  clip:rect(1px,1px,1px,1px);\n  -webkit-clip-path:inset(50%);\n          clip-path:inset(50%);\n  white-space:nowrap\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"IconLink",props:{href:{type:String,default:"#"},target:{type:String,default:"_self"},description:{type:String,default:""}}}),l=(n(319),n(52)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href,target:t.target,rel:"noreferrer noopener"}},[""!=t.description?n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.description))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"3cf6f994",null);e.default=component.exports},328:function(t,e,n){"use strict";n(318)},329:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nul[data-v-f99b6e00]{\n  display:flex\n}\nli[data-v-f99b6e00]{\n  margin-right:0.5rem\n}\nli[data-v-f99b6e00]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},333:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(309),o=r.a.extend({name:"Socials",components:{Icon:l.default}}),c=(n(328),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("IconLink",{staticClass:"bg-gray-700",attrs:{href:"https://github.com/martijnvdb87",target:"_blank",description:"Visit my Github page (opens in new tab)"}},[n("Icon",{attrs:{type:"github",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-green-500",attrs:{href:"https://codepen.io/Martijnvdb87",target:"_blank",description:"Visit my Codepen page (opens in new tab)"}},[n("Icon",{attrs:{type:"codepen",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-blue-500",attrs:{href:"https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190/",target:"_blank",description:"Visit my LinkedIn page (opens in new tab)"}},[n("Icon",{attrs:{type:"linkedin",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-pink-500",attrs:{href:"https://www.instagram.com/martijnvdb87/",target:"_blank",description:"Visit my Instagram page (opens in new tab)"}},[n("Icon",{attrs:{type:"instagram",color:"white"}})],1)],1),t._v(" "),n("li",[n("IconLink",{staticClass:"bg-yellow-500",attrs:{href:"mailto:martijnvdb87@gmail.com",target:"_blank",description:"Send me an email"}},[n("Icon",{attrs:{type:"email",color:"white"}})],1)],1)])}),[],!1,null,"f99b6e00",null);e.default=component.exports;installComponents(component,{Icon:n(309).default,IconLink:n(325).default})}}]);