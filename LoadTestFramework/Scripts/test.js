// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group(
    'page_2 - https://agencyportal.qa.gobusiness.io/mockad?client_id=39505c5d-c5fd-411a-8449-9aa5f3e044d1&response_type=code&redirect_uri=https%3A%2F%2Fagencyportal.gobusiness.io%2Fssologin&response_model=query&scope=openid&state=12345',
    function () {
      response = http.get(
        'https://agencyportal.qa.gobusiness.io/mockad?client_id=39505c5d-c5fd-411a-8449-9aa5f3e044d1&response_type=code&redirect_uri=https%3A%2F%2Fagencyportal.gobusiness.io%2Fssologin&response_model=query&scope=openid&state=12345',
        {
          headers: {
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(1.7)
    }
  )

  group('page_3 - https://agencyportal.qa.gobusiness.io/ssologin?code=ABCDEFGHI7', function () {
    response = http.get('https://agencyportal.qa.gobusiness.io/ssologin?code=ABCDEFGHI7', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post(
      'https://api.agencyportal.qa.gobusiness.io/auth/token',
      '{"error":"Unknown error."}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-platform': '"macOS"',
          'sec-ch-ua-mobile': '?0',
          'content-type': 'application/json',
          accept: '*/*',
          origin: 'https://agencyportal.qa.gobusiness.io',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://api.agencyportal.qa.gobusiness.io/api/dashboard/applications?tab=openCases&page=0&sortField=updatedAt&sortOrder=asc&limit=20',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvcjJAdGVjaC5nb3Yuc2ciLCJleHAiOjE2NzAyOTY2MTcsInJvbGUiOiJhZ2VuY3lfc3VwZXJ2aXNvciIsInVzZXIiOnsiaWQiOjI0LCJhZ2VuY3lDb2RlIjoidGVzdF91YXQiLCJhZ2VuY3lOYW1lIjoiVGVzdCBMaWNlbmNlIFVBVCJ9LCJhdXRob3JpdGllcyI6WyJwcm9jZXNzX2FwcGxpY2F0aW9uIiwicmVhc3NpZ25fYWxsIiwiYWRkX3VzZXIiLCJlZGl0X3VzZXIiLCJkZWxldGVfdXNlciJdLCJqdGkiOiI0YTEzYmNjOC1lZmIyLTQ2NTUtODJiMy0zNzJlODAwMzE1OTgifQ.ooTYPtyIk4CwNdGPZCCjHVR3uwHKep1LvimOKy-8GUEzylfi252wCHH-lI3pGegGij_pap7EAu7PL9I1Fm57lg',
          'sec-ch-ua-platform': '"macOS"',
          accept: '*/*',
          origin: 'https://agencyportal.qa.gobusiness.io',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(1.9)

    response = http.get('https://api.agencyportal.qa.gobusiness.io/api/application/FC223007560', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJBZ2VuY3kgUG9ydGFsIiwic3ViIjoiU3VwZXJ2aXNvcjJAdGVjaC5nb3Yuc2ciLCJleHAiOjE2NzAyOTY2MTcsInJvbGUiOiJhZ2VuY3lfc3VwZXJ2aXNvciIsInVzZXIiOnsiaWQiOjI0LCJhZ2VuY3lDb2RlIjoidGVzdF91YXQiLCJhZ2VuY3lOYW1lIjoiVGVzdCBMaWNlbmNlIFVBVCJ9LCJhdXRob3JpdGllcyI6WyJwcm9jZXNzX2FwcGxpY2F0aW9uIiwicmVhc3NpZ25fYWxsIiwiYWRkX3VzZXIiLCJlZGl0X3VzZXIiLCJkZWxldGVfdXNlciJdLCJqdGkiOiI0YTEzYmNjOC1lZmIyLTQ2NTUtODJiMy0zNzJlODAwMzE1OTgifQ.ooTYPtyIk4CwNdGPZCCjHVR3uwHKep1LvimOKy-8GUEzylfi252wCHH-lI3pGegGij_pap7EAu7PL9I1Fm57lg',
        'sec-ch-ua-platform': '"macOS"',
        accept: '*/*',
        origin: 'https://agencyportal.qa.gobusiness.io',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })
  })
}