(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageViews "],{8522:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("router-view"),t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:n._s(n.html)}},[n._v("\n      ")]),n._v("\n      "),t("code",{staticClass:"language-javascript",domProps:{textContent:n._s(n.js)}},[n._v("\n      ")]),n._v("\n  ")]),"formPage"===n.$route.name?t("div",[t("funTitleDetail",{attrs:{title:"box1",detail:"表单盒子"}}),t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:n._s(n.htmlObj.box1)}},[n._v("\n      ")]),n._v("\n      "),t("code",{staticClass:"language-javascript",domProps:{textContent:n._s(n.jsObj.box1)}},[n._v("\n      ")]),n._v("\n  ")]),t("funTitleDetail",{attrs:{title:"box2",detail:"表格盒子"}}),t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:n._s(n.htmlObj.box2)}},[n._v("\n      ")]),n._v("\n      "),t("code",{staticClass:"language-javascript",domProps:{textContent:n._s(n.jsObj.box2)}},[n._v("\n      ")]),n._v("\n  ")])],1):n._e()],1)},l=[],o=(t("b0c0"),{data:function(){return{htmlObj:{pageHeaderA:'<template>\n        <div class="y-page-header-a">\n          \x3c!-- 面包屑 --\x3e\n          <div class="breadcrumb">\n            <y-breadcrumb />\n          </div>\n          \x3c!-- 标题操作 --\x3e\n          <div class="title">\n            <div class="title-left">\n              <div class="back-btn">\n                <y-button icon="arrow-left" class="no-bg"></y-button>\n              </div>\n              <h3 class="page-title">页面标题</h3>\n              <y-tag color="green">成功</y-tag>\n              <y-button type="link">收起<a-icon type="up"/></y-button>\n            </div>\n            <div class="title-right">\n              <y-tips-button :tooltip="true" title="说明信息">\n                <div class="guide"><a-icon type="question-circle" />指引说明</div>\n              </y-tips-button>\n              <y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>\n            </div>\n          </div>\n          \x3c!-- 自定义标签 --\x3e\n          <div class="tags">\n            <y-tag-action v-model="tagData" />\n          </div>\n          \x3c!-- 信息组 --\x3e\n          <div class="info">\n            <a-row v-for="i in 4" :key="i">\n              <a-col :span="8" v-for="j in 3" :key="i + j">\n                <span class="info-title">标签：</span>\n                <span class="info-text">文本{{ i + \'\' + j }}</span>\n              </a-col>\n            </a-row>\n          </div>\n          \x3c!-- Tab选项卡 --\x3e\n          <div class="tabs">\n            <y-tabs default-active-key="1">\n              <a-tab-pane key="1" tab="选项卡"> </a-tab-pane>\n              <a-tab-pane key="2" tab="选项卡"> </a-tab-pane>\n              <a-tab-pane key="3" tab="选项卡"> </a-tab-pane>\n            </y-tabs>\n          </div>\n        </div>\n      </template>',pageHeaderB:'<template>\n        <div class="y-page-header-b">\n          <div class="content">\n            \x3c!-- 面包屑 --\x3e\n            <div class="breadcrumb">\n              <y-breadcrumb />\n            </div>\n            \x3c!-- 标题操作 --\x3e\n            <div class="title">\n              <div class="title-left">\n                <div class="back-btn">\n                  <y-button icon="arrow-left" class="no-bg"></y-button>\n                </div>\n                <h3 class="page-title">页面标题</h3>\n                <y-tag color="green">成功</y-tag>\n                <y-button type="link">收起<a-icon type="up"/></y-button>\n              </div>\n              <div class="title-right">\n                <y-tips-button :tooltip="true" title="说明信息">\n                  <div class="guide"><a-icon type="question-circle" />指引说明</div>\n                </y-tips-button>\n                <y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>\n              </div>\n            </div>\n            \x3c!-- 自定义标签 --\x3e\n            <div class="tags">\n              <y-tag-action v-model="tagData" />\n            </div>\n            \x3c!-- 信息组 --\x3e\n            <div class="info">\n              <a-row v-for="i in 4" :key="i">\n                <a-col :span="8" v-for="j in 3" :key="i + j">\n                  <span class="info-title">标签：</span>\n                  <span class="info-text">文本{{ i + \'\' + j }}</span>\n                </a-col>\n              </a-row>\n            </div>\n            \x3c!-- Tab选项卡 --\x3e\n            <div class="tabs">\n              <y-tabs default-active-key="1">\n                <a-tab-pane key="1" tab="选项卡"> </a-tab-pane>\n                <a-tab-pane key="2" tab="选项卡"> </a-tab-pane>\n                <a-tab-pane key="3" tab="选项卡"> </a-tab-pane>\n              </y-tabs>\n            </div>\n          </div>\n        </div>\n      </template>',filterForm:'<template>\n        <div>\n          <div class="y-filter-form">\n            <y-filter-form :form="form" :layoutType="layoutType">\n              <y-filter-form-item label="表单标题1">\n                <y-select default-value="lucy">\n                  <a-select-option value="jack">\n                    Jack\n                  </a-select-option>\n                  <a-select-option value="lucy">\n                    Lucy\n                  </a-select-option>\n                  <a-select-option value="disabled" disabled>\n                    Disabled\n                  </a-select-option>\n                  <a-select-option value="Yiminghe">\n                    yiminghe\n                  </a-select-option>\n                </y-select>\n              </y-filter-form-item>\n              <y-filter-form-item label="表单标题11">\n                <y-range-picker />\n              </y-filter-form-item>\n              <y-filter-form-item>\n                <span slot="label"\n                  >表单标题\n                  <y-tooltip title="提示信息">\n                    <a-icon type="exclamation-circle" />\n                  </y-tooltip>\n                </span>\n                <y-input placeholder="请输入" />\n              </y-filter-form-item>\n              <y-filter-form-item label="表单标题111">\n                <y-input placeholder="请输入" />\n              </y-filter-form-item>\n              <y-filter-form-item label="表单标题1111">\n                <y-input placeholder="请输入" />\n              </y-filter-form-item>\n              <y-filter-form-item label="表单标题11111">\n                <y-input placeholder="请输入" />\n              </y-filter-form-item>\n              <y-filter-form-item label="表单标题111111">\n                <y-input placeholder="请输入" />\n              </y-filter-form-item>\n              <template slot="btnCol">\n                <y-button type="primary" html-type="submit">\n                  查询\n                </y-button>\n                <y-button>\n                  重置\n                </y-button>\n              </template>\n            </y-filter-form>\n          </div>\n          \x3c!-- 单列布局 --\x3e\n          <div class="y-filter-form">\n            <y-filter-form :form="form" layoutType="1col">\n              <y-filter-form-item label="统计范围">\n                <y-name-select style="margin-right:8px" title="主机池" />\n                <y-name-select style="margin-right:8px" title="集群" />\n                <y-name-select style="margin-right:8px" title="宿主机" />\n                <y-name-select title="虚拟机" />\n              </y-filter-form-item>\n              <y-filter-form-item label="统计时间">\n                <y-range-picker />\n              </y-filter-form-item>\n              <y-filter-form-item label="统计类型">\n                <y-link-tag :data="dataArr" :selectType="1">\n                  <template v-slot:hzw>\n                    <div style="width:100px;height:100%">\n                      <img\n                        style="width:50%;height:100%"\n                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c"\n                        alt=""\n                      />\n                      <span>海贼王</span>\n                    </div>\n                  </template>\n                </y-link-tag>\n              </y-filter-form-item>\n              <y-divider dashed />\n              <template slot="btnCol">\n                <y-button type="primary" html-type="submit">\n                  查询\n                </y-button>\n                <y-button>\n                  重置\n                </y-button>\n              </template>\n            </y-filter-form>\n          </div>\n        </div>\n      </template>',tablePage:'<template>\n        <div>\n          <div class="y-page-header-a">\n            \x3c!-- 标题 --\x3e\n            <div class="title">\n              <div class="title-left">\n                <h3 class="page-title">页面标题</h3>\n              </div>\n            </div>\n            \x3c!-- Tab选项卡 --\x3e\n            <div class="tabs">\n              <y-tabs default-active-key="1">\n                <a-tab-pane key="1" tab="选项卡" />\n                <a-tab-pane key="2" tab="选项卡" />\n                <a-tab-pane key="3" tab="选项卡" />\n              </y-tabs>\n            </div>\n          </div>\n          <div class="y-table-page-a">\n            <div class="contanier">\n              \x3c!-- 参考 filterForm过滤表单 典型页面布局 --\x3e\n              <filterForm v-if="showFIlter" />\n              <y-model-table\n                :affixTarget="affixTarget"\n                :selectOptions="selectOptions"\n                :api="getTableData"\n                :columns="columns"\n                :buttonList="buttonList"\n                :handleResponse="handleResponse"\n                @filter="\n                  () => {\n                    showFIlter = !showFIlter;\n                  }\n                "\n              >\n                <template v-slot:name="{ text }">\n                  <a class="y-button-link">{{ text }}</a>\n                </template>\n                <span slot="customTitle"><a-icon type="smile-o" /> 标题</span>\n                <y-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="\'green\'">\n                  {{ record.createLoginName }}\n                </y-tag>\n              </y-model-table>\n            </div>\n          </div>\n        </div>\n      </template>',modalForm:'<div>\n      <y-button type="primary" @click="modalVisible = !modalVisible">{{ modalVisible ? \'关闭\' : \'打开\' }}弹窗表单</y-button>\n        <y-modal title="标题" :visible="modalVisible" @cancel="modalVisible = false" @ok="onSubmit">\n          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">\n            <y-form-model-item ref="name" label="输入框" prop="name">\n              <y-input\n                v-model="form.name"\n                @blur="\n                  () => {\n                    $refs.name.onFieldBlur();\n                  }\n                "\n              />\n            </y-form-model-item>\n            <y-form-model-item label="文本域" prop="info">\n              <y-textarea v-model="form.info" />\n            </y-form-model-item>\n            <y-form-model-item label="数字输入框" prop="num">\n              <y-input-number calculator :min="0" :max="10" v-model="form.num" />\n            </y-form-model-item>\n            <y-form-model-item label="选择器" prop="select">\n              <y-select v-model="form.select">\n                <a-select-option value="jack">\n                  Jack\n                </a-select-option>\n                <a-select-option value="lucy">\n                  Lucy\n                </a-select-option>\n              </y-select>\n            </y-form-model-item>\n          </y-form-model>\n        </y-modal>\n      </div>',drawerForm:'<div>\n        <y-button type="primary" @click="visible = !visible">{{ visible ? \'关闭\' : \'打开\' }}抽屉表单</y-button>\n        <y-drawer title="标题" :visible="visible" @close="visible = false">\n          <div slot="footer" style="text-align:right">\n            <y-button @click="visible = false"> 取消 </y-button>\n            <y-button type="primary" @click="onSubmit">\n              确定\n            </y-button>\n          </div>\n          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">\n            <y-form-model-item ref="name" label="输入框" prop="name">\n              <y-input\n                v-model="form.name"\n                @blur="\n                  () => {\n                    $refs.name.onFieldBlur();\n                  }\n                "\n              />\n            </y-form-model-item>\n            <y-form-model-item label="文本域" prop="info">\n              <y-textarea v-model="form.info" />\n            </y-form-model-item>\n            <y-form-model-item label="数字输入框" prop="num">\n              <y-input-number calculator :min="0" :max="10" v-model="form.num" />\n            </y-form-model-item>\n            <y-form-model-item label="选择器" prop="select">\n              <y-select v-model="form.select">\n                <a-select-option value="jack">\n                  Jack\n                </a-select-option>\n                <a-select-option value="lucy">\n                  Lucy\n                </a-select-option>\n              </y-select>\n            </y-form-model-item>\n          </y-form-model>\n        </y-drawer>\n      </div>',formPage:'<template>\n      <div>\n        <div class="y-page-header-b">\n          <div class="content">\n            \x3c!-- 标题操作 --\x3e\n            <div class="title">\n              <div class="title-left">\n                <h3 class="page-title">创建XXX</h3>\n              </div>\n              <div class="title-right">\n                <y-steps :current="1" size="small">\n                  <y-step title="处理完成"> </y-step>\n                  <y-step title="正在处理" />\n                  <y-step title="等待处理" />\n                  <y-step title="等待处理" />\n                </y-steps>\n              </div>\n            </div>\n            \x3c!-- Tab选项卡 --\x3e\n            <div class="tabs">\n              <y-tabs default-active-key="1">\n                <a-tab-pane key="1" tab="快速配置" />\n                <a-tab-pane key="2" tab="自定义配置" />\n              </y-tabs>\n            </div>\n          </div>\n        </div>\n        <div class="y-form-page-a">\n          <box1 ref="box1" />\n          <box2 />\n        </div>\n      </div>\n    </template>',box1:'<template>\n        <div class="box">\n          <y-sign-title><span slot="title">标题</span></y-sign-title>\n          \x3c!-- 表单内容 --\x3e\n          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">\n            <y-form-model-item ref="name" label="输入框" prop="name">\n              <y-input v-model="form.name" />\n            </y-form-model-item>\n            <y-form-model-item label="标题过长标题过长标题过长出现省略号" prop="name">\n              <y-input v-model="form.name" />\n            </y-form-model-item>\n            <y-form-model-item label="数字输入框" prop="number">\n              <y-input-number calculator :min="0" :max="99" v-model="form.number" /> 台\n            </y-form-model-item>\n            <y-form-model-item label="数字输入框" prop="number">\n              <y-input-number :min="0" :max="99" v-model="form.number" /> 天\n            </y-form-model-item>\n            <y-form-model-item label="选择器" prop="region">\n              <y-select v-model="form.region" placeholder="请选择">\n                <y-select-option value="shanghai">Zone one</y-select-option>\n                <y-select-option value="beijing">Zone two</y-select-option>\n              </y-select>\n            </y-form-model-item>\n            <y-form-model-item label="选择器多选不限高度" prop="region2">\n              <y-select checkbox :options="options"> </y-select>\n            </y-form-model-item>\n            <y-form-model-item label="选择器多选限定一行" prop="region2">\n              <y-select mode="multiple" :options="options" />\n            </y-form-model-item>\n            <y-form-model-item label="标签" prop="tagData">\n              <y-tag-action v-model="form.tagData" />\n            </y-form-model-item>\n            <y-form-model-item label="开关" prop="delivery">\n              <y-switch v-model="form.delivery" />\n            </y-form-model-item>\n            <y-form-model-item label="按钮型单选" prop="type">\n              <y-radio-group v-model="form.type" :radio="false" bodered>\n                <y-radio-content :value="1">\n                  单选项目1\n                </y-radio-content>\n                <y-radio-content :value="2">\n                  名词较长的单选项\n                </y-radio-content>\n                <y-radio-content :value="r + 2" v-for="r in 10" :key="r + 2"> 单选项目{{ r }} </y-radio-content>\n              </y-radio-group>\n            </y-form-model-item>\n            <y-form-model-item label="单选按钮组">\n              <y-radio-group default-value="a">\n                <a-radio-button value="a">\n                  单选按钮a\n                </a-radio-button>\n                <a-radio-button value="b">\n                  单选按钮b\n                </a-radio-button>\n                <a-radio-button value="c">\n                  单选按钮c\n                </a-radio-button>\n                <a-radio-button value="d">\n                  单选按钮d\n                </a-radio-button>\n              </y-radio-group>\n            </y-form-model-item>\n            <y-form-model-item label="按钮型多选" prop="type">\n              <y-link-tag :data="dataArr" v-model="form.linkTagValue" :selectType="1"> </y-link-tag>\n            </y-form-model-item>\n            <y-form-model-item label="文本域" prop="desc">\n              <y-textarea v-model="form.desc" />\n            </y-form-model-item>\n            <y-form-model-item label="ipv4" prop="ip">\n              <y-input-ip v-model="form.ip" />\n            </y-form-model-item>\n          </y-form-model>\n        </div>\n      </template>',box2:'<template>\n      <div class="box">\n        <y-sign-title title="标题" />\n        \x3c!-- 表单内容 --\x3e\n        <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">\n          <y-form-model-item label="表格（单选）" prop="table1">\n            <div class="y-model-table-container">\n              <div class="y-table-header">\n                <div class="left">已选：{{ choseName }}</div>\n                <div class="right">\n                  <y-auto-complete placeholder="请输入">\n                    <y-input>\n                      <a-icon slot="prefix" type="search" class="certain-category-icon" />\n                    </y-input>\n                  </y-auto-complete>\n                </div>\n              </div>\n              <y-table\n                v-model="selectedData"\n                bordered\n                :scroll="{ y: 366 }"\n                :row-selection="rowSelection"\n                :components="$YGetTableDragHeader(columns)"\n                :columns="columns"\n                :data-source="data"\n                :pagination="pagination"\n                :modelKeys.sync="selectedDataKeys"\n              >\n              </y-table>\n            </div>\n          </y-form-model-item>\n        </y-form-model>\n      </div>\n    </template>'},jsObj:{pageHeaderA:"<script>\n        export default {\n          name: 'pageHeaderA',\n          data() {\n            return {\n              tagData: ['标签1', '标签2', '标签3'],\n              buttonList: [\n                {\n                  text: '主要操作',\n                  type: 'primary',\n                },\n                {\n                  text: '次要操作1',\n                },\n                {\n                  text: '次要操作2',\n                },\n                {\n                  text: '次要操作3',\n                },\n                {\n                  text: '次要操作4',\n                },\n              ],\n            };\n          },\n        };\n        <\/script>",pageHeaderB:"<script>\n        export default {\n          name: 'pageHeaderB',\n          data() {\n            return {\n              tagData: ['标签1', '标签2', '标签3'],\n              buttonList: [\n                {\n                  text: '主要操作',\n                  type: 'primary',\n                },\n                {\n                  text: '次要操作1',\n                },\n                {\n                  text: '次要操作2',\n                },\n                {\n                  text: '次要操作3',\n                },\n                {\n                  text: '次要操作4',\n                },\n              ],\n            };\n          },\n        };\n        <\/script>",filterForm:"<script>\n        export default {\n          name: 'filterForm',\n          props: {\n            layoutType: {\n              type: String,\n              default: '3col', // 3col 三列布局 1col 单列布局\n            },\n          },\n          data() {\n            return {\n              form: {\n                user: '',\n                password: '',\n              },\n              dataArr: [\n                {\n                  label: 'CNware',\n                  value: '1',\n                  disabled: true,\n                },\n                {\n                  slot: 'hzw',\n                  value: '2',\n                },\n                {\n                  label: 'PowerVC',\n                  value: '3',\n                },\n                {\n                  label: '标签4',\n                  value: '4',\n                },\n                {\n                  label: '标签5',\n                  value: '5',\n                },\n                {\n                  label: 'CPU利用率(%)',\n                  value: '6',\n                },\n                {\n                  label: 'CPU使用情况(MHz)',\n                  value: '7',\n                },\n                {\n                  label: '内存利用率(%)',\n                  value: '8',\n                },\n                {\n                  label: '磁盘利用率(%)',\n                  value: '9',\n                },\n                {\n                  label: '网络吞吐量入统计(Mbps)',\n                  value: '10',\n                },\n                {\n                  label: '网络吞吐量出统计(Mbps)',\n                  value: '11',\n                },\n              ],\n            };\n          },\n        };\n        <\/script>",tablePage:"<script>\n        import api from '@/api';\n        import filterForm from './filterFormPage/filterForm.vue';\n        const columns = [\n          {\n            dataIndex: 'name',\n            slots: { title: 'customTitle' },\n            scopedSlots: { customRender: 'name' },\n            width: 200,\n            filters: [\n              {\n                text: '虚拟机',\n                value: '虚拟机',\n              },\n              {\n                text: '登录',\n                value: '登录',\n              },\n            ],\n            filter: true,\n            sorter: true,\n            copy: true,\n          },\n          {\n            title: '任务创建人',\n            dataIndex: 'createLoginName',\n            scopedSlots: { customRender: 'createLoginName' },\n            sorter: true,\n            width: 200,\n          },\n          {\n            title: '任务描述',\n            dataIndex: 'description',\n            width: 200,\n            ellipsis: true,\n            copy: true,\n          },\n          {\n            title: '标签',\n            dataIndex: 'stepDesc',\n        \n            width: 200,\n            ellipsis: true,\n          },\n        ];\n        const buttonList = [\n          {\n            text: '新增',\n            tips: '数据添加',\n            type: 'primary',\n            icon: 'plus',\n            click: () => {\n              alert('新增');\n            },\n          },\n          {\n            text: '修改',\n            disable: true,\n          },\n          {\n            text: '复制',\n            click: () => {\n              alert('新增');\n            },\n          },\n          {\n            text: '粘贴操作操作操作',\n            click: () => {\n              alert('新增');\n            },\n          },\n          {\n            text: '删除',\n            tips: '危险操作',\n            disable: true,\n          },\n        ];\n        export default {\n          name: 'tablePageA',\n          components: {\n            filterForm,\n          },\n          data() {\n            return {\n              showFIlter: false,\n              affixTarget: () => document.querySelector('.router-views'),\n              columns,\n              getTableData: api.getTableData,\n              buttonList,\n              selectOptions: [\n                { title: '标题', value: 'name' },\n                { title: '任务描述', value: 'description' },\n              ],\n            };\n          },\n          methods: {\n            handleResponse(res, type) {\n              if (type === 'total') {\n                return res.data.total;\n              }\n              if (type === 'data') {\n                return res.data.data;\n              }\n            },\n          },\n        };\n        <\/script>",modalForm:"<script>\n        export default {\n          name: 'modalForm',\n          data() {\n            return {\n              modalVisible: false,\n              labelCol: {\n                span: 3,\n              },\n              wrapperCol: {\n                span: 21,\n              },\n              form: {\n                name: '',\n                info: '',\n                num: 0,\n                select: 'jack',\n              },\n              rules: {\n                name: [\n                  { required: true, message: '请输入输入框', trigger: 'blur' },\n                  { min: 3, max: 5, message: '最短3个字符，最长5个字符', trigger: 'blur' },\n                ],\n              },\n            };\n          },\n          methods: {\n            onSubmit() {\n              this.$refs.ruleForm.validate(valid => {\n                if (valid) {\n                  alert('submit!');\n                } else {\n                  console.log('error submit!!');\n                  return false;\n                }\n              });\n            },\n          },\n        };\n        <\/script>",drawerForm:"<script>\n        export default {\n          name: 'drawerForm',\n          data() {\n            return {\n              visible: false,\n              labelCol: {\n                span: 3,\n              },\n              wrapperCol: {\n                span: 21,\n              },\n              form: {\n                name: '',\n                info: '',\n                num: 0,\n                select: 'jack',\n              },\n              rules: {\n                name: [\n                  { required: true, message: '请输入输入框', trigger: 'blur' },\n                  { min: 3, max: 5, message: '最短3个字符，最长5个字符', trigger: 'blur' },\n                ],\n              },\n            };\n          },\n          methods: {\n            onSubmit() {\n              this.$refs.ruleForm.validate(valid => {\n                if (valid) {\n                  alert('submit!');\n                } else {\n                  console.log('error submit!!');\n                  return false;\n                }\n              });\n            },\n          },\n        };\n        <\/script>",formPage:"<script>\n        import box1 from './box1.vue';\n        import box2 from './box2.vue';\n        export default {\n          name: 'formPage',\n          components: {\n            box1,\n            box2,\n          },\n          methods: {\n            onSubmit() {\n              this.$refs.box1.onSubmit(valid => {\n                if (valid) {\n                  alert('submit!');\n                } else {\n                  console.log('error submit!!');\n                  return false;\n                }\n              });\n            },\n            resetForm() {\n              this.$refs.box1.resetForm();\n            },\n          },\n        };\n        <\/script>",box1:"<script>\n          const validator = (rules, value, callback) => {\n            const reg = /^(?:(?:|[1-9]|1{2}|2[0-4]|25[0-5])){3}(?:|[1-9]|1{2}|2[0-4]|25[0-5])$/;\n            if (!reg.test(value)) {\n              callback(new Error('ip 不正确'));\n            }\n            callback();\n          };\n          export default {\n            name: 'box1',\n            data() {\n              return {\n                labelCol: { span: 4 },\n                wrapperCol: { span: 20 },\n                options: [\n                  {\n                    value: 'jack1',\n                    label: 'jack1',\n                  },\n                  {\n                    value: 'jack2',\n                    scopedSlots: {\n                      title: 'title',\n                    },\n                    label: 'jack2',\n                  },\n                  {\n                    value: 'jack3',\n                    label: 'jack3',\n                  },\n                  {\n                    value: 'jack4',\n                    label: 'jack4',\n                  },\n                  {\n                    value: 'jack6',\n                    label: 'jack5',\n                  },\n                  {\n                    value: 'jack8',\n                    label: 'jack7',\n                  },\n                ],\n                dataArr: [\n                  {\n                    label: 'CNware',\n                    value: '1',\n                    disabled: true,\n                  },\n                  {\n                    label: '多选项多选项',\n                    value: '2',\n                  },\n                  {\n                    label: 'PowerVC',\n                    value: '3',\n                  },\n                  {\n                    label: '标签4',\n                    value: '4',\n                    disabled: true,\n                  },\n                  {\n                    label: '标签5',\n                    value: '5',\n                  },\n                  {\n                    label: '多选项多选项多选项多选项',\n                    value: '6',\n                  },\n                  {\n                    label: '多选项7',\n                    value: '7',\n                  },\n                  {\n                    label: '多选项8',\n                    value: '8',\n                  },\n                  {\n                    label: '多选项9',\n                    value: '9',\n                  },\n                  {\n                    label: '多选项10',\n                    value: '10',\n                  },\n                ],\n                form: {\n                  name: '',\n                  tagData: ['标签1', '标签2', '标签3'],\n                  linkTagValue: '2',\n                  number: 1,\n                  region: undefined,\n                  region2: undefined,\n                  date1: undefined,\n                  delivery: false,\n                  type: [],\n                  desc: '',\n                },\n                rules: {\n                  name: [\n                    { required: true, message: 'Please input Activity name', trigger: 'blur' },\n                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },\n                  ],\n                  region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],\n                  date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],\n                  type: [\n                    {\n                      required: true,\n                      message: '请选择按钮型单选',\n                      trigger: 'change',\n                    },\n                  ],\n                  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],\n                  ip: [{ validator: validator, message: 'ip 不正确', trigger: 'blur' }],\n                },\n              };\n            },\n            methods: {\n              onSubmit(callback) {\n                this.$refs.ruleForm.validate(callback);\n              },\n              resetForm() {\n                this.$refs.ruleForm.resetFields();\n              },\n            },\n          };\n          <\/script>",box2:"<script>\n          const columns = [\n            {\n              title: '标题',\n              dataIndex: 'name',\n              key: 'name',\n              scopedSlots: { customRender: 'name' },\n              width: 200,\n              filters: [\n                {\n                  text: 'Joe',\n                  value: 'Joe',\n                },\n                {\n                  text: 'Jim',\n                  value: 'Jim',\n                },\n              ],\n              onFilter: (value, record) => record.name.indexOf(value) === 0,\n              sorter: (a, b) => a.name.length - b.name.length,\n            },\n            {\n              title: 'Address',\n              dataIndex: 'address',\n              key: 'address',\n              ellipsis: true,\n              width: 200,\n            },\n            {\n              title: 'Tags',\n              key: 'tags',\n              dataIndex: 'tags',\n              scopedSlots: { customRender: 'tags' },\n              width: 200,\n            },\n          ];\n          const data = [\n            {\n              key: 'd1',\n              name: '内容文本，点击可进入详情1',\n              age: 32,\n              address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',\n              tags: ['nice', 'developer'],\n            },\n            {\n              key: 'd2',\n              name: '内容文本，点击可进入详情12',\n              age: 42,\n              address: 'London No. 1 Lake Park',\n              tags: ['loser'],\n            },\n            {\n              key: 'd3',\n              name: '内容文本，点击可进入详情123',\n              age: 32,\n              address: 'Sidney No. 1 Lake Park',\n              tags: ['cool', 'teacher'],\n            },\n          ];\n          export default {\n            name: 'box2',\n            data() {\n              return {\n                labelCol: { span: 4 },\n                wrapperCol: { span: 20 },\n                form: {\n                  table1: null,\n                },\n                rules: {\n                  table1: [{ required: true, message: '请选择表格', trigger: 'blur' }],\n                },\n                selectedData: [],\n                selectedDataKeys: [],\n                columns,\n                pagination: this.$YGetTablePagination({ hideOnSinglePage: true, pageSize: 99999 }),\n              };\n            },\n            computed: {\n              data() {\n                let arr = [];\n                for (let i = 0; i < 60; i++) {\n                  let obj = { ...data[((Math.random() * 100).toFixed(0) - 0) % 2] };\n                  obj.key = obj.key + i;\n                  obj.name = obj.name + i;\n                  arr.push(obj);\n                }\n                return arr;\n              },\n              choseName: {\n                get() {\n                  return this.selectedData[0] ? this.selectedData[0].name : '';\n                },\n              },\n              rowSelection() {\n                return {\n                  columnWidth: 40,\n                  type: 'radio',\n                  selectedRowKeys: this.selectedDataKeys, // 控制选择\n                };\n              },\n            },\n            methods: {\n              onSubmit(callback) {\n                this.$refs.ruleForm.validate(callback);\n              },\n              resetForm() {\n                this.$refs.ruleForm.resetFields();\n              },\n            },\n          };\n          <\/script>"}}}}),r=t("8c7a"),i=t.n(r),s=(t("cb55"),t("6cf3"),t("416b"),t("6605"),t("4e93"),t("c0f1"),t("fa97"),{name:"PageViews",mixins:[o],computed:{html:{get:function(){return this.htmlObj[this.$route.name]}},js:{get:function(){return this.jsObj[this.$route.name]}}},updated:function(){setTimeout((function(){i.a.highlightAll()}),0)}}),m=s,d=(t("e2a7"),t("2877")),c=Object(d["a"])(m,a,l,!1,null,"1867159e",null);e["default"]=c.exports},ac25:function(n,e,t){},e2a7:function(n,e,t){"use strict";t("ac25")}}]);
//# sourceMappingURL=pageViews .b3fddbc4.js.map