
export const getNewArrivals = async () => {
    const res = await fetch("https://page-turn-lib-json-server.onrender.com/new_arrivals");
    const data = await res.json();
    return data;
};
