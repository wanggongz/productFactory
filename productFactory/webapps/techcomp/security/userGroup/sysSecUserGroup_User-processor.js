 /*** @author dongyw * @creationTime 2014-07-03 10:45:02 * @modificationTime 2014-12-31 14:49:28 * @version 1.0.0* @generated */dojo.provide("_security.userGroup.sysSecUserGroup_User.Processor");dojo.declare("_security.userGroup.sysSecUserGroup_User.Processor",unieap.view.Processor, {getEnableUserList: function(user,pageNumber,pageSize,_load,_error ){return this.run({ processorName:"getEnableUserList", uParameters:[{name:"user",type:"pojo",javaType:"",value:user},{name:"pageNumber",type:"string",javaType:"",value:pageNumber},{name:"pageSize",type:"string",javaType:"",value:pageSize}],viewName:"sysSecUserGroup_User",loadSuccessed:this.view.getEnableUserListSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_userManager.business.xml_bo",methodName:"security.user.getEnableUserPageForUnieap"},serverExportCompatible:true,showLoading:true},_load,_error); },getUsersByGroupId: function(userGroupId,_load,_error ){return this.run({ processorName:"getUsersByGroupId", uParameters:[{name:"userGroupId",type:"string",javaType:"",value:userGroupId}],viewName:"sysSecUserGroup_User",loadSuccessed:this.view.getUsersByGroupIdSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_userManager.business.xml_bo",methodName:"security.user.getUsersByUserGroupIdForUnieap"},showLoading:true},_load,_error); },insertGroupUsers: function(userGroupId,userList,_load,_error ){return this.run({ processorName:"insertGroupUsers", uParameters:[{name:"userGroupId",type:"string",javaType:"",value:userGroupId},{name:"userList",type:"pojoList",javaType:"",value:userList}],viewName:"sysSecUserGroup_User",loadSuccessed:this.view.insertGroupUsersSuccess,boInvoked:{dcID:"security",boID:"security_userGroup.business.xml_bo",methodName:"security.userGroup.insertUserGroupUsersForUnieap"},showLoading:true},_load,_error); }});