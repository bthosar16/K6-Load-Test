import http from "k6/http";
import * as testData from '../TestData/testData.js'
import * as env from '../../Resources/env.js'

// Intialization of Vusers
export let options = {
    vus: testData.VUS,
    duration: testData.DURATION,
    teardownTimeout: "20s" // To avoid for infinite loop statements, it will come out after 20 sec
  };


// Main function to initialise the URL and Vertual Users
export default function(){
    http.get('https://agencyportal.qa.gobusiness.io/login')
    sleep(1);
    console.log(res.status);
}


// INIT To Setup Env and Token

let environment;
let token;

if (`{__ENV.ENVIRONMENT}` == env.qa)
{
    environment = env.QA_Environment;
}
else if (`{__ENV.ENVIRONMENT}` == env.dev)
{
    environment = env.DEV_Environment;
}