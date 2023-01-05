import http from 'k6/http';

const urlUnassigned = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211374/claim';
const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211374';
const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012211374/reject';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MjgzMzMzNywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiZTNhNTU5MDEtMzM1Ny00ZmExLWE2M2EtZDRjN2MyYWNlMjI3In0.q2qR0PKmr9MAM_IOABG1VTaQGG7vV66rpwNdIWUIrCIircI-_2vjrprK53BYpZvJ6eh-wEVbF43_6hlV0HEr5g';


export default function () {

let data =
{


    "internalRemarks": "",
    "messageToApplicant": ""
}

// Unassigned Cases
let resUnassignedCases = http.get(urlUnassigned,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });

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