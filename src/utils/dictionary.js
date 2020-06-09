import qs from "qs";
import axios from "axios";
/**
 * 若项目中有埋点需求，可以引入
*/
const dictionary = {
    projectId: 'If903a96f-672a-40b9-a148-bd1ad79dde35',
    pageId: {
        home: 'Pf541bee1-334f-4dbf-a77e-01d86561056d', //首页
        success: 'P9436c1fb-1952-4e85-a64a-c529f8de2b32', //参与成功页
    },
    controlId: {
        立即参与: 'C3452fd9d-dafd-4e6a-bce6-45757a7c7bca',
    },

    equipment:'H5'
};



function  mai(params = {}) {
    //名字换取id
    params.controlId = dictionary.controlId[params.controlName];
    const defaultParams = {
        projectId: dictionary.projectId, //*项目ID（根据该字段，匹配相应的埋点数据）StringprojectId;必填
        pageId: "", //*功能板ID（根据该字段，匹配相应功能板块的埋点数据）StringpageId;
        controlId: "", //*控件名（根据该字段，匹配相应的控件）StringcontrolName;必填
        userName: localStorage.getItem('code') || '', //用户名StringuserName;
        detail: "", //其余参数储存Stringdetail
        operationId: "", //操作ID（根据该字段，匹配相应的操作）StringoperationId;
        brand: "", //品牌名/活动名/自定义标签（若没有可不填）Stringbrand;
        channel: "", //媒体渠道（若没有可不填）Stringchannel;
        amount: 0, //金额（若没有可不填）Moneyamount;没有就写0
        beginTime: "", //数据请求时间范围中的开始时间（若没有可不填）DatebeginTime;
        endTime: "", //数据请求时间范围中的结束时间（若没有可不填）DateendTime;
        operationTime: "", //操作时间（若没有可不填）DateoperationTime;
        ip: "", //IP地址（若没有可不填）Stringip;
        userSource: "", //用户来源（若没有可不填）StringuserSource;
        equipment: dictionary.equipment || "", //设备（PC、APP、H5）Stringequipment;
        city: "" //用户所在城市Stringcity;
    };
    const patchParams = Object.assign(defaultParams, params);
    console.log("埋点参数：", patchParams);
    return axios({
        url: "http://139.198.0.141:81/EventTracking/operation/add",
        method: "post",
        data: qs.stringify(patchParams)
    });
}

function maiVisit(params = {}) {
    params.pageId = dictionary.pageId[params.pageName];
    const defaultParams = {
        visitId: "",
        pageId: "",
        visit_time: "",
        ip: "",
        city: ""
    };
    const patchParams = Object.assign(defaultParams, params);
    console.log("埋点访问页面参数：", patchParams);

    return axios({
        url: "http://139.198.0.141:81/EventTracking/visit/add",
        method: "post",
        data: qs.stringify(patchParams)
    });
}

export default {
    mai,
    maiVisit
};
