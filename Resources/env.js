// Environment Setup

var qa_env = "https://agencyportal.qa.gobusiness.io/login"
var dev_env = "https://agencyportal.qa.gobusiness.io/login"
var staging_env = "https://agencyportal.gobusiness.io/login"
var prod_env = ""


// Export all the environment for test execution

// QA Env
export let QA_Environment = {
    SERVER_ENDPOINT: qa_env
}


// DEV Env
export let DEV_Environment = {
    SERVER_ENDPOINT: dev_env
}


// Declare environment type

export let qa = "qa"

export let dev = "dev"
