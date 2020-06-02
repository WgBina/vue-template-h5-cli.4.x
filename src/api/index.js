import http from '@/utils/http';

let baseUrl = 'http://139.198.0.141:9999/BudweiserStorm'; //测试开发

export default {
    async check(params) {
        return await http.post(`${baseUrl}/s/tml/getBasicInfo.do`,params);
    }
};
