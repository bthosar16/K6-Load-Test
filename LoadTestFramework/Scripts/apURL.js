import http from "k6/http";



// Intialization of Vusers
export let options = {
 //   vus: 100     //`{__ENV.VU}`,
    //duration: `{__ENV.DURATION}`,
  };


// Main function to initialise the URL and Vertual Users
export default function(){
    http.get('https://agencyportal.qa.gobusiness.io/login')
    sleep(1);
    console.log(res.status);
}