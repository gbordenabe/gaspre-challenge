import test from "node:test";
import assert from "node:assert/strict";
import { getLeafPaths, findCategoryById } from "../src/category.js";

const structure = {
    id: 1,
    name: "Electrónica",
    subcategories: [
        {
            id: 2,
            name: "Computadoras",
            subcategories: [
                { id: 5, name: "Laptops", subcategories: [] },
                { id: 6, name: "Desktops", subcategories: [] },
            ],
        },
        { id: 3, name: "Celulares", subcategories: [] },
        { id: 4, name: "Accesorios", subcategories: [] },
    ],
};

test("Parte 1: getLeafPaths devuelve rutas de categorías hoja", () => {
    assert.deepEqual(getLeafPaths(structure), [
        "Electrónica/Computadoras/Laptops",
        "Electrónica/Computadoras/Desktops",
        "Electrónica/Celulares",
        "Electrónica/Accesorios",
    ]);
});

test("Parte 2: findCategoryById encuentra un id anidado", () => {
    assert.deepEqual(findCategoryById(structure, 6), {
        id: 6,
        name: "Desktops",
        subcategories: [],
    });
});

test("Parte 2: findCategoryById devuelve null si no encuentra el id", () => {
    assert.equal(findCategoryById(structure, 999), null);
});

test("Inputs inválidos: getLeafPaths devuelve []", () => {
    assert.deepEqual(getLeafPaths(null), []);
    assert.deepEqual(getLeafPaths(undefined), []);
    assert.deepEqual(getLeafPaths("no-es-un-objeto"), []);
});

test("Inputs inválidos: findCategoryById devuelve null", () => {
    assert.equal(findCategoryById(null, 1), null);
    assert.equal(findCategoryById(undefined, 1), null);
    assert.equal(findCategoryById("no-es-un-objeto", 1), null);
});
