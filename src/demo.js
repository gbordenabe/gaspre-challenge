import { getLeafPaths, findCategoryById } from "./category.js";

const structure = {
    id: 1,
    name: "Electrónica",
    subcategories: [
        {
            id: 2,
            name: "Computadoras",
            subcategories: [
                { id: 5, name: "Laptops", subcategories: [] },
                { id: 6, name: "Desktops", subcategories: [] }
            ]
        },
        { id: 3, name: "Celulares", subcategories: [] },
        { id: 4, name: "Accesorios", subcategories: [] }
    ]
};

console.log("Leaf paths:");
console.log(getLeafPaths(structure));

console.log("\nFind id=6:");
console.log(findCategoryById(structure, 6));
