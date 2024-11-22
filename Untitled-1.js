// utils/utils.js
export const calculateAveragePrice = (courses) => {
    const total = courses.reduce((sum, course) => sum + course.price, 0);
    return total / courses.length;
};
