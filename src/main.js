//main file for rendering blogs
import { blogs } from "./data.js";
import { blogImage } from "./compnents/blogImage.js";
import { blogContent } from "./compnents/blogContent.js";
import { realtedLinks } from "./compnents/realtedLinks.js";

window.onload = () => {
    //runs whwn window loads
    //start dom manipulation

    const blogDiv = document.getElementById("root");
    const blogImageDiv = blogImage(blogs[0].imageUrl);
    //console.log(blogImageDiv);
    blogDiv.appendChild(blogImageDiv);
    blogDiv.appendChild(blogContent(blogs[0].title, blogs[0].content));

    const asideDiv = document.getElementById("related-links");
    asideDiv.appendChild(realtedLinks(blogs[0].links));
};

// blogDiv.appendChild(
//     blogImage("https://cdn.fs.teachablecdn.com/JOTwcbUxTSejTurJ33QR")
// );