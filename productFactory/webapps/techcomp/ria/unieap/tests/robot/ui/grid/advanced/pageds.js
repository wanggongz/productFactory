dojo.require("unieap.rpc");
function initData(){
    var ds = {
        body: {
            parameters: {},
            dataStores: {
                page1: {
                    pageSize: 20,
                    pageNumber: 1,
                    recordCount: 20,
                    name: "page1",
                    rowSet: [
							{attr_empno: -11,NAME: "康康1",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康2",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康3",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康4",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康5",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康6",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康7",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康8",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康9",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康10",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康11",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康12",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康13",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康14",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康15",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康16",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康17",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康18",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康19",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康20",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}
							]
                },
				page2:{
					pageSize: 20,
					pageNumber: 2,
					recordCount: 61,
					name: "page2",
					rowSet: [
							{attr_empno: -11,NAME: "康康21",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康22",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康23",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康24",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康25",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康26",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康27",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康28",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康29",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康30",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康31",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康32",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康33",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康34",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康35",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康36",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康37",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康38",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康39",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康40",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}
							]
					
				},
				page3:{
					pageSize: 20,
					pageNumber: 3,
					recordCount: 61,
					name: "page3",
					rowSet: [
							{attr_empno: -11,NAME: "康康41",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康42",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康43",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康44",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康45",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康46",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康47",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康48",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康49",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康50",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"},
							{attr_empno: -11,NAME: "康康51",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康52",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康53",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康54",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康55",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康56",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康57",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康58",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康59",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}, 
							{attr_empno: -11,NAME: "康康60",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}
							]
					
				},
				page4:{
					pageSize: 20,
					pageNumber: 4,
					recordCount: 61,
					name: "page4",
					rowSet: [
							{attr_empno: -11,NAME: "康康61",attr_job: "开发人员", attr_sal: "111",attr_deptno: "30"}
							]
					
				}
            }
        }
    };
    dataCenter = new unieap.ds.DataCenter(ds);
	dataCenter.getDataStore("page1").setRowSetName("test");
}

initData();

