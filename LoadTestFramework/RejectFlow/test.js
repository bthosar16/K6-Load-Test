import http from 'k6/http';

const urlUnassigned = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MzI0NTIxNSwicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiZWZlNzRmNzEtMDUzZS00NmU5LWFiMjAtNGE5OWE2ZDc2MjU3In0.IM2vexozpc9ndnPooN6S_fHMuOkMTJag_p2aHI2s0gcEQF1oQ8mdC6dRkYMCae0TyY0-9fMcJFlVNjlJuwhxvA';


export default function () {

let data =
{
    "internalRemarks": "",
    "messageToApplicant": ""
}

const appNumber = [
    "PFT012302055",
    "PFT012305877",
    "PFT012304894",
    "PFT012308528",
    "PFT012306861",
    "PFT012302672",
    "PFT012303768",
    "PFT012307767",
    "PFT012304729",
    "PFT012306166",
    "PFT012304998",
    "PFT012306090",
    "PFT012308981",
    "PFT012303915",
    "PFT012304590",
    "PFT012301264",
    "PFT012308230",
    "PFT012304291",
    "PFT012305392",
    "PFT012308190",
    "PFT012303876",
    "PFT012301069",
    "PFT012308824",
    "PFT012307994",
    "PFT012305562",
    "PFT012306492",
    "PFT012304085",
    "PFT012306683",
    "PFT012305839",
    "PFT012303968",
    "PFT012301269",
    "PFT012301518",
    "PFT012308102",
    "PFT012306022",
    "PFT012302375",
    "PFT012303022",
    "PFT012306272",
    "FC224149769",
    "PFT012302917",
    "PFT012302824",
    "PFT012308802",
    "PFT012309115",
    "PFT012308660",
    "PFT012308546",
    "PFT012301168",
    "PFT012309105",
    "PFT012305178",
    "PFT012304360",
    "PFT012301010",
    "PFT012303335",
    "PFT012309171",
    "PFT012304801",
    "PFT012306547",
    "PFT012309041",
    "PFT012306277",
    "PFT012306539",
    "PFT012309455",
    "PFT012304734",
    "PFT012301232",
    "PFT012308678",
    "PFT012305894",
    "PFT012305706",
    "PFT012304347",
    "PFT012307639",
    "PFT012301592",
    "PFT012304256",
    "PFT012302875",
    "PFT012301869",
    "PFT012309290",
    "PFT012306889",
    "PFT012307271",
    "PFT012308235",
    "PFT012302592",
    "PFT012301214",
    "PFT012301102",
    "PFT012305794",
    "PFT012302039",
    "PFT012305615",
    "PFT012306309",
    "PFT012302936",
    "PFT012304067",
    "PFT012303789",
    "PFT012309810",
    "PFT012306143",
    "PFT012302826",
    "PFT012307666",
    "PFT012305370",
    "PFT012306204",
    "PFT012309848",
    "PFT012301876",
    "PFT012302388",
    "PFT012308171",
    "PFT012306415",
    "PFT012305693",
    "PFT012308585",
    "PFT012305358",
    "PFT012308037"
]
let appIndex = 0;
let arrLength = appNumber.length;
while(appIndex < arrLength){
    const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex]+'/claim';
    const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex];
    const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/'+appNumber[appIndex]+'/reject';

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

appNumber.shift(); // Removing used application number from the array
}
}