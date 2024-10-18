export const formatDate = (date: Date) => {
    if(!date) return;

    let day = date.getDate().toString().padStart(2, '0'); // Add leading 0
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading 0, getMonth() is 0-indexed
    let year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
};


export const convertToStars = (value: number | string): string => {
    const valueString = value.toString();
    const stars = '*'.repeat(valueString.length);
    
    return stars;
};