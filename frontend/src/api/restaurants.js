function baseUrl(){
    return window.location.hostname == 'localhost'
        ? 'http://localhost:7071'
        : 'https://obedholice.azurewebsites.net';
}

/**
 * Get all restaurant menus.
 */
 async function getRestaurants() {
    const response = await fetch(baseUrl() + '/api/restaurants');
    return response.json();
}

export { getRestaurants }