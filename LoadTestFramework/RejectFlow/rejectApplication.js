import http from 'k6/http';

const urlUnassigned = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211005/claim';
const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211005';
const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211005/reject';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MzI1MTYzNywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiNjA2ZDc1MzYtYzAxMS00OGY2LWE1NzQtZTRkNDgzMzE2OGNmIn0.25fHm2y64lCbMseoRl69OCqwiOoDaNhXBCwBID1TJ2SIR6_K1L-MNRX2_y5jCmypetlHYNYJzAK3PY5cEptmiQ';


export default function () {

let data =
{
    "internalRemarks": "",
    "messageToApplicant": ""
}
/*const appNumber = "FC22200863483";

const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber+'/claim';
const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber;
const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber+'/reject'; */

// Unassigned Cases
let resUnassignedCases = http.get(urlUnassigned,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });

    console.log(urlClaim);
    console.log(urlViewApp);
    console.log(urlReject);

// Claim Application
let resClaim = http.post(urlClaim, null, {
headers: { 'Content-Type': 'application/json', 'authorization': token},
});


// Application Overview
let res = http.get(urlViewApp,{
headers: { 'Content-Type': 'application/json', 'Authorization': token},
});

// Reject Application
let resReject = http.post(urlReject, JSON.stringify(data), {
headers: { 'Content-Type': 'application/json', 'Authorization': token},
});
}