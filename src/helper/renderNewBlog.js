import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../compnents/blogImage.js";
import { blogContent } from "../compnents/blogContent.js";
import { realtedLinks } from "../compnents/realtedLinks.js";

export const renderNewBlog = (blogId) => {
    const blogObject = findBlogById(blogId)[0];
    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = "";
    rootDiv.appendChild(blogImage(blogObject.imageUrl));
    rootDiv.appendChild(blogContent(blogObject.title, blogObject.content));
    const asideDiv = document.getElementById("related-links");
    asideDiv.innerHTML = "";
    asideDiv.appendChild(realtedLinks(blogObject.links));

    // console.log("adding event lsiter");
    // console.log(blogId);
};