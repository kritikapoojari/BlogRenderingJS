import { renderNewBlog } from "../helper/renderNewBlog.js";
export const realtedLinks = (links) => {
    const ul = document.createElement("ul");
    links.forEach((link) => {
        let li = document.createElement("li");
        li.innerHTML = link.title;
        link.id = link.id;
        // li.addEventListener("click", renderNewBlog(link.id));
        li.addEventListener("click", () => {
            renderNewBlog(link.id);
        });
        ul.appendChild(li);
    });
    return ul;
};