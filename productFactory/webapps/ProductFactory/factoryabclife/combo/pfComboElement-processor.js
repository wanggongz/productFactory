 /*** @author Administrator * @creationTime 2016-11-17 09:41:20 * @modificationTime 2016-11-24 16:10:51 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.combo.pfComboElement.Processor");dojo.declare("_factoryabclife.combo.pfComboElement.Processor",unieap.view.Processor, {getTobjElmenet: function(comboInf,pageNunber,pageSize,_load,_error ){return this.run({ processorName:"getTobjElmenet", uParameters:[{name:"comboInf",type:"pojo",javaType:"",value:comboInf},{name:"pageNunber",type:"string",javaType:"",value:pageNunber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"pfComboElement",loadSuccessed:this.view.getTobjElmenetSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfcomboelement.business.xml_bo",methodName:"pfcombochoose.getTObjSkElement"},showLoading:true},_load,_error); },delTObjSkelement: function(obj,_load,_error ){return this.run({ processorName:"delTObjSkelement", uParameters:[{name:"obj",type:"pojo",javaType:"",value:obj}],viewName:"pfComboElement",loadSuccessed:this.view.delTObjSkelementSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfriskelement.business.xml_bo",methodName:"pfriskelement.delObjSkelement"},showLoading:true},_load,_error); }});