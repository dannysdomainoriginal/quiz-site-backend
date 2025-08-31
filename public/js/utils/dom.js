const dom = (query) => {
    const target = document.querySelectorAll(query);
    if (target.length == 1)
        return target[0];
    return target;
};
export default dom;
