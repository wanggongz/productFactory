 /*** @author shify * @creationTime 2014-07-03 16:07:56 * @modificationTime 2014-12-31 16:45:56 * @version 1.0.0* @generated */dojo.provide("_security.page_authority.role.role_page_authority_unieap.Processor");dojo.declare("_security.page_authority.role.role_page_authority_unieap.Processor",unieap.view.Processor, {getAllEnabledRoles: function(_load,_error ){return this.run({ processorName:"getAllEnabledRoles", uParameters:[],viewName:"role_page_authority_unieap",loadSuccessed:this.view.getAllEnabledRolesSuccess,boInvoked:{dcID:"security",boID:"security_role.business.xml_bo",methodName:"security.role.getAllEnableSysSecRoleForUnieap"},showLoading:true},_load,_error); },getAllApps: function(_load,_error ){return this.run({ processorName:"getAllApps", uParameters:[],viewName:"role_page_authority_unieap",pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_application.business.xml_bo",methodName:"security.application.getAllApplicationsForUniEAP"},showLoading:true},_load,_error); },getAllPages: function(_load,_error ){return this.run({ processorName:"getAllPages", uParameters:[],viewName:"role_page_authority_unieap",loadSuccessed:this.view.getAllPagesSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_page.business.xml_bo",methodName:"security.page.getAllPageListForUniEAP"},showLoading:true},_load,_error); },getAuthorizedPages: function(id,principal,_load,_error ){return this.run({ processorName:"getAuthorizedPages", uParameters:[{name:"id",type:"string",javaType:"",value:id},{name:"principal",type:"string",javaType:"",value:principal}],viewName:"role_page_authority_unieap",loadSuccessed:this.view.getAuthorizedPagesSuccess,pagingInfo:{pageNumber:1,pageSize:10,calcRecordCount:true},boInvoked:{dcID:"security",boID:"security_page.business.xml_bo",methodName:"security.page.getAuthorityPagesForUniEAP"},showLoading:true},_load,_error); },saveAuthority: function(sid,principal,classPath,commonList,_load,_error ){return this.run({ processorName:"saveAuthority", uParameters:[{name:"sid",type:"string",javaType:"",value:sid},{name:"principal",type:"string",javaType:"",value:principal},{name:"classPath",type:"string",javaType:"",value:classPath},{name:"commonList",type:"pojoList",javaType:"",value:commonList}],viewName:"role_page_authority_unieap",loadSuccessed:this.view.saveAuthoritySuccess,loadFailed:this.view.saveAuthorityError,boInvoked:{dcID:"security",boID:"security_authority.business.xml_bo",methodName:"security.authority.inserRoleAuthorityForUnieap"},showLoading:true},_load,_error); }});