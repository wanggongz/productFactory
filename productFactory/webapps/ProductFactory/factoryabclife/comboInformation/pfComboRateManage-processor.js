 /*** @author Administrator * @creationTime 2016-12-07 14:50:19 * @modificationTime 2016-12-27 16:22:32 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.comboInformation.pfComboRateManage.Processor");dojo.declare("_factoryabclife.comboInformation.pfComboRateManage.Processor",unieap.view.Processor, {queryObjRate: function(comboInf,_load,_error ){return this.run({ processorName:"queryObjRate", uParameters:[{name:"comboInf",type:"pojo",javaType:"",value:comboInf}],viewName:"pfComboRateManage",loadSuccessed:this.view.queryObjRateSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfcomboratemanage.business.xml_bo",methodName:"pfcomboratemanage.getTObjRate"},showLoading:true},_load,_error); },exportModel: function(formId4Download,_load,_error ){return this.run({ processorName:"exportModel", uParameters:[{name:"formId4Download",type:"pojo",javaType:"",value:formId4Download}],viewName:"pfComboRateManage",boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.exportModel"},fileExport:true,showLoading:true},_load,_error); },exportRateTable: function(formId4Download,_load,_error ){return this.run({ processorName:"exportRateTable", uParameters:[{name:"formId4Download",type:"pojo",javaType:"",value:formId4Download}],viewName:"pfComboRateManage",boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.exportRateTable"},fileExport:true,showLoading:true},_load,_error); },delRiskRate: function(tObjRate,_load,_error ){return this.run({ processorName:"delRiskRate", uParameters:[{name:"tObjRate",type:"pojo",javaType:"",value:tObjRate}],viewName:"pfComboRateManage",loadSuccessed:this.view.delRiskRateSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.delRiskRate"},showLoading:true},_load,_error); }});