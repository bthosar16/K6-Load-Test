import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


// Intialization
export let options = {
  vus: 5,
  duration: '20s',
};


// VU Script
export default function () {
  http.post('http://agencyportal.qa.gobusiness.io/login');
  sleep(1);
  //console.log(res.status);
}


// HTML Report
export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}