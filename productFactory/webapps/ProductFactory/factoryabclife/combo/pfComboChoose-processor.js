 /*** @author Administrator * @creationTime 2016-11-14 09:32:06 * @modificationTime 2017-01-10 15:05:01 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.combo.pfComboChoose.Processor");dojo.declare("_factoryabclife.combo.pfComboChoose.Processor",unieap.view.Processor, {queryComboInsur: function(comboInf,pageNumber,pageSize,_load,_error ){return this.run({ processorName:"queryComboInsur", uParameters:[{name:"comboInf",type:"pojo",javaType:"",value:comboInf},{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"pfComboChoose",loadSuccessed:this.view.queryComboInsurSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfcombochoose.business.xml_bo",methodName:"pfcombochoose.queryComboInsurtypeForPage"},serverExportCompatible:true,showLoading:true},_load,_error); },delComboInsur: function(comboInsur,_load,_error ){return this.run({ processorName:"delComboInsur", uParameters:[{name:"comboInsur",type:"pojo",javaType:"",value:comboInsur}],viewName:"pfComboChoose",loadSuccessed:this.view.delComboInsurSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfcombochoose.business.xml_bo",methodName:"pfcombochoose.delComboInsurtype"},showLoading:true},_load,_error); }});