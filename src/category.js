export function getLeafPaths(root) {
    if (!root || typeof root !== "object") return [];

    const result = [];

    /**
     * dfs = Depth First Search
     * @param {object} node - nodo actual que estamos visitando
     * @param {string} currentPath - ruta acumulada hasta el padre
     */
    function dfs(node, currentPath) {
        const name = String(node?.name ?? "");
        const nextPath = currentPath ? `${currentPath}/${name}` : name;

        const subs = Array.isArray(node?.subcategories) ? node.subcategories : [];

        if (subs.length === 0) {
            result.push(nextPath);
            return;
        }

        for (const child of subs) {
            dfs(child, nextPath);
        }
    }

    dfs(root, "");
    return result;
}

export function findCategoryById(root, targetId) {
    if (!root || typeof root !== "object") return null;

    function dfs(node) {
        if (!node) return null;

        if (node.id === targetId) return node;

        const subs = Array.isArray(node.subcategories) ? node.subcategories : [];

        for (const child of subs) {
            const found = dfs(child);
            if (found) return found;
        }

        return null;
    }

    return dfs(root);
}
