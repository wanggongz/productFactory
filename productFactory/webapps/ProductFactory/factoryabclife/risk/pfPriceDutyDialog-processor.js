 /*** @author Administrator * @creationTime 2016-06-28 14:05:50 * @modificationTime 2017-03-16 14:05:05 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.risk.pfPriceDutyDialog.Processor");dojo.declare("_factoryabclife.risk.pfPriceDutyDialog.Processor",unieap.view.Processor, {addAupdate: function(feedef,liabFeeDef,liabDef,map,insurtypeinfo,tWaiveLiab,tSuminsurIncrem,_load,_error ){return this.run({ processorName:"addAupdate", uParameters:[{name:"feedef",type:"pojo",javaType:"",value:feedef},{name:"liabFeeDef",type:"pojoList",javaType:"",value:liabFeeDef},{name:"liabDef",type:"pojo",javaType:"",value:liabDef},{name:"map",type:"pojo",javaType:"",value:map},{name:"insurtypeinfo",type:"pojo",javaType:"",value:insurtypeinfo},{name:"tWaiveLiab",type:"pojo",javaType:"",value:tWaiveLiab},{name:"tSuminsurIncrem",type:"pojo",javaType:"",value:tSuminsurIncrem}],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.addAupdateSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfpriceduty.business.xml_bo",methodName:"pfpriceduty.addAndUpdateThree"},showLoading:true},_load,_error); },queryLiabFeeDef: function(tPricingLiabDef,_load,_error ){return this.run({ processorName:"queryLiabFeeDef", uParameters:[{name:"tPricingLiabDef",type:"pojo",javaType:"",value:tPricingLiabDef}],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.queryLiabFeeDefSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfpriceduty.business.xml_bo",methodName:"pfpriceduty.queryLiabFeeDef"},showLoading:true},_load,_error); },queryInsurtypeFeeDef: function(tPricingLiabDef,_load,_error ){return this.run({ processorName:"queryInsurtypeFeeDef", uParameters:[{name:"tPricingLiabDef",type:"pojo",javaType:"",value:tPricingLiabDef}],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.queryInsurtypeFeeDefSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfpriceduty.business.xml_bo",methodName:"pfpriceduty.queryInsurtypeFeeDef"},showLoading:true},_load,_error); },getFormula: function(_load,_error ){return this.run({ processorName:"getFormula", uParameters:[],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.getFormulaSuccess,syncRequest:true,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfformula.business.xml_bo",methodName:"pfformula.getFormula"},showLoading:true},_load,_error); },queryTWaiveLiab: function(tPricingLiabDef,_load,_error ){return this.run({ processorName:"queryTWaiveLiab", uParameters:[{name:"tPricingLiabDef",type:"pojo",javaType:"",value:tPricingLiabDef}],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.queryTWaiveLiabSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfpriceduty.business.xml_bo",methodName:"pfpriceduty.queryTWaiveLiab"},showLoading:true},_load,_error); },queryTSuminsurIncrem: function(tPricingLiabDef,_load,_error ){return this.run({ processorName:"queryTSuminsurIncrem", uParameters:[{name:"tPricingLiabDef",type:"pojo",javaType:"",value:tPricingLiabDef}],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.queryTSuminsurIncremSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfpriceduty.business.xml_bo",methodName:"pfpriceduty.queryTSuminsurIncrem"},showLoading:true},_load,_error); },getFormulaMult: function(_load,_error ){return this.run({ processorName:"getFormulaMult", uParameters:[],viewName:"pfPriceDutyDialog",loadSuccessed:this.view.getFormulaMultSuccess,syncRequest:true,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfformula.business.xml_bo",methodName:"pfformula.getFormulaMult"},showLoading:true},_load,_error); }});