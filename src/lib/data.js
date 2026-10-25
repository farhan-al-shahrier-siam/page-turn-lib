export const getNewArrivals = async () => {
    const res = await fetch("https://page-turn-lib-json-server.onrender.com/new_arrivals");
    const data = await res.json();
    return data;
};

export const getBooks = async () => {
    const res = await fetch("https://page-turn-lib-json-server.onrender.com/books");
    const data = await res.json();
    return data;
};

export const getCategories = async() =>{
    const res = await fetch("https://page-turn-lib-json-server.onrender.com/category")
    const data = await res.json();
    return data;
}
export const getBooksByCategory = async(id) =>{
    const res = await fetch(`https://page-turn-lib-json-server.onrender.com/books?category:contains=${id}`)
    const data = await res.json();
    return data;
}
export const getBooksBySearch = async(item) =>{
    const res = await fetch(`https://page-turn-lib-json-server.onrender.com/books?title:contains=${item}`)
    const data = await res.json();
    return data;
}




