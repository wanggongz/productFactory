dojo.require("unieap.ds")
var rowsetData = [{
    "id": "1231035443386",
    "label": "数据结构",
    "type": "menu",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false",
	 "disabled":true
}, {
    "id": "1213322990999",
    "label": "普通树",
    "type": "menu",
    "index": "1",
    "parentID": "1213147310718",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/tree_common.do",
    "chief": "false",
	 "disabled":true
}, {
    "id": "1213779176089",
    "label": "Tab",
    "type": "menu",
    "index": "1",
    "parentID": "1213778711197",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_layout_tab.do",
    "chief": "false",
	 "disabled":true
},   {
    "id": "1213154541588",
    "label": "普通对话框",
    "type": "menu",
    "index": "1",
    "parentID": "1213154530445",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/ria_simpledialog.do",
    "chief": "false"
}, {
    "id": "export",
    "label": "导出",
    "type": "menu",
    "index": "1",
    "parentID": "1230020538593",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_export.do",
    "chief": "false"
},  {
    "id": "editmode",
    "label": "编辑方式",
    "type": "menu",
    "index": "1",
    "parentID": "EditGrid",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_editmode.do",
    "chief": "false"
}, {
    "id": "gridandform",
    "label": "表格和表单联动",
    "type": "menu",
    "index": "1",
    "parentID": "1229578772421",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_gridandform.do",
    "chief": "false"
},  {
    "id": "1231035446808",
    "label": "DataCenter",
    "type": "menu",
    "index": "1",
    "parentID": "1231035443386",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/data_datacenter.do",
    "chief": "false"
}, {
    "id": "1213178005625",
    "label": "按钮控件",
    "type": "menu",
    "index": "2",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_button.do",
    "chief": "false"
}, {
    "id": "1213152301745",
    "label": "复选树",
    "type": "menu",
    "index": "2",
    "parentID": "1213147310718",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/tree_checkbox.do",
    "chief": "false"
}, {
    "id": "1213779211703",
    "label": "对话框",
    "type": "menu",
    "index": "2",
    "parentID": "1213778711197",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_layout_dialog.do",
    "chief": "false"
}, {
    "id": "1213154559911",
    "label": "信息提示框",
    "type": "menu",
    "index": "2",
    "parentID": "1213154530445",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/ria_messagebox.do",
    "chief": "false"
}, {
    "id": "print",
    "label": "打印",
    "type": "menu",
    "index": "2",
    "parentID": "1230020538593",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_print.do",
    "chief": "false"
}, {
    "id": "editormode",
    "label": "编辑器类型",
    "type": "menu",
    "index": "2",
    "parentID": "EditGrid",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_editormode.do",
    "chief": "false"
}, {
    "id": "betweengrids",
    "label": "表格和表格联动",
    "type": "menu",
    "index": "2",
    "parentID": "1229578772421",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_betweengrids.do",
    "chief": "false"
}, {
    "id": "1231206580518",
    "label": "RowSet",
    "type": "menu",
    "index": "2",
    "parentID": "1231035443386",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/data_rowset.do",
    "chief": "false"
}, {
    "id": "1220600096359",
    "label": "下拉树构件",
    "type": "menu",
    "index": "3",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_comboboxtree.do",
    "chief": "false"
}, {
    "id": "1213083919483",
    "label": "下拉列表",
    "type": "menu",
    "index": "3",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_combobox.do",
    "chief": "false"
}, {
    "id": "1213152316350",
    "label": "编辑树",
    "type": "menu",
    "index": "3",
    "parentID": "1213147310718",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/tree_edit.do",
    "chief": "false"
}, {
    "id": "1213778711197",
    "label": "布局",
    "type": "menu",
    "index": "3",
    "parentID": "1213063072609",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "1213779244820",
    "label": "Tab与Form",
    "type": "menu",
    "index": "3",
    "parentID": "1213778711197",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_layout_formandtab.do",
    "chief": "false"
}, {
    "id": "1213771904906",
    "label": "对话框选择",
    "type": "menu",
    "index": "3",
    "parentID": "1213154530445",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/ria_dialogselect.do",
    "chief": "false"
}, {
    "id": "definepagesize",
    "label": "设置页行数",
    "type": "menu",
    "index": "3",
    "parentID": "1230020538593",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_definepagesize.do",
    "chief": "false"
}, {
    "id": "editEvent",
    "label": "编辑事件",
    "type": "menu",
    "index": "3",
    "parentID": "EditGrid",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_editevent.do",
    "chief": "false"
}, {
    "id": "movedata",
    "label": "两个表格间数据移动",
    "type": "menu",
    "index": "3",
    "parentID": "1229578772421",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_movedata.do",
    "chief": "false"
}, {
    "id": "1231398165178",
    "label": "DataStore",
    "type": "menu",
    "index": "3",
    "parentID": "1231035443386",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/data_datastore.do",
    "chief": "false"
}, {
    "id": "1213152143242",
    "label": "上传控件",
    "type": "menu",
    "index": "4",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_fileinput.do",
    "chief": "false"
},{
    "id": "1213840067213",
    "label": "Grid与Form",
    "type": "menu",
    "index": "4",
    "parentID": "1213840037794",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_topbottom_gridandform.do",
    "chief": "false"
}, {
    "id": "1213773757108",
    "label": "Grid与Form",
    "type": "menu",
    "index": "4",
    "parentID": "1213773700289",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_leftright_gridandform.do",
    "chief": "false"
},  {
    "id": "dofilter",
    "label": "列数据动态过滤",
    "type": "menu",
    "index": "4",
    "parentID": "1229578772421",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_dofilter.do",
    "chief": "false"
}, {
    "id": "1231466811325",
    "label": "Row",
    "type": "menu",
    "index": "4",
    "parentID": "1231035443386",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/data_row.do",
    "chief": "false"
}, {
    "id": "1213319423401",
    "label": "单选按钮",
    "type": "menu",
    "index": "5",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_radiobutton.do",
    "chief": "false"
}, {
    "id": "1213147387593",
    "label": "懒加载",
    "type": "menu",
    "index": "5",
    "parentID": "1213147310718",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/tree_lazyload.do",
    "chief": "false"
}, {
    "id": "1213840070025",
    "label": "Grid与Grid",
    "type": "menu",
    "index": "5",
    "parentID": "1213840037794",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_topbottom_gridandgrid.do",
    "chief": "false"
}, {
    "id": "1213773816155",
    "label": "Grid与Grid",
    "type": "menu",
    "index": "5",
    "parentID": "1213773700289",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_leftright_gridandgrid.do",
    "chief": "false"
}, {
    "id": "withlineno",
    "label": "显示行号",
    "type": "menu",
    "index": "5",
    "parentID": "1228286304696",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_withlineno.do",
    "chief": "false"
},  {
    "id": "grid_asynstatistics",
    "label": "异步获取统计数",
    "type": "menu",
    "index": "5",
    "parentID": "1229578772421",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_asynstatistics.do",
    "chief": "false"
}, {
    "id": "1213062998781",
    "label": "表单构件",
    "type": "menu",
    "index": "6",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "1213334054312",
    "label": "多选按钮",
    "type": "menu",
    "index": "6",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_checkbox.do",
    "chief": "false"
}, {
    "id": "1213840037794",
    "label": "上下两行",
    "type": "menu",
    "index": "6",
    "parentID": "1213063072609",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "1213840073556",
    "label": "Form与Form",
    "type": "menu",
    "index": "6",
    "parentID": "1213840037794",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_topbottom_formandform.do",
    "chief": "false"
}, {
    "id": "1213773727046",
    "label": "Form与Form",
    "type": "menu",
    "index": "6",
    "parentID": "1213773700289",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/layout_leftright_formandform.do",
    "chief": "false"
},  {
    "id": "1213147310718",
    "label": "树型构件",
    "type": "menu",
    "index": "7",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
},  {
    "id": "1213063072609",
    "label": "布局样例",
    "type": "menu",
    "index": "8",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
},   {
    "id": "selectmode",
    "label": "单/多选表格",
    "type": "menu",
    "index": "11",
    "parentID": "1228286304696",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_selectmode.do",
    "chief": "false"
}, {
    "id": "1213773700289",
    "label": "左右两列",
    "type": "menu",
    "index": "12",
    "parentID": "1213063072609",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
},  {
    "id": "1213154530445",
    "label": "对话框",
    "type": "menu",
    "index": "14",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "1213246850136",
    "label": "数字文本框",
    "type": "menu",
    "index": "14",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_numbertextbox.do",
    "chief": "false"
},  {
    "id": "1213069449119",
    "label": "校验文本框",
    "type": "menu",
    "index": "15",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_validationtextbox.do",
    "chief": "false"
}, {
    "id": "1213149919455",
    "label": "日期输入框",
    "type": "menu",
    "index": "16",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_datetextbox.do",
    "chief": "false"
}, {
    "id": "1214892386617",
    "label": "图片文本框",
    "type": "menu",
    "index": "18",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_crescenttextbox.do",
    "chief": "false"
}, {
    "id": "withfoot",
    "label": "带有foot表格",
    "type": "menu",
    "index": "18",
    "parentID": "1228286304696",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/grid_withfoot.do",
    "chief": "false"
},{
    "id": "1213346355116",
    "label": "多行文本框",
    "type": "menu",
    "index": "20",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_textarea.do",
    "chief": "false"
},  {
    "id": "1213062976264",
    "label": "表格控件",
    "type": "menu",
    "index": "27",
    "parentID": "1212403325756",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "true"
}, {
    "id": "1228457105421",
    "label": "富文本编辑框",
    "type": "menu",
    "index": "29",
    "parentID": "1213062998781",
    "leaf": true,
    "image": "null",
    "pagearea": "null",
    "location": "/form_richtexteditor.do",
    "chief": "false"
}, {
    "id": "1228286304696",
    "label": "基本表格",
    "type": "menu",
    "index": "42",
    "parentID": "1213062976264",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "true"
}, {
    "id": "1230020538593",
    "label": "表格分页栏",
    "type": "menu",
    "index": "43",
    "parentID": "1213062976264",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "EditGrid",
    "label": "表格编辑",
    "type": "menu",
    "index": "45",
    "parentID": "1213062976264",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}, {
    "id": "1229578772421",
    "label": "表格应用",
    "type": "menu",
    "index": "47",
    "parentID": "1213062976264",
    "leaf": false,
    "image": "null",
    "pagearea": "null",
    "location": "null",
    "chief": "false"
}];
var treeStorePart = new unieap.ds.DataStore("menuTreePart", rowsetData);

    dataCenter = new unieap.ds.DataCenter();
dataCenter.addDataStore(treeStorePart);

