import http from 'k6/http';

const url = 'https://api.agencyportal.qa.gobusiness.io/resource/validation';

export let options = {
  ext: {
    loadimpact: {
      projectID: 3620807,
      // Test runs with the same name groups test runs together
      name: "Validate Application Results - Baseline Test"
    }
  }
}

export default function () {
  let data =
    {
        "operation": "validation",
        "application": {
          "general": {
            "applicationNumber": "FC224149770",
            "dateSent": "14/12/2022 17:56:24",
            "transactionType": "new",
            "licenceName": "Certificate of Registration of School",
            "licenceID": 37,
            "licenceNumber": null
          },
          "profile": {
            "applyAs": "As an applicant"
          },
          "applicant": {
            "salutation": "Dr",
            "email": "robert2_2@xyz.com",
            "contactNumber": "+6583148052",
            "address": null,
            "name": "Tim Tom2",
            "id": {
              "idType": "NRIC",
              "idNumber": "S3001372G"
            }
          },
          "filer": {
            "salutation": null,
            "name": null,
            "id": {
              "idType": "",
              "idNumber": null
            },
            "email": null,
            "contactNumber": null
          },
          "company": {
            "companyName": "ABC New Business",
            "uen": "180067113K",
            "entityType": "Foreign Company",
            "registeredAddress": {
              "postalCode": "117438",
              "blockNo": "10",
              "streetName": "Pasir Panjang Road",
              "buildingName": "Mapletree Business City",
              "floor": "10",
              "unit": "01"
            }
          },
          "licence": {
            "5ListOfDirectors": [
              {
                "rowId": "",
                "appointments": {
                  "idNumber": "S9876543A",
                  "idType": "NRIC (CITIZEN)",
                  "name": "Tim Tom",
                  "nationality": "SINGAPORE CITIZEN",
                  "address": {
                    "postalCode": "117438",
                    "blockNo": "10",
                    "streetName": "Pasir Panjang Road",
                    "buildingName": "Mapletree Business City",
                    "floor": "10",
                    "unit": "01"
                  },
                  "position": "AGENT",
                  "category": "Individual",
                  "appointedDate": "31/01/2018"
                }
              },
              {
                "rowId": "",
                "appointments": {
                  "idNumber": "201800002B",
                  "idType": "UEN",
                  "name": "DEF Company",
                  "nationality": null,
                  "address": null,
                  "position": "AUDITOR",
                  "category": "Local Company",
                  "appointedDate": "31/01/2018"
                }
              }
            ],
            "6ListOfShareholders": [
              {
                "rowId": "",
                "shareholders": {
                  "idNumber": "S9876543A",
                  "idType": "NRIC (CITIZEN)",
                  "name": "Tim Tom",
                  "nationality": "SINGAPORE CITIZEN",
                  "address": {
                    "postalCode": "117438",
                    "blockNo": "10",
                    "streetName": "Pasir Panjang Road",
                    "buildingName": "Mapletree Business City",
                    "floor": "10",
                    "unit": "01"
                  },
                  "currency": "SINGAPORE, DOLLARS",
                  "shareType": "Ordinary Capital",
                  "allotmentDate": "17/04/2018",
                  "allocation": "10000",
                  "category": "Individual",
                  "shareGroup": "NIL",
                  "guaranteedAmount": "0"
                }
              },
              {
                "rowId": "",
                "shareholders": {
                  "idNumber": "201800002B",
                  "idType": "UEN",
                  "name": "DEF Company",
                  "nationality": null,
                  "address": null,
                  "currency": "SINGAPORE, DOLLARS",
                  "shareType": "Preference Capital",
                  "allotmentDate": "17/04/2018",
                  "allocation": "10000",
                  "category": "Local Company",
                  "shareGroup": "NIL",
                  "guaranteedAmount": "0"
                }
              }
            ],
            "7IiPersonalParticularsOfSchoolManagers": [],
            "9ITuitionInPrimaryLevelCourseSubjectTitle": [
              {
                "rowId": "1",
                "courseSubjectTitle": "Tuition in Chinese",
                "level": [
                  "Primary 1"
                ],
                "lengthOfEntireCourse": "1",
                "teachingDaysPerWeek": "1",
                "teachingHoursPerDay": "1",
                "monthlyFee": 2000,
                "registrationFee": null,
                "nameOfTeacher": "name3"
              }
            ],
            "9IiTuitionInSecondaryLevelCourseSubjectTitle": [],
            "9IiiTuitionInJcLevelCourseSubjectTitle": [],
            "9IvOtherEnrichmentCourseSubjectTitleForSelfDevelopedCoursePleaseSubmitAttachTheCourseDetailsWriteUpForEachEnrichmentCourseAndEachLeve": [],
            "10RegistrationOfTeacher": [
              {
                "rowId": "1",
                "nameOfTeacher": "name4",
                "residentialStatus": "Citizen",
                "nricPassport": "S9912345A",
                "residentialAddress": {
                  "postalCode": "228022",
                  "blockNo": "1",
                  "streetName": "WILKIE TERRACE",
                  "buildingName": "HOCK MANSION",
                  "floor": "1",
                  "unit": "1"
                },
                "mobileNumber": "+6588111111",
                "dateOfBirth": "09/12/2022",
                "nationality": "AFGHAN",
                "qualificationAttained": "Qualification1",
                "hasTheTeacherBeenEngagedOrCurrentlyEmployedByACompanyOrBusinessThatProvidesEducationalServices": "No",
                "isTheTeacherACurrentOrFormerTeacherHiredByMoe": "No",
                "hiringCompanySchool": null,
                "yearsOfEmployment": null,
                "positionHeld": null,
                "educationParticulars": [
                  {
                    "rowId": "1",
                    "yearOfAttainment": "1990",
                    "qualificationAttained": "Degree",
                    "nameOfSchoolCollegeUniversityAttended": "12",
                    "country": "AFGHANISTAN"
                  }
                ],
                "coursesSubjectsToBeTaughtByTheTeacher": [
                  {
                    "rowId": "1",
                    "courseSubject": "Course",
                    "levelS": "3"
                  }
                ]
              }
            ],
            "nricOrPassportUploads": [],
            "educationQualificationsUploads": [],
            "additionalApplicantDetail": {
              "areYouASupervisorOfSchool": "No"
            },
            "4SchoolParticulars": {
              "nameOfSchool": "School1",
              "schoolEmailAddress": "School@gmail.com",
              "addressOfSchoolSameAsBusinessOperatingAddress": [
                "Yes"
              ],
              "registeredAddress": {
                "postalCode": "117438",
                "blockNo": "10",
                "streetName": "Pasir Panjang Road",
                "buildingName": "Mapletree Business City",
                "floor": "10",
                "unit": "01"
              },
              "addressOfSchool": null,
              "telephoneNumber": "+6588111111",
              "faxNumber": ""
            },
            "declarationForCompaniesOnly": {
              "declarationForCompaniesOnly": [
                "A resolution in writing signed by all the directors",
                "A resolution in writing signed by majority of the directors"
              ]
            },
            "7IPersonalParticularsOfSchoolSupervisor": {
              "name": "name1",
              "nricPassportNumber": {
                "idType": "NRIC",
                "idNumber": "S9912345A"
              },
              "countryOfIssue": "SINGAPORE",
              "personalEmailAddress": "email@gmail.com",
              "registeredAddress": {
                "postalCode": "117438",
                "blockNo": "10",
                "streetName": "Pasir Panjang Road",
                "buildingName": "Mapletree Business City",
                "floor": "10",
                "unit": "01"
              },
              "mobileNumber": "+6588111111",
              "dateOfBirth": "15/12/2022",
              "nationality": "AFGHAN",
              "occupation": "teacher",
              "nameOfEmployer": "name1",
              "residentialStatus": "Citizen",
              "addSchoolManagers": []
            },
            "8SubmissionOfSchoolConstitution": {
              "iTheBusinessNameOfTheEntityRegisteringTheSchoolIs": "name2",
              "iiTheBusinessTypeOfTheEntityRegisteringTheSchoolIs": "Sole-proprietorship",
              "iiiTheAimsOfTheSchoolIsAreAsSuch": [
                "To provide tuition",
                "To provide enrichment (including ABRSM courses, RAD courses, language course etc)"
              ]
            },
            "ivCommitteeOfManagement": {
              "acknowledgement": [
                "Yes. I acknowledge the above clauses. "
              ]
            },
            "tuitionLevelProvided": {
              "selectTheLevelOfCoursesProvided": [
                "Primary"
              ]
            },
            "cAttachments": {
              "formCm": null,
              "formRt": null,
              "copyOfApprovedFloorPlanByScdfSFireSafetyAndShelterDepartmentFssd": null,
              "copyOfFireSafetyCertificateFsc": null,
              "copyOfTheGrantOfWrittenPermissionWpAndUraOrApprovalOnTheUseOfPremisesFromHdbAsACommercialSchoolTuitionCenterEnrichmentCenter": null,
              "copyOfTheSignedAppointmentNoteOrDirectorsResolutionToAppointTheMembersOfTheCommitteeOfManagement": null
            }
          }
        },
        "version": {
          "id": "2c8c5d2e-db8b-4877-9669-ee03e4b9825a",
          "formName": "(Do not touch) MOE - Certificate Of Registration Of School -New",
          "licenceName": "Certificate of Registration of School",
          "schema": {
            "declaration": {
              "id": "DECLARATION_SECTION",
              "fields": [
                {
                  "id": "DECLARATION_FIELD",
                  "attr": {
                    "hasAdditional": true,
                    "acknowledgement": "I hereby declare that all of the above is true.",
                    "generalDeclaration": "I declare that all the information given in this application form is true and correct.\n\nI am aware that legal action may be taken against me if I had knowingly provided false information.\n\nI agree that in any legal proceedings, I shall not dispute the authenticity or accuracy of any statements, confirmations, records, acknowledgements, information recorded in or produced in this application.",
                    "additionalDeclaration": "<p>I declare that I have conveyed the contents and obtained the consents of the supervisor, school managers and teachers to make this application and declaration.</p><p>&nbsp;</p><p><strong>Declaration of School Management Committee for Supervisor and School Managers:</strong></p><p>I declare that the supervisor and school manager is/are:-</p><ol><li>1. Normally resident in Singapore for at least 9 months in each year.</li><li>2. A person of good character and have never been convicted of an offence punishable with imprisonment.</li><li>3. Have never previously been refused registration as a manager of any school or having been so registered had my registration cancelled.</li><li>4. Not an undischarged bankrupt.</li><li>5. Able to carry out the duties as a manager of the above school and I am familiar with the provisions of the Education Act and the provisions made thereunder.</li></ol><p><strong>Declaration for registration as a teacher:</strong></p><p>I declare that the teacher(s) is/are:-</p><ol><li>1. A person of good character and have never been convicted of an offence punishable with imprisonment.</li><li>2. Have never previously been refused registration as a manager of any school or as a teacher or having been so registered had my registration cancelled.</li><li>3. Have been certified medically fit by a registered doctor.</li></ol>"
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
                      "required": true,
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
                "id": "bkc2xd3wd",
                "key": "additionalApplicantDetail",
                "fields": [
                  {
                    "id": "stvuftbok",
                    "key": "areYouASupervisorOfSchool",
                    "attr": {
                      "title": "Are you a Supervisor of School?",
                      "required": true,
                      "metaTagNo": "",
                      "metaTagYes": ""
                    },
                    "type": "yes_no"
                  }
                ],
                "header": "Additional Applicant Detail",
                "menuLabel": "New Label"
              },
              {
                "id": "t1up1r1j8",
                "key": "4SchoolParticulars",
                "fields": [
                  {
                    "id": "k0n6j90tv",
                    "key": "nameOfSchool",
                    "attr": {
                      "title": "Name of School",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 100
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "72f1mjji4",
                    "key": "schoolEmailAddress",
                    "attr": {
                      "title": "School Email Address",
                      "required": true,
                      "emailNotification": false
                    },
                    "type": "email"
                  },
                  {
                    "id": "89e9ugylq",
                    "key": "addressOfSchoolSameAsBusinessOperatingAddress",
                    "attr": {
                      "title": "Address of School Same as Business Operating Address",
                      "options": [
                        {
                          "label": "Yes"
                        },
                        {
                          "label": "No",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "checkbox"
                  },
                  {
                    "id": "ljekz6g0r",
                    "key": "registeredAddress",
                    "attr": {
                      "title": "Registered Address",
                      "required": true,
                      "withPostalCodeRequiredConfig": {
                        "unit": false,
                        "floor": false,
                        "blockNo": false,
                        "postalCode": false,
                        "streetName": false,
                        "buildingName": false
                      }
                    },
                    "type": "edh_registered_address"
                  },
                  {
                    "id": "rxgpemblj",
                    "key": "addressOfSchool",
                    "attr": {
                      "title": "Address of School",
                      "required": false,
                      "description": "Prepopulate from EDH if Same As Business Operating Adress is checked",
                      "withoutPostalCodeEnabled": false,
                      "withPostalCodeRequiredConfig": {
                        "unit": false,
                        "floor": false
                      }
                    },
                    "type": "address"
                  },
                  {
                    "id": "aw99k8iqm",
                    "key": "telephoneNumber",
                    "attr": {
                      "title": "Telephone Number",
                      "required": true,
                      "allowIntContactNumber": false
                    },
                    "type": "contactnumber"
                  },
                  {
                    "id": "rb8gwt5jo",
                    "key": "faxNumber",
                    "attr": {
                      "title": "Fax Number",
                      "required": false,
                      "allowIntContactNumber": false
                    },
                    "type": "contactnumber"
                  }
                ],
                "header": "4) School Particulars"
              },
              {
                "id": "9xe7ppx4m",
                "key": "5ListOfDirectors",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "p50mqwnfh",
                    "key": "appointments",
                    "attr": {
                      "title": "Appointments",
                      "required": true,
                      "appointedPersonInfo": {
                        "name": false,
                        "idType": false,
                        "address": {
                          "unit": false,
                          "floor": false,
                          "blockNo": false,
                          "postalCode": false,
                          "streetName": false,
                          "buildingName": false
                        },
                        "category": false,
                        "idNumber": false,
                        "position": false,
                        "nationality": false,
                        "appointedDate": false
                      }
                    },
                    "type": "edh_appointments"
                  }
                ],
                "header": "5) List of Directors",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 50,
                "minimumDuplication": 1
              },
              {
                "id": "73kp42vjv",
                "key": "declarationForCompaniesOnly",
                "fields": [
                  {
                    "id": "qkq9qr4uc",
                    "key": "declarationForCompaniesOnly",
                    "attr": {
                      "title": "Declaration (for companies only)",
                      "options": [
                        {
                          "label": "A resolution in writing signed by all the directors"
                        },
                        {
                          "label": "A resolution in writing signed by majority of the directors",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false,
                      "description": "Business Constitution - Pursuant to Section 93(1) (Please tick the relevant clause applicable for your company):\n\nFor the time being entitled to received notice of a meeting of directors, is valid and effectual as if it has been passed at the meeting of the directors duly convened and held."
                    },
                    "type": "checkbox"
                  },
                  {
                    "id": "glragfqzu",
                    "key": "statement",
                    "attr": {
                      "description": "<p>for the time being, entitled to receive notice of a meeting of directors, is valid and effectual as if it has been passed at the meeting of the directors duly convened and held.</p>"
                    },
                    "type": "statement"
                  }
                ],
                "header": "Declaration (for companies only)",
                "menuLabel": "New Label"
              },
              {
                "id": "iijgz28ew",
                "key": "6ListOfShareholders",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "tfokwe47v",
                    "key": "shareholders",
                    "attr": {
                      "title": "Shareholders",
                      "required": true,
                      "shareholderInfo": {
                        "name": false,
                        "idType": false,
                        "address": {
                          "unit": false,
                          "floor": false,
                          "blockNo": false,
                          "postalCode": false,
                          "streetName": false,
                          "buildingName": false
                        },
                        "category": false,
                        "currency": false,
                        "idNumber": false,
                        "shareType": false,
                        "allocation": false,
                        "shareGroup": false,
                        "nationality": false,
                        "allotmentDate": false,
                        "guaranteedAmount": false
                      }
                    },
                    "type": "edh_shareholderlist"
                  }
                ],
                "header": "6) List of Shareholders",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 50,
                "minimumDuplication": 0
              },
              {
                "id": "6waokptoj",
                "key": "7IPersonalParticularsOfSchoolSupervisor",
                "fields": [
                  {
                    "id": "utdtvi5un",
                    "key": "name",
                    "attr": {
                      "title": "Name",
                      "required": true,
                      "description": "",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 100
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "lcp19tt8n",
                    "key": "nricPassportNumber",
                    "attr": {
                      "title": "NRIC/Passport Number",
                      "required": true
                    },
                    "type": "id_type"
                  },
                  {
                    "id": "gdwoulyql",
                    "key": "countryOfIssue",
                    "attr": {
                      "title": "Country of Issue",
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
                    "id": "5z1tsxcue",
                    "key": "personalEmailAddress",
                    "attr": {
                      "title": "Personal Email Address",
                      "required": true,
                      "emailNotification": false
                    },
                    "type": "email"
                  },
                  {
                    "id": "bfmku9j4g",
                    "key": "registeredAddress",
                    "attr": {
                      "title": "Registered Address",
                      "required": true,
                      "withPostalCodeRequiredConfig": {
                        "unit": false,
                        "floor": false,
                        "blockNo": false,
                        "postalCode": false,
                        "streetName": false,
                        "buildingName": false
                      }
                    },
                    "type": "edh_registered_address"
                  },
                  {
                    "id": "7n9xbmkab",
                    "key": "mobileNumber",
                    "attr": {
                      "title": "Mobile Number",
                      "required": true,
                      "allowIntContactNumber": false
                    },
                    "type": "contactnumber"
                  },
                  {
                    "id": "zmfa1b26j",
                    "key": "dateOfBirth",
                    "attr": {
                      "title": "Date of Birth",
                      "required": true
                    },
                    "type": "date"
                  },
                  {
                    "id": "mt68pkxyx",
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
                    "id": "jrxw55jnw",
                    "key": "occupation",
                    "attr": {
                      "title": "Occupation",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 100
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "naogpwj6f",
                    "key": "nameOfEmployer",
                    "attr": {
                      "title": "Name of Employer",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 200
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "470kvjrez",
                    "key": "residentialStatus",
                    "attr": {
                      "title": "Residential Status",
                      "options": [
                        {
                          "label": "Citizen"
                        },
                        {
                          "label": "Not Applicable",
                          "metaTag": ""
                        },
                        {
                          "label": "PR",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "k482mprwc",
                    "key": "addSchoolManagers",
                    "attr": {
                      "title": "Add school managers",
                      "options": [
                        {
                          "label": "Yes"
                        }
                      ],
                      "required": false,
                      "hasOthers": false
                    },
                    "type": "checkbox"
                  }
                ],
                "header": "7i) Personal Particulars of School Supervisor"
              },
              {
                "id": "esn1fvo8h",
                "key": "7IiPersonalParticularsOfSchoolManagers",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "bekkvvzan",
                    "key": "nameOfSchoolManager",
                    "attr": {
                      "title": "Name of School Manager",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "0wufmmiw8",
                    "key": "nricPassportNumber",
                    "attr": {
                      "title": "NRIC/Passport Number",
                      "required": true
                    },
                    "type": "nric"
                  },
                  {
                    "id": "l9yol58z9",
                    "key": "countryOfIssue",
                    "attr": {
                      "title": "Country of Issue",
                      "options": [
                        {
                          "label": "Option 1"
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "mi85bm82x",
                    "key": "registeredAddress",
                    "attr": {
                      "title": "Registered address",
                      "required": false,
                      "description": "",
                      "nonEditable": false,
                      "displayLandownership": false,
                      "withoutPostalCodeEnabled": false,
                      "withPostalCodeRequiredConfig": {
                        "unit": false,
                        "floor": false,
                        "buildingName": false
                      }
                    },
                    "type": "address"
                  },
                  {
                    "id": "vceyvck42",
                    "key": "mobileNumber",
                    "attr": {
                      "title": "Mobile Number",
                      "required": true,
                      "allowIntContactNumber": false
                    },
                    "type": "contactnumber"
                  },
                  {
                    "id": "dmiqyp0vb",
                    "key": "dateOfBirth",
                    "attr": {
                      "title": "Date of Birth",
                      "required": true
                    },
                    "type": "date"
                  },
                  {
                    "id": "f7nby9vwr",
                    "key": "nationality",
                    "attr": {
                      "title": "Nationality",
                      "options": [
                        {
                          "label": "Option 1"
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "ptupd32fv",
                    "key": "occupation",
                    "attr": {
                      "title": "Occupation",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 100
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "zws5o2fzl",
                    "key": "nameOfEmployer",
                    "attr": {
                      "title": "Name of Employer",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 200
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "p5pl48yj5",
                    "key": "residentialStatus",
                    "attr": {
                      "title": "Residential Status",
                      "options": [
                        {
                          "label": "Citizen"
                        },
                        {
                          "label": "NOT APPLICABLE",
                          "metaTag": ""
                        },
                        {
                          "label": "PR",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  }
                ],
                "header": "7ii) Personal Particulars of School Managers",
                "addableRowIndex": true,
                "maximumDuplication": 8,
                "minimumDuplication": 0
              },
              {
                "id": "zwbo6i365",
                "key": "8SubmissionOfSchoolConstitution",
                "fields": [
                  {
                    "id": "6bc8oo36q",
                    "key": "statement",
                    "attr": {
                      "description": "<p>Under the Education Act (Cap 24k), the Director-General of Education may refuse to register a school if 'the constitution of the proposed committee of management is not such as to ensure the efficient administration of the proposed school'.&nbsp;</p><p>&nbsp;</p><p>In this section, we have provided compulsory segments for the school constitution that MOE will require.</p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "34l7hxwb1",
                    "key": "iTheBusinessNameOfTheEntityRegisteringTheSchoolIs",
                    "attr": {
                      "title": "i) The \"Business Name\" of the entity registering the school is:",
                      "required": true,
                      "description": "The name provided here MUST be the identical to the name stated in the approved ACRA application for the business."
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "5omi5n83q",
                    "key": "iiTheBusinessTypeOfTheEntityRegisteringTheSchoolIs",
                    "attr": {
                      "title": "ii) The \"Business Type\" of the entity registering the school is:",
                      "options": [
                        {
                          "label": "Sole-proprietorship",
                          "metaTag": ""
                        },
                        {
                          "label": "Private company owning a Sole-Proprietorship Business (i.e. School)",
                          "metaTag": ""
                        },
                        {
                          "label": "Partnerships",
                          "metaTag": ""
                        },
                        {
                          "label": "Limited Liability Partnership (LLP)",
                          "metaTag": ""
                        },
                        {
                          "label": "Limited Partnership (LP)",
                          "metaTag": ""
                        },
                        {
                          "label": "Private company limited by shares",
                          "metaTag": ""
                        },
                        {
                          "label": "Exempt private company",
                          "metaTag": ""
                        },
                        {
                          "label": "Public Company Limited by Shares",
                          "metaTag": ""
                        },
                        {
                          "label": "Public Company Limited by Guarantee",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false,
                      "description": "The \"Business Type\" provided must be identical to the \"Business Type\" in the approved ACRA application"
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "ex7hyxfx2",
                    "key": "iiiTheAimsOfTheSchoolIsAreAsSuch",
                    "attr": {
                      "title": "iii) The aims of the school is/are as such",
                      "options": [
                        {
                          "label": "To provide tuition"
                        },
                        {
                          "label": "To provide enrichment (including ABRSM courses, RAD courses, language course etc)",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "checkbox"
                  }
                ],
                "header": "8) Submission of School Constitution"
              },
              {
                "id": "j6hvz846b",
                "key": "ivCommitteeOfManagement",
                "fields": [
                  {
                    "id": "pfiuzy3yl",
                    "key": "statement",
                    "attr": {
                      "description": "<p>1. The Committee of Management shall operate according to the Education Act, Cap 87 (1985 Ed) and the Schools Regulations (1990 Ed).&nbsp;</p><p>&nbsp;</p><p>2. The Committee of Management shall be appointed by the \"Business Name\" (provided in this form) and as registered under the Business Registration Act, Cap 32 OR the Companies Act, Cap 50 OR the Limited Partnerships Act 2008 OR the Limited Liability Partnership Act 2005, whichever is relevant to the \"Business Type\" provided in this form. The Committee shall consist of not more than nine members and shall comprise:&nbsp;</p><p>&nbsp;</p><p>(i) Supervisor</p><p>(ii) Secretary&nbsp;</p><p>(iii) Treasurer&nbsp;</p><p>(iv) 6 other Committee members, if necessary.&nbsp;</p><p>&nbsp;</p><p>3. The term of office of the Committee of Management shall be three years.&nbsp;</p><p>&nbsp;</p><p>4. The Committee of Management shall at least convene a meeting once in every 3 months.&nbsp;</p><p>&nbsp;</p><p>5. The Committee of Management shall recommend for registration one of their members to be the Supervisor of the School.&nbsp;</p><p>&nbsp;</p><p>6. The Supervisor shall:-&nbsp;</p><p>&nbsp;</p><p>a) conduct all correspondence with the Director-General of Education concerning the administration of the School;&nbsp;</p><p>&nbsp;</p><p>b) observe that the appointment and dismissal of any member of the staff of the school shall be determined by a majority vote of all members and that action for the appointment and dismissal of staff shall be initiated by him/her;</p><p>&nbsp;</p><p>c) be responsible for issuing to every teacher engaged to teach in his School a Letter of Appointment which shall set out:-&nbsp;</p><p>&nbsp;</p><p>(i) the conditions of service;&nbsp;</p><p>(ii) the salary scale; and&nbsp;</p><p>(iii) the conditions upon which the appointment may be terminated;&nbsp;</p><p>&nbsp;</p><p>d) be responsible for ensuring that the salaries of all teachers are paid in full when due;&nbsp;</p><p>&nbsp;</p><p>e) ensure that no instruction shall be given in the school except in accordance with a syllabus approved by the Director-General of Education;&nbsp;</p><p>&nbsp;</p><p>f) comply with directions given by the Director-General of Education in writing to him as to the preparation or alteration of the time-table of work of any class and submit for the approval of the Director-General of Education any such new revised time-table;&nbsp;</p><p>&nbsp;</p><p>g) cause a copy of the time-table of each class to be displayed in the classroom it normally occupies;&nbsp;</p><p>&nbsp;</p><p>h) inform the Director-General of Education of any change in the hours of school work;&nbsp;</p><p>&nbsp;</p><p>i) ensure that no subscription or fees shall be collected from pupils other than fees approved by the Director-General of Education;&nbsp;</p><p>&nbsp;</p><p>j) submit to the Director-General of Education for approval a list of the proposed monthly or termly Education Fee, Registration Fee and any other fees;&nbsp;</p><p>&nbsp;</p><p>k) cause to be kept proper books of account in which shall be shown every item of income and expenditure received and incurred on behalf of the School;&nbsp;</p><p>&nbsp;</p><p>l) ensure that all books of account shall be audited annually by an auditor approved by the Director-General of Education;&nbsp;</p><p>&nbsp;</p><p>m) ensure that the health requirements as stated in the Schools Regulations (1990 Ed) and/or as recommended by the Commissioner of Public Health shall be complied with and maintained;&nbsp;</p><p>&nbsp;</p><p>n) ensure that in every classroom or room used as such, there shall be displayed a certificate signed by the Director-General or an Officer authorised under Section 5 of the Education Act, Cap 87 (1985 Ed), specifying the maximum number of persons to be accommodated in that room at any one time and that no person other than the Director-General of Education or such officer shall remove, deface, cancel or alter such certificate;&nbsp;</p><p>&nbsp;</p><p>o) keep in his custody the seal of the School, title deeds of school property and other important documents;&nbsp;</p><p>&nbsp;</p><p>p) obtain approval of the Director-General of Education for the closure of school before it can be effected;&nbsp;</p><p>&nbsp;</p><p>q) be responsible for the organisation of the curriculum both in and out of the classroom, for the control of the teachers and for the maintenance of discipline of the pupils of the School;&nbsp;</p><p>&nbsp;</p><p>r) enter fees paid by pupils in proper books of account as income of the School;&nbsp;</p><p>&nbsp;</p><p>s) issue receipts to the payment of fees by every pupil;&nbsp;</p><p>&nbsp;</p><p>t) keep all accounts books which shall be available at all reasonable times for scrutiny by an Inspector of Schools;&nbsp;</p><p>&nbsp;</p><p>u) have powers to delegate part of his duties specified above to other members of the Committee of Management of the School provided that prior approval to that effect has been obtained from the Director-General of Education.&nbsp;</p><p>&nbsp;</p><p>Duties of Secretary&nbsp;</p><p>&nbsp;</p><p>7. The Secretary shall record and keep minutes of all proceedings and resolutions passed at meetings of the Committee of Management. Duties of Treasurer&nbsp;</p><p>&nbsp;</p><p>8. The Treasurer shall:-&nbsp;</p><p>&nbsp;</p><p>a) be responsible for all financial transactions of the School;&nbsp;</p><p>b) maintain proper books of account of the School;&nbsp;</p><p>c) prepare annual statements of accounts for audit by an auditor approved by the Director-General of Education;&nbsp;</p><p>d) submit a copy of audited annual statements of accounts to the Ministry of Education on or before the 30th June, in the following year.</p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "2o3sbj0m9",
                    "key": "acknowledgement",
                    "attr": {
                      "title": "Acknowledgement",
                      "options": [
                        {
                          "label": "Yes. I acknowledge the above clauses. "
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "checkbox"
                  }
                ],
                "header": "iv) Committee of Management"
              },
              {
                "id": "qn48wawvb",
                "key": "tuitionLevelProvided",
                "fields": [
                  {
                    "id": "abvfpszl7",
                    "key": "selectTheLevelOfCoursesProvided",
                    "attr": {
                      "title": "Select the level of courses provided",
                      "options": [
                        {
                          "label": "Primary"
                        },
                        {
                          "label": "Secondary",
                          "metaTag": ""
                        },
                        {
                          "label": "JC",
                          "metaTag": ""
                        },
                        {
                          "label": "Others",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "checkbox"
                  }
                ],
                "header": "Tuition Level Provided",
                "menuLabel": "New Label"
              },
              {
                "id": "6kzoa5agx",
                "key": "9ITuitionInPrimaryLevelCourseSubjectTitle",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "7sujgbowu",
                    "key": "courseSubjectTitle",
                    "attr": {
                      "title": "Course / Subject Title",
                      "options": [
                        {
                          "label": "Tuition in English",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Malay",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Tamil",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Mathematics",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Science",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Panjabi",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Hindi",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Chinese",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Malay",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Tamil",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Panjabi",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Hindi",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Chinese ",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Malay ",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Tamil ",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation English ",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Mathematics ",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Foundation Science ",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": true,
                      "description": "Note: (i) Spell the course/subject in full. (ii) For tuition following MOE syllabus, the course/subject's name should follow the subject list found on Singapore Examination Assessment Board (SEAB)'s website (example: Tuition in English, Tuition in English Language, Tuition in General Paper)"
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "oxtfzqmyv",
                    "key": "level",
                    "attr": {
                      "title": "Level",
                      "options": [
                        {
                          "label": "Primary 1"
                        },
                        {
                          "label": "Primary 2",
                          "metaTag": ""
                        },
                        {
                          "label": "Primary 3",
                          "metaTag": ""
                        },
                        {
                          "label": "Primary 4",
                          "metaTag": ""
                        },
                        {
                          "label": "Primary 5",
                          "metaTag": ""
                        },
                        {
                          "label": "Primary 6",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false,
                      "description": "You may select more than 1 if applicable."
                    },
                    "type": "checkbox"
                  },
                  {
                    "id": "qt70v81l1",
                    "key": "lengthOfEntireCourse",
                    "attr": {
                      "title": "Length of entire course",
                      "required": true,
                      "description": "Examples: 1 year, 6 months, 3 months etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "cajnbargm",
                    "key": "teachingDaysPerWeek",
                    "attr": {
                      "title": "Teaching Days Per Week",
                      "options": [
                        {
                          "label": "1"
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        },
                        {
                          "label": "5",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "xcfla8pvs",
                    "key": "teachingHoursPerDay",
                    "attr": {
                      "title": "Teaching Hours Per Day",
                      "options": [
                        {
                          "label": "0.5"
                        },
                        {
                          "label": "1",
                          "metaTag": ""
                        },
                        {
                          "label": "1.5",
                          "metaTag": ""
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "2.5",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "3.5",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "jgwni4bsz",
                    "key": "monthlyFee",
                    "attr": {
                      "title": "Monthly Fee",
                      "required": true,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "6rryqno4y",
                    "key": "registrationFee",
                    "attr": {
                      "title": "Registration Fee",
                      "required": false,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "6jp0t5wdn",
                    "key": "nameOfTeacher",
                    "attr": {
                      "title": "Name of Teacher",
                      "required": true,
                      "description": "Both name of teacher and qualifcation will be an addable table - feature curently in developmnet",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  }
                ],
                "header": "9(i)Tuition in Primary Level Course / Subject Title",
                "showIfLogics": [],
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
              },
              {
                "id": "l0b9muyuz",
                "key": "9IiTuitionInSecondaryLevelCourseSubjectTitle",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "7woulh66x",
                    "key": "courseSubjectTitle",
                    "attr": {
                      "title": "Course / Subject Title",
                      "options": [
                        {
                          "label": "Tuition in English Language",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in English",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in History",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Geography",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Humanities (Social Studies, Geography)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Humanities (Social Studies, History)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Humanities (Social Studies, Literature in English)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Economics",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Humanities (Social Studies, Literature in Chinese)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Drama",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Mathematics",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Additional Mathematics",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Science",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Science (Physics, Chemistry)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Science (Physics, Biology)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Science (Chemistry, Biology)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Physics",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chemistry",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Biology",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Art",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Art",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Design & Technology",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Business Studies",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Principles of Accounts",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Computing",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Biotechnology",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Design Studies",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Chinese",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese B",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese (Special Programme)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in Chinese",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Malay",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Malay (Special Programme)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Malay",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Malay B",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in Malay",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Higher Tamil",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Tamil B",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Tamil",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in Tamil",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": true,
                      "description": "Note: (i) Spell the course/subject in full. (ii) For tuition following MOE syllabus, the course/subject's name should follow the subject list found on Singapore Examination Assessment Board (SEAB)'s website (example: Tuition in English, Tuition in English Language, Tuition in General Paper)"
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "keprl2e6a",
                    "key": "level",
                    "attr": {
                      "title": "Level",
                      "options": [
                        {
                          "label": "Secondary 1"
                        },
                        {
                          "label": "Secondary 2",
                          "metaTag": ""
                        },
                        {
                          "label": "Secondary 3",
                          "metaTag": ""
                        },
                        {
                          "label": "Secondary 4",
                          "metaTag": ""
                        },
                        {
                          "label": "Secondary 5",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false,
                      "description": "You may select more than 1 if applicable."
                    },
                    "type": "checkbox"
                  },
                  {
                    "id": "padj78f69",
                    "key": "lengthOfEntireCourse",
                    "attr": {
                      "title": "Length of entire course",
                      "required": true,
                      "description": "Examples: 1 year, 6 months, 3 months etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "pokjur7rb",
                    "key": "teachingDaysPerWeek",
                    "attr": {
                      "title": "Teaching Days Per Week",
                      "options": [
                        {
                          "label": "1"
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        },
                        {
                          "label": "5",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "3jbf4ifrd",
                    "key": "teachingHoursPerDay",
                    "attr": {
                      "title": "Teaching Hours Per Day",
                      "options": [
                        {
                          "label": "0.5"
                        },
                        {
                          "label": "1",
                          "metaTag": ""
                        },
                        {
                          "label": "1.5",
                          "metaTag": ""
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "2.5",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "3.5",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "2dnacb8wl",
                    "key": "monthlyFee",
                    "attr": {
                      "title": "Monthly Fee",
                      "required": true,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "lszyrpzyc",
                    "key": "registrationFee",
                    "attr": {
                      "title": "Registration Fee",
                      "required": false,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "bekpiqo7m",
                    "key": "nameOfTeacher",
                    "attr": {
                      "title": "Name of Teacher",
                      "required": true,
                      "description": "Both name of teacher and qualifcation will be an addable table - feature curently in developmnet",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  }
                ],
                "header": "9(ii)Tuition in Secondary Level Course / Subject Title",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
              },
              {
                "id": "thmf5sofx",
                "key": "9IiiTuitionInJcLevelCourseSubjectTitle",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "poejd8moj",
                    "key": "courseSubjectTitle",
                    "attr": {
                      "title": "Course / Subject Title",
                      "options": [
                        {
                          "label": "Tuition in Art (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Art (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Biology (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Biology (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chemistry (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chemistry (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in China Studies in Chinese (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in China Studies in English (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in China Studies in English (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese B (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese Language & Literature (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese Language & Literature (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Chinese Language (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Computing (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Economics (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Economics (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in English Language and Linguistics (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Further Mathematics (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in General Paper (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in General Studies in Chinese (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Geography (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Geography (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in History (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in History (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Knowledge and Inquiry (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in English (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Literature in English (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Management of Business (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Mathematics (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Mathematics (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Music (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Physics (H1)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Physics (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Principles of Accounting (H2)",
                          "metaTag": ""
                        },
                        {
                          "label": "Tuition in Theatre Studies and Drama (H2)",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": true,
                      "description": "Note: (i) Spell the course/subject in full. (ii) For tuition following MOE syllabus, the course/subject's name should follow the subject list found on Singapore Examination Assessment Board (SEAB)'s website (example: Tuition in English, Tuition in English Language, Tuition in General Paper)"
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "qk3tk5bcx",
                    "key": "level",
                    "attr": {
                      "title": "Level",
                      "options": [
                        {
                          "label": "JC 1"
                        },
                        {
                          "label": "JC 2",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false,
                      "description": "You may select more than 1 if applicable."
                    },
                    "type": "checkbox"
                  },
                  {
                    "id": "ozkn2fv3s",
                    "key": "lengthOfEntireCourse",
                    "attr": {
                      "title": "Length of entire course",
                      "required": true,
                      "description": "Examples: 1 year, 6 months, 3 months etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "bm9d8nslo",
                    "key": "teachingDaysPerWeek",
                    "attr": {
                      "title": "Teaching Days Per Week",
                      "options": [
                        {
                          "label": "1"
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        },
                        {
                          "label": "5",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "19upk8937",
                    "key": "teachingHoursPerDay",
                    "attr": {
                      "title": "Teaching Hours Per Day",
                      "options": [
                        {
                          "label": "0.5"
                        },
                        {
                          "label": "1",
                          "metaTag": ""
                        },
                        {
                          "label": "1.5",
                          "metaTag": ""
                        },
                        {
                          "label": "2",
                          "metaTag": ""
                        },
                        {
                          "label": "2.5",
                          "metaTag": ""
                        },
                        {
                          "label": "3",
                          "metaTag": ""
                        },
                        {
                          "label": "3.5",
                          "metaTag": ""
                        },
                        {
                          "label": "4",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "8y8qx45gg",
                    "key": "monthlyFee",
                    "attr": {
                      "title": "Monthly Fee",
                      "required": true,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "mq91z9eyw",
                    "key": "registrationFee",
                    "attr": {
                      "title": "Registration Fee",
                      "required": false,
                      "description": "(in SGD)"
                    },
                    "type": "decimal"
                  },
                  {
                    "id": "r9voilvv9",
                    "key": "nameOfTeacher",
                    "attr": {
                      "title": "Name of Teacher",
                      "required": true,
                      "description": "Both name of teacher and qualifcation will be an addable table - feature curently in developmnet",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  }
                ],
                "header": "9(iii)Tuition in JC Level Course / Subject Title",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
              },
              {
                "id": "29vwvbf6e",
                "key": "9IvOtherEnrichmentCourseSubjectTitleForSelfDevelopedCoursePleaseSubmitAttachTheCourseDetailsWriteUpForEachEnrichmentCourseAndEachLeve",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "px2otlb9i",
                    "key": "courseSubjectTitle",
                    "attr": {
                      "title": "Course/Subject Title",
                      "required": true
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "lccv5vcd1",
                    "key": "level",
                    "attr": {
                      "title": "Level",
                      "required": true,
                      "description": "(i.e. 4 to 6 years old)",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "a2gv1um5k",
                    "key": "isYourCourseSubjectASelfDevelopedCourse",
                    "attr": {
                      "title": "Is your course/subject a self-developed course?",
                      "required": true,
                      "metaTagNo": "",
                      "metaTagYes": ""
                    },
                    "type": "yes_no"
                  },
                  {
                    "id": "k4kwju3ah",
                    "key": "statement",
                    "attr": {
                      "description": "<p>Course Write-Up Form</p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "q5u9230tm",
                    "key": "originOfTheCourseExaminationPreparedFor",
                    "attr": {
                      "title": "Origin of the course/Examination prepared for",
                      "required": true,
                      "description": "E.g. examination authority (ABRSM, TOEFL, SAT), school-based, etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "79m0d7hhc",
                    "key": "aimsObjectivesExpectedOutcomes",
                    "attr": {
                      "title": "Aims & Objectives/Expected Outcomes",
                      "required": true,
                      "description": "Including value or 'worth' or equivalence of certification, especially where the course originates from the school itself",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 500
                      }
                    },
                    "type": "textarea"
                  },
                  {
                    "id": "hqc0tez6h",
                    "key": "targetStudentsAdmissionRequirements",
                    "attr": {
                      "title": "Target Students/Admission Requirements",
                      "required": true,
                      "description": "E.g. persons with little or no knowledge of the subject, non-speakers of the language; by academic qualifications, age, etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 500
                      }
                    },
                    "type": "textarea"
                  },
                  {
                    "id": "xsqs5vah6",
                    "key": "courseSyllabusContent",
                    "attr": {
                      "title": "Course Syllabus/Content",
                      "required": true,
                      "description": "state details including topics, areas to be taught, etc.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 500
                      }
                    },
                    "type": "textarea"
                  },
                  {
                    "id": "ash8pmo08",
                    "key": "totalCourseDurationWeeklyInstructionHoursTimeTable",
                    "attr": {
                      "title": "Total Course Duration/Weekly Instruction Hours (time-table)",
                      "required": true,
                      "description": "e.g. 1 year, 6 months/ 1 day x 1 hour per week",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 100
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "80g0fzdr5",
                    "key": "fees",
                    "attr": {
                      "title": "Fees",
                      "required": true,
                      "description": "state monthly tuition/instruction fees, registration fee; minimum and maximum size of each class or group",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 500
                      }
                    },
                    "type": "textarea"
                  },
                  {
                    "id": "i7428t9hh",
                    "key": "teachersParticulars",
                    "attr": {
                      "title": "Teachers Particulars",
                      "required": true,
                      "description": "List the names, qualifications of teachers and subject(s) they will teach. School are reminded that they have to submit Registration As A Teacher Form for each teacher in the course.",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 1000
                      }
                    },
                    "type": "textarea"
                  },
                  {
                    "id": "ohjwwsch9",
                    "key": "facilitiesEquipment",
                    "attr": {
                      "title": "Facilities & Equipment",
                      "required": true,
                      "description": "Indicate facilities and equipment to be provided",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 500
                      }
                    },
                    "type": "textarea"
                  }
                ],
                "header": "9(iv) Other Enrichment Course/Subject Title (For Self-developed course, please submit/attach the course details write-up for each enrichment course and each leve)",
                "menuLabel": "New Label",
                "showIfLogics": [
                  {
                    "id": "b598xbxyu",
                    "sectionId": "29vwvbf6e",
                    "conditions": [
                      {
                        "state": "is equal to",
                        "value": "Yes",
                        "fieldId": "a2gv1um5k",
                        "fieldType": "yes_no"
                      }
                    ],
                    "actionTargetIds": [
                      "k4kwju3ah",
                      "q5u9230tm",
                      "79m0d7hhc",
                      "hqc0tez6h",
                      "xsqs5vah6",
                      "ash8pmo08",
                      "80g0fzdr5",
                      "i7428t9hh",
                      "ohjwwsch9"
                    ]
                  }
                ],
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
              },
              {
                "id": "blvfys30l",
                "key": "10RegistrationOfTeacher",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "o37uin4jn",
                    "key": "nameOfTeacher",
                    "attr": {
                      "title": "Name of Teacher",
                      "required": true,
                      "description": "Name must be same as NRIC",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "v41dwdhiu",
                    "key": "residentialStatus",
                    "attr": {
                      "title": "Residential Status",
                      "options": [
                        {
                          "label": "Citizen"
                        },
                        {
                          "label": "NOT APPLICABLE",
                          "metaTag": ""
                        },
                        {
                          "label": "PR",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "f5ia1sjk7",
                    "key": "nricPassport",
                    "attr": {
                      "title": "NRIC/Passport",
                      "required": true
                    },
                    "type": "nric"
                  },
                  {
                    "id": "5wm2hcclm",
                    "key": "residentialAddress",
                    "attr": {
                      "title": "Residential Address",
                      "required": false,
                      "description": "",
                      "nonEditable": false,
                      "displayLandownership": false,
                      "withoutPostalCodeEnabled": false,
                      "withPostalCodeRequiredConfig": {
                        "unit": false,
                        "floor": false,
                        "buildingName": false
                      }
                    },
                    "type": "address"
                  },
                  {
                    "id": "wqdens72a",
                    "key": "mobileNumber",
                    "attr": {
                      "title": "Mobile Number",
                      "required": true,
                      "allowIntContactNumber": false
                    },
                    "type": "contactnumber"
                  },
                  {
                    "id": "9990vsmhe",
                    "key": "dateOfBirth",
                    "attr": {
                      "title": "Date of Birth",
                      "required": true
                    },
                    "type": "date"
                  },
                  {
                    "id": "b6aqacrh6",
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
                    "id": "zuk0lal2a",
                    "key": "subAddable",
                    "attr": {
                      "title": "Sub-Addable",
                      "required": true,
                      "subAddableSections": {
                        "id": "509jsk49d",
                        "key": "educationParticulars",
                        "label": "Education Particulars"
                      }
                    },
                    "type": "subaddable"
                  },
                  {
                    "id": "dgn70bjv6",
                    "key": "qualificationAttained",
                    "attr": {
                      "title": "Qualification Attained",
                      "required": true,
                      "description": "Please specify the full title of the qualification obtained - i.e. Bachelor of Arts in Psychology"
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "zeb2xfnqo",
                    "key": "hasTheTeacherBeenEngagedOrCurrentlyEmployedByACompanyOrBusinessThatProvidesEducationalServices",
                    "attr": {
                      "title": "Has the teacher been engaged or currently employed by a company or business that provides educational services?",
                      "options": [
                        {
                          "label": "Yes"
                        },
                        {
                          "label": "No",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "radiobutton"
                  },
                  {
                    "id": "eoigriihw",
                    "key": "isTheTeacherACurrentOrFormerTeacherHiredByMoe",
                    "attr": {
                      "title": "Is the teacher a current or former teacher hired by MOE?",
                      "options": [
                        {
                          "label": "Yes"
                        },
                        {
                          "label": "No",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": false
                    },
                    "type": "radiobutton"
                  },
                  {
                    "id": "mwsay2vpq",
                    "key": "statement",
                    "attr": {
                      "description": "<p><strong>Details on employment history at educational entity or company:</strong></p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "8q8jxdxqn",
                    "key": "hiringCompanySchool",
                    "attr": {
                      "title": "Hiring Company / School",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 200
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "fmw2f66gp",
                    "key": "yearsOfEmployment",
                    "attr": {
                      "title": "Years of Employment",
                      "required": true,
                      "description": "i.e. Jun 2002 to May 2021",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "ig84iio4f",
                    "key": "positionHeld",
                    "attr": {
                      "title": "Position Held",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 200
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "afnmdiekh",
                    "key": "subAddable",
                    "attr": {
                      "title": "Sub-Addable",
                      "required": true,
                      "subAddableSections": {
                        "id": "qhutfll2m",
                        "key": "coursesSubjects",
                        "label": "Courses/Subjects"
                      }
                    },
                    "type": "subaddable"
                  }
                ],
                "header": "10) Registration of Teacher",
                "showIfLogics": [
                  {
                    "id": "kcvhvf7uy",
                    "sectionId": "blvfys30l",
                    "conditions": [
                      {
                        "state": "is either",
                        "value": [
                          "Yes"
                        ],
                        "fieldId": "zeb2xfnqo",
                        "fieldType": "radiobutton"
                      }
                    ],
                    "actionTargetIds": [
                      "mwsay2vpq",
                      "8q8jxdxqn",
                      "ig84iio4f",
                      "fmw2f66gp"
                    ]
                  },
                  {
                    "id": "reehjc2iu",
                    "sectionId": "blvfys30l",
                    "conditions": [
                      {
                        "state": "is either",
                        "value": [
                          "Yes"
                        ],
                        "fieldId": "eoigriihw",
                        "fieldType": "radiobutton"
                      }
                    ],
                    "actionTargetIds": [
                      "mwsay2vpq",
                      "8q8jxdxqn",
                      "ig84iio4f",
                      "fmw2f66gp"
                    ]
                  }
                ],
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
              },
              {
                "id": "cn2jx0giy",
                "key": "cAttachments",
                "fields": [
                  {
                    "id": "w8yu0sbn5",
                    "key": "statement",
                    "attr": {
                      "description": "<p>The documents and forms you would need to provide can be found at MOE's website at <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.moe.gov.sg/private-education/register-school\">Register School</a> and the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.moe.gov.sg/-/media/files/private-education/school-registration-notes.doc?la=en&amp;hash=5912e68a370b4797007970367fd017397a395d1c\">school registration notes</a>.</p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "s5a9duoh2",
                    "key": "formCm",
                    "attr": {
                      "size": 7,
                      "title": "Form CM",
                      "required": false,
                      "description": "For School Supervisor and School Manager (only declaration part to be signed by School Supervisor and School manager)"
                    },
                    "type": "attachment"
                  },
                  {
                    "id": "z3fwflt5z",
                    "key": "formRt",
                    "attr": {
                      "size": 7,
                      "title": "Form RT",
                      "required": false,
                      "description": "Registration as Teacher (only declaration part to be signed by the teacher)"
                    },
                    "type": "attachment"
                  },
                  {
                    "id": "s0ox3gcwq",
                    "key": "copyOfApprovedFloorPlanByScdfSFireSafetyAndShelterDepartmentFssd",
                    "attr": {
                      "size": 7,
                      "title": "Copy of approved floor plan by SCDF's Fire Safety and Shelter Department (FSSD)",
                      "required": false,
                      "description": "High Resolution only."
                    },
                    "type": "attachment"
                  },
                  {
                    "id": "i9trjaefh",
                    "key": "copyOfFireSafetyCertificateFsc",
                    "attr": {
                      "size": 7,
                      "title": "Copy of Fire Safety Certificate (FSC)",
                      "required": false
                    },
                    "type": "attachment"
                  },
                  {
                    "id": "rn1m0pt5h",
                    "key": "copyOfTheGrantOfWrittenPermissionWpAndUraOrApprovalOnTheUseOfPremisesFromHdbAsACommercialSchoolTuitionCenterEnrichmentCenter",
                    "attr": {
                      "size": 7,
                      "title": "Copy of the Grant of written permission (WP) and URA or approval on the Use of premises from HDB as a commercial school/tuition center/enrichment center",
                      "required": false
                    },
                    "type": "attachment"
                  },
                  {
                    "id": "6nexz6yq4",
                    "key": "copyOfTheSignedAppointmentNoteOrDirectorsResolutionToAppointTheMembersOfTheCommitteeOfManagement",
                    "attr": {
                      "size": 7,
                      "title": "Copy of the signed Appointment Note or Directors' Resolution to appoint the members of the Committee of Management",
                      "required": false
                    },
                    "type": "attachment"
                  }
                ],
                "header": "C) Attachments"
              },
              {
                "id": "voitzzvax",
                "key": "nricOrPassportUploads",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "pb4gysc1y",
                    "key": "fileName",
                    "attr": {
                      "title": "File Name",
                      "required": false,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 20
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "kdk4pfbyb",
                    "key": "copiesOfNricOrPassportSupervisorSchoolManagerOfCommitteeOfManagementAndTeachers",
                    "attr": {
                      "size": 7,
                      "title": "Copies of NRIC or passport (supervisor, school manager of committee of management and teachers)",
                      "required": false
                    },
                    "type": "attachment"
                  }
                ],
                "header": "NRIC or Passport Uploads",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 20,
                "minimumDuplication": 0
              },
              {
                "id": "8cxwik8cz",
                "key": "educationQualificationsUploads",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "fd1f9o41t",
                    "key": "fileName",
                    "attr": {
                      "title": "File Name",
                      "required": false,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 20
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "kousbvz4j",
                    "key": "copiesOfTheEducationQualificationsCertificatesAndTranscriptsWhichAreToBeNotorialTranslatedIfTheyAreNotInEnglishForTheTeachers",
                    "attr": {
                      "size": 7,
                      "title": "Copies of the education qualifications (certificates and transcripts), which are to be notorial-translated if they are not in English for the teachers",
                      "required": false,
                      "description": "Up to 10 files (one for each teacher)"
                    },
                    "type": "attachment"
                  }
                ],
                "header": "Education Qualifications Uploads",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 100,
                "minimumDuplication": 0
              },
              {
                "id": "509jsk49d",
                "key": "educationParticulars",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "r0v3y7f1z",
                    "key": "statement",
                    "attr": {
                      "description": "<p><strong>Education Particulars in Chronological Order</strong></p><p>Note: Year of attainment, Qualification Attained, Name of School/ College/University Attended and Country is an addable table - feature currently in development</p>"
                    },
                    "type": "statement"
                  },
                  {
                    "id": "8mex7duvw",
                    "key": "yearOfAttainment",
                    "attr": {
                      "title": "Year of Attainment",
                      "required": true,
                      "customValidation": {
                        "type": "Exact",
                        "value": 4
                      }
                    },
                    "type": "number"
                  },
                  {
                    "id": "jcvxad6on",
                    "key": "qualificationAttained",
                    "attr": {
                      "title": "Qualification Attained",
                      "options": [
                        {
                          "label": "Master",
                          "metaTag": ""
                        },
                        {
                          "label": "Degree",
                          "metaTag": ""
                        },
                        {
                          "label": "Graduate Diploma",
                          "metaTag": ""
                        },
                        {
                          "label": "A-Level/College",
                          "metaTag": ""
                        },
                        {
                          "label": "O-Level/high school certificate",
                          "metaTag": ""
                        },
                        {
                          "label": "PSLE",
                          "metaTag": ""
                        }
                      ],
                      "required": true,
                      "hasOthers": true
                    },
                    "type": "dropdown"
                  },
                  {
                    "id": "wy0gncr30",
                    "key": "nameOfSchoolCollegeUniversityAttended",
                    "attr": {
                      "title": "Name of School/ College/University Attended",
                      "required": true,
                      "description": "Note: Please spell the name in full. e.g. National University of Singapore",
                      "customValidation": {
                        "type": "Maximum",
                        "value": 200
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "mhc85n1zi",
                    "key": "country",
                    "attr": {
                      "title": "Country",
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
                  }
                ],
                "header": "Education Particulars",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 20,
                "minimumDuplication": 1
              },
              {
                "id": "qhutfll2m",
                "key": "coursesSubjectsToBeTaughtByTheTeacher",
                "fields": [
                  {
                    "id": "rowId",
                    "key": "rowId",
                    "attr": {
                      "title": ""
                    },
                    "type": "rowId"
                  },
                  {
                    "id": "jupcf0n9n",
                    "key": "courseSubject",
                    "attr": {
                      "title": "Course/Subject",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  },
                  {
                    "id": "qi1ah25e1",
                    "key": "levelS",
                    "attr": {
                      "title": "Level(s)",
                      "required": true,
                      "customValidation": {
                        "type": "Maximum",
                        "value": 50
                      }
                    },
                    "type": "textfield"
                  }
                ],
                "header": "Courses/Subjects to be taught by the teacher",
                "menuLabel": "New Label",
                "addableRowIndex": true,
                "maximumDuplication": 10,
                "minimumDuplication": 1
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
              "showIfLogics": [
                {
                  "id": "q5e90ikaa",
                  "conditions": [
                    {
                      "state": "is equal to",
                      "value": [
                        "No"
                      ],
                      "fieldId": "89e9ugylq",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "rxgpemblj"
                  ]
                },
                {
                  "id": "5i61wvtd1",
                  "conditions": [
                    {
                      "state": "is equal to",
                      "value": [
                        "Yes"
                      ],
                      "fieldId": "89e9ugylq",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "ljekz6g0r"
                  ]
                },
                {
                  "id": "46q9v9r49",
                  "conditions": [
                    {
                      "state": "is either",
                      "value": [
                        "Others"
                      ],
                      "fieldId": "abvfpszl7",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "29vwvbf6e"
                  ]
                },
                {
                  "id": "yyqwfwabu",
                  "conditions": [
                    {
                      "state": "is either",
                      "value": [
                        "JC"
                      ],
                      "fieldId": "abvfpszl7",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "thmf5sofx"
                  ]
                },
                {
                  "id": "0bkccluax",
                  "conditions": [
                    {
                      "state": "is either",
                      "value": [
                        "Secondary"
                      ],
                      "fieldId": "abvfpszl7",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "l0b9muyuz"
                  ]
                },
                {
                  "id": "sn8y23ado",
                  "conditions": [
                    {
                      "state": "is either",
                      "value": [
                        "Primary"
                      ],
                      "fieldId": "abvfpszl7",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "6kzoa5agx",
                    "6kzoa5agx"
                  ]
                },
                {
                  "id": "1xwlip755",
                  "conditions": [
                    {
                      "state": "is equal to",
                      "value": [
                        "Yes"
                      ],
                      "fieldId": "k482mprwc",
                      "fieldType": "checkbox"
                    }
                  ],
                  "actionTargetIds": [
                    "esn1fvo8h"
                  ]
                }
              ],
              "requireIfLogics": []
            }
          },
          "settings": {
            "faq": null,
            "timeTaken": "20 mins",
            "description": "<p>Certificate of Registration of School</p>",
            "paymentMethod": "No Payment Required",
            "prerequisites": null,
            "offlinePayment": null,
            "allowThirdParty": false,
            "licenceValidity": "1 year",
            "processingTaken": "2 weeks",
            "authenticationType": [
              "CorpPass"
            ],
            "supportingDocument": null
          },
          "agencyCode": "moe",
          "agencyName": "Ministry of Education",
          "agencyLicenceType": "Certificate of Registration of School",
          "agencyOperationType": "New",
          "operationTypeId": "c08e0ba6-a1cd-4d2a-8b2d-032045c4998b",
          "status": "LIVE"
        }
      }
for(let i=0;i<1;i++)
    { let appNumber=Math.floor(Math.random() * (99999 - 10000 + 1 ) + 10000)
        data["application"]["general"]["applicationNumber"]="PFT123456"+ appNumber;
        //console.log("Application Number "+data["application"]["general"]["applicationNumber"])
    

  // Using a JSON string as body
  let res = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'authorization': 'G2B_L1T.1673342920.RS256.dab38da7-1467-4a43-bef4-41c358f45374.cuXF9vSbRxfcbfT_PmmotxGBhZuEUvSbGYl_A6ra7GsLTE2cB94UkW94oN9yWQZ6M33IxwpQPCQ44xom_bGU4T3x2Rzsz8cuUc7PKmsK-jKOBjnYxC5blWbIr-IgY77F7sBfsUUAn1qbep5SXBXI6EPmnAC8q9IqhOMhKjQ2Uaj8ewo1X75Uil-JGFGSDM_rkbUgqfkiDBcL_2AMMMQyWP7iAURdkDeAasrQiK4QPuyw6Lo94ejQiw_l67kjcewj1Q0UQPA6bCB_EUbEl5LegpZjE6deT9Fr0rhy8fMBx5yk944CmFeGVJ0bZtgE01nQcuuSbh5wMww3_iKx1LXJNg'},
  });
}
}