import { test, expect } from "@playwright/test";

const testObj = {
  name: `playwright test name`,
  species: "playwright test species",
  age: 123,
};
const apiURL = "http://localhost:3000/api/animals";
let testAnimalId = null;

test("load page", async ({ page }) => {
  await page.goto("/");
});

test("Create animal button exists and works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Create New Animal" }).click();
  expect(page.url()).toEqual("http://localhost:4000/create-animal");
});

test("Create animal show animal list works", async ({ page }) => {
  await page.goto("/create-animal");
  const locator = await page
    .getByRole("button", { name: "Show Animal List" })
    .click();
  expect(page.url()).toEqual("http://localhost:4000/");
});

test("Create animal and update animal form submission works", async ({
  page,
}) => {
  await page.goto("/create-animal");
  await page.getByLabel("Animal Name:").fill("Form test name");
  await page.getByLabel("Animal Age:").fill(new String(1234));
  await page.getByLabel("Animal Species:").fill("Form test species");
  await page.getByTestId("createAnimalSubmitButton").click();
  await page.waitForURL("http://localhost:4000/");
  expect(page.url()).toEqual("http://localhost:4000/");
  await page.waitForResponse("http://localhost:3000/api/animals/*");
  const formName = page.getByText("Form test name");
  await formName.waitFor();
  await formName.click();
  await page.waitForLoadState();
  const updateButton = page.getByTestId("editAnimalButton");
  await updateButton.waitFor();
  updateButton.click();
  await page.getByTestId("animalSpeciesInput").fill("new species");
  await page.screenshot({ path: "formUpdatescreenshot.png" });
  const re = /.*\/show-animal\/.*/;
  await page.getByTestId("createAnimalSubmitButton").click();
  await page.waitForURL(new RegExp(re));
  await page.waitForLoadState();
  await page.screenshot({ path: "formAfterUpdateLoadscreenshot.png" });
  const newSpecies = page.getByText("new species");
  await page.screenshot({ path: "formTestscreenshot.png" });
  expect(newSpecies).toBeTruthy();
});

test("Check created animal exists and link works and delete works", async ({
  page,
  request,
}) => {
  const postRes = await request.post(`${apiURL}/`, {
    data: testObj,
  });
  expect(await postRes.ok()).toBeTruthy();
  const jsonData = await postRes.json();
  testAnimalId = jsonData.animal_id;
  console.log(testAnimalId);
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  const deletePromise = page.waitForResponse(
    "http://localhost:3000/api/animals/*"
  );
  const linkObj = page.getByRole("link", { name: testObj.name });
  await linkObj.waitFor();
  await linkObj.click();
  await page.waitForLoadState();
  expect(page.url()).toContain("show-animal");
  const deleteButton = page.getByTestId("deleteAnimalButton");
  await deleteButton.waitFor();
  await deleteButton.click();
  const deleteResponse = await deletePromise;
  await page.waitForURL("http://localhost:4000/");
  await page.waitForResponse("http://localhost:3000/api/animals/*");
  await page.screenshot({ path: "linkNamescreenshot.png" });
  const testNameObj = page.getByText("playwright test name");
  expect(testNameObj).not.toBeVisible();
});
