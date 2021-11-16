/**
 * Get all restaurant menus.
 */
function getRestaurants() {
    return [1, 2, 3, 4, 5]
        .map((x) => {
            return {
                name: `Restaurace ${x}`,
                subTitle: "Polední menu",
                menuItems: [
                    "Polévka",
                    "Hlavní jídlo 1",
                    "Hlavní jídlo 2",
                    "Hlavní jídlo 3",
                ]
            };
        });
}

export { getRestaurants }