/**
 * 参数定义
 * @author neusoft
 * @creationTime 2016-06-30 12:36:11
 * @modificationTime 2016-10-13 14:07:34
 * @version 1.0.0
 * @generated
 */
dojo.require("unieap.view.View");
unieap.define("pfRiskParamTabInf", function () {
    var navigateButton;
    dojo.addOnLoad(function () {
        navigateButton = pfRiskParamTabInf_navigateButton;
    });
    dojo.addOnLoad(function () {

    });

    dojo.declare("_factoryabclife.riskInformation.pfRiskParamTabInf.View", unieap.view.View, {



        create: function () {
            if (typeof (_scribeHandles) != "undefined") {
                dojo.mixin(this, {
                    _scribeHandles: _scribeHandles
                });
            }

            dojo.mixin(this, {
                _rootNodeId: (unieap instanceof UnieapDecorate) ? rootId : '',
                dataCenter: dataCenter,
                delpfRiskParamSuccess: delpfRiskParamSuccess,
                queryParamInsurSuccess: queryParamInsurSuccess,
                queryParamPaySuccess: queryParamPaySuccess,
                del_paySuccess: del_paySuccess,
                del_insurSuccess: del_insurSuccess,
                del_insur: del_insur,
                del_pay: del_pay,
                queryParamFreqSuccess: queryParamFreqSuccess,
                addparamSuccess: addparamSuccess,
                update_insur: update_insur,
                update_pay: update_pay,
                queryParamPersonnelSuccess: queryParamPersonnelSuccess,
                update_Personnel: update_Personnel,
                del_PersonnelSuccess: del_PersonnelSuccess,
                del_Personnel: del_Personnel,
                queryParamRateSuccess: queryParamRateSuccess,
                add_insur_onComplete: add_insur_onComplete,
                add_pay_onComplete: add_pay_onComplete,
                update_insur_onComplete: update_insur_onComplete,
                update_pay_onComplete: update_pay_onComplete,
                add_personnel_onComplete: add_personnel_onComplete,
                update_personnel_onComplete: update_personnel_onComplete
            });
            dojo.mixin(this, {
                navigateButton: navigateButton
            });
            this.processor = new _factoryabclife.riskInformation.pfRiskParamTabInf.Processor(this);

            this.controls = new unieap.view.Controls(this);
            this.form = new unieap.view.Form(this);
            this.grid = new unieap.view.Grid(this);
            this.tree = new unieap.view.Tree(this);
        },

        init: function () {

            if (!dataCenter.getDataStore('tInsurtypeBasicInf')) {
                var tInsurtypeBasicInf = new unieap.ds.DataStore('tInsurtypeBasicInf');
                tInsurtypeBasicInf.setRowSetName("com.neusoft.abclife.productfactory.entity.TInsurtypeBasicInf");

                dataCenter.addDataStore(tInsurtypeBasicInf);
            }

            if (!dataCenter.getDataStore('tInsurtypeCustElemCtrl_Personnel')) {
                var tInsurtypeCustElemCtrl_Personnel = new unieap.ds.DataStore('tInsurtypeCustElemCtrl_Personnel');
                tInsurtypeCustElemCtrl_Personnel.setRowSetName("com.neusoft.abclife.productfactory.entity.TInsurtypeCustElemCtrl");

                dataCenter.addDataStore(tInsurtypeCustElemCtrl_Personnel);
            }

            if (!dataCenter.getDataStore('tProductParamDef')) {
                var tProductParamDef = new unieap.ds.DataStore('tProductParamDef');
                tProductParamDef.setRowSetName("com.neusoft.abclife.productfactory.entity.TProductParamDef");

                dataCenter.addDataStore(tProductParamDef);
            }

            this.page_init();
        },

        page_initEvents: function () {

            this.connect(unieap.byId("add_insur"), "onComplete", this.add_insur_onComplete);

            this.connect(unieap.byId("add_pay"), "onComplete", this.add_pay_onComplete);

            this.connect(unieap.byId("update_insur"), "onComplete", this.update_insur_onComplete);

            this.connect(unieap.byId("update_pay"), "onComplete", this.update_pay_onComplete);

            this.connect(unieap.byId("add_personnel"), "onComplete", this.add_personnel_onComplete);

            this.connect(unieap.byId("update_personnel"), "onComplete", this.update_personnel_onComplete);

        },



        page_load: function () {
            this.inherited(arguments);

            view.navigator.receiveData("险种参数信息", function (dc) {
                var tInsurtypeBasicInf = dc.getDataStore("tInsurtypeBasicInf");
                //重复加载数据
                dataCenter.addDataStore("tInsurtypeBasicInf", tInsurtypeBasicInf);
                //执行翻页方法
                view.processor.queryParamInsur(tInsurtypeBasicInf, "02");
                view.processor.queryParamPay(tInsurtypeBasicInf, "01");
                view.processor.queryParamPersonnel(tInsurtypeBasicInf, 1, 10);
                view.processor.queryParamRate(tInsurtypeBasicInf, "04", 1, 10);
                //navigateButton.showBtn(dc.getDataStore('tInsurtypeBasicInf'));
            });
            navigateButton.activeNavigateButton("param");


        },
        page_init: function () {
            var ds = new unieap.ds.DataStore("ds_freq", [{
                CODEVALUE: "0",
                CODENAME: "一次交清"
            }, {
                CODEVALUE: "12",
                CODENAME: "年交"
            }, {
                CODEVALUE: "6",
                CODENAME: "半年交"
            }, {
                CODEVALUE: "3",
                CODENAME: "季交"
            }, {
                CODEVALUE: "1",
                CODENAME: "月交"
            }, {
                CODEVALUE: "-1",
                CODENAME: "不定期"
            }]);
            var ds1 = new unieap.ds.DataStore("ds_date", [{
                CODEVALUE: "Y",
                CODENAME: "年"
            }, {
                CODEVALUE: "A",
                CODENAME: "岁"
            }]);
            var ds2 = new unieap.ds.DataStore("ds_pelUnit", [{
                CODEVALUE: "A",
                CODENAME: "岁"
            }, {
                CODEVALUE: "D",
                CODENAME: "天"
            }]);
            var ds3 = new unieap.ds.DataStore("ds_pelType", [{
                CODEVALUE: "00",
                CODENAME: "投保人"
            }, {
                CODEVALUE: "01",
                CODENAME: "被保人"
            }, {
                CODEVALUE: "02",
                CODENAME: "受益人"
            }]);
            var ds4 = new unieap.ds.DataStore("ds_pelSex", [{
                CODEVALUE: "0",
                CODENAME: "男"
            }, {
                CODEVALUE: "1",
                CODENAME: "女"
            }, {
                CODEVALUE: "2",
                CODENAME: "不限"
            }]);
            dataCenter.addDataStore(ds);
            dataCenter.addDataStore(ds1);
            dataCenter.addDataStore(ds2);
            dataCenter.addDataStore(ds3);
            dataCenter.addDataStore(ds4);
        }

    });
    /**
     * @description:delpfRiskParam方法的成功回调。
     *
     */

    function delpfRiskParamSuccess(dc) {
        MessageBox.autoCloseAlert({
            title: "提示框",
            message: "删除成功"
        });
    }
    /**
     * @description:queryParamInsur方法的成功回调。
     *
     */

    function queryParamInsurSuccess(dc) {
        var result = dc.getDataStore("insurtypeparam");
        view.grid.setDataStore("grid_insur", result);
    }
    /**
     * @description:queryParamPay方法的成功回调。
     *
     */

    function queryParamPaySuccess(dc) {
        var result = dc.getDataStore("insurtypeparam");
        view.grid.setDataStore("grid_pay", result);
    }
    /**
     * @description:del_pay方法的成功回调。
     *
     */

    function del_paySuccess(dc) {
        MessageBox.autoCloseAlert({
            title: "提示框",
            message: "删除成功"
        });
        view.processor.queryParamPay(view.form.getDataStore("form_insur"), "01");
    }
    /**
     * @description:del_insur方法的成功回调。
     *
     */

    function del_insurSuccess(dc) {
        MessageBox.autoCloseAlert({
            title: "提示框",
            message: "删除成功"
        });
        view.processor.queryParamInsur(view.form.getDataStore("form_insur"), "02");
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function del_insur(inRowIndex) {
        var selectRow = view.grid.getRow("grid_insur", inRowIndex);
        MessageBox.confirm({
            title: "提示",
            message: "确认删除！",
            onComplete: function (value) {
                if (value == true) {
                    view.processor.del_insur(selectRow);
                }
            }
        });
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function del_pay(inRowIndex) {
        var selectRow = view.grid.getRow("grid_pay", inRowIndex);
        MessageBox.confirm({
            title: "提示",
            message: "确认删除！",
            onComplete: function (value) {
                if (value == true) {
                    view.processor.del_pay(selectRow);
                }
            }
        });
    }
    /**
     * @description:queryParamFreq方法的成功回调。
     *
     */

    function queryParamFreqSuccess(dc) {
        var result = dc.getDataStore("insurtypeparam");
        view.grid.setDataStore("grid_freq", result);
    }
    /**
     * @description:addparam方法的成功回调。
     *
     */

    function addparamSuccess(dc) {
        var info = dc.getParameter("PfRiskParam");
        if (info == "") {
            MessageBox.autoCloseAlert({
                title: '提示',
                message: '保存成功！'
            });
        }
        else {
            MessageBox.alert({
                title: '提示',
                message: info
            });
        }
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function update_insur(inRowIndex) {
        var row = view.grid.getRow("grid_insur", inRowIndex);
        if (row && row.rowSet && row.rowSet.primary && row.rowSet.primary.length == 1) {

            var status = row.rowSet.primary[0].status;
            //20160309改, -1状态不可用
            if (status == -1) {
                return;
            }
            else {
                var dialog = unieap.byId("update_insur");
                var entityId = view.form.getDataStore("form_insur");
                dialog.dialogData = {
                    "paramType": "02",
                    "asch": "02",
                    "entityId": entityId,
                    "opt": "update",
                    "live": row
                };

                dialog.show();
            }
        }
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function update_pay(inRowIndex) {
        var row = view.grid.getRow("grid_pay", inRowIndex);
        if (row && row.rowSet && row.rowSet.primary && row.rowSet.primary.length == 1) {

            var status = row.rowSet.primary[0].status;
            //20160309改, -1状态不可用
            if (status == -1) {
                return;
            }
            else {
                var dialog = unieap.byId("update_pay");
                var entityId = view.form.getDataStore("form_insur");
                dialog.dialogData = {
                    "paramType": "01",
                    "asch": "02",
                    "entityId": entityId,
                    "opt": "update",
                    "live": row
                };

                dialog.show();
            }
        }
    }
    /**
     * @description:queryParamPersonnel方法的成功回调。
     *
     */

    function queryParamPersonnelSuccess(dc) {
        var result = dc.getDataStore("queryPersonnelResult");
        view.grid.setDataStore("grid_Personnel", result);
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function update_Personnel(inRowIndex) {
        var row = view.grid.getRow("grid_Personnel", inRowIndex);
        if (row && row.rowSet && row.rowSet.primary && row.rowSet.primary.length == 1) {

            var status = row.rowSet.primary[0].status;
            //20160309改, -1状态不可用
            if (status == -1) {
                return;
            }
            else {
                var dialog = unieap.byId("update_personnel");
                var entityId = view.form.getDataStore("form_insur");
                dialog.dialogData = {
                    "entityId": entityId,
                    "opt": "update",
                    "live": row
                };

                dialog.show();
            }
        }
    }
    /**
     * @description:del_Personnel方法的成功回调。
     *
     */

    function del_PersonnelSuccess(dc) {
        MessageBox.autoCloseAlert({
            title: "提示框",
            message: "删除成功"
        });
        view.processor.queryParamPersonnel(view.form.getDataStore("form_insur"), 1, 10);
    }
    /**
     * @description:
     *
     * @param: {参数类型} arg0参数描述
     * @return:
     *
     */

    function del_Personnel(inRowIndex) {
        var selectRow = view.grid.getRow("grid_Personnel", inRowIndex);
        MessageBox.confirm({
            title: "提示",
            message: "确认删除！",
            onComplete: function (value) {
                if (value == true) {
                    view.processor.del_Personnel(selectRow);
                }
            }
        });
    }
    /**
     * @description:queryParamRate方法的成功回调。
     *
     */

    function queryParamRateSuccess(dc) {
        var result = dc.getDataStore("insurtypeparam");
        unieap.byId("checkBoxGroup1").setValue("");
        var count = result.getRowSet().getRowCount();
        if (count > 0) {
            for (var i = 0; i < count; i++) {
                var value = result.rowSet.primary[i].paramVal;
                if (value == "0") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [0]);
                }
                if (value == "12") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [1]);
                }
                if (value == "6") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [2]);
                }
                if (value == "3") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [3]);
                }
                if (value == "1") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [4]);
                }
                if (value == "-1") {
                    unieap.byId("checkBoxGroup1").setChecked(true, [5]);
                }
            }
        }
    }

    function add_insur_onComplete(returnObj) {
        view.processor.queryParamInsur(view.form.getDataStore("form_insur"), "02");

    }

    function add_pay_onComplete(returnObj) {
        view.processor.queryParamPay(view.form.getDataStore("form_insur"), "01");
    }

    function update_insur_onComplete(returnObj) {
        view.processor.queryParamInsur(view.form.getDataStore("form_insur"), "02");

    }

    function update_pay_onComplete(returnObj) {
        view.processor.queryParamPay(view.form.getDataStore("form_insur"), "01");
    }

    function add_personnel_onComplete(returnObj) {
        view.processor.queryParamPersonnel(view.form.getDataStore("form_insur"), 1, 10);
    }

    function update_personnel_onComplete(returnObj) {
        view.processor.queryParamPersonnel(view.form.getDataStore("form_insur"), 1, 10);
    }

    var view = new _factoryabclife.riskInformation.pfRiskParamTabInf.View();
    view.init();

    return view;
})