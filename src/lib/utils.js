// Format date from wordpress
export const formatDate = date => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
}