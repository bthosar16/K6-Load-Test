import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT082614626/approve';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3NTA2NTU4Niwicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiYjhlNWRlZmEtNDlmMy00NzRmLWFkMDItMDMzNDM5Mzk5ZTc3In0.W3jiKr2YlKIXxHo_t95f5EaYPSvnFufGZhGmssMeeTOaCEksYjmHw48J5KWej7UZU4GPkD7nWQry89VJEqOzpQ';


export default function () {

    let data = {
	"approvalType": "Approved",
	"licenceNumber": "LIC0129977",
	"licenceIssuanceType": "uploadLicence" ,
	"issueDate": "26/02/2022",
	"startDate": "26/02/2022",
	"expiryDate": "25/02/2023",
	"agencyMessageToApplicant": "",
	"internalRemarks": ""
}

const fd = new FormData();
  fd.append('approveFormData', data);
  

  const res = http.post(urlApprove, fd.body(), {
    headers: { 'Content-Type': 'multipart/form-data; boundary=' + fd.boundary },
  });
   /* 
   // Approve Application
    let resApprove = http.post(urlApprove, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });
    
    // Reject Application
    let resReject = http.post(urlApprove, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Authorization': token},
    });*/
    }