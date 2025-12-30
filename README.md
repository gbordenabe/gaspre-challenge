# Prueba Técnica – Backend Developer (JavaScript)

## Descripción

Este proyecto implementa la lógica para analizar y recorrer una estructura jerárquica de categorías con **N niveles de profundidad**, utilizando JavaScript vanilla y Node.js.

---

## Requisitos

- **Node.js** versión 18 o superior (probado en Node 20)

---

## Instalación

El proyecto **no tiene dependencias externas**.

Opcionalmente se puede ejecutar para inicializar el entorno:

```bash
npm install
```

---

## Uso

### Ejecución del demo

Para ejecutar un ejemplo con la estructura provista en el enunciado:

```bash
npm run start
```

### Ejecución de tests

Los tests utilizan el **runner nativo de Node.js**:

```bash
npm test
```

---

## Solución Implementada

### Parte 1 – Obtener rutas completas

**Función:** `getLeafPaths(structure)`

- Recorre el árbol de categorías y devuelve un array con las rutas completas **únicamente de las categorías hoja** (aquellas que no tienen subcategorías).
- El formato de cada ruta es: `CategoríaPadre/Subcategoría/SubcategoríaFinal`

> **Nota:** Esta decisión se tomó en base al ejemplo provisto en el enunciado.

### Parte 2 – Búsqueda por ID

**Función:** `findCategoryById(structure, id)`

- Recorre la estructura en profundidad y devuelve el objeto completo de la categoría cuyo `id` coincida con el solicitado, sin importar el nivel de anidamiento.
- Si el `id` no existe, la función devuelve `null`.

---

## Detalles Técnicos

- El recorrido del árbol se realiza mediante **DFS (Depth-First Search)** utilizando recursión.
- La solución **no modifica** la estructura original de datos.

### Complejidad

| Tipo | Complejidad | Descripción |
|------|-------------|-------------|
| **Temporal** | `O(n)` | donde `n` es la cantidad total de nodos |
| **Espacial** | `O(h)` | donde `h` es la altura del árbol (stack de recursión) |

---

## Testing

Se incluyen tests automáticos para validar:

- Casos principales según el enunciado
- Escenarios de entrada inválida (`null`, `undefined`, tipos incorrectos)
- Búsqueda de IDs inexistentes