import http from '@/utils/http';

let baseUrl = 'http://139.198.0.141:81/BudweiserStorm'; //测试开发

export default {
    async check(params) {
        params.batchId = params;
        return await http.post(`${baseUrl}/s/tml/getBasicInfo.do`);
    }
};
