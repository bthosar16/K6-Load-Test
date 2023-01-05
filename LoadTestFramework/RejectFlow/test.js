import http from 'k6/http';

const urlClaim = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123454728/claim';
const urlViewApp = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123457091';
const urlReject = 'https://api.agencyportal.qa.gobusiness.io/api/application/PFT123457091/reject';

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvckB0ZWNoLmdvdi5zZyIsImV4cCI6MTY3MTcwNjg0Mywicm9sZSI6ImFnZW5jeV9zdXBlcnZpc29yIiwidXNlciI6eyJpZCI6MSwiYWdlbmN5Q29kZSI6InRlc3RfdWF0IiwiYWdlbmN5TmFtZSI6IlRlc3QgTGljZW5jZSBVQVQifSwiYXV0aG9yaXRpZXMiOlsicHJvY2Vzc19hcHBsaWNhdGlvbiIsInJlYXNzaWduX2FsbCIsImFkZF91c2VyIiwiZWRpdF91c2VyIiwiZGVsZXRlX3VzZXIiXSwianRpIjoiYzI5M2RhYmItMWNlMS00ZDRlLTgxNDctZjcyZTY2YzI3NTZhIn0.jrahg2za6SYkReRRs3_NslkM_ipjuu7Om7MS-hRjCHZf8zUpBt-_tq80wRwenTs3Id58ePOkyDplrkijvPWEpg';


export default function () {


// Claim Application
let resClaim = http.post(urlClaim, null, {
headers: { 'Content-Type': 'application/json', 'authorization': token},
});
}