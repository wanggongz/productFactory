 /*** @author Administrator * @creationTime 2016-07-20 09:24:23 * @modificationTime 2016-09-28 16:22:39 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.basic.pfRiskAmntTypeDialog.Processor");dojo.declare("_factoryabclife.basic.pfRiskAmntTypeDialog.Processor",unieap.view.Processor, {saveTfRiskamntType: function(tfRiskamntType,opt,_load,_error ){return this.run({ processorName:"saveTfRiskamntType", uParameters:[{name:"tfRiskamntType",type:"pojo",javaType:"",value:tfRiskamntType},{name:"opt",type:"string",javaType:"",value:opt}],viewName:"pfRiskAmntTypeDialog",loadSuccessed:this.view.saveTfRiskamntTypeSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskamnttype.business.xml_bo",methodName:"pfriskamnttype.saveTfRiskamntType"},showLoading:true},_load,_error); }});