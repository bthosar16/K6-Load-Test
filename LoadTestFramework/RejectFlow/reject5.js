import http from "k6/http";

const dashboardUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=openCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const unassignedCasesUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiT2ZmaWNlckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MzU3OTk1OSwicm9sZSI6ImFnZW5jeV9vZmZpY2VyIiwidXNlciI6eyJpZCI6MTEsImFnZW5jeUNvZGUiOiJtb2UiLCJhZ2VuY3lOYW1lIjoiTWluaXN0cnkgb2YgRWR1Y2F0aW9uIn0sImF1dGhvcml0aWVzIjpbInByb2Nlc3NfYXBwbGljYXRpb24iLCJyZWFzc2lnbl9zZWxmIl0sImp0aSI6IjlmY2VjMDVmLTZkMTAtNGFlNS1hMjQ3LTE1MGJmOWE1YTkxNSJ9.UuKE7NW6s6R9N484eyFIRKvIxYx1NUEGD7htKi1DveitTnADiRJE4a-s8Q78U5huYYvTEaUaw0_hp0LI0MepGQ';


export const options = {
    ext: {
        loadimpact: {
            projectID: 3620807,
            name: "Reject the Application"
        }
    }
};

export default function () {

    let rejectData =
    {
        "internalRemarks": "",
        "messageToApplicant": ""
    }
    const appNumber = [
        "PFT123211839"
    ]

    let appIndex = 0;
    let arrLength = appNumber.length;
    while (appIndex < arrLength) {
        const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex] + '/claim';
        const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex];
        const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex] + '/reject';

        console.log(urlClaim);
        console.log(urlViewApp);
        console.log(urlReject);

        // Agency Portal Dashboard
        let resAPDash = http.get(dashboardUrl, {
            headers: { 'Content-Type': 'application/json', 'authorization': token },
        });

        // Unassigned Cases Tab
        let resUnassignedTab = http.get(unassignedCasesUrl, {
            headers: { 'Content-Type': 'application/json', 'authorization': token },
        });

        // Claim Application
        let resClaim = http.post(urlClaim, null, {
            headers: { 'Content-Type': 'application/json', 'authorization': token },
        });

        // View Application
        let resView = http.get(urlViewApp, {
            headers: { 'Content-Type': 'application/json', 'Authorization': token },
        });

        // Reject Application
        let resReject = http.post(urlReject, JSON.stringify(rejectData), {
            headers: { 'Content-Type': 'application/json', 'Authorization': token },
        });

        appIndex = appIndex + 1;
        // appNumber.shift();
    }
}