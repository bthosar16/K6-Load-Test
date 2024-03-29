import http from "k6/http";

const dashboardUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=openCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const unassignedCasesUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const token = 'Bearer ';


export const options = {
    ext: {
        loadimpact: {
            projectID: 3620807,
            // Test runs with the same name groups test runs together
            name: "Validate Application Results - Shared Iteration"
        }
    }
};

export default function SAS(applicationNumber) {

    let rejectData =
    {
        "internalRemarks": "",
        "messageToApplicant": ""
    }
    const appNumber = [
        "PFT012303400",
        "PFT012305820"
    ]

    let appIndex = 0;
    let arrLength = appNumber.length;
    while (appIndex < arrLength) {
        const startTime = Date.now();
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
        console.log(startTime - Date.now())
        appIndex = appIndex + 1;
        // appNumber.shift();
    }
   
}

