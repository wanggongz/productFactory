 /*** @author zhangyujia * @creationTime 2014-08-11 15:48:44 * @modificationTime 2014-11-04 17:03:19 * @version 1.0.0* @generated */dojo.provide("_security.role.sysSecRole.Processor");dojo.declare("_security.role.sysSecRole.Processor",unieap.view.Processor, {getSysSecRolePage: function(role,pageNumber,pageSize,_load,_error ){return this.run({ processorName:"getSysSecRolePage", uParameters:[{name:"role",type:"pojo",javaType:"",value:role},{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"sysSecRole",loadSuccessed:this.view.getSysSecRolePageSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_role.business.xml_bo",methodName:"security.role.getRolePageForUnieap"},serverExportCompatible:true,showLoading:true},_load,_error); },updateEnableStatus: function(roleList,status,_load,_error ){return this.run({ processorName:"updateEnableStatus", uParameters:[{name:"roleList",type:"pojoList",javaType:"",value:roleList},{name:"status",type:"string",javaType:"",value:status}],viewName:"sysSecRole",loadSuccessed:this.view.updateEnableStatusSuccess,boInvoked:{dcID:"security",boID:"security_role.business.xml_bo",methodName:"security.role.updateRoleStatusForUnieap"},showLoading:true},_load,_error); }});