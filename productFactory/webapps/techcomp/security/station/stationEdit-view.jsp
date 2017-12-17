
<%--
	
    @author zhyu.neu
    @creationTime 2014-08-11 16:07:29
    @modificationTime 2014-08-18 17:44:01
    @version 1.0.0 
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://unieap.neusoft.com/techcomp/ria" prefix="unieap" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title></title>
		<script type="text/javascript">
		    if(!window.beginTime){
		        beginTime = new Date().getTime();
		    }
		</script>	    		
	   	<%@ include file="/techcomp/ria/base/base.jsp" %>
	   	 
		<script type="text/javascript" scope="processor" src="<%=path%>/techcomp/security/station/stationEdit-processor.js?version=20140818174401"></script>
		
		<script type="text/javascript" scope="view" src="<%=path%>/techcomp/security/station/stationEdit-view.js?version=20140818174401"></script>
		
		<script type="text/javascript">
			if(!window["dataCenter"]){
		 		dataCenter = new unieap.ds.DataCenter();
	 		}
	 		
	 		dojo.addOnLoad(function(){
	 		    var interval = new Date().getTime()- beginTime;			    
			    console.log("interval: " + interval  + "ms");
	 		    dataCenter.setParameter("_control_interval", interval + "ms");
				stationEdit.page_initEvents&&dojo.hitch(stationEdit,stationEdit.page_initEvents)();
				stationEdit.page_load&&dojo.hitch(stationEdit,stationEdit.page_load)();
				
			});
			
		</script>
		
	<unieap:render-dc />
	
	</head>
	<body class="unieap">
	<security:auth><s:i18n name="techcomp.security.package">
    <div dojoType='unieap.layout.BorderContainer' design='headline' id='borderLayout1' showTitleBar='false'>
        <div dojoType='unieap.layout.BorderPane' id='borderPane0' region='center' showTitleBar='false' splitLine='false'>
            <div dojoType='unieap.form.Form' id='form1' binding="{store:'sysSecStation'}">
                <table id='form1_tableLayout' width='100%' style='table-layout:fixed;'>
                    <colgroup>
                        <col width='25%'></col>
                        <col width='35%'></col>
                        <col width='40%'></col>
                    </colgroup>
                    <tbody>
                        <tr height='40px' id='form1_0_tr'>
                            <td align='right' id='name_label_td' rowSpan='1'>
                                <label id='name_label'>岗位名称：</label>
                            </td>
                            <td colSpan='1' id='name_td' rowSpan='1'>
                                <div dojoType='unieap.form.TextBox' id='name' width='100%' binding="{name:'name'}"></div>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr height='40px' id='form1_1_tr'>
                            <td align='right' id='code_label_td' rowSpan='1'>
                                <label id='code_label'>编号：</label>
                            </td>
                            <td colSpan='1' id='code_td' rowSpan='1'>
                                <div dojoType='unieap.form.TextBox' id='code' width='100%' binding="{name:'code'}"></div>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr height='59px' id='form1_2_tr'>
                            <td align='right' id='description_label_td' rowSpan='1'>
                                <label id='description_label'>岗位描述：</label>
                            </td>
                            <td colSpan='2' id='description_td' rowSpan='1'>
                                <div dojoType='unieap.form.Textarea' id='description' width='80%' binding="{name:'description'}"></div>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dojoType='unieap.form.InlineEditBox' disabled='true' height='5px' id='inlineEditBox1' width='98%' style='margin-left :1%;margin-right:1%;'></div>
            <table id='form1_ToolBarInfo' width='100%' style='table-layout:fixed;'>
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col width='97px'></col>
                    <col width='97px'></col>
                </colgroup>
                <tbody>
                    <tr height='40px'>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            <div dojoType='unieap.form.Button' height='25px' id='form1_saveButton' label='保存' width='90px'></div>
                        </td>
                        <td>
                            <div dojoType='unieap.form.Button' height='25px' id='form1_closeButton' label='关闭' width='90px'></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</s:i18n>
    </security:auth>
	</body>
</html>
