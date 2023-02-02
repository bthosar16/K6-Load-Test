import http from 'k6/http';
const urlUnassigned = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MzI0ODc5OCwicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiZTcyN2YxMjYtMWQ2MC00ZDk1LTg4ZDMtNGYxNzUwNzU4YTdlIn0.z6qRjSMjOU4kMkvvUlLI2szhKvTtkDEvZFgsLFsRxNSfcO4CrExQnshGWVcWgEf7Dl7sHTrvVIWDPN3S9Ame-A';

export default function () {

const appNumber = [
    "PFT012302055",
    "PFT012305877",
    "PFT012304894"
]
let appIndex = 0;
let arrLength = appNumber.length;
while(appIndex < arrLength){
    const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex]+'/claim';
    const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex];
    const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex]+'/reject';


    console.log(urlClaim);

    let resUnassignedCases = http.get(urlUnassigned,{
        headers: { 'Content-Type': 'application/json', 'Authorization': token},
        });
    
    // Claim Application
    let resClaim = http.post(urlClaim, null, {
    headers: { 'Content-Type': 'application/json', 'authorization': token},
    });

    appIndex = appIndex + 1;

}
}