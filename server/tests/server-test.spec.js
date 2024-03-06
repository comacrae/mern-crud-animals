import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/api/animals";
let testAnimalId = null;
const testObj = { name: "test", species: "test", age: 123 };

test.beforeAll(async ({ request }) => {
  const response = request.post(`${url}/`, {
    data: testObj,
  });
  expect((await response).ok()).toBeTruthy();
  testAnimalId = await response.then(async (res) => {
    const data = await res.json();
    return data.animal_id;
  });
  expect(testAnimalId).not.toEqual(null);
});

test.afterAll(async ({ request }) => {
  const response = request.delete(`${url}/${testAnimalId}`);
  expect((await response).ok()).toBeTruthy();
});

test("test obj should exist", async ({ request }) => {
  const res = await request.get(`${url}/`);
  expect(res.ok()).toBeTruthy();
  const items = await res.json();
  const idMatchObj = items.filter((item) => {
    return item._id === testAnimalId;
  })[0];
  expect(idMatchObj).toEqual(expect.objectContaining(testObj));
});

test("obj update", async ({ request }) => {
  const res = request.put(`${url}/${testAnimalId}`, {
    data: { ...testObj, name: "newName" },
  });
  expect((await res).ok()).toBeTruthy();
});

test("get specific object by id", async ({ request }) => {
  const res = await request.get(`${url}/${testAnimalId}`);
  expect(await res.ok()).toBeTruthy();
  const data = await res.json();
  expect(data._id).toEqual(testAnimalId);
});
