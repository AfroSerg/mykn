export const hasParent = (e, p) => {
    if (!e) return false;
    var el = e.target || e.srcElement || e || false;
    while (el && el !== p) {
        el = el.parentNode || false;
    }
    return (el !== false);
};