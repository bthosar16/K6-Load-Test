import http from "k6/http";

const dashboardUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=openCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const unassignedCasesUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiT2ZmaWNlckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3NTA2MjY0MSwicm9sZSI6ImFnZW5jeV9vZmZpY2VyIiwidXNlciI6eyJpZCI6MTEsImFnZW5jeUNvZGUiOiJtb2UiLCJhZ2VuY3lOYW1lIjoiTWluaXN0cnkgb2YgRWR1Y2F0aW9uIn0sImF1dGhvcml0aWVzIjpbInByb2Nlc3NfYXBwbGljYXRpb24iLCJyZWFzc2lnbl9zZWxmIl0sImp0aSI6ImYyODBjZDNkLWRiNTktNDI3YS05ZmI1LTBhOWY5ZjJkNDEzZCJ9.zzFCqaOzYIuOtK81gnEJ-Kbi98Z-2_QX0lwdJPnrIeQtGyhiumzTjvxtezA7b6mEUKTW2hkS82gN6mj3IZGVJA';


export const options = {
    ext: {
        loadimpact: {
            projectID: 3624684,
            name: "Reject the Application - 10 Applications"
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
        "PFT082612211",
        "PFT082619051",
        "PFT082612302",
        "PFT082617214",
        "PFT082619132",
        "PFT082612694",
        "PFT082616004",
        "PFT082611842",
        "PFT082619678",
        "PFT082613158"
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