(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["loading "],{"2f9f":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("title-detail",{attrs:{title:"Loading 加载",detail:"适合于整页或页面模块内的数据加载，体现系统的运转状态。"}}),a("h3",{staticClass:"fun-title"},[t._v("代码演示")]),a("declareList",{attrs:{title:"通用原则",value:t.declareList}}),a("declareList",{attrs:{title:"行为",value:t.declareList2}}),a("load1"),a("load2"),a("load3"),a("load4"),a("api-table",{attrs:{data:t.tableData}})],1)},l=[],i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("funTitleDetail",{attrs:{title:"基本用法",detail:"一个简单的 loading 状态。"}}),a("com-show",[a("y-loading")],1),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html)}},[t._v("\n      ")]),t._v("\n  ")])],1)},s=[],r={name:"load1",data:function(){return{html:"<y-loading />"}}},o=r,d=a("2877"),p=Object(d["a"])(o,i,s,!1,null,null,null),c=p.exports,g=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("funTitleDetail",{attrs:{title:"各种大小",detail:"小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"}}),a("com-show",[a("y-loading",{attrs:{size:"small"}}),a("y-loading"),a("y-loading",{attrs:{size:"large"}})],1),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html)}},[t._v("\n      ")]),t._v("\n  ")])],1)},u=[],m={name:"load1",data:function(){return{html:'<y-loading size="small" />\n      <y-loading />\n      <y-loading size="large" />'}}},x=m,f=Object(d["a"])(x,g,u,!1,null,null,null),v=f.exports,b=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("funTitleDetail",{attrs:{title:"容器",detail:"放入一个容器中。"}}),a("com-show",[a("div",{staticStyle:{"text-align":"center",background:"rgba(0, 0, 0, 0.05)","border-radius":"4px","margin-bottom":"20px",padding:"30px 50px",margin:"20px 0"}},[a("y-loading")],1),a("y-loading",{attrs:{spinning:t.spinning}},[a("div",{staticStyle:{"text-align":"center",background:"rgba(0, 0, 0, 0.05)","border-radius":"4px","margin-bottom":"20px",padding:"30px 50px",margin:"20px 0"}})]),a("a-switch",{model:{value:t.spinning,callback:function(n){t.spinning=n},expression:"spinning"}})],1),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html)}},[t._v("\n      ")]),t._v("\n  ")]),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-JavaScript",domProps:{textContent:t._s(t.js)}},[t._v("\n      ")]),t._v("\n  ")])],1)},y=[],_={name:"load1",data:function(){return{html:'<div style="text-align: center;\n              background: rgba(0, 0, 0, 0.05);\n              border-radius: 4px;\n              margin-bottom: 20px;\n              padding: 30px 50px;\n              margin: 20px 0;">\n        <y-loading />\n      </div>\n      <y-loading :spinning="spinning">\n        <div style="text-align: center;\n              background: rgba(0, 0, 0, 0.05);\n              border-radius: 4px;\n              margin-bottom: 20px;\n              padding: 30px 50px;\n              margin: 20px 0;"></div>\n      </y-loading>\n      <a-switch v-model="spinning" />',spinning:!1,js:"data() {\n            return {\n              spinning: false,\n            }\n        }"}}},h=_,C=Object(d["a"])(h,b,y,!1,null,null,null),w=C.exports,k=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("funTitleDetail",{attrs:{title:"自定义",detail:"自定义描述文案、使用自定义指示符。"}}),a("com-show",[a("span",[t._v("自定义描述文案：")]),a("y-loading",{attrs:{tip:"Loading..."}},[a("div",{staticStyle:{border:"1px solid #91d5ff","background-color":"#e6f7ff",padding:"30px"}},[t._v(" 我的描述文案是自定义的。。。 ")])]),a("span",[t._v("自定义指示符：")]),a("y-loading",[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html)}},[t._v("\n      ")]),t._v("\n  ")])],1)},L=[],j={name:"load1",data:function(){return{html:'<span>自定义描述文案：</span>\n      <y-loading tip="Loading...">\n        <div style="border: 1px solid #91d5ff;background-color: #e6f7ff;padding: 30px;">\n          我的描述文案是自定义的。。。\n        </div>\n      </y-loading>\n      <span>自定义指示符：</span>\n      <y-loading>\n        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />\n      </y-loading>'}}},z=j,D=Object(d["a"])(z,k,L,!1,null,null,null),E=D.exports,O={name:"Myloading",components:{load1:c,load2:v,load3:w,load4:E},data:function(){return{declareList:["设定加载的上线时间，超过上限时间需给用户明确反馈加载慢的原因，以缓解用户等待的焦虑和迷失","页面模块内使用时，均为非模态的加载方式，加载过程不打扰用户，无需让用户等待加载完才进行其他操作"],declareList2:["前置条件：进入新页面、点击刷新按钮或点击某个操作按钮后，处于等待异步数据或正在渲染过程时会触发加载组件，允许多个加载同时出现。","当加载超过上限时间时，需同时给出反馈，告诉用户加载慢的原因","加载成功后则显示加载结果","入场动效时间保持在 200~300ms "],tableData:[{params:"delay",explain:"延迟显示加载效果的时间（防止闪烁）",type:"number (毫秒)",default:""},{params:"indicator",explain:"加载指示符",type:"vNode | slot",default:""},{params:"size",explain:"组件大小，可选值为 small default large",type:"string",default:"default"},{params:"spinning",explain:"是否为加载中状态",type:"boolean",default:"true"},{params:"tip",explain:"当作为包裹元素时，可以自定义描述文案",type:"string",default:""},{params:"wrapperClassName",explain:"包装器的类属性",type:"\tstring",default:""}]}}},P=O,S=Object(d["a"])(P,e,l,!1,null,"42c387e5",null);n["default"]=S.exports}}]);
//# sourceMappingURL=loading .b965fb24.js.map