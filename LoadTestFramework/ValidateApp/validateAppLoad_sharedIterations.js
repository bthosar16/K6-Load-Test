import http from 'k6/http';

const url = 'https://api.agencyportal.qa.gobusiness.io/resource/validation';


export const options = {
  discardResponseBodies: true,
	  scenarios: {
	    contacts: {
	      executor: 'shared-iterations',
	      vus: 10,
	      iterations: 1300,
	      maxDuration: '60s',
	    },
	  },
      ext: {
        loadimpact: {
          projectID: 3620807,
          // Test runs with the same name groups test runs together
          name: "Validate Application Results - Shared Iteration"
        }
      }
  	};

export default function () {
  let data = {
    "operation": "createApplication",
    "application": {
      "general": {
        "licenceNumber": "TestLicence",
        "applicationNumber": "FC22200861990",
        "dateSent": "10/06/2022 11:10:11",
        "licenceName": "In House Employer’s Registration New",
        "licenceID": "2022000000001",
        "transactionType": "new"
      },
      "profile": {
        "applyAs": "On behalf of applicant"
      },
      "applicant": {
        "salutation": "Mr",
        "name": "John",
        "id": {
          "idType": "NRIC",
          "idNumber": "SXXXXXXXA"
        },
        "email": "john@gmail.com",
        "contactNumber": "+6563333333",
        "address": {
          "postalCode": null,
          "blockNo": null,
          "streetName": null,
          "buildingName": null,
          "floor": null,
          "unit": null
        }
      },
      "filer": {
        "salutation": "Mr",
        "name": "Peter",
        "id": {
          "idType": "NRIC",
          "idNumber": "SXXXXXXXA"
        },
        "email": "peter@gmail.com",
        "contactNumber": "+6568888888"
      },
      "company": {
        "companyName": "Very Nice Company",
        "uen": "123456789U",
        "entityType": "Business",
        "registeredAddress": {
          "postalCode": "188888",
          "blockNo": "12",
          "streetName": "very nice street",
          "buildingName": "very nice building",
          "floor": "8",
          "unit": "08"
        }
      },
      "licence": {
        "temporaryChangeOfUse": {
          "typeOfEvent": "Outdoor"
        },
        "detailOfEvent": {
          "nameOrTitleOfEvent": "12313",
          "briefDescriptionOfEvent": "213"
        },
        "durationOfEvent": {
          "startDate": "27/06/2022",
          "endDate": "28/06/2022"
        },
        "locationOfEvent": {
          "addressOfEvent": {
            "postalCode": "",
            "blockNo": "",
            "streetName": "213",
            "buildingName": "23432",
            "floor": "",
            "unit": "",
            "withoutPostalCode": true,
            "description": "213"
          },
          "locationOfEvent": "213"
        },
        "approvalAndEndorsement": {
          "approvalAndEndorsementFromTheBuildingSFireSafetyManager": null,
          "nameOfFsm": null,
          "fsmSRegistrationNo": null,
          "fsmSContactNumber": null,
          "fsmSEmail": null,
          "approvalFromTheBuildingManagementOrLandowner": [
            "Yes"
          ],
          "name": "land owner",
          "contactNumber": "+6588888888",
          "email": "halo@hotmail.com"
        },
        "applicationChecklists": {
          "question1": [
            "Yes"
          ],
          "question2": [
            "Yes"
          ],
          "question3": [
            "Yes"
          ],
          "question4": [
            "Yes"
          ]
        },
        "uploadDocuments": {
          "layoutPlan": "20220527141555019_th12345678.jpeg",
          "photoOfTheVenueOrLocation": "20220527141601006_th12345678.jpeg",
          "landOwnerApprovalLetter": "20220527141606559_th12345678.jpeg"
        },
        "addableSection": [
          {
            "dropdown": "Option 1",
            "countryRegion": "SINGAPORE",
            "nationality": "SINGAPORE CITIZEN",
            "id": {
              "idType": "NRIC",
              "idNumber": "S9912345A"
            }
          },
          {
            "dropdown": "Option 2",
            "countryRegion": "CANADA",
            "nationality": "SINGAPORE CITIZEN",
            "id": {
              "idType": "NRIC",
              "idNumber": "S9912345A"
            }
          }
        ],
        "payment": {
          "paymentMode": "Online Payment"
        },
        "subaddableSection": [
          {
            "dropdown": "Option 1",
            "countryRegion": "SINGAPORE",
            "nationality": "SINGAPORE CITIZEN",
            "id": {
              "idType": "NRIC",
              "idNumber": "S9912345A"
            },
            "sec1": [
              {
                "selectUen": "Option 1"
              },
              {
                "selectUen": "Option 2"
              }
            ]
          }
        ]
      }
    },
    "payment": {
      "paymentMode": "Credit Card",
      "paymentDate": "17/02/2022 08:45:25",
      "paymentAmount": "168.80",
      "transactionNumber": "ABCD123456",
      "receiptNumber": "ABCD123456"
    },
    "version": {
      "id": "ecd5dfba-3c1e-4921-b87e-150279146ae6",
      "formName": "MOLBLT-2006-createApplication",
      "licenceName": "In House Employer’s Registration New",
      "schema": {
        "declaration": {
          "id": "DECLARATION_SECTION",
          "key": "declaration",
          "fields": [
            {
              "id": "DECLARATION_FIELD",
              "attr": {
                "hasAdditional": false,
                "acknowledgement": "I hereby declare that all of the above is true.",
                "generalDeclaration": "I declare that all the information given in this application form is true and correct.\n\nI am aware that legal action may be taken against me if I had knowingly provided false information.\n\nI agree that in any legal proceedings, I shall not dispute the authenticity or accuracy of any statements, confirmations, records, acknowledgements, information recorded in or produced in this application."
              },
              "type": "declaration"
            }
          ],
          "header": "Declaration"
        },
        "generalInfo": [
          {
            "id": "GI_LOGINTYPE",
            "key": "logintype",
            "fields": [
              {
                "id": "GI_LOGINTYPE_AS",
                "key": "loginAs",
                "attr": {
                  "title": "Login As",
                  "options": [
                    {
                      "label": "For Individuals"
                    },
                    {
                      "label": "For Companies"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "radiobutton"
              }
            ],
            "header": "Login Type",
            "headerComment": "This section may vary if the form is only applicable for individuals to apply"
          },
          {
            "id": "GI_PROFILE",
            "key": "profile",
            "fields": [
              {
                "id": "GI_PROFILE_APPLY_AS",
                "key": "applyAs",
                "attr": {
                  "title": "I am applying",
                  "options": [
                    {
                      "label": "As an applicant"
                    },
                    {
                      "label": "On behalf of applicant"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "radiobutton"
              }
            ],
            "header": "Profile",
            "headerComment": "This section may vary if the form is only applicable for applicant to apply"
          },
          {
            "id": "GI_APPLICANT_DETAIL",
            "key": "applicant",
            "fields": [
              {
                "id": "GI_APPLICANT_DETAIL_SALUTATION",
                "key": "salutation",
                "attr": {
                  "title": "Salutation",
                  "options": [
                    {
                      "label": "Dr"
                    },
                    {
                      "label": "Mdm"
                    },
                    {
                      "label": "Miss"
                    },
                    {
                      "label": "Mr"
                    },
                    {
                      "label": "Mrs"
                    },
                    {
                      "label": "Ms"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              },
              {
                "id": "GI_APPLICANT_DETAIL_NAME",
                "key": "name",
                "attr": {
                  "title": "Name",
                  "required": true
                },
                "type": "textfield"
              },
              {
                "id": "GI_APPLICANT_DETAIL_ID_TYPE_ID_NUMBER",
                "key": "id",
                "attr": {
                  "title": "",
                  "required": true
                },
                "type": "id_type"
              },
              {
                "id": "GI_APPLICANT_DETAIL_EMAIL",
                "key": "email",
                "attr": {
                  "title": "Email",
                  "replyTo": false,
                  "required": true,
                  "emailConfirmation": false
                },
                "type": "email"
              },
              {
                "id": "GI_APPLICANT_DETAIL_CONTACT_NUMBER",
                "key": "contactNumber",
                "attr": {
                  "title": "Contact Number",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 15
                  },
                  "allowIntContactNumber": true
                },
                "type": "contactnumber"
              },
              {
                "id": "GI_APPLICANT_DETAIL_RECEIVE_STATUS_UPDATES_VIA_SMS",
                "key": "receiveStatusUpdatesViaSms",
                "attr": {
                  "title": "",
                  "options": [
                    {
                      "label": "Tick if you prefer to receive status updates of licence application via SMS"
                    }
                  ],
                  "required": false,
                  "hasOthers": false
                },
                "type": "checkbox"
              },
              {
                "id": "GI_APPLICANT_DETAIL_ADDRESS",
                "key": "address",
                "attr": {
                  "title": "Address",
                  "required": false,
                  "withoutPostalCodeEnabled": false,
                  "withPostalCodeRequiredConfig": {
                    "unit": false,
                    "floor": false
                  }
                },
                "type": "address"
              }
            ],
            "header": "Applicant Detail"
          },
          {
            "id": "GI_COMPANY_DETAIL",
            "key": "company",
            "fields": [
              {
                "id": "GI_COMPANY_DETAIL_COMPANY_NAME",
                "key": "companyName",
                "attr": {
                  "title": "Company Name",
                  "required": true
                },
                "type": "textfield"
              },
              {
                "id": "GI_COMPANY_DETAIL_UEN",
                "key": "uen",
                "attr": {
                  "title": "UEN",
                  "required": true
                },
                "type": "textfield"
              },
              {
                "id": "GI_COMPANY_DETAIL_ENTITY_TYPE",
                "key": "entityType",
                "attr": {
                  "title": "Entity Type",
                  "options": [
                    {
                      "label": "Limited Liability Partnerships"
                    },
                    {
                      "label": "Trade Unions"
                    },
                    {
                      "label": "Limited Partnerships"
                    },
                    {
                      "label": "International Organisation"
                    },
                    {
                      "label": "Foreign Military Units"
                    },
                    {
                      "label": "Insurance Representative Offices"
                    },
                    {
                      "label": "Hospitals"
                    },
                    {
                      "label": "Business"
                    },
                    {
                      "label": "High Commissions or Embassies"
                    },
                    {
                      "label": "Other Financial Representative Offices"
                    },
                    {
                      "label": "Unregistered Foreign Entities"
                    },
                    {
                      "label": "Mutual Benefit Organisation"
                    },
                    {
                      "label": "Management Corporations"
                    },
                    {
                      "label": "Unregistered Local Entities"
                    },
                    {
                      "label": "Both Medical and Dental Clinic"
                    },
                    {
                      "label": "Organs of State, Ministries and Departments"
                    },
                    {
                      "label": "Subsidiary Management Corporations"
                    },
                    {
                      "label": "Statutory Boards"
                    },
                    {
                      "label": "Maternity Homes"
                    },
                    {
                      "label": "International Education Language Centres"
                    },
                    {
                      "label": "Madrasahs"
                    },
                    {
                      "label": "Societies"
                    },
                    {
                      "label": "Charities and Institution of a Public Character"
                    },
                    {
                      "label": "Only Dental Clinics"
                    },
                    {
                      "label": "Mosques"
                    },
                    {
                      "label": "Commercial Home"
                    },
                    {
                      "label": "Audit Firm"
                    },
                    {
                      "label": "Clinical Laboratories"
                    },
                    {
                      "label": "Only Medical Clinic"
                    },
                    {
                      "label": "Government and Government-aided Schools"
                    },
                    {
                      "label": "Consulate-General or Consulate"
                    },
                    {
                      "label": "Town Councils"
                    },
                    {
                      "label": "Cooperative Societies"
                    },
                    {
                      "label": "PA Services"
                    },
                    {
                      "label": "Voluntary Welfare Home"
                    },
                    {
                      "label": "Grassroot Units"
                    },
                    {
                      "label": "Representative Office"
                    },
                    {
                      "label": "News Bureaus"
                    },
                    {
                      "label": "Xray Laboratories"
                    },
                    {
                      "label": "Clinical Xray Laboratories"
                    },
                    {
                      "label": "Public Accounting Firms"
                    },
                    {
                      "label": "Local Company"
                    },
                    {
                      "label": "Bank Representative Offices"
                    },
                    {
                      "label": "Foreign Company"
                    },
                    {
                      "label": "Other Organisation"
                    },
                    {
                      "label": "Foreign Law Practice Representative Office"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              },
              {
                "id": "GI_COMPANY_DETAIL_REGISTERED_ADDRESS",
                "key": "registeredAddress",
                "attr": {
                  "title": "Registered Address",
                  "required": false,
                  "withoutPostalCodeEnabled": false,
                  "withPostalCodeRequiredConfig": {
                    "unit": false,
                    "floor": false
                  }
                },
                "type": "address"
              }
            ],
            "header": "Company Detail",
            "headerComment": "This section will appear if applicant logins via CorpPass"
          },
          {
            "id": "GI_FILER_DETAIL",
            "key": "filer",
            "fields": [
              {
                "id": "GI_FILER_DETAIL_SALUTATION",
                "key": "salutation",
                "attr": {
                  "title": "Salutation",
                  "options": [
                    {
                      "label": "Dr"
                    },
                    {
                      "label": "Mdm"
                    },
                    {
                      "label": "Miss"
                    },
                    {
                      "label": "Mr"
                    },
                    {
                      "label": "Mrs"
                    },
                    {
                      "label": "Ms"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              },
              {
                "id": "GI_FILER_DETAIL_NAME",
                "key": "name",
                "attr": {
                  "title": "Name",
                  "required": true
                },
                "type": "textfield"
              },
              {
                "id": "GI_FILER_DETAIL_ID_TYPE_ID_NUMBER",
                "key": "id",
                "attr": {
                  "title": "",
                  "required": true
                },
                "type": "id_type"
              },
              {
                "id": "GI_FILER_DETAIL_EMAIL",
                "key": "email",
                "attr": {
                  "title": "Email",
                  "replyTo": false,
                  "required": true,
                  "emailConfirmation": false
                },
                "type": "email"
              },
              {
                "id": "GI_FILER_DETAIL_CONTACT_NUMBER",
                "key": "contactNumber",
                "attr": {
                  "title": "Contact Number",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 15
                  },
                  "allowIntContactNumber": true
                },
                "type": "contactnumber"
              },
              {
                "id": "GI_FILER_DETAIL_RECEIVE_STATUS_UPDATES_VIA_SMS",
                "key": "receiveStatusUpdatesViaSms",
                "attr": {
                  "title": "",
                  "options": [
                    {
                      "label": "Tick if you prefer to receive status updates of licence application via SMS"
                    }
                  ],
                  "required": false,
                  "hasOthers": false
                },
                "type": "checkbox"
              }
            ],
            "header": "Filer Detail"
          }
        ],
        "applicationDetail": [
          {
            "id": "21uacyl10",
            "key": "temporaryChangeOfUse",
            "fields": [
              {
                "id": "7lhzvwafm",
                "key": "typeOfEvent",
                "attr": {
                  "title": "Type of Event",
                  "options": [
                    {
                      "label": "Indoor"
                    },
                    {
                      "label": "Outdoor"
                    }
                  ],
                  "required": true,
                  "hasOthers": false,
                  "description": "For indoor events, please ensure that the building’s Fire Safety Manager has endorsed the event’s layout plan(s) and ensured that the event is held in compliance to SCDF’s fire safety requirements.\n\nFor outdoor events, please ensure that the landowner/building management e.g. Town Council has endorsed the event’s layout plan(s) and its compliance to SCDF’s fire safety requirements."
                },
                "type": "radiobutton"
              }
            ],
            "header": "Temporary Change Of Use"
          },
          {
            "id": "1t7cyjuue",
            "key": "detailOfEvent",
            "fields": [
              {
                "id": "iyquye8zv",
                "key": "nameOrTitleOfEvent",
                "attr": {
                  "title": "Name or Title of Event",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 100
                  }
                },
                "type": "textfield"
              },
              {
                "id": "jl23kpwjv",
                "key": "briefDescriptionOfEvent",
                "attr": {
                  "title": "Brief Description of Event",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 250
                  }
                },
                "type": "textarea"
              }
            ],
            "header": "Detail of Event"
          },
          {
            "id": "a3nuob7pi",
            "key": "durationOfEvent",
            "fields": [
              {
                "id": "rmw0wxxch",
                "key": "startDate",
                "attr": {
                  "title": "Start Date",
                  "required": true,
                  "startDateValidationConfig": {
                    "type": "Days after today",
                    "value": 7
                  }
                },
                "type": "date"
              },
              {
                "id": "95cgvjg87",
                "key": "endDate",
                "attr": {
                  "title": "End Date",
                  "required": true,
                  "endDateValidationConfig": {
                    "type": "Days after today",
                    "value": 60
                  },
                  "startDateValidationConfig": {
                    "type": "Days after today",
                    "value": 7
                  }
                },
                "type": "date"
              }
            ],
            "header": "Duration of Event"
          },
          {
            "id": "lkonfyyn2",
            "key": "locationOfEvent",
            "fields": [
              {
                "id": "g21j1nk6p",
                "key": "addressOfEvent",
                "attr": {
                  "title": "Address of Event",
                  "required": false,
                  "description": "",
                  "nonEditable": false,
                  "displayLandownership": false,
                  "withoutPostalCodeEnabled": true,
                  "withPostalCodeRequiredConfig": {
                    "unit": true,
                    "floor": true,
                    "buildingName": true
                  },
                  "withoutPostalCodeRequiredConfig": {
                    "unit": false,
                    "floor": false,
                    "blockNo": false,
                    "streetName": true,
                    "description": true,
                    "buildingName": false
                  }
                },
                "type": "address"
              },
              {
                "id": "vgjfy7ms6",
                "key": "locationOfEvent",
                "attr": {
                  "title": "Location of Event",
                  "required": true,
                  "description": "e.g. Atrium, Hall, Ballroom, etc."
                },
                "type": "textarea"
              }
            ],
            "header": "Location of Event"
          },
          {
            "id": "c2l2vvmop",
            "key": "approvalAndEndorsement",
            "fields": [
              {
                "id": "fi63or5d4",
                "key": "approvalAndEndorsementFromTheBuildingSFireSafetyManager",
                "attr": {
                  "title": "Approval and endorsement from the building’s Fire Safety Manager",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "required": true,
                  "hasOthers": false,
                  "description": "I have obtained the approval and endorsement from the building’s Fire Safety Manager to carry out the temporary event in compliance with SCDF’s fire safety requirements."
                },
                "type": "checkbox"
              },
              {
                "id": "likrmwe55",
                "key": "statement",
                "attr": {
                  "description": "<p>Please provide the FSM’s details:</p>"
                },
                "type": "statement"
              },
              {
                "id": "y9hk11163",
                "key": "nameOfFsm",
                "attr": {
                  "title": "Name of FSM",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 64
                  }
                },
                "type": "textfield"
              },
              {
                "id": "5tpyhkyuo",
                "key": "fsmSRegistrationNo",
                "attr": {
                  "title": "FSM’s Registration No",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 20
                  }
                },
                "type": "textfield"
              },
              {
                "id": "odx784xac",
                "key": "fsmSContactNumber",
                "attr": {
                  "title": "FSM's Contact Number",
                  "required": true,
                  "allowIntContactNumber": false
                },
                "type": "contactnumber"
              },
              {
                "id": "9orpq90tl",
                "key": "fsmSEmail",
                "attr": {
                  "title": "FSM's Email",
                  "required": true,
                  "emailNotification": false
                },
                "type": "email"
              },
              {
                "id": "r27anhj2j",
                "key": "approvalFromTheBuildingManagementOrLandowner",
                "attr": {
                  "title": "Approval from the building management or landowner",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "required": true,
                  "hasOthers": false,
                  "description": "I have obtained the approval from the building management or landowner to carry out the temporary event in compliance with SCDF’s fire safety requirements."
                },
                "type": "checkbox"
              },
              {
                "id": "w993wv97s",
                "key": "statement",
                "attr": {
                  "description": "<p>Please provide the building management/landowner’s details;</p>"
                },
                "type": "statement"
              },
              {
                "id": "qdwnkcjf5",
                "key": "name",
                "attr": {
                  "title": "Name",
                  "required": true,
                  "customValidation": {
                    "type": "Maximum",
                    "value": 53
                  }
                },
                "type": "textfield"
              },
              {
                "id": "vf4ii7y85",
                "key": "contactNumber",
                "attr": {
                  "title": "Contact Number",
                  "required": true,
                  "allowIntContactNumber": false
                },
                "type": "contactnumber"
              },
              {
                "id": "ky947vk46",
                "key": "email",
                "attr": {
                  "title": "Email",
                  "required": true,
                  "emailNotification": false
                },
                "type": "email"
              }
            ],
            "header": "Approval and Endorsement",
            "menuLabel": "New Label"
          },
          {
            "id": "g9rht3sna",
            "key": "applicationChecklists",
            "fields": [
              {
                "id": "tzzezeje9",
                "key": "question1",
                "attr": {
                  "title": "Question 1",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "tooltip": "Note: Use of fire engine access road / way is not permitted",
                  "required": true,
                  "hasOthers": false,
                  "description": "The temporary events are NOT sited at the fire engine access road / way."
                },
                "type": "checkbox"
              },
              {
                "id": "gkx6xwa24",
                "key": "question2",
                "attr": {
                  "title": "Question 2",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "tooltip": "Note : Use of multi-storey or indoor carparks spaces is not permitted",
                  "required": true,
                  "hasOthers": false,
                  "description": "The temporary events are NOT held at any multi-storey or indoor carparks spaces."
                },
                "type": "checkbox"
              },
              {
                "id": "i6xrejwzy",
                "key": "question3",
                "attr": {
                  "title": "Question 3",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "tooltip": "Note : Use of temporary event solely for storage purposes is not permitted. Events shall be limited to the purpose of stage shows, promotional activities, exhibitions, trade fairs or carnivals only)",
                  "required": true,
                  "hasOthers": false,
                  "description": "The temporary events are for the purpose of stage shows, promotional activities, exhibitions, trade fairs or carnivals."
                },
                "type": "checkbox"
              },
              {
                "id": "n29ltrmam",
                "key": "question4",
                "attr": {
                  "title": "Question 4",
                  "options": [
                    {
                      "label": "Yes"
                    }
                  ],
                  "tooltip": "Note : Tentage sited less than 3 metres to any buildings is not permitted",
                  "required": true,
                  "hasOthers": false,
                  "description": "The outdoor temporary event tentages and set-ups are sited at least 3 metres away from the building facade."
                },
                "type": "checkbox"
              }
            ],
            "header": "Application Checklists"
          },
          {
            "id": "2wmzbc1hj",
            "key": "uploadDocuments",
            "fields": [
              {
                "id": "m5zkz6kpw",
                "key": "layoutPlan",
                "attr": {
                  "size": 7,
                  "title": "Layout Plan",
                  "required": true,
                  "description": "Plans / Sketches / Drawings\nPlease submit FSM and Land Owner signed layout plan if applicable\nIf submit offline, please quote OASIS Application Number."
                },
                "type": "attachment"
              },
              {
                "id": "5qh0j754w",
                "key": "photoOfTheVenueOrLocation",
                "attr": {
                  "size": 7,
                  "title": "Photo of the Venue or Location",
                  "required": true,
                  "description": "Photo of the sites / venues / locations."
                },
                "type": "attachment"
              },
              {
                "id": "libf2rv0d",
                "key": "landOwnerApprovalLetter",
                "attr": {
                  "size": 7,
                  "title": "Land Owner Approval Letter",
                  "required": true,
                  "description": "Land Owner/Building Management’s Approval Letter"
                },
                "type": "attachment"
              }
            ],
            "header": "Upload Documents"
          },
          {
            "id": "2s3r4m807",
            "key": "addableSection",
            "fields": [
              {
                "id": "95q8oglyb",
                "key": "dropdown",
                "attr": {
                  "title": "Dropdown",
                  "options": [
                    {
                      "label": "Option 1",
                      "metaTag": ""
                    },
                    {
                      "label": "Option 2",
                      "metaTag": ""
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              },
              {
                "id": "vz2yhqd24",
                "key": "countryRegion",
                "attr": {
                  "title": "Country/Region",
                  "options": [
                    {
                      "label": "SINGAPORE"
                    },
                    {
                      "label": "AFGHANISTAN"
                    },
                    {
                      "label": "ALBANIA"
                    },
                    {
                      "label": "ALGERIA"
                    },
                    {
                      "label": "AMERICAN SAMOA"
                    },
                    {
                      "label": "ANDORRA"
                    },
                    {
                      "label": "ANGOLA"
                    },
                    {
                      "label": "ANGUILLA"
                    },
                    {
                      "label": "ANTIGUA"
                    },
                    {
                      "label": "ARGENTINA"
                    },
                    {
                      "label": "ARMENIA"
                    },
                    {
                      "label": "ARUBA"
                    },
                    {
                      "label": "AUSTRALIA"
                    },
                    {
                      "label": "AUSTRIA"
                    },
                    {
                      "label": "AZERBAIJAN"
                    },
                    {
                      "label": "BAHAMAS"
                    },
                    {
                      "label": "BAHRAIN"
                    },
                    {
                      "label": "BANGLADESH"
                    },
                    {
                      "label": "BARRADOS"
                    },
                    {
                      "label": "BELARUS"
                    },
                    {
                      "label": "BELGIUM"
                    },
                    {
                      "label": "BELIZE"
                    },
                    {
                      "label": "BENIN"
                    },
                    {
                      "label": "BERMUDA"
                    },
                    {
                      "label": "BHUTAN"
                    },
                    {
                      "label": "BOLIVIA"
                    },
                    {
                      "label": "BOSNIA-HERZEGOVINA"
                    },
                    {
                      "label": "BOTSWANA"
                    },
                    {
                      "label": "BRAZIL"
                    },
                    {
                      "label": "BRITISH ANTARCTIC TERRITORY"
                    },
                    {
                      "label": "BRITISH INDIAN OCEAN TERRITORY"
                    },
                    {
                      "label": "BRITISH VIRGIN ISLANDS"
                    },
                    {
                      "label": "BRUNEI"
                    },
                    {
                      "label": "BULGARIA"
                    },
                    {
                      "label": "BURKINA FASO"
                    },
                    {
                      "label": "BURUNDI"
                    },
                    {
                      "label": "CAMBODIA"
                    },
                    {
                      "label": "CAMEROON"
                    },
                    {
                      "label": "CANADA"
                    },
                    {
                      "label": "CANTON & ENDERBURY ISLANDS"
                    },
                    {
                      "label": "CAPE VERDE"
                    },
                    {
                      "label": "CAYMAN ISLANDS"
                    },
                    {
                      "label": "CENTRAL AFRICAN REPUBLIC"
                    },
                    {
                      "label": "CHAD"
                    },
                    {
                      "label": "CHANNEL ISLANDS"
                    },
                    {
                      "label": "CHILE"
                    },
                    {
                      "label": "CHINA"
                    },
                    {
                      "label": "CHRISTMAS ISLAND"
                    },
                    {
                      "label": "COCOS KEELING ISLAND"
                    },
                    {
                      "label": "COLOMBIA"
                    },
                    {
                      "label": "COMOROS"
                    },
                    {
                      "label": "CONGO"
                    },
                    {
                      "label": "COOK ISLANDS"
                    },
                    {
                      "label": "COSTA RICA"
                    },
                    {
                      "label": "CROATIA"
                    },
                    {
                      "label": "CUBA"
                    },
                    {
                      "label": "CYPRUS"
                    },
                    {
                      "label": "CZECH REPUBLIC"
                    },
                    {
                      "label": "DENMARK"
                    },
                    {
                      "label": "DJIBOUTI"
                    },
                    {
                      "label": "DOMINICA"
                    },
                    {
                      "label": "DOMINICAN REPUBLIC"
                    },
                    {
                      "label": "EAST TIMOR"
                    },
                    {
                      "label": "ECUADOR"
                    },
                    {
                      "label": "EGYPT"
                    },
                    {
                      "label": "EL SALVADOR"
                    },
                    {
                      "label": "EQUATORIAL GUINEA"
                    },
                    {
                      "label": "ERITREA"
                    },
                    {
                      "label": "ESTONIA"
                    },
                    {
                      "label": "ETHIOPIA"
                    },
                    {
                      "label": "FAEROE ISLANDS"
                    },
                    {
                      "label": "FALKLAND ISLANDS"
                    },
                    {
                      "label": "FIJI"
                    },
                    {
                      "label": "FINLAND"
                    },
                    {
                      "label": "FRANCE"
                    },
                    {
                      "label": "FRENCH GUIANA"
                    },
                    {
                      "label": "FRENCH POLYNESIA"
                    },
                    {
                      "label": "FRENCH SOUTHERN & ANTARCTIC TERRITORIES"
                    },
                    {
                      "label": "GABON"
                    },
                    {
                      "label": "GAMBIA"
                    },
                    {
                      "label": "GAZA"
                    },
                    {
                      "label": "GEORGIA"
                    },
                    {
                      "label": "GERMANY"
                    },
                    {
                      "label": "GHANA"
                    },
                    {
                      "label": "GIBRALTAR"
                    },
                    {
                      "label": "GREECE"
                    },
                    {
                      "label": "GREENLAND"
                    },
                    {
                      "label": "GRENADA"
                    },
                    {
                      "label": "GUADELOUPE"
                    },
                    {
                      "label": "GUAM"
                    },
                    {
                      "label": "GUATEMALA"
                    },
                    {
                      "label": "GUERNSEY"
                    },
                    {
                      "label": "GUINEA"
                    },
                    {
                      "label": "GUINEA-BISSAU"
                    },
                    {
                      "label": "GUYANA"
                    },
                    {
                      "label": "HAITI"
                    },
                    {
                      "label": "HEARD & MCDONALD ISLAND"
                    },
                    {
                      "label": "HONDURAS"
                    },
                    {
                      "label": "HONG KONG SAR"
                    },
                    {
                      "label": "HUNGARY"
                    },
                    {
                      "label": "ICELAND"
                    },
                    {
                      "label": "INDIA"
                    },
                    {
                      "label": "INDONESIA"
                    },
                    {
                      "label": "IRAN"
                    },
                    {
                      "label": "IRAQ"
                    },
                    {
                      "label": "IRELAND"
                    },
                    {
                      "label": "ISLAN OF MAN"
                    },
                    {
                      "label": "ISRAEL"
                    },
                    {
                      "label": "ITALY"
                    },
                    {
                      "label": "IVORY COAST"
                    },
                    {
                      "label": "JAMAICA"
                    },
                    {
                      "label": "JAPAN"
                    },
                    {
                      "label": "JOHNSTON ISLAN"
                    },
                    {
                      "label": "JORDAN"
                    },
                    {
                      "label": "KAZAKHSTAN"
                    },
                    {
                      "label": "KENYA"
                    },
                    {
                      "label": "KIRGHIZIA"
                    },
                    {
                      "label": "KIRIBATI"
                    },
                    {
                      "label": "KOREA, NORTH"
                    },
                    {
                      "label": "KOREA, SOUTH"
                    },
                    {
                      "label": "KOSOVO"
                    },
                    {
                      "label": "KUWAIT"
                    },
                    {
                      "label": "KYRGYZSTAN"
                    },
                    {
                      "label": "LAOS"
                    },
                    {
                      "label": "LATVIA"
                    },
                    {
                      "label": "LEBANON"
                    },
                    {
                      "label": "LESOTHO"
                    },
                    {
                      "label": "LIBERIA"
                    },
                    {
                      "label": "LIBYA"
                    },
                    {
                      "label": "LICHTENSTIEN"
                    },
                    {
                      "label": "LITHUANIA"
                    },
                    {
                      "label": "LUXEMBOURG"
                    },
                    {
                      "label": "MACAO SAR"
                    },
                    {
                      "label": "MACEDONIA"
                    },
                    {
                      "label": "MADAGASCAR"
                    },
                    {
                      "label": "MALAWI"
                    },
                    {
                      "label": "MALAYSIA"
                    },
                    {
                      "label": "MALDIVES"
                    },
                    {
                      "label": "MALI"
                    },
                    {
                      "label": "MALTA"
                    },
                    {
                      "label": "MARSHALL ISLANDS"
                    },
                    {
                      "label": "MARTINIQUE"
                    },
                    {
                      "label": "MAURITANIA"
                    },
                    {
                      "label": "MAURITIUS"
                    },
                    {
                      "label": "MAYOTTE"
                    },
                    {
                      "label": "MEXICO"
                    },
                    {
                      "label": "MIDWAY ISLANDS"
                    },
                    {
                      "label": "MOLDOVA"
                    },
                    {
                      "label": "MONACO"
                    },
                    {
                      "label": "MONGOLIA"
                    },
                    {
                      "label": "MONTENEGRO"
                    },
                    {
                      "label": "MONTSERRAT"
                    },
                    {
                      "label": "MOROCCO"
                    },
                    {
                      "label": "MOZAMBIQUE"
                    },
                    {
                      "label": "MYANMAR"
                    },
                    {
                      "label": "NAMIBIA"
                    },
                    {
                      "label": "NAURU"
                    },
                    {
                      "label": "NEPAL"
                    },
                    {
                      "label": "NETHERLANDS"
                    },
                    {
                      "label": "NETHERLANDS ANTILILLES"
                    },
                    {
                      "label": "NEW CALEDONIA"
                    },
                    {
                      "label": "NEW ZEALAND"
                    },
                    {
                      "label": "NICARAGUA"
                    },
                    {
                      "label": "NIGER"
                    },
                    {
                      "label": "NIGERIA"
                    },
                    {
                      "label": "NIUE ISLAND"
                    },
                    {
                      "label": "NORFOLK ISLAND"
                    },
                    {
                      "label": "NORWAY"
                    },
                    {
                      "label": "OMAN"
                    },
                    {
                      "label": "OTHERS"
                    },
                    {
                      "label": "PACIFIC ISLAND TRUST TERRITORY"
                    },
                    {
                      "label": "PAKISTAN"
                    },
                    {
                      "label": "PALAU"
                    },
                    {
                      "label": "PALESTINE"
                    },
                    {
                      "label": "PANAMA"
                    },
                    {
                      "label": "PANAMA CANAL ZONE"
                    },
                    {
                      "label": "PAPUA NEW GUINEA"
                    },
                    {
                      "label": "PARAGUAY"
                    },
                    {
                      "label": "PERU"
                    },
                    {
                      "label": "PHILIPPINES"
                    },
                    {
                      "label": "PITCAIRN ISLAND"
                    },
                    {
                      "label": "POLAND"
                    },
                    {
                      "label": "PORTUGAL"
                    },
                    {
                      "label": "PUERTO RICO"
                    },
                    {
                      "label": "QATAR"
                    },
                    {
                      "label": "REUNION"
                    },
                    {
                      "label": "ROMANIA"
                    },
                    {
                      "label": "RUSSIA"
                    },
                    {
                      "label": "RWANDA"
                    },
                    {
                      "label": "SAMOA"
                    },
                    {
                      "label": "SAN MARINO"
                    },
                    {
                      "label": "SAO TOME & PRINCIPE"
                    },
                    {
                      "label": "SAUDI ARABIA"
                    },
                    {
                      "label": "SENEGAL"
                    },
                    {
                      "label": "SERBIA"
                    },
                    {
                      "label": "SERBIA / MONTENEGRO"
                    },
                    {
                      "label": "SEYCHELLES"
                    },
                    {
                      "label": "SIERRA LEONE"
                    },
                    {
                      "label": "SLOVENIA"
                    },
                    {
                      "label": "SOLOMON ISLANDS"
                    },
                    {
                      "label": "SOMALIA"
                    },
                    {
                      "label": "SOUTH AFRICA"
                    },
                    {
                      "label": "SPAIN"
                    },
                    {
                      "label": "SRI LANKA"
                    },
                    {
                      "label": "ST. HELENA"
                    },
                    {
                      "label": "ST. KITTS-NEVIS"
                    },
                    {
                      "label": "ST. LUCIA"
                    },
                    {
                      "label": "ST. PIERRE & MIQUELON"
                    },
                    {
                      "label": "ST. VINCENT"
                    },
                    {
                      "label": "SUDAN"
                    },
                    {
                      "label": "SURINAME"
                    },
                    {
                      "label": "SWAZILAND"
                    },
                    {
                      "label": "SWEDEN"
                    },
                    {
                      "label": "SWITZERLAND"
                    },
                    {
                      "label": "SYRIA"
                    },
                    {
                      "label": "TAIWAN"
                    },
                    {
                      "label": "TAJIKISTAN"
                    },
                    {
                      "label": "TANZANIA"
                    },
                    {
                      "label": "THAILAND"
                    },
                    {
                      "label": "TIMOR"
                    },
                    {
                      "label": "TOGO"
                    },
                    {
                      "label": "TOKELAU ISLANDS"
                    },
                    {
                      "label": "TONGA"
                    },
                    {
                      "label": "TRINIDAD & TOBAGO"
                    },
                    {
                      "label": "TUNISIA"
                    },
                    {
                      "label": "TURKEY"
                    },
                    {
                      "label": "TURKMENISTAN"
                    },
                    {
                      "label": "TURKS & CAICOS ISLAND"
                    },
                    {
                      "label": "TUVALU"
                    },
                    {
                      "label": "UGANDA"
                    },
                    {
                      "label": "UKRAINE"
                    },
                    {
                      "label": "UNITED ARAB EMIRATES"
                    },
                    {
                      "label": "UNITED KINGDOM"
                    },
                    {
                      "label": "UNITED STATES"
                    },
                    {
                      "label": "UNKNOWN"
                    },
                    {
                      "label": "UPPER VOLTA"
                    },
                    {
                      "label": "URUGUAY"
                    },
                    {
                      "label": "US VIRGIN ISLANDS"
                    },
                    {
                      "label": "UZBEKISTAN"
                    },
                    {
                      "label": "VANUATA"
                    },
                    {
                      "label": "VATICAN CITY STATE"
                    },
                    {
                      "label": "VENEZUELA"
                    },
                    {
                      "label": "VIETNAM"
                    },
                    {
                      "label": "WAKE ISLAND"
                    },
                    {
                      "label": "WALLIS AND FUTUNA"
                    },
                    {
                      "label": "WESTERN SAHARA"
                    },
                    {
                      "label": "YEMEN"
                    },
                    {
                      "label": "YUGOSLAVIA"
                    },
                    {
                      "label": "ZAIRE"
                    },
                    {
                      "label": "ZAMBIA"
                    },
                    {
                      "label": "ZIMBABWE"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "country"
              },
              {
                "id": "sbjgea1vb",
                "key": "nationality",
                "attr": {
                  "title": "Nationality",
                  "options": [
                    {
                      "label": "SINGAPORE CITIZEN"
                    },
                    {
                      "label": "AFGHAN"
                    },
                    {
                      "label": "ALBANIAN"
                    },
                    {
                      "label": "ALGERIAN"
                    },
                    {
                      "label": "AMERICAN"
                    },
                    {
                      "label": "ANDORRAN"
                    },
                    {
                      "label": "ANGOLAN"
                    },
                    {
                      "label": "ANTIGUAN"
                    },
                    {
                      "label": "ARGENTINIAN"
                    },
                    {
                      "label": "ARMENIAN"
                    },
                    {
                      "label": "AUSTRALIAN"
                    },
                    {
                      "label": "AUSTRIAN"
                    },
                    {
                      "label": "AZERBAIJANI"
                    },
                    {
                      "label": "BAHAMIAN"
                    },
                    {
                      "label": "BAHRAINI"
                    },
                    {
                      "label": "BANGLADESHI"
                    },
                    {
                      "label": "BARBADOS"
                    },
                    {
                      "label": "BELARUSSIAN"
                    },
                    {
                      "label": "BELGIAN"
                    },
                    {
                      "label": "BELIZEAN"
                    },
                    {
                      "label": "BENINESE"
                    },
                    {
                      "label": "BHUTANESE"
                    },
                    {
                      "label": "BOLIVIAN"
                    },
                    {
                      "label": "BOSNIAN"
                    },
                    {
                      "label": "BOTSWANA"
                    },
                    {
                      "label": "BRAZILIAN"
                    },
                    {
                      "label": "BRITISH"
                    },
                    {
                      "label": "BRITISH NATIONAL OVERSEAS"
                    },
                    {
                      "label": "BRITISH OVERSEAS CITIZEN"
                    },
                    {
                      "label": "BRITISH OVERSEAS TERRITORIES CITIZEN"
                    },
                    {
                      "label": "BRITISH PROTECTED PERSON"
                    },
                    {
                      "label": "BRITISH SUBJECT"
                    },
                    {
                      "label": "BRUNEIAN"
                    },
                    {
                      "label": "BULGARIAN"
                    },
                    {
                      "label": "BURKINABE"
                    },
                    {
                      "label": "BURUNDIAN"
                    },
                    {
                      "label": "CAMBODIAN"
                    },
                    {
                      "label": "CAMEROONIAN"
                    },
                    {
                      "label": "CANADIAN"
                    },
                    {
                      "label": "CAPE VERDEAN"
                    },
                    {
                      "label": "CENTRAL AFRICAN REPUBLIC"
                    },
                    {
                      "label": "CHADIAN"
                    },
                    {
                      "label": "CHILEAN"
                    },
                    {
                      "label": "CHINESE"
                    },
                    {
                      "label": "COLOMBIAN"
                    },
                    {
                      "label": "COMORAN"
                    },
                    {
                      "label": "CONGOLESE"
                    },
                    {
                      "label": "COSTA RICAN"
                    },
                    {
                      "label": "CROATIAN"
                    },
                    {
                      "label": "CUBAN"
                    },
                    {
                      "label": "CYPRIOT"
                    },
                    {
                      "label": "CZECH"
                    },
                    {
                      "label": "DANISH"
                    },
                    {
                      "label": "DEMOCRATIC REPUBLIC OF THE CONGO"
                    },
                    {
                      "label": "DJIBOUTIAN"
                    },
                    {
                      "label": "DOMINICAN"
                    },
                    {
                      "label": "DOMINICAN (REPUBLIC)"
                    },
                    {
                      "label": "EAST TIMORESE"
                    },
                    {
                      "label": "ECUADORIAN"
                    },
                    {
                      "label": "EGYPTIAN"
                    },
                    {
                      "label": "EQUATORIAL GUINEA"
                    },
                    {
                      "label": "ERITREAN"
                    },
                    {
                      "label": "ESTONIAN"
                    },
                    {
                      "label": "ETHIOPIAN"
                    },
                    {
                      "label": "FIJIAN"
                    },
                    {
                      "label": "FILIPINO"
                    },
                    {
                      "label": "FINNISH"
                    },
                    {
                      "label": "FRENCH"
                    },
                    {
                      "label": "GABON"
                    },
                    {
                      "label": "GAMBIAN"
                    },
                    {
                      "label": "GEORGIAN"
                    },
                    {
                      "label": "GERMAN"
                    },
                    {
                      "label": "GHANAIAN"
                    },
                    {
                      "label": "GREEK"
                    },
                    {
                      "label": "GRENADIAN"
                    },
                    {
                      "label": "GUATEMALAN"
                    },
                    {
                      "label": "GUINEAN"
                    },
                    {
                      "label": "GUINEAN (BISSAU)"
                    },
                    {
                      "label": "GUYANESE"
                    },
                    {
                      "label": "HAITIAN"
                    },
                    {
                      "label": "HONDURAN"
                    },
                    {
                      "label": "HONG KONG"
                    },
                    {
                      "label": "HUNGARIAN"
                    },
                    {
                      "label": "ICELANDER"
                    },
                    {
                      "label": "INDIAN"
                    },
                    {
                      "label": "INDONESIAN"
                    },
                    {
                      "label": "IRANIAN"
                    },
                    {
                      "label": "IRAQI"
                    },
                    {
                      "label": "IRISH"
                    },
                    {
                      "label": "ISRAELI"
                    },
                    {
                      "label": "ITALIAN"
                    },
                    {
                      "label": "IVORY COAST"
                    },
                    {
                      "label": "JAMAICAN"
                    },
                    {
                      "label": "JAPANESE"
                    },
                    {
                      "label": "JORDANIAN"
                    },
                    {
                      "label": "KAZAKHSTANI"
                    },
                    {
                      "label": "KENYAN"
                    },
                    {
                      "label": "KIRIBATI"
                    },
                    {
                      "label": "KITTIAN & NEVISIAN"
                    },
                    {
                      "label": "KOREAN, NORTH"
                    },
                    {
                      "label": "KOREAN, SOUTH"
                    },
                    {
                      "label": "KUWAITI"
                    },
                    {
                      "label": "KYRGYZSTAN"
                    },
                    {
                      "label": "LAOTIAN"
                    },
                    {
                      "label": "LATVIAN"
                    },
                    {
                      "label": "LEBANESE"
                    },
                    {
                      "label": "LESOTHO"
                    },
                    {
                      "label": "LIBERIAN"
                    },
                    {
                      "label": "LIBYAN"
                    },
                    {
                      "label": "LIECHTENSTEINER"
                    },
                    {
                      "label": "LITHUANIAN"
                    },
                    {
                      "label": "LUXEMBOURGER"
                    },
                    {
                      "label": "MACAO"
                    },
                    {
                      "label": "MACEDONIAN"
                    },
                    {
                      "label": "MADAGASY"
                    },
                    {
                      "label": "MALAWIAN"
                    },
                    {
                      "label": "MALAYSIAN"
                    },
                    {
                      "label": "MALDIVIAN"
                    },
                    {
                      "label": "MALIAN"
                    },
                    {
                      "label": "MALTESE"
                    },
                    {
                      "label": "MARSHALLESE"
                    },
                    {
                      "label": "MAURITANEAN"
                    },
                    {
                      "label": "MAURITIAN"
                    },
                    {
                      "label": "MEXICAN"
                    },
                    {
                      "label": "MICRONESIAN"
                    },
                    {
                      "label": "MOLDAVIAN"
                    },
                    {
                      "label": "MONACAN"
                    },
                    {
                      "label": "MONGOLIAN"
                    },
                    {
                      "label": "MONTENEGRIN"
                    },
                    {
                      "label": "MOROCCAN"
                    },
                    {
                      "label": "MOZAMBICAN"
                    },
                    {
                      "label": "MYANMAR"
                    },
                    {
                      "label": "NAMIBIAN"
                    },
                    {
                      "label": "NAURUAN"
                    },
                    {
                      "label": "NEPALESE"
                    },
                    {
                      "label": "NETHERLANDS"
                    },
                    {
                      "label": "NEW ZEALANDER"
                    },
                    {
                      "label": "NI-VANUATU"
                    },
                    {
                      "label": "NICARAGUAN"
                    },
                    {
                      "label": "NIGER"
                    },
                    {
                      "label": "NIGERIAN"
                    },
                    {
                      "label": "NORWEGIAN"
                    },
                    {
                      "label": "OMANI"
                    },
                    {
                      "label": "PAKISTANI"
                    },
                    {
                      "label": "PALAUAN"
                    },
                    {
                      "label": "PALESTINIAN"
                    },
                    {
                      "label": "PANAMANIAN"
                    },
                    {
                      "label": "PAPUA NEW GUINEAN"
                    },
                    {
                      "label": "PARAGUAYAN"
                    },
                    {
                      "label": "PERUVIAN"
                    },
                    {
                      "label": "POLISH"
                    },
                    {
                      "label": "PORTUGUESE"
                    },
                    {
                      "label": "QATARI"
                    },
                    {
                      "label": "REFUGEE (OTHER THAN XXB)"
                    },
                    {
                      "label": "REFUGEE (XXB)"
                    },
                    {
                      "label": "ROMANIAN"
                    },
                    {
                      "label": "RUSSIAN"
                    },
                    {
                      "label": "RWANDAN"
                    },
                    {
                      "label": "SALVADORAN"
                    },
                    {
                      "label": "SAMMARINESE"
                    },
                    {
                      "label": "SAMOAN"
                    },
                    {
                      "label": "SAO TOMEAN"
                    },
                    {
                      "label": "SAUDI ARABIAN"
                    },
                    {
                      "label": "SENEGALESE"
                    },
                    {
                      "label": "SERBIAN"
                    },
                    {
                      "label": "SEYCHELLOIS"
                    },
                    {
                      "label": "SIERRA LEONE"
                    },
                    {
                      "label": "SLOVAK"
                    },
                    {
                      "label": "SLOVENIAN"
                    },
                    {
                      "label": "SOLOMON ISLANDER"
                    },
                    {
                      "label": "SOMALI"
                    },
                    {
                      "label": "SOUTH AFRICAN"
                    },
                    {
                      "label": "SPANISH"
                    },
                    {
                      "label": "SRI LANKAN"
                    },
                    {
                      "label": "ST. LUCIA"
                    },
                    {
                      "label": "ST. VINCENTIAN"
                    },
                    {
                      "label": "STATELESS"
                    },
                    {
                      "label": "SUDANESE"
                    },
                    {
                      "label": "SURINAMER"
                    },
                    {
                      "label": "SWAZI"
                    },
                    {
                      "label": "SWEDISH"
                    },
                    {
                      "label": "SWISS"
                    },
                    {
                      "label": "SYRIAN"
                    },
                    {
                      "label": "TAIWANESE"
                    },
                    {
                      "label": "TAJIKISTANI"
                    },
                    {
                      "label": "TANZANIAN"
                    },
                    {
                      "label": "THAI"
                    },
                    {
                      "label": "TOGOLESE"
                    },
                    {
                      "label": "TONGAN"
                    },
                    {
                      "label": "TRINIDADIAN & TOBAGONIAN"
                    },
                    {
                      "label": "TUNISIAN"
                    },
                    {
                      "label": "TURK"
                    },
                    {
                      "label": "TURKMEN"
                    },
                    {
                      "label": "TUVALU"
                    },
                    {
                      "label": "UGANDAN"
                    },
                    {
                      "label": "UKRAINIAN"
                    },
                    {
                      "label": "UNITED ARAB EMIRATES"
                    },
                    {
                      "label": "UNKNOWN"
                    },
                    {
                      "label": "URUGUAYAN"
                    },
                    {
                      "label": "UZBEKISTAN"
                    },
                    {
                      "label": "VATICAN CITY STATE (HOLY SEE)"
                    },
                    {
                      "label": "VENEZUELAN"
                    },
                    {
                      "label": "VIETNAMESE"
                    },
                    {
                      "label": "YEMENI"
                    },
                    {
                      "label": "ZAMBIAN"
                    },
                    {
                      "label": "ZIMBABWEAN"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "nationality"
              },
              {
                "id": "n23a54886",
                "key": "id",
                "attr": {
                  "title": "",
                  "required": true,
                  "nonEditable": false
                },
                "type": "id_type"
              }
            ],
            "header": "addable-section",
            "multiFieldsCheck": true,
            "maximumDuplication": 3,
            "minimumDuplication": 1,
            "multiFieldsValidator": [
              {
                "id": "95q8oglyb",
                "type": "dropdown",
                "label": "Dropdown",
                "isUnique": true,
                "isIdentical": false
              },
              {
                "id": "vz2yhqd24",
                "type": "country",
                "label": "Country/Region",
                "isUnique": true,
                "isIdentical": false
              },
              {
                "id": "sbjgea1vb",
                "type": "nationality",
                "label": "Nationality",
                "isUnique": false,
                "isIdentical": true
              },
              {
                "id": "n23a54886",
                "type": "id_type",
                "label": "ID Type & ID Number",
                "isUnique": false,
                "isIdentical": true
              }
            ]
          },
          {
            "id": "zbf1pj8e8",
            "key": "subaddableSection",
            "fields": [
              {
                "id": "fb9223hk8",
                "key": "dropdown",
                "attr": {
                  "title": "Dropdown",
                  "options": [
                    {
                      "label": "Option 1",
                      "metaTag": ""
                    },
                    {
                      "label": "Option 2",
                      "metaTag": ""
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              },
              {
                "id": "rgse19rfp",
                "key": "countryRegion",
                "attr": {
                  "title": "Country/Region",
                  "options": [
                    {
                      "label": "SINGAPORE"
                    },
                    {
                      "label": "AFGHANISTAN"
                    },
                    {
                      "label": "ALBANIA"
                    },
                    {
                      "label": "ALGERIA"
                    },
                    {
                      "label": "AMERICAN SAMOA"
                    },
                    {
                      "label": "ANDORRA"
                    },
                    {
                      "label": "ANGOLA"
                    },
                    {
                      "label": "ANGUILLA"
                    },
                    {
                      "label": "ANTIGUA"
                    },
                    {
                      "label": "ARGENTINA"
                    },
                    {
                      "label": "ARMENIA"
                    },
                    {
                      "label": "ARUBA"
                    },
                    {
                      "label": "AUSTRALIA"
                    },
                    {
                      "label": "AUSTRIA"
                    },
                    {
                      "label": "AZERBAIJAN"
                    },
                    {
                      "label": "BAHAMAS"
                    },
                    {
                      "label": "BAHRAIN"
                    },
                    {
                      "label": "BANGLADESH"
                    },
                    {
                      "label": "BARRADOS"
                    },
                    {
                      "label": "BELARUS"
                    },
                    {
                      "label": "BELGIUM"
                    },
                    {
                      "label": "BELIZE"
                    },
                    {
                      "label": "BENIN"
                    },
                    {
                      "label": "BERMUDA"
                    },
                    {
                      "label": "BHUTAN"
                    },
                    {
                      "label": "BOLIVIA"
                    },
                    {
                      "label": "BOSNIA-HERZEGOVINA"
                    },
                    {
                      "label": "BOTSWANA"
                    },
                    {
                      "label": "BRAZIL"
                    },
                    {
                      "label": "BRITISH ANTARCTIC TERRITORY"
                    },
                    {
                      "label": "BRITISH INDIAN OCEAN TERRITORY"
                    },
                    {
                      "label": "BRITISH VIRGIN ISLANDS"
                    },
                    {
                      "label": "BRUNEI"
                    },
                    {
                      "label": "BULGARIA"
                    },
                    {
                      "label": "BURKINA FASO"
                    },
                    {
                      "label": "BURUNDI"
                    },
                    {
                      "label": "CAMBODIA"
                    },
                    {
                      "label": "CAMEROON"
                    },
                    {
                      "label": "CANADA"
                    },
                    {
                      "label": "CANTON & ENDERBURY ISLANDS"
                    },
                    {
                      "label": "CAPE VERDE"
                    },
                    {
                      "label": "CAYMAN ISLANDS"
                    },
                    {
                      "label": "CENTRAL AFRICAN REPUBLIC"
                    },
                    {
                      "label": "CHAD"
                    },
                    {
                      "label": "CHANNEL ISLANDS"
                    },
                    {
                      "label": "CHILE"
                    },
                    {
                      "label": "CHINA"
                    },
                    {
                      "label": "CHRISTMAS ISLAND"
                    },
                    {
                      "label": "COCOS KEELING ISLAND"
                    },
                    {
                      "label": "COLOMBIA"
                    },
                    {
                      "label": "COMOROS"
                    },
                    {
                      "label": "CONGO"
                    },
                    {
                      "label": "COOK ISLANDS"
                    },
                    {
                      "label": "COSTA RICA"
                    },
                    {
                      "label": "CROATIA"
                    },
                    {
                      "label": "CUBA"
                    },
                    {
                      "label": "CYPRUS"
                    },
                    {
                      "label": "CZECH REPUBLIC"
                    },
                    {
                      "label": "DENMARK"
                    },
                    {
                      "label": "DJIBOUTI"
                    },
                    {
                      "label": "DOMINICA"
                    },
                    {
                      "label": "DOMINICAN REPUBLIC"
                    },
                    {
                      "label": "EAST TIMOR"
                    },
                    {
                      "label": "ECUADOR"
                    },
                    {
                      "label": "EGYPT"
                    },
                    {
                      "label": "EL SALVADOR"
                    },
                    {
                      "label": "EQUATORIAL GUINEA"
                    },
                    {
                      "label": "ERITREA"
                    },
                    {
                      "label": "ESTONIA"
                    },
                    {
                      "label": "ETHIOPIA"
                    },
                    {
                      "label": "FAEROE ISLANDS"
                    },
                    {
                      "label": "FALKLAND ISLANDS"
                    },
                    {
                      "label": "FIJI"
                    },
                    {
                      "label": "FINLAND"
                    },
                    {
                      "label": "FRANCE"
                    },
                    {
                      "label": "FRENCH GUIANA"
                    },
                    {
                      "label": "FRENCH POLYNESIA"
                    },
                    {
                      "label": "FRENCH SOUTHERN & ANTARCTIC TERRITORIES"
                    },
                    {
                      "label": "GABON"
                    },
                    {
                      "label": "GAMBIA"
                    },
                    {
                      "label": "GAZA"
                    },
                    {
                      "label": "GEORGIA"
                    },
                    {
                      "label": "GERMANY"
                    },
                    {
                      "label": "GHANA"
                    },
                    {
                      "label": "GIBRALTAR"
                    },
                    {
                      "label": "GREECE"
                    },
                    {
                      "label": "GREENLAND"
                    },
                    {
                      "label": "GRENADA"
                    },
                    {
                      "label": "GUADELOUPE"
                    },
                    {
                      "label": "GUAM"
                    },
                    {
                      "label": "GUATEMALA"
                    },
                    {
                      "label": "GUERNSEY"
                    },
                    {
                      "label": "GUINEA"
                    },
                    {
                      "label": "GUINEA-BISSAU"
                    },
                    {
                      "label": "GUYANA"
                    },
                    {
                      "label": "HAITI"
                    },
                    {
                      "label": "HEARD & MCDONALD ISLAND"
                    },
                    {
                      "label": "HONDURAS"
                    },
                    {
                      "label": "HONG KONG SAR"
                    },
                    {
                      "label": "HUNGARY"
                    },
                    {
                      "label": "ICELAND"
                    },
                    {
                      "label": "INDIA"
                    },
                    {
                      "label": "INDONESIA"
                    },
                    {
                      "label": "IRAN"
                    },
                    {
                      "label": "IRAQ"
                    },
                    {
                      "label": "IRELAND"
                    },
                    {
                      "label": "ISLAN OF MAN"
                    },
                    {
                      "label": "ISRAEL"
                    },
                    {
                      "label": "ITALY"
                    },
                    {
                      "label": "IVORY COAST"
                    },
                    {
                      "label": "JAMAICA"
                    },
                    {
                      "label": "JAPAN"
                    },
                    {
                      "label": "JOHNSTON ISLAN"
                    },
                    {
                      "label": "JORDAN"
                    },
                    {
                      "label": "KAZAKHSTAN"
                    },
                    {
                      "label": "KENYA"
                    },
                    {
                      "label": "KIRGHIZIA"
                    },
                    {
                      "label": "KIRIBATI"
                    },
                    {
                      "label": "KOREA, NORTH"
                    },
                    {
                      "label": "KOREA, SOUTH"
                    },
                    {
                      "label": "KOSOVO"
                    },
                    {
                      "label": "KUWAIT"
                    },
                    {
                      "label": "KYRGYZSTAN"
                    },
                    {
                      "label": "LAOS"
                    },
                    {
                      "label": "LATVIA"
                    },
                    {
                      "label": "LEBANON"
                    },
                    {
                      "label": "LESOTHO"
                    },
                    {
                      "label": "LIBERIA"
                    },
                    {
                      "label": "LIBYA"
                    },
                    {
                      "label": "LICHTENSTIEN"
                    },
                    {
                      "label": "LITHUANIA"
                    },
                    {
                      "label": "LUXEMBOURG"
                    },
                    {
                      "label": "MACAO SAR"
                    },
                    {
                      "label": "MACEDONIA"
                    },
                    {
                      "label": "MADAGASCAR"
                    },
                    {
                      "label": "MALAWI"
                    },
                    {
                      "label": "MALAYSIA"
                    },
                    {
                      "label": "MALDIVES"
                    },
                    {
                      "label": "MALI"
                    },
                    {
                      "label": "MALTA"
                    },
                    {
                      "label": "MARSHALL ISLANDS"
                    },
                    {
                      "label": "MARTINIQUE"
                    },
                    {
                      "label": "MAURITANIA"
                    },
                    {
                      "label": "MAURITIUS"
                    },
                    {
                      "label": "MAYOTTE"
                    },
                    {
                      "label": "MEXICO"
                    },
                    {
                      "label": "MIDWAY ISLANDS"
                    },
                    {
                      "label": "MOLDOVA"
                    },
                    {
                      "label": "MONACO"
                    },
                    {
                      "label": "MONGOLIA"
                    },
                    {
                      "label": "MONTENEGRO"
                    },
                    {
                      "label": "MONTSERRAT"
                    },
                    {
                      "label": "MOROCCO"
                    },
                    {
                      "label": "MOZAMBIQUE"
                    },
                    {
                      "label": "MYANMAR"
                    },
                    {
                      "label": "NAMIBIA"
                    },
                    {
                      "label": "NAURU"
                    },
                    {
                      "label": "NEPAL"
                    },
                    {
                      "label": "NETHERLANDS"
                    },
                    {
                      "label": "NETHERLANDS ANTILILLES"
                    },
                    {
                      "label": "NEW CALEDONIA"
                    },
                    {
                      "label": "NEW ZEALAND"
                    },
                    {
                      "label": "NICARAGUA"
                    },
                    {
                      "label": "NIGER"
                    },
                    {
                      "label": "NIGERIA"
                    },
                    {
                      "label": "NIUE ISLAND"
                    },
                    {
                      "label": "NORFOLK ISLAND"
                    },
                    {
                      "label": "NORWAY"
                    },
                    {
                      "label": "OMAN"
                    },
                    {
                      "label": "OTHERS"
                    },
                    {
                      "label": "PACIFIC ISLAND TRUST TERRITORY"
                    },
                    {
                      "label": "PAKISTAN"
                    },
                    {
                      "label": "PALAU"
                    },
                    {
                      "label": "PALESTINE"
                    },
                    {
                      "label": "PANAMA"
                    },
                    {
                      "label": "PANAMA CANAL ZONE"
                    },
                    {
                      "label": "PAPUA NEW GUINEA"
                    },
                    {
                      "label": "PARAGUAY"
                    },
                    {
                      "label": "PERU"
                    },
                    {
                      "label": "PHILIPPINES"
                    },
                    {
                      "label": "PITCAIRN ISLAND"
                    },
                    {
                      "label": "POLAND"
                    },
                    {
                      "label": "PORTUGAL"
                    },
                    {
                      "label": "PUERTO RICO"
                    },
                    {
                      "label": "QATAR"
                    },
                    {
                      "label": "REUNION"
                    },
                    {
                      "label": "ROMANIA"
                    },
                    {
                      "label": "RUSSIA"
                    },
                    {
                      "label": "RWANDA"
                    },
                    {
                      "label": "SAMOA"
                    },
                    {
                      "label": "SAN MARINO"
                    },
                    {
                      "label": "SAO TOME & PRINCIPE"
                    },
                    {
                      "label": "SAUDI ARABIA"
                    },
                    {
                      "label": "SENEGAL"
                    },
                    {
                      "label": "SERBIA"
                    },
                    {
                      "label": "SERBIA / MONTENEGRO"
                    },
                    {
                      "label": "SEYCHELLES"
                    },
                    {
                      "label": "SIERRA LEONE"
                    },
                    {
                      "label": "SLOVENIA"
                    },
                    {
                      "label": "SOLOMON ISLANDS"
                    },
                    {
                      "label": "SOMALIA"
                    },
                    {
                      "label": "SOUTH AFRICA"
                    },
                    {
                      "label": "SPAIN"
                    },
                    {
                      "label": "SRI LANKA"
                    },
                    {
                      "label": "ST. HELENA"
                    },
                    {
                      "label": "ST. KITTS-NEVIS"
                    },
                    {
                      "label": "ST. LUCIA"
                    },
                    {
                      "label": "ST. PIERRE & MIQUELON"
                    },
                    {
                      "label": "ST. VINCENT"
                    },
                    {
                      "label": "SUDAN"
                    },
                    {
                      "label": "SURINAME"
                    },
                    {
                      "label": "SWAZILAND"
                    },
                    {
                      "label": "SWEDEN"
                    },
                    {
                      "label": "SWITZERLAND"
                    },
                    {
                      "label": "SYRIA"
                    },
                    {
                      "label": "TAIWAN"
                    },
                    {
                      "label": "TAJIKISTAN"
                    },
                    {
                      "label": "TANZANIA"
                    },
                    {
                      "label": "THAILAND"
                    },
                    {
                      "label": "TIMOR"
                    },
                    {
                      "label": "TOGO"
                    },
                    {
                      "label": "TOKELAU ISLANDS"
                    },
                    {
                      "label": "TONGA"
                    },
                    {
                      "label": "TRINIDAD & TOBAGO"
                    },
                    {
                      "label": "TUNISIA"
                    },
                    {
                      "label": "TURKEY"
                    },
                    {
                      "label": "TURKMENISTAN"
                    },
                    {
                      "label": "TURKS & CAICOS ISLAND"
                    },
                    {
                      "label": "TUVALU"
                    },
                    {
                      "label": "UGANDA"
                    },
                    {
                      "label": "UKRAINE"
                    },
                    {
                      "label": "UNITED ARAB EMIRATES"
                    },
                    {
                      "label": "UNITED KINGDOM"
                    },
                    {
                      "label": "UNITED STATES"
                    },
                    {
                      "label": "UNKNOWN"
                    },
                    {
                      "label": "UPPER VOLTA"
                    },
                    {
                      "label": "URUGUAY"
                    },
                    {
                      "label": "US VIRGIN ISLANDS"
                    },
                    {
                      "label": "UZBEKISTAN"
                    },
                    {
                      "label": "VANUATA"
                    },
                    {
                      "label": "VATICAN CITY STATE"
                    },
                    {
                      "label": "VENEZUELA"
                    },
                    {
                      "label": "VIETNAM"
                    },
                    {
                      "label": "WAKE ISLAND"
                    },
                    {
                      "label": "WALLIS AND FUTUNA"
                    },
                    {
                      "label": "WESTERN SAHARA"
                    },
                    {
                      "label": "YEMEN"
                    },
                    {
                      "label": "YUGOSLAVIA"
                    },
                    {
                      "label": "ZAIRE"
                    },
                    {
                      "label": "ZAMBIA"
                    },
                    {
                      "label": "ZIMBABWE"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "country"
              },
              {
                "id": "wbjcpcvnq",
                "key": "nationality",
                "attr": {
                  "title": "Nationality",
                  "options": [
                    {
                      "label": "SINGAPORE CITIZEN"
                    },
                    {
                      "label": "AFGHAN"
                    },
                    {
                      "label": "ALBANIAN"
                    },
                    {
                      "label": "ALGERIAN"
                    },
                    {
                      "label": "AMERICAN"
                    },
                    {
                      "label": "ANDORRAN"
                    },
                    {
                      "label": "ANGOLAN"
                    },
                    {
                      "label": "ANTIGUAN"
                    },
                    {
                      "label": "ARGENTINIAN"
                    },
                    {
                      "label": "ARMENIAN"
                    },
                    {
                      "label": "AUSTRALIAN"
                    },
                    {
                      "label": "AUSTRIAN"
                    },
                    {
                      "label": "AZERBAIJANI"
                    },
                    {
                      "label": "BAHAMIAN"
                    },
                    {
                      "label": "BAHRAINI"
                    },
                    {
                      "label": "BANGLADESHI"
                    },
                    {
                      "label": "BARBADOS"
                    },
                    {
                      "label": "BELARUSSIAN"
                    },
                    {
                      "label": "BELGIAN"
                    },
                    {
                      "label": "BELIZEAN"
                    },
                    {
                      "label": "BENINESE"
                    },
                    {
                      "label": "BHUTANESE"
                    },
                    {
                      "label": "BOLIVIAN"
                    },
                    {
                      "label": "BOSNIAN"
                    },
                    {
                      "label": "BOTSWANA"
                    },
                    {
                      "label": "BRAZILIAN"
                    },
                    {
                      "label": "BRITISH"
                    },
                    {
                      "label": "BRITISH NATIONAL OVERSEAS"
                    },
                    {
                      "label": "BRITISH OVERSEAS CITIZEN"
                    },
                    {
                      "label": "BRITISH OVERSEAS TERRITORIES CITIZEN"
                    },
                    {
                      "label": "BRITISH PROTECTED PERSON"
                    },
                    {
                      "label": "BRITISH SUBJECT"
                    },
                    {
                      "label": "BRUNEIAN"
                    },
                    {
                      "label": "BULGARIAN"
                    },
                    {
                      "label": "BURKINABE"
                    },
                    {
                      "label": "BURUNDIAN"
                    },
                    {
                      "label": "CAMBODIAN"
                    },
                    {
                      "label": "CAMEROONIAN"
                    },
                    {
                      "label": "CANADIAN"
                    },
                    {
                      "label": "CAPE VERDEAN"
                    },
                    {
                      "label": "CENTRAL AFRICAN REPUBLIC"
                    },
                    {
                      "label": "CHADIAN"
                    },
                    {
                      "label": "CHILEAN"
                    },
                    {
                      "label": "CHINESE"
                    },
                    {
                      "label": "COLOMBIAN"
                    },
                    {
                      "label": "COMORAN"
                    },
                    {
                      "label": "CONGOLESE"
                    },
                    {
                      "label": "COSTA RICAN"
                    },
                    {
                      "label": "CROATIAN"
                    },
                    {
                      "label": "CUBAN"
                    },
                    {
                      "label": "CYPRIOT"
                    },
                    {
                      "label": "CZECH"
                    },
                    {
                      "label": "DANISH"
                    },
                    {
                      "label": "DEMOCRATIC REPUBLIC OF THE CONGO"
                    },
                    {
                      "label": "DJIBOUTIAN"
                    },
                    {
                      "label": "DOMINICAN"
                    },
                    {
                      "label": "DOMINICAN (REPUBLIC)"
                    },
                    {
                      "label": "EAST TIMORESE"
                    },
                    {
                      "label": "ECUADORIAN"
                    },
                    {
                      "label": "EGYPTIAN"
                    },
                    {
                      "label": "EQUATORIAL GUINEA"
                    },
                    {
                      "label": "ERITREAN"
                    },
                    {
                      "label": "ESTONIAN"
                    },
                    {
                      "label": "ETHIOPIAN"
                    },
                    {
                      "label": "FIJIAN"
                    },
                    {
                      "label": "FILIPINO"
                    },
                    {
                      "label": "FINNISH"
                    },
                    {
                      "label": "FRENCH"
                    },
                    {
                      "label": "GABON"
                    },
                    {
                      "label": "GAMBIAN"
                    },
                    {
                      "label": "GEORGIAN"
                    },
                    {
                      "label": "GERMAN"
                    },
                    {
                      "label": "GHANAIAN"
                    },
                    {
                      "label": "GREEK"
                    },
                    {
                      "label": "GRENADIAN"
                    },
                    {
                      "label": "GUATEMALAN"
                    },
                    {
                      "label": "GUINEAN"
                    },
                    {
                      "label": "GUINEAN (BISSAU)"
                    },
                    {
                      "label": "GUYANESE"
                    },
                    {
                      "label": "HAITIAN"
                    },
                    {
                      "label": "HONDURAN"
                    },
                    {
                      "label": "HONG KONG"
                    },
                    {
                      "label": "HUNGARIAN"
                    },
                    {
                      "label": "ICELANDER"
                    },
                    {
                      "label": "INDIAN"
                    },
                    {
                      "label": "INDONESIAN"
                    },
                    {
                      "label": "IRANIAN"
                    },
                    {
                      "label": "IRAQI"
                    },
                    {
                      "label": "IRISH"
                    },
                    {
                      "label": "ISRAELI"
                    },
                    {
                      "label": "ITALIAN"
                    },
                    {
                      "label": "IVORY COAST"
                    },
                    {
                      "label": "JAMAICAN"
                    },
                    {
                      "label": "JAPANESE"
                    },
                    {
                      "label": "JORDANIAN"
                    },
                    {
                      "label": "KAZAKHSTANI"
                    },
                    {
                      "label": "KENYAN"
                    },
                    {
                      "label": "KIRIBATI"
                    },
                    {
                      "label": "KITTIAN & NEVISIAN"
                    },
                    {
                      "label": "KOREAN, NORTH"
                    },
                    {
                      "label": "KOREAN, SOUTH"
                    },
                    {
                      "label": "KUWAITI"
                    },
                    {
                      "label": "KYRGYZSTAN"
                    },
                    {
                      "label": "LAOTIAN"
                    },
                    {
                      "label": "LATVIAN"
                    },
                    {
                      "label": "LEBANESE"
                    },
                    {
                      "label": "LESOTHO"
                    },
                    {
                      "label": "LIBERIAN"
                    },
                    {
                      "label": "LIBYAN"
                    },
                    {
                      "label": "LIECHTENSTEINER"
                    },
                    {
                      "label": "LITHUANIAN"
                    },
                    {
                      "label": "LUXEMBOURGER"
                    },
                    {
                      "label": "MACAO"
                    },
                    {
                      "label": "MACEDONIAN"
                    },
                    {
                      "label": "MADAGASY"
                    },
                    {
                      "label": "MALAWIAN"
                    },
                    {
                      "label": "MALAYSIAN"
                    },
                    {
                      "label": "MALDIVIAN"
                    },
                    {
                      "label": "MALIAN"
                    },
                    {
                      "label": "MALTESE"
                    },
                    {
                      "label": "MARSHALLESE"
                    },
                    {
                      "label": "MAURITANEAN"
                    },
                    {
                      "label": "MAURITIAN"
                    },
                    {
                      "label": "MEXICAN"
                    },
                    {
                      "label": "MICRONESIAN"
                    },
                    {
                      "label": "MOLDAVIAN"
                    },
                    {
                      "label": "MONACAN"
                    },
                    {
                      "label": "MONGOLIAN"
                    },
                    {
                      "label": "MONTENEGRIN"
                    },
                    {
                      "label": "MOROCCAN"
                    },
                    {
                      "label": "MOZAMBICAN"
                    },
                    {
                      "label": "MYANMAR"
                    },
                    {
                      "label": "NAMIBIAN"
                    },
                    {
                      "label": "NAURUAN"
                    },
                    {
                      "label": "NEPALESE"
                    },
                    {
                      "label": "NETHERLANDS"
                    },
                    {
                      "label": "NEW ZEALANDER"
                    },
                    {
                      "label": "NI-VANUATU"
                    },
                    {
                      "label": "NICARAGUAN"
                    },
                    {
                      "label": "NIGER"
                    },
                    {
                      "label": "NIGERIAN"
                    },
                    {
                      "label": "NORWEGIAN"
                    },
                    {
                      "label": "OMANI"
                    },
                    {
                      "label": "PAKISTANI"
                    },
                    {
                      "label": "PALAUAN"
                    },
                    {
                      "label": "PALESTINIAN"
                    },
                    {
                      "label": "PANAMANIAN"
                    },
                    {
                      "label": "PAPUA NEW GUINEAN"
                    },
                    {
                      "label": "PARAGUAYAN"
                    },
                    {
                      "label": "PERUVIAN"
                    },
                    {
                      "label": "POLISH"
                    },
                    {
                      "label": "PORTUGUESE"
                    },
                    {
                      "label": "QATARI"
                    },
                    {
                      "label": "REFUGEE (OTHER THAN XXB)"
                    },
                    {
                      "label": "REFUGEE (XXB)"
                    },
                    {
                      "label": "ROMANIAN"
                    },
                    {
                      "label": "RUSSIAN"
                    },
                    {
                      "label": "RWANDAN"
                    },
                    {
                      "label": "SALVADORAN"
                    },
                    {
                      "label": "SAMMARINESE"
                    },
                    {
                      "label": "SAMOAN"
                    },
                    {
                      "label": "SAO TOMEAN"
                    },
                    {
                      "label": "SAUDI ARABIAN"
                    },
                    {
                      "label": "SENEGALESE"
                    },
                    {
                      "label": "SERBIAN"
                    },
                    {
                      "label": "SEYCHELLOIS"
                    },
                    {
                      "label": "SIERRA LEONE"
                    },
                    {
                      "label": "SLOVAK"
                    },
                    {
                      "label": "SLOVENIAN"
                    },
                    {
                      "label": "SOLOMON ISLANDER"
                    },
                    {
                      "label": "SOMALI"
                    },
                    {
                      "label": "SOUTH AFRICAN"
                    },
                    {
                      "label": "SPANISH"
                    },
                    {
                      "label": "SRI LANKAN"
                    },
                    {
                      "label": "ST. LUCIA"
                    },
                    {
                      "label": "ST. VINCENTIAN"
                    },
                    {
                      "label": "STATELESS"
                    },
                    {
                      "label": "SUDANESE"
                    },
                    {
                      "label": "SURINAMER"
                    },
                    {
                      "label": "SWAZI"
                    },
                    {
                      "label": "SWEDISH"
                    },
                    {
                      "label": "SWISS"
                    },
                    {
                      "label": "SYRIAN"
                    },
                    {
                      "label": "TAIWANESE"
                    },
                    {
                      "label": "TAJIKISTANI"
                    },
                    {
                      "label": "TANZANIAN"
                    },
                    {
                      "label": "THAI"
                    },
                    {
                      "label": "TOGOLESE"
                    },
                    {
                      "label": "TONGAN"
                    },
                    {
                      "label": "TRINIDADIAN & TOBAGONIAN"
                    },
                    {
                      "label": "TUNISIAN"
                    },
                    {
                      "label": "TURK"
                    },
                    {
                      "label": "TURKMEN"
                    },
                    {
                      "label": "TUVALU"
                    },
                    {
                      "label": "UGANDAN"
                    },
                    {
                      "label": "UKRAINIAN"
                    },
                    {
                      "label": "UNITED ARAB EMIRATES"
                    },
                    {
                      "label": "UNKNOWN"
                    },
                    {
                      "label": "URUGUAYAN"
                    },
                    {
                      "label": "UZBEKISTAN"
                    },
                    {
                      "label": "VATICAN CITY STATE (HOLY SEE)"
                    },
                    {
                      "label": "VENEZUELAN"
                    },
                    {
                      "label": "VIETNAMESE"
                    },
                    {
                      "label": "YEMENI"
                    },
                    {
                      "label": "ZAMBIAN"
                    },
                    {
                      "label": "ZIMBABWEAN"
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "nationality"
              },
              {
                "id": "6qbvtoyvf",
                "key": "id",
                "attr": {
                  "title": "",
                  "required": true,
                  "nonEditable": false
                },
                "type": "id_type"
              },
              {
                "id": "jckhdc8s0",
                "key": "subAddable",
                "attr": {
                  "title": "Sub-Addable",
                  "required": true,
                  "subAddableSections": {
                    "id": "8k5n5fvtb",
                    "key": "sec1",
                    "label": "sec-1"
                  }
                },
                "type": "subaddable"
              },
              {
                  "id": "3vw0nqktf",
                  "key": "paymentMode",
                  "attr": {
                      "title": "Payment Mode",
                      "options": [
                          {
                              "label": "Online Payment"
                          },
                          {
                              "label": "Offline Payment",
                              "metaTag": ""
                          }
                      ],
                      "required": true,
                      "hasOthers": false
                  },
                  "type": "radiobutton"
              }
            ],
            "header": "subaddable-section",
            "menuLabel": "New Label",
            "multiFieldsCheck": true,
            "maximumDuplication": 3,
            "minimumDuplication": 1,
            "multiFieldsValidator": [
              {
                "id": "fb9223hk8",
                "type": "dropdown",
                "label": "Dropdown",
                "isUnique": true,
                "isIdentical": false
              },
              {
                "id": "rgse19rfp",
                "type": "country",
                "label": "Country/Region",
                "isUnique": true,
                "isIdentical": false
              },
              {
                "id": "wbjcpcvnq",
                "type": "nationality",
                "label": "Nationality",
                "isUnique": false,
                "isIdentical": true
              },
              {
                "id": "6qbvtoyvf",
                "type": "id_type",
                "label": "ID Type & ID Number",
                "isUnique": false,
                "isIdentical": true
              }
            ]
          },
          {
            "id": "8k5n5fvtb",
            "key": "sec1",
            "fields": [
              {
                "id": "per5bj7gs",
                "key": "selectUen",
                "attr": {
                  "title": "Select UEN",
                  "options": [
                    {
                      "label": "Option 1",
                      "metaTag": ""
                    },
                    {
                      "label": "Option 2",
                      "metaTag": ""
                    },
                    {
                      "label": "Option 3",
                      "metaTag": ""
                    }
                  ],
                  "required": true,
                  "hasOthers": false
                },
                "type": "dropdown"
              }
            ],
            "header": "sec-1",
            "menuLabel": "New Label",
            "maximumDuplication": 3,
            "minimumDuplication": 1
          },
          {
              "id": "71fghwxqt",
              "key": "payment",
              "fields": [
                  {
                      "id": "n9w44ywxg",
                      "key": "paymentMode",
                      "attr": {
                          "title": "Payment Mode",
                          "options": [
                              {
                                  "label": "Online Payment",
                                  "metaTag": ""
                              },
                              {
                                  "label": "Offline Payment",
                                  "metaTag": ""
                              }
                          ],
                          "tooltip": null,
                          "required": true,
                          "description": null,
                          "questionTag": null
                      },
                      "type": "payment_mode"
                  }
              ],
              "header": "Payment",
              "menuLabel": "New Label"
          }
        ],
        "generalInfoLogics": {
          "showIfLogics": [
            {
              "id": "SHOW_FILTER_DETAILS_LOGIC",
              "conditions": [
                {
                  "state": "is equal to",
                  "value": "On behalf of applicant",
                  "fieldId": "GI_PROFILE_APPLY_AS",
                  "fieldType": "radiobutton"
                }
              ],
              "actionTargetIds": [
                "GI_FILER_DETAIL_SALUTATION",
                "GI_FILER_DETAIL_NAME",
                "GI_FILER_DETAIL_ID_TYPE_ID_NUMBER",
                "GI_FILER_DETAIL_EMAIL",
                "GI_FILER_DETAIL_CONTACT_NUMBER",
                "GI_FILER_DETAIL_RECEIVE_STATUS_UPDATES_VIA_SMS"
              ]
            },
            {
              "id": "SHOW_FILTER_DETAILS_LOGIC",
              "conditions": [
                {
                  "state": "is equal to",
                  "value": "For Individuals",
                  "fieldId": "GI_LOGINTYPE_AS",
                  "fieldType": "radiobutton"
                }
              ],
              "actionTargetIds": [
                "GI_APPLICANT_DETAIL_ADDRESS"
              ]
            },
            {
              "id": "SHOW_FILTER_DETAILS_LOGIC",
              "conditions": [
                {
                  "state": "is equal to",
                  "value": "For Companies",
                  "fieldId": "GI_LOGINTYPE_AS",
                  "fieldType": "radiobutton"
                }
              ],
              "actionTargetIds": [
                "GI_COMPANY_DETAIL_COMPANY_NAME",
                "GI_COMPANY_DETAIL_UEN",
                "GI_COMPANY_DETAIL_ENTITY_TYPE",
                "GI_COMPANY_DETAIL_REGISTERED_ADDRESS"
              ]
            }
          ],
          "requireIfLogics": []
        },
        "applicationDetailLogics": {
          "setIfLogics": [],
          "showIfLogics": [],
          "requireIfLogics": []
        }
      },
      "settings": {
        "faq": null,
        "payNow": "Fixed Price",
        "timeTaken": "10 mins",
        "description": "<p>MOLBLT-2006-createApplication</p>",
        "paymentMethod": "Pay Now (pay at submission)",
        "prerequisites": null,
        "offlinePayment": null,
        "licenceValidity": "N.A",
        "processingTaken": "1 week",
        "payNowFixedPrice": "60.00",
        "payNowIncludesGST": false,
        "authenticationType": [
          "SingPass",
          "CorpPass"
        ],
        "supportingDocument": null,
        "allowThirdPartyCorpPass": true,
        "allowThirdPartySingPass": true
      },
      "agencyName": "Singapore Police Force",
      "agencyCode": "test_uat",
      "agencyLicenceType": "In House Employer’s Registration",
      "agencyOperationType": "New",
      "operationTypeId": "d9ea79da-2668-f34f-b5fa-1d666822a708",
      "status": "LIVE"
    }
  };
  for(let i=0;i<1;i++)
    { let appNumber=Math.floor(Math.random() * (9999 - 1000 + 1 ) + 1000)
        data["application"]["general"]["applicationNumber"]="PFT12345"+ appNumber;
        //console.log("Application Number "+data["application"]["general"]["applicationNumber"])
    

  // Using a JSON string as body
  let res = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'authorization': 'G2B_L1T.1672801788.RS256.861d7ded-4020-436f-8d12-486ba0548bed.g1iLZVhyEc2P8FF6kOxJLiNPjgFOronsLd29q2Q6EbfD6eqwS4cOO3tz4tcSEzujBY1C_U1X8mSkUbnN6J102IVbAL21mVwlZZ09VgnzrXczuPlWVDd5ktQxke0SBo-JAMvbYPU9jJTFw0dlhGjO2ht7MGbb1gP51w4ie6ei4EufifDpguhBJemmRIPo9lUq3cVsnS69DcFRjnycIA_CUKuKgV53-eY3dhigh--0oXj1Y3UICPTpJqjGtDlHr44BiGYg_zS7SzMxwKNyIywo4kQjvad23ASPRnAqkfJ5jCcBc1JssnQxy7n09wnZRh6tSmns3d6hRV8vuFheppgBvA'},
  });
}

}