 /*** @author think * @creationTime 2016-05-17 10:57:55 * @modificationTime 2017-03-10 11:08:42 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.basic.pfSKElement.Processor");dojo.declare("_factoryabclife.basic.pfSKElement.Processor",unieap.view.Processor, {getPfStandards: function(pageNumber,pageSize,_load,_error ){return this.run({ processorName:"getPfStandards", uParameters:[{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"pfSKElement",loadSuccessed:this.view.getPfStandardsSuccess,pagingInfo:{pageNumber:1,pageSize:20,calcRecordCount:true},boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfskelement.business.xml_bo",methodName:"pfskelement.getPfSkelements"},serverExportCompatible:true,showLoading:true},_load,_error); },delPfStandard: function(pfSKElementsDTO,_load,_error ){return this.run({ processorName:"delPfStandard", uParameters:[{name:"pfSKElementsDTO",type:"pojo",javaType:"",value:pfSKElementsDTO}],viewName:"pfSKElement",loadSuccessed:this.view.delPfStandardSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfskelement.business.xml_bo",methodName:"pfskelement.delPfSkelement"},showLoading:true},_load,_error); }});