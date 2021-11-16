/**
 * Get all restaurant menus.
 */
 async function getRestaurants() {
    const response = await fetch('http://localhost:7071/api/restaurants');
    return response.json();
}

export { getRestaurants }