import http from "k6/http";


const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/FC2312123925/approve'

export default function () {
    let data = { 
    "approvalType": "Approved",
    "licenceNumber": "licence1235",
    "licenceIssuanceType": "uploadLicence" ,
    "issueDate": "26/02/2023",
    "startDate": "26/02/2023",
    "expiryDate": "10/01/2024",
    "agencyMessageToApplicant": "",
    "internalRemarks": ""
    };

    let resApprove = http.post(urlApprove, data, {
        headers: { 'Content-Type': 'application/json', 'authorization': 'Bearer eeyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MDQ4NDI2Mywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiMDI1ZDY1YmItM2FlMC00YzgwLTlkNzctMjA5NWY5NDJkN2ExIn0.n18MVoFk5H1CH9MIBC4_-jZOeoczX2SVd5bW--5A8ujCQrK52ocdS5tIZt3QG8QWu4P0vdSKWfFwSDJE1DlEwQ'},
        });

    }