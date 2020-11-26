export const blogContent = (title, text) => {
    const div = document.createElement("div");
    div.classList.add("blog-content");
    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    const p = document.createElement("p");
    p.innerHTML = text;

    div.appendChild(h1);
    div.appendChild(p);

    return div;
};