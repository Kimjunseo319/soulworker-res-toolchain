(function(t){function n(n){for(var i,r,v=n[0],a=n[1],o=n[2],c=0,f=[];c<v.length;c++)r=v[c],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,o||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,r=1;r<e.length;r++){var v=e[r];0!==u[v]&&(i=!1)}i&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},r={app:0},u={app:0},s=[];function v(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-7088fdb0":"d0fa7b9b"}[t]+".js"}function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(t){var n=[],e={"chunk-7088fdb0":1};r[t]?n.push(r[t]):0!==r[t]&&e[t]&&n.push(r[t]=new Promise((function(n,e){for(var i="css/"+({}[t]||t)+"."+{"chunk-7088fdb0":"33fbf2ed"}[t]+".css",u=a.p+i,s=document.getElementsByTagName("link"),v=0;v<s.length;v++){var o=s[v],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===i||c===u))return n()}var f=document.getElementsByTagName("style");for(v=0;v<f.length;v++){o=f[v],c=o.getAttribute("data-href");if(c===i||c===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var i=n&&n.target&&n.target.src||u,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[t],l.parentNode.removeChild(l),e(s)},l.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){r[t]=0})));var i=u[t];if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(n,e){i=u[t]=[n,e]}));n.push(i[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=v(t);var f=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(l);var e=u[t];if(0!==e){if(e){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,e[1](f)}u[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/soulworker-res-toolchain/",a.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var f=0;f<o.length;f++)n(o[f]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"0ab6":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("id").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").swstring("v15").swstring("v16").swstring("v17").swstring("v18").swstring("v19").swstring("v20").swstring("v21").swstring("v22").swstring("v23").swstring("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34")}},"136a":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("id").uint8("unknown1").uint16("strLen1").swstring("str1")}},1676:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").uint32("v15").uint32("v16").uint32("v17").uint32("v18").uint32("v19").uint32("v20").uint32("v21").uint32("v22").uint32("v23").uint32("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34").swstring("v35").swstring("v36").swstring("v37").swstring("v38").swstring("v39").swstring("v40").swstring("v41").swstring("v42").swstring("v43").swstring("v44").uint32("v45").uint32("v46").uint32("v47").uint32("v48").uint32("v49").uint32("v50").uint32("v51").uint32("v52").uint32("v53").uint32("v54")}},"2acc":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint16("id").uint8("v1").uint8("v2").uint8("v3").uint8("v4").uint8("v5").uint32("v6").uint8("v7").uint8("v8").uint8("v9").uint8("v10").uint32("v11").uint8("v12").uint32("v13")}},3582:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint16("v5").uint16("v6").uint16("v7").uint16("v8").uint16("v9").swstring("v10").swstring("v11").swstring("v12").swstring("v13").swstring("v14")}},"3ce3":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint16("id").uint32("v1").uint32("v2").uint32("v3").uint32("v4").uint32("v5").uint32("v6").swstring("v7")}},"3e10":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("id").uint32("v5").uint8("v6").uint8("v7").uint16("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint16("v13").uint8("v14").uint32("v15").uint32("v16").uint32("v17").uint16("v18").uint8("v19").uint8("v20").uint8("v21").uint8("v22").uint32("v23").swstring("v24").uint8("v25").uint8("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint8("v33").uint8("v34").uint8("v35").uint8("v36").uint8("v37").uint32("v38").uint32("v39").uint32("v40").uint32("v41").uint32("v42").int32("v43").int32("v44").int32("v45").int32("v46").int32("v47").uint32("v48").uint32("v49").uint32("v50").uint16("v51").uint32("v52").uint32("v53").uint32("v54").uint16("v55").uint32("v56").uint16("v57").uint32("v58").uint8("v59").uint16("v60").uint32("v61").uint16("v62").uint8("v63").uint8("v64").uint32("v65").uint8("v66").uint32("v67").uint8("v68").uint8("v69").uint32("v70").uint32("v71")}},"478e":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint8("id").uint8("v1").uint8("v2").uint8("v3").uint8("v4").uint8("v5").uint8("v6").uint8("v7").uint8("v8").uint8("v9").uint8("v10").uint8("v11").swstring("v12").swstring("v13").swstring("v4").swstring("v15").swstring("v16")}},"4b06":function(t,n,e){"use strict";e("6bf0")},5019:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("id").uint8("v1").uint8("v2").uint16("v3").uint16("v4").swstring("v5").uint8("v6")}},"6b58":function(t,n,e){},"6bf0":function(t,n,e){},"6d99":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").swstring("v15").swstring("v16").swstring("v17").swstring("v18").swstring("v19").swstring("v20").swstring("v21").swstring("v22").swstring("v23").swstring("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34")}},"728d":function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint16("id").uint16("v6").uint16("v7").uint16("v8").uint16("v9").swstring("v10").swstring("v11").swstring("v12").swstring("v13").swstring("v14")}},9452:function(t,n,e){},"9f58":function(t,n,e){"use strict";(function(t){e("99af"),e("a15b"),e("d81d"),e("b0c0"),e("b64b"),e("d3b7"),e("07ac"),e("3ca3"),e("ddb0"),e("2b3d"),e("96cf");var i=e("1da1"),r=e("fe3a"),u=e("7a23"),s=e("136a"),v=e("e2e1"),a=e("b169"),o=e("3e10"),c=e("5019"),f=e("3ce3"),l=e("2acc"),d=e("478e"),g=e("6d99"),b=e("1676"),p=e("0ab6"),w=e("728d"),h=e("dc84"),m=e("3582"),j=e("bf16"),O=e("df7c");n["a"]=Object(u["g"])({name:"app",methods:{convertToCSV:function(){var t=Object.keys(this.file.parsed.rows[0]).join(),n=this.file.parsed.rows.map((function(t){return Object.values(t).join()})).join("\n");this.downloadFile("".concat(t,"\n").concat(n),"".concat(this.file.filename,".csv"))},downloadFile:function(t,n){var e=t,i=new Blob([e],{type:"application/csv;charset=utf-16;"}),r=document.createElement("a"),u=URL.createObjectURL(i);r.href=u,r.style.visibility="hidden",r.download=n,document.body.appendChild(r),r.click(),document.body.removeChild(r)},onSelectFile:function(n){var e=this,i=n.target;if(!(i.files.length<1)){this.file=null;var r=i.files[0],u=new FileReader;u.onload=function(n){return e.file=e.resParse(Object(O["basename"])(r.name.toLowerCase(),".res"),t.from(n.target.result))},u.readAsArrayBuffer(r)}},resParse:function(t,n){if(!(t in this.parsers))return null;var e=this.parsers[t];return{filename:t,parsed:e.parse(n)}},resRegisterParser:function(t,n){var e=t.toLowerCase();this.parsers[e]=(new r["Parser"]).endianess("little").uint32("count").array("rows",{length:"count",type:n(new r["Parser"])}).uint16("crcLen").string("crc",{length:"crcLen"})}},data:function(){return{parsers:{},file:null}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.resRegisterParser("tb_UI_String",s["a"]),t.resRegisterParser("tb_Option_String",v["a"]),t.resRegisterParser("tb_item_model",a["a"]),t.resRegisterParser("tb_item",o["a"]),t.resRegisterParser("tb_Appearance",c["a"]),t.resRegisterParser("tb_Create_Cloth",f["a"]),t.resRegisterParser("tb_CreateOption",l["a"]),t.resRegisterParser("tb_Customize_Info",d["a"]),t.resRegisterParser("tb_Customize_Eyes",g["a"]),t.resRegisterParser("tb_Customize_Hair",b["a"]),t.resRegisterParser("tb_Customize_Skin",p["a"]),t.resRegisterParser("tb_Customize_View_Ani",w["a"]),t.resRegisterParser("tb_Customize_View_Ani",w["a"]),t.resRegisterParser("tb_Customize_View_Costume",h["a"]),t.resRegisterParser("tb_Customize_View_Sound",m["a"]),t.resRegisterParser("tb_Customize_View_Weapon",j["a"]);case 16:case"end":return n.stop()}}),n)})))()},components:{TableComponent:Object(u["f"])((function(){return e.e("chunk-7088fdb0").then(e.bind(null,"1ea4"))}))}})}).call(this,e("b639").Buffer)},ad2f:function(t,n,e){"use strict";e("9452")},b169:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("id").swstring("v5").swstring("v6").swstring("v7").int16("v8").uint16("v9").uint16("v10").uint16("v11").swstring("v12").uint8("v13")}},b636:function(t,n,e){},bf16:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9")}},cd49:function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("7a23"),r=Object(i["n"])("data-v-dca51846");Object(i["j"])("data-v-dca51846");var u={class:"sidebar"},s={class:"upload-button"},v=Object(i["e"])("label",{class:"upload-res",for:"upload-res"},"Import RES file",-1),a=Object(i["e"])("a",{target:"_blank",class:"how-to",href:"https://digitalreadymarketing.com/open-chinese-japanese-encoding-gwmt-csv-file/"}," How To: correct open japanese files in excel ",-1),o={class:"supports"},c=Object(i["e"])("h3",null,"Supports files",-1),f={class:"main"};Object(i["i"])();var l=r((function(t,n,e,r,l,d){var g=Object(i["l"])("TableComponent");return Object(i["h"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("aside",u,[Object(i["e"])("div",s,[v,Object(i["e"])("input",{type:"file",accept:".res",id:"upload-res",onChange:n[1]||(n[1]=function(){return t.onSelectFile&&t.onSelectFile.apply(t,arguments)})},null,32)]),t.file?(Object(i["h"])(),Object(i["c"])(i["a"],{key:0},[Object(i["e"])("div",{class:"convert-to-csv",onClick:n[2]||(n[2]=function(){return t.convertToCSV&&t.convertToCSV.apply(t,arguments)})},"Export CSV file"),a],64)):Object(i["d"])("",!0),Object(i["e"])("div",o,[c,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(t.parsers,(function(t,n){return Object(i["h"])(),Object(i["c"])("div",{class:"supports-name",key:n},Object(i["m"])(n),1)})),128))])]),Object(i["e"])("main",f,[null!==t.file?(Object(i["h"])(),Object(i["c"])(g,{key:0,table:t.file.parsed},null,8,["table"])):Object(i["d"])("",!0)])],64)})),d=e("9f58");e("f4e9"),e("4b06"),e("f61a"),e("ad2f");d["a"].render=l,d["a"].__scopeId="data-v-dca51846";var g=d["a"];Object(i["b"])(g).mount("#app")},dc84:function(t,n,e){"use strict";var i=e("fe3a");e("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i["Parser"];return t.endianess("little").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").uint32("v15").uint32("v16").swstring("v17")}},e2e1:function(t,n,e){"use strict";var i=e("fe3a");n["a"]=function(){return(new i["Parser"]).endianess("little").uint16("id").uint8("u1").uint16("u2").uint16("u3").uint8("u4").uint8("u5")}},f4e9:function(t,n,e){"use strict";e("6b58")},f61a:function(t,n,e){"use strict";e("b636")},f7f2:function(t,n,e){"use strict";var i=e("fe3a"),r=(e("ac1f"),e("5319"),function(t){return t.replace(/\\n/gi,"<br/>")}),u=function(t){return function(){return 2*this[t]}};i["Parser"].prototype.swstring=function(t){var n="".concat(t,"Len");return this.uint16(n).string(t,{encoding:"utf-16",length:u(n),formatter:r})}}});