import http from "k6/http";
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const urlApprove = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT012306204/approve'

export let options = {
    ext: {
      loadimpact: {
        projectID: 3620807,
        // Test runs with the same name groups test runs together
        name: "Validate Application Results - Baseline Test"
      }
    }
  }
  const img1 = open('/Users/bthosar/Documents/APLoadTest/LoadTestFramework/Scripts/logo.png', 'b');

export default function () {
    const fd = new FormData();
  

    let approveFormData = {
        "approvalType": "Approved",
        "licenceNumber": "LICAbcd0011",
        "licenceIssuanceType": "noLicence" ,
        "issueDate": "11/01/2023",
        "startDate": "10/01/2024",
        "expiryDate": "10/01/2024",
        "agencyMessageToApplicant": "",
        "internalRemarks": ""
    };
    fd.append("licenceFile",  http.file(img1, 'logo.png', 'image/png'))
    fd.append('additionalDocuments', http.file(img1, 'logo.png', 'image/png'));
    fd.append('approvedFormData',(approveFormData),);

    let resApprove = http.post(urlApprove, fd.body(), {
        headers: { 'Content-Type': 'multipart/form-data; boundary='+fd.boundary , 'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiT2ZmaWNlckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MzYwNDIzNiwicm9sZSI6ImFnZW5jeV9vZmZpY2VyIiwidXNlciI6eyJpZCI6MTEsImFnZW5jeUNvZGUiOiJtb2UiLCJhZ2VuY3lOYW1lIjoiTWluaXN0cnkgb2YgRWR1Y2F0aW9uIn0sImF1dGhvcml0aWVzIjpbInByb2Nlc3NfYXBwbGljYXRpb24iLCJyZWFzc2lnbl9zZWxmIl0sImp0aSI6Ijk2ZDlkNWE2LTI2NTEtNGQzOS04ZTRmLTY2MTNlZjkxZTE5NiJ9.7iehUew-eMlz5e9JBC8evF1dTFHrhFnfsRL6hDqh_SfpY5kCZbOYP3ZJxCx3dHEQxAwWttF_36mYml0XMVjrxQ'},
        });

    }