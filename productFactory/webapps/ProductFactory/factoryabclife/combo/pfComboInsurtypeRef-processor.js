 /*** @author Administrator * @creationTime 2016-11-17 09:53:41 * @modificationTime 2016-11-23 15:36:47 * @version 1.0.0* @generated */dojo.provide("_factoryabclife.combo.pfComboInsurtypeRef.Processor");dojo.declare("_factoryabclife.combo.pfComboInsurtypeRef.Processor",unieap.view.Processor, {queryInsurElem: function(comboInf,_load,_error ){return this.run({ processorName:"queryInsurElem", uParameters:[{name:"comboInf",type:"pojo",javaType:"",value:comboInf}],viewName:"pfComboInsurtypeRef",loadSuccessed:this.view.queryInsurElemSuccess,boInvoked:{dcID:"factoryabclife",boID:"factoryabclife_pfcomboinsurelement.business.xml_bo",methodName:"pfcomboinsurelement.queryInsurElem"},showLoading:true},_load,_error); }});