import http from "k6/http";
import { group } from "k6";

const dashboardUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=openCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const unassignedCasesUrl = 'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=unassignedCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20';
const token = 'Bearer ';


export const options = {
    ext: {
        loadimpact: {
            projectID: 3620807,
            name: "Reject the Application - Baseline Test"
        }
    }
};

export default function () {

    let rejectData =
    {
        "internalRemarks": "",
        "messageToApplicant": ""
    }
   // const appNumber = [
   //     "PFT123211417"
   // ]

   group("function_1", function() {var1 = applicationList()});

    let appIndex = 0;
    let arrLength = appNumber.length;
    while (appIndex < arrLength) {
     //   const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex] + '/claim';
     //   const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex];
     //   const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber[appIndex] + '/reject';

        const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber + '/claim';
        const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber;
        const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/' + appNumber + '/reject';

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
};

function applicationList(){
    return "";
}