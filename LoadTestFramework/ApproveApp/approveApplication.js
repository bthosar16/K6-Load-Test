import http from 'k6/http';

const urlUnassigned = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const urlDownloadSingle = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866/document?documentName=20221123164117061_test_arrow.png';
const urlDownloadAll = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866/document?documentName=2022112316403602_Layout_plan_for_hdb_sample_%281%29.pdf&documentName=20221123164038847_Sample_of_floor_plan.pdf&documentName=20221123164047896_DeploymentFwInDorm_%281%29.xlsx&documentName=20221123164051636_agencyPortalTestFile.pdf&documentName=20221123164117061_test_arrow.png&documentName=20221123164130121_Layout_plan_for_hdb_sample_%282%29.pdf&documentName=2022112316415296_DeploymentFwInDorm.xlsx&documentName=20221123164206446_Sample_of_floor_plan.pdf&documentName=2022112316424013_DeploymentFwInDorm_%282%29.xlsx&documentName=20221123164349039_20220721155046305015_agencyPortalTestFile.pdf';
const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866/claim';
const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866';
const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866/approve';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MTcyMDU5Mywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiYWVlMGFhMGItNjUxMC00ZDI2LTlmMGEtZWNkMDlmMGE1MDFiIn0.ogelhGn1cORR7P8O8egJ_-Zhmsj_tAqR5YcEwvuXFOfhgmmXUkd1hLdEDAXkISJ4QPlBpQwiXBWULeL5HqB8lA';


export default function () {

let data = 
{
	"approvalType": "Approved",
	"licenceNumber": "LIC000001717",
	"licenceIssuanceType": "uploadLicence" ,
	"issueDate": "26/02/2022",
	"startDate": "26/02/2022",
	"expiryDate": "10/01/2023",
	"agencyMessageToApplicant": "",
	"internalRemarks": ""
}/*
for(let i=0;i<1;i++)
    { let appNumber=Math.floor(Math.random() * (9999 - 1000 + 1 ) + 1000)
        data["licenceNumber"]="LIC00000"+ appNumber;
        console.log("Application Number "+data["licenceNumber"])*/

/*
// Unassigned Cases
// https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20
let resUnassignedCases = http.get(urlUnassigned,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });

// Application Overview
let res = http.get(urlViewApp,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });
/*
// Download Single Document
//https://api.agencyportal.qa.gobusiness.io/api/application/FC223055410/document?documentName=20221123164117061_test_arrow.png
let resDownloadSingle = http.get(urlDownloadSingle,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });

// Download All
//https://api.agencyportal.qa.gobusiness.io/api/application/FC223055410/document?documentName=2022112316403602_Layout_plan_for_hdb_sample_%281%29.pdf&documentName=20221123164038847_Sample_of_floor_plan.pdf&documentName=20221123164047896_DeploymentFwInDorm_%281%29.xlsx&documentName=20221123164051636_agencyPortalTestFile.pdf&documentName=20221123164117061_test_arrow.png&documentName=20221123164130121_Layout_plan_for_hdb_sample_%282%29.pdf&documentName=2022112316415296_DeploymentFwInDorm.xlsx&documentName=20221123164206446_Sample_of_floor_plan.pdf&documentName=2022112316424013_DeploymentFwInDorm_%282%29.xlsx&documentName=20221123164349039_20220721155046305015_agencyPortalTestFile.pdf
let resDownloadAll = http.get(urlDownloadAll,{
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });*/
/*
// Claim Application
let resClaim = http.post(urlClaim, null, {
    headers: { 'Content-Type': 'application/json', 'authorization': token},
    });*/

// Approve Application
let resApprove = http.post(urlApprove, JSON.stringify(data), {
headers: { 'Content-Type': 'application/json', 'authorization': token},
});


// Licence Management

// View Licence

// Download Licence Documents

}
//}