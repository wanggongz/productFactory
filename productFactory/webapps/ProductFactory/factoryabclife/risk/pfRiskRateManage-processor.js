 /*** @author Administrator * @creationTime 2016-07-12 10:13:22 * @modificationTime 2016-09-30 14:16:49 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.risk.pfRiskRateManage.Processor");dojo.declare("_factoryabclife.risk.pfRiskRateManage.Processor",unieap.view.Processor, {getPfInsurtypePrest: function(insurtypebasciinf,_load,_error ){return this.run({ processorName:"getPfInsurtypePrest", uParameters:[{name:"insurtypebasciinf",type:"pojo",javaType:"",value:insurtypebasciinf}],viewName:"pfRiskRateManage",loadSuccessed:this.view.getPfInsurtypePrestSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfprestduty.business.xml_bo",methodName:"pfinsurtypeaccdef.getPfInsurtypePrest"},showLoading:true},_load,_error); },queryRiskRateById: function(insurtypeCode,verNo,pricingLiabCode,_load,_error ){return this.run({ processorName:"queryRiskRateById", uParameters:[{name:"insurtypeCode",type:"string",javaType:"",value:insurtypeCode},{name:"verNo",type:"string",javaType:"",value:verNo},{name:"pricingLiabCode",type:"string",javaType:"",value:pricingLiabCode}],viewName:"pfRiskRateManage",loadSuccessed:this.view.queryRiskRateByIdSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.queryRiskRateById"},showLoading:true},_load,_error); },exportModel: function(formId4Download,_load,_error ){return this.run({ processorName:"exportModel", uParameters:[{name:"formId4Download",type:"pojo",javaType:"",value:formId4Download}],viewName:"pfRiskRateManage",boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.exportModel"},fileExport:true,showLoading:true},_load,_error); },delRiskRate: function(tObjRate,_load,_error ){return this.run({ processorName:"delRiskRate", uParameters:[{name:"tObjRate",type:"pojo",javaType:"",value:tObjRate}],viewName:"pfRiskRateManage",loadSuccessed:this.view.delRiskRateSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.delRiskRate"},showLoading:true},_load,_error); },exportRateTable: function(formId4Download,_load,_error ){return this.run({ processorName:"exportRateTable", uParameters:[{name:"formId4Download",type:"pojo",javaType:"",value:formId4Download}],viewName:"pfRiskRateManage",boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskratemanage.business.xml_bo",methodName:"pfriskratemanage.exportRateTable"},fileExport:true,showLoading:true},_load,_error); }});