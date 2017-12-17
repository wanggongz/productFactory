 /*** @author Administrator * @creationTime 2016-07-26 10:00:58 * @modificationTime 2017-01-18 10:39:24 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.risk.pfRiskLiabLimit.Processor");dojo.declare("_factoryabclife.risk.pfRiskLiabLimit.Processor",unieap.view.Processor, {getPricingLiabDefs: function(insurtypebasciinf,_load,_error ){return this.run({ processorName:"getPricingLiabDefs", uParameters:[{name:"insurtypebasciinf",type:"pojo",javaType:"",value:insurtypebasciinf}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.getPricingLiabDefsSuccess,syncRequest:true,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfprestduty.business.xml_bo",methodName:"pfinsurtypeaccdef.getPfInsurtypePrest"},showLoading:true},_load,_error); },getProtecLiabDefs: function(priceDutyId,_load,_error ){return this.run({ processorName:"getProtecLiabDefs", uParameters:[{name:"priceDutyId",type:"string",javaType:"",value:priceDutyId}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.getProtecLiabDefsSuccess,syncRequest:true,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfprestduty.business.xml_bo",methodName:"pfinsurtypeaccdef.queryPriceDutyIdNoPage"},showLoading:true},_load,_error); },queryLiabLimit: function(protecLiabCode,limitType,riskVer,_load,_error ){return this.run({ processorName:"queryLiabLimit", uParameters:[{name:"protecLiabCode",type:"string",javaType:"",value:protecLiabCode},{name:"limitType",type:"string",javaType:"",value:limitType},{name:"riskVer",type:"string",javaType:"",value:riskVer}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.queryLiabLimitSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfliablimit.business.xml_bo",methodName:"pfliablimit.queryTLiabLimit"},showLoading:true},_load,_error); },getObjFormulas: function(id,type,_load,_error ){return this.run({ processorName:"getObjFormulas", uParameters:[{name:"id",type:"string",javaType:"",value:id},{name:"type",type:"string",javaType:"",value:type}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.getObjFormulasSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfprestduty.business.xml_bo",methodName:"pfprestduty.getTObjFormula"},showLoading:true},_load,_error); },delFormula: function(objSeq,_load,_error ){return this.run({ processorName:"delFormula", uParameters:[{name:"objSeq",type:"string",javaType:"",value:objSeq}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.delFormulaSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfrelation.business.xml_bo",methodName:"pfrelation.delParamFormulaRelation"},showLoading:true},_load,_error); },delLiabLimit: function(tLiabLimit,_load,_error ){return this.run({ processorName:"delLiabLimit", uParameters:[{name:"tLiabLimit",type:"pojo",javaType:"",value:tLiabLimit}],viewName:"pfRiskLiabLimit",loadSuccessed:this.view.delLiabLimitSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfliablimit.business.xml_bo",methodName:"pfliablimit.delTLiabLimit"},showLoading:true},_load,_error); }});