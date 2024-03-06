import { test, expect } from "@playwright/test";

const testObj = { name: "test", species: "test", age: 123 };
const apiURL = "http://localhost:3000/api/animals";
let testAnimalId = null;

test.beforeAll(async ({ request }) => {
  const res = await request.post(`${apiURL}/`, {
    data: testObj,
  });
  expect(await res.ok()).toBeTruthy();
  testAnimalId = await res.json().animal_id;
  expect(testAnimalId).not.toEqual(null);
});

test("load page", async ({ page }) => {
  await page.goto("/");
});

test("Create animal button is visible", async ({ page }) => {
  await page.goto("/");
  const locator = await page.getByRole("a", { name: "Create New Animal" });
  await locator.click();
});

test.afterAll(async ({ request }) => {
  const res = await request.delete(`${apiURL}/${testAnimalId}`);
  expect(await res.ok()).toBeTruthy();
});
