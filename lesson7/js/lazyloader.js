//get all the images on page from data-src
const imagesToLoad = document.querySelectorAll('img[data-src]')

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

const imgOptions = {
    threshold: 0.5
}

if('instersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
}
//load img not supported
else {
    imagesToLoad.forEach( (img)=> {
        loadImages(img);
    });
}