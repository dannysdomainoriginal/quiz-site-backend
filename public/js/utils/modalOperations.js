import dom from './dom.js';
export const open = function (id) {
    const modal = dom('#' + id);
    modal.style.display = 'grid';
};
export const close = function (id) {
    const modal = dom('#' + id);
    modal.style.display = 'none';
};
