export const formatDate = (date: Date) => {
    if (!date) return;

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

export const formatCardNumber = (cardNumber: string): string => {
    // Remove any spaces to avoid issues with re-formatting
    const cleaned = cardNumber.replace(/\s+/g, '');

    // Split into chunks of 4 and join with a space
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1    ');
};

export const formatAmount = (value: string): string => {
    const cleanedValue = value.replace(/\D/g, '');

    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
