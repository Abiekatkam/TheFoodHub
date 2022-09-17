export const host = "http://localhost:5000";
// export const host = "https://largeprojectfoodhub.herokuapp.com";

// City restaurant route
export const cityRoute = `${host}/restaurant`;
export const cityRouteId = `${host}/restaurant/getRestaurantById`;
export const cityRouteName = `${host}/restaurant/getRestaurantByName?city=`;

// meals Route
export const mealsRoute = `${host}/meals`;
export const mealRouteId = `${host}/meals/getMealById`;
export const mealRouteName = `${host}/meals/getMealByName?mealType=`;

// user Route
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
