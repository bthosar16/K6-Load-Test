import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { SharedArray } from 'k6/data';
import { PostRefreshRequest } from './gobiz_auth/PostRefreshRequest.js.js';
import { StartABizRequest } from './postStartABiz.js.js';
import { getCookie } from '../util/cookieUtils.js';
import { Config } from '../config/Config.js';
import { group } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
​
export let options = {
    noCookiesReset: true,
    summaryTrendStats: ["min", "max", "p(90)", "p(95)", "p(99)"],
    scenarios: {
        constantRequests: {
            executor: 'constant-arrival-rate',
            duration: '10s',
            rate: 1,
            timeUnit: '1s',
            preAllocatedVUs: 5,
            maxVUs: 5,
        },
    },
};
​
    const payload = new SharedArray('Request', function () {
    return  JSON.parse(open('../resources/Requests/STARTABUSINESS.json'));
  });
​
        const jsonPayload = JSON.stringify(payload);
        const req = jsonPayload.substring(1, jsonPayload.length -1);
​
    export default function () {
        const startABizRequest = new StartABizRequest(req);
        startABizRequest.send.call();
    }