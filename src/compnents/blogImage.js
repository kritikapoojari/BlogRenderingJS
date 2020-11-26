//this file renders iamge
// <div class="blog-img">
//<img src="" alt="" />
//</div>

export const blogImage = (imageUrl) => {
    //generate markup for blog iamge
    const div = document.createElement("div");
    div.classList.add("blog-image");
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Some Alternate Description";
    div.appendChild(img);

    //return the markup taht was created
    return div;
};

//export { blogImage };