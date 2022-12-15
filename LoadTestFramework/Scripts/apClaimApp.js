import http from "k6/http";


const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/FC2312129576/claim'

const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/FC2312129576/approve'

// Intialization of Vusers
//export let options = {
//  vus: 1     //`{__ENV.VU}`,
//duration: `{__ENV.DURATION}`,
//};
export default function () {
let data = { 
"approvalType": "Approved",
"licenceNumber": "licence123511",
"licenceIssuanceType": "uploadLicence" ,
"issueDate": "26/02/2022",
"startDate": "26/02/2022",
"expiryDate": "10/01/2023",
"agencyMessageToApplicant": "",
"internalRemarks": ""
};
//    for(let i=0;i<1;i++)
//    { let licNumber=Math.floor(Math.random() * (9999 - 1000 + 1 ) + 1000)
//    data["licenceNumber"]="Licence"+ licNumber;
//   console.log("Licence Number "+data["licenceNumber"])

// Using a JSON string as body
let resClaim = http.post(urlClaim, null, {
headers: { 'Content-Type': 'application/json', 'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MDkxMzUzMiwicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiN2NhZTZlMmUtNDI0ZS00NjU5LWIxMmItZWJmNGE2YTdkNTBiIn0.QUbak8MDUeH_xhhKSnn6YTSbyR1jgZ1eBaSRpNrzML6-6B3tXDG4b10dz7-r6xRn-7MYsWtAsfBXYnmzvoF3lA'},
});

let resApprove = http.post(urlApprove, JSON.stringify(data), {
headers: { 'Content-Type': 'application/json', 'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MDkxMzUzMiwicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiN2NhZTZlMmUtNDI0ZS00NjU5LWIxMmItZWJmNGE2YTdkNTBiIn0.QUbak8MDUeH_xhhKSnn6YTSbyR1jgZ1eBaSRpNrzML6-6B3tXDG4b10dz7-r6xRn-7MYsWtAsfBXYnmzvoF3lA'},
});

}
//}