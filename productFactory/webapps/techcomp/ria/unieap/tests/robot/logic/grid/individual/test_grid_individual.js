dojo.require("doh.runner");
dojo.require("unieap.ds");
dojo.addOnLoad(test);
function test() {
	testWidget = grid;
	
	var empdatastore_0 = new unieap.ds.DataStore('empdatastore_0');
	var emp={metaData:{attr_empno:{dataType:4},NAME:{dataType:12},attr_hiredate:{dataType:93}},
	   pageSize:30,pageNumber:1,recordCount:30,dataSetName:"ria.empDataStore",name:"empdatastore_1",order:"",condition:"",   
	   rowSet:[{attr_empno:"250",NAME:"杨作仲",attr_job:"项目经理",attr_sal:"1080",attr_deptno:"101"},
	           {attr_empno:"216",NAME:"陈旭杰",attr_job:"软件工程师",attr_sal:"3200",attr_deptno:"40"},
	           {attr_empno:"100",NAME:"张卫滨",attr_job:"RIA主架构师",attr_sal:"5432",attr_deptno:"30"},
	           {attr_empno:"10000",NAME:"赵磊",attr_job:"产品经理",attr_sal:"2222",attr_deptno:"30"}]}
	var empdatastore_1 = new unieap.ds.DataStore('empdatastore_1',emp);
	
	//空grid（xgrid），点击个性化功能用例
	doh.register("Grid individual 方法测试", [
		function test_grid() {
			var layoutMan=testWidget.getManager("LayoutManager");
			var empnoCell=layoutMan.getCell("attr_empno");
			
			testWidget.getBinding().setDataStore(empdatastore_0);
			empnoCell.getRealWidth();
			
			testWidget.getBinding().setDataStore(empdatastore_1);
			empnoCell.getRealWidth();
			
			empdatastore_1.getRowSet().reset;
			empnoCell.getRealWidth();
		}
//		,
//		function test_store() {
//			doh.is(testWidget.getBinding().getDataStore(), unieap.getDataStore("empDataStore", "dataCenter"));
//		},
//		function test_getRowCount() {
//			doh.is(testWidget.getBinding().getRowCount(), 5);
//		},
//		function test_min() {
//			doh.is(testWidget.getBinding().min("attr_sal"), 1080);
//		},
//		function test_max() {
//			doh.is(testWidget.getBinding().max("attr_sal"), 50000);
//		},
//		function test_avg() {
//			doh.is(testWidget.getBinding().avg("attr_sal"), 12386.8);
//		},
//		function test_sum() {
//			doh.is(testWidget.getBinding().sum("attr_sal"), 61934);
//		}
	]);
	doh.run();
}
