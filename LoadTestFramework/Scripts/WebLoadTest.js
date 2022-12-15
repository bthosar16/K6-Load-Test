import { check } from 'k6';
import { chromium } from 'k6/x/browser';

export default function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  page
    .goto('https://agencyportal.qa.gobusiness.io/login', { waitUntil: 'networkidle' })
    .then(() => {
      // Click on Log In with Government Email button
      page.locator('span[text="Log In with Government Email"]').click();
      
      // Click on Agency Supervisor from the list
      return Promise.all([
        page.waitForNavigation(),
        page.locator('span[text="Agency Supervisor"]').click(),
      ]).then(() => {
        check(page, {
          'header': page.locator('h2').textContent() == 'Dashboard',
        });
      });

      // Click on Claim

    }).finally(() => {
      page.close();
      browser.close();
    });
}