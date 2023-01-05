import http from 'k6/http';

const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123451866/approve';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MTcyMzczMywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiNWRhMWRmYzktYmJiYi00YzgwLThkMmItMjM0YjdjZTg0OGJiIn0.vJ-9DD2rCsof-miQI6j6dgyE47aiOzZRngfIGouNGc0FS0LTfqwrSJQVC1R1-xhgW5ErpG8UvRTDniGyqUBT_g';


export default function () {

    let data = {
	"approvalType": "Approved",
	"licenceNumber": "LIC00000797977",
	"licenceIssuanceType": "uploadLicence" ,
	"issueDate": "26/02/2022",
	"startDate": "26/02/2022",
	"expiryDate": "10/01/2023",
	"agencyMessageToApplicant": "",
	"internalRemarks": ""
}
    
   // Approve Application
    let resApprove = http.post(urlApprove, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });
    
    // Reject Application
    let resReject = http.post(urlApprove, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });
    }