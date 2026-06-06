const { test, expect } = require("@playwright/test");

test("Browser context Playwright Test", async ({ browser }) => {
  //playwright code
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("input#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  //css xpath
  await userName.fill("rahulshetty");
  await page.locator("input#password").fill("Learning@830$3mK2");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test.only("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("input#username");
  const signIn = page.locator("#signInBtn");
  await userName.fill("rahulshettyacademy");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".checkmark").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".checkmark").last().isChecked());
  await expect(page.locator(".checkmark").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  //await page.pause();
});
