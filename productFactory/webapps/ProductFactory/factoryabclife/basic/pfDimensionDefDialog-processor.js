 /*** @author zhy * @creationTime 2016-07-21 09:58:03 * @modificationTime 2017-03-09 09:51:02 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.basic.pfDimensionDefDialog.Processor");dojo.declare("_factoryabclife.basic.pfDimensionDefDialog.Processor",unieap.view.Processor, {saveDimensionDef: function(dimensionDef,opt,_load,_error ){return this.run({ processorName:"saveDimensionDef", uParameters:[{name:"dimensionDef",type:"pojo",javaType:"",value:dimensionDef},{name:"opt",type:"string",javaType:"",value:opt}],viewName:"pfDimensionDefDialog",loadSuccessed:this.view.saveDimensionDefSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfDimensionDef.business.xml_bo",methodName:"pfriskparam.saveDimensionDef"},showLoading:true},_load,_error); }});