 /*** @author think * @creationTime 2016-06-23 10:29:46 * @modificationTime 2016-10-11 14:28:00 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.riskInformation.pfRiskInf.Processor");dojo.declare("_factoryabclife.riskInformation.pfRiskInf.Processor",unieap.view.Processor, {getRisksByCondition: function(tInsurtypeBasicInf,pageNumber,pageSize,_load,_error ){return this.run({ processorName:"getRisksByCondition", uParameters:[{name:"tInsurtypeBasicInf",type:"pojo",javaType:"",value:tInsurtypeBasicInf},{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"pfRiskInf",loadSuccessed:this.view.getRisksByConditionSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfrisk_abclife.business.xml_bo",methodName:"pfrisk.abclife.getRisksByCondition"},serverExportCompatible:true,showLoading:true},_load,_error); },delRiskBase: function(tInsurtypeBasicInf,_load,_error ){return this.run({ processorName:"delRiskBase", uParameters:[{name:"tInsurtypeBasicInf",type:"pojo",javaType:"",value:tInsurtypeBasicInf}],viewName:"pfRiskInf",loadSuccessed:this.view.delRiskBaseSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfrisk_abclife.business.xml_bo",methodName:"pfrisk.abclife.delRiskBase"},showLoading:true},_load,_error); },test: function(riskCode,riskVer,pricingLiabCode,protecLiabCode,algoType,subType1,subType2,paramObj,_load,_error ){return this.run({ processorName:"test", uParameters:[{name:"riskCode",type:"string",javaType:"",value:riskCode},{name:"riskVer",type:"string",javaType:"",value:riskVer},{name:"pricingLiabCode",type:"string",javaType:"",value:pricingLiabCode},{name:"protecLiabCode",type:"string",javaType:"",value:protecLiabCode},{name:"algoType",type:"string",javaType:"",value:algoType},{name:"subType1",type:"string",javaType:"",value:subType1},{name:"subType2",type:"string",javaType:"",value:subType2},{name:"paramObj",type:"pojo",javaType:"",value:paramObj}],viewName:"pfRiskInf",loadSuccessed:this.view.testSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pftestcal.business.xml_bo",methodName:"pftestcal.cal"},showLoading:true},_load,_error); },submitReview: function(tInsurtypeBasicInf,_load,_error ){return this.run({ processorName:"submitReview", uParameters:[{name:"tInsurtypeBasicInf",type:"pojo",javaType:"",value:tInsurtypeBasicInf}],viewName:"pfRiskInf",loadSuccessed:this.view.submitReviewSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfrisk_abclife.business.xml_bo",methodName:"pfrisk.abclife.submitReview"},showLoading:true},_load,_error); },testPA: function(insurtypeId,pricingLiabCode,paramObj,_load,_error ){return this.run({ processorName:"testPA", uParameters:[{name:"insurtypeId",type:"string",javaType:"",value:insurtypeId},{name:"pricingLiabCode",type:"string",javaType:"",value:pricingLiabCode},{name:"paramObj",type:"pojo",javaType:"",value:paramObj}],viewName:"pfRiskInf",loadSuccessed:this.view.testPASuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pftestcal.business.xml_bo",methodName:"pftestcal.testPA"},showLoading:true},_load,_error); }});