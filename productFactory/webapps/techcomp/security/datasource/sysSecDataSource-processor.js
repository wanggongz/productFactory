 /*** @author dongyw * @creationTime 2014-07-02 16:11:29 * @modificationTime 2014-09-23 10:15:14 * @version 1.0.0* @generated */dojo.provide("_security.datasource.sysSecDataSource.Processor");dojo.declare("_security.datasource.sysSecDataSource.Processor",unieap.view.Processor, {getDataSourcePage: function(dataSource,pageNumber,pageSize,_load,_error ){return this.run({ processorName:"getDataSourcePage", uParameters:[{name:"dataSource",type:"pojo",javaType:"",value:dataSource},{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"sysSecDataSource",loadSuccessed:this.view.getDataSourcePageSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_dataSource.business.xml_bo",methodName:"security.dataSource.getDataSourcePageForUnieap"},serverExportCompatible:true,showLoading:true},_load,_error); },delDataSource: function(dataSource,delFlag,_load,_error ){return this.run({ processorName:"delDataSource", uParameters:[{name:"dataSource",type:"pojoList",javaType:"",value:dataSource},{name:"delFlag",type:"string",javaType:"",value:delFlag}],viewName:"sysSecDataSource",loadSuccessed:this.view.delDataSourceSuccess,boInvoked:{dcID:"security",boID:"security_dataSource.business.xml_bo",methodName:"security.dataSource.deleteDataSourceForUnieap"},showLoading:true},_load,_error); }});