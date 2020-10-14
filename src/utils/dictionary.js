import qs from 'qs';
import axios from 'axios';

/**
 * 若项目中有埋点需求，可以引入
 */
const http = 'https://dht.colourdata.com.cn/EventTracking';
const dictionary = {
    projectId: 'Ic4b46dad-3236-4a4b-a963-8c3098b8258d',
    pageId: {
        loading: 'P6a0e4a08-9221-4cd6-8890-8e1a3b267167', //
        bell: 'P6ab986e2-ad89-498f-a922-620b1deceae8', //
        list: 'P2b5aa2fa-bf5d-4e41-9514-e342e41f964d' //
    },
    controlId: {
        accpet: 'Cd2a3eebb-4109-476f-8456-d470b6816b16', //
        list: 'Cf96d457f-5751-4181-b34f-fa0cda99dd05' //
    },

    equipment: 'H5'
};
//点击控件
function mai(params = {}) {
    params.controlId = dictionary.controlId[params.controlName];
    const defaultParams = {
        projectId: dictionary.projectId, //*项目ID（根据该字段，匹配相应的埋点数据）StringprojectId;必填
        pageId: '', //*功能板ID（根据该字段，匹配相应功能板块的埋点数据）StringpageId;
        controlId: '', //*控件名（根据该字段，匹配相应的控件）StringcontrolName;必填
        userName: '', //用户名StringuserName;
        detail: '', //其余参数储存Stringdetail
        operationId: '', //操作ID（根据该字段，匹配相应的操作）StringoperationId;
        brand: '', //品牌名/活动名/自定义标签（若没有可不填）Stringbrand;
        channel: '', //媒体渠道（若没有可不填）Stringchannel;
        amount: 0, //金额（若没有可不填）Moneyamount;没有就写0
        beginTime: '', //数据请求时间范围中的开始时间（若没有可不填）DatebeginTime;
        endTime: '', //数据请求时间范围中的结束时间（若没有可不填）DateendTime;
        operationTime: '', //操作时间（若没有可不填）DateoperationTime;
        ip: '', //IP地址（若没有可不填）Stringip;
        userSource: '', //用户来源（若没有可不填）StringuserSource;
        equipment: dictionary.equipment || '', //设备（PC、APP、H5）Stringequipment;
        city: '' //用户所在城市Stringcity;
    };
    const patchParams = Object.assign(defaultParams, params);
    console.log('埋点参数：', patchParams);
    return axios({
        url: `${http}/operation/add`,
        method: 'post',
        data: qs.stringify(patchParams)
    });
}
//页面访问
function maiVisit(params = {}) {
    params.pageId = dictionary.pageId[params.pageName];

    const defaultParams = {
        visitId: '',
        pageId: '',
        visit_time: '',
        ip: '',
        city: ''
    };
    const patchParams = Object.assign(defaultParams, params);
    console.log('埋点访问页面参数：', patchParams);

    return axios({
        url: `${http}/visit/add`,
        method: 'post',
        data: qs.stringify(patchParams)
    });
}

export default {
    mai,
    maiVisit
};
