(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["filterForm "],{"1d43":function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"y-filter-form"},[l("y-filter-form",{attrs:{form:t.form,layoutType:t.layoutType}},[l("y-filter-form-item",{attrs:{label:"表单标题1"}},[l("y-select",{attrs:{"default-value":"lucy"}},[l("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")]),l("a-select-option",{attrs:{value:"lucy"}},[t._v(" Lucy ")]),l("a-select-option",{attrs:{value:"disabled",disabled:""}},[t._v(" Disabled ")]),l("a-select-option",{attrs:{value:"Yiminghe"}},[t._v(" yiminghe ")])],1)],1),l("y-filter-form-item",{attrs:{label:"表单标题11"}},[l("y-range-picker")],1),l("y-filter-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("表单标题 "),l("y-tooltip",{attrs:{title:"提示信息"}},[l("a-icon",{attrs:{type:"exclamation-circle"}})],1)],1),l("y-input",{attrs:{placeholder:"请输入"}})],1),l("y-filter-form-item",{attrs:{label:"表单标题111"}},[l("y-input",{attrs:{placeholder:"请输入"}})],1),l("y-filter-form-item",{attrs:{label:"表单标题1111"}},[l("y-input",{attrs:{placeholder:"请输入"}})],1),l("y-filter-form-item",{attrs:{label:"表单标题11111"}},[l("y-input",{attrs:{placeholder:"请输入"}})],1),l("y-filter-form-item",{attrs:{label:"表单标题111111"}},[l("y-input",{attrs:{placeholder:"请输入"}})],1),l("template",{slot:"btnCol"},[l("y-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 查询 ")]),l("y-button",[t._v(" 重置 ")])],1)],2)],1)},r=[],i={name:"filterForm",props:{layoutType:{type:String,default:"3col"}},data:function(){return{form:{user:"",password:""}}}},s=i,o=l("2877"),n=Object(o["a"])(s,a,r,!1,null,null,null);e["a"]=n.exports},cccf:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"contanier"},[l("y-select",{attrs:{options:t.options},model:{value:t.layoutType,callback:function(e){t.layoutType=e},expression:"layoutType"}}),l("funTitleDetail",{attrs:{title:"过滤表单",detail:"过滤表单常见布局有两种，单列布局和三列布局，通过控制 y-filter-form 的 layoutType 即可快速修改三列布局或单列布局"}}),l("com-show",{staticStyle:{padding:"16px 24px"}},[l("filterForm",{attrs:{layoutType:t.layoutType}}),l("filterForm2",{attrs:{layoutType:t.layoutType}})],1)],1)},r=[],i=l("1d43"),s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"y-filter-form"},[l("y-filter-form",{attrs:{form:t.form,layoutType:"1col"}},[l("y-filter-form-item",{attrs:{label:"统计范围"}},[l("y-name-select",{staticStyle:{"margin-right":"8px"},attrs:{title:"主机池"}}),l("y-name-select",{staticStyle:{"margin-right":"8px"},attrs:{title:"集群"}}),l("y-name-select",{staticStyle:{"margin-right":"8px"},attrs:{title:"宿主机"}}),l("y-name-select",{attrs:{title:"虚拟机"}})],1),l("y-filter-form-item",{attrs:{label:"统计时间"}},[l("y-range-picker")],1),l("y-filter-form-item",{attrs:{label:"统计类型"}},[l("y-link-tag",{attrs:{data:t.dataArr,selectType:1},scopedSlots:t._u([{key:"hzw",fn:function(){return[l("div",{staticStyle:{width:"100px",height:"100%"}},[l("img",{staticStyle:{width:"50%",height:"100%"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c",alt:""}}),l("span",[t._v("海贼王")])])]},proxy:!0}])})],1),l("y-divider",{attrs:{dashed:""}}),l("template",{slot:"btnCol"},[l("y-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 查询 ")]),l("y-button",[t._v(" 重置 ")])],1)],2)],1)},o=[],n={name:"filterForm2",data:function(){return{form:{user:"",password:""},dataArr:[{label:"CNware",value:"1",disabled:!0},{slot:"hzw",value:"2"},{label:"PowerVC",value:"3"},{label:"标签4",value:"4"},{label:"标签5",value:"5"},{label:"CPU利用率(%)",value:"6"},{label:"CPU使用情况(MHz)",value:"7"},{label:"内存利用率(%)",value:"8"},{label:"磁盘利用率(%)",value:"9"},{label:"网络吞吐量入统计(Mbps)",value:"10"},{label:"网络吞吐量出统计(Mbps)",value:"11"}]}}},c=n,u=l("2877"),y=Object(u["a"])(c,s,o,!1,null,null,null),p=y.exports,m={name:"filterFormPage",components:{filterForm:i["a"],filterForm2:p},data:function(){return{layoutType:"3col",options:[{value:"3col",label:"三列布局"},{value:"1col",label:"单列布局"}]}}},f=m,b=Object(u["a"])(f,a,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=filterForm .80908eb9.js.map