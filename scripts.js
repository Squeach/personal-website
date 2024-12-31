/* 
    Idea and Programming >> Squeach
    Programming Support >> ChatGPT by OpenAI
*/

alert("This website not adapted for mobile phones and too small screens! Native resolution of the website is 1920x1080! Website in the beta!");

let idMainSection = document.getElementById("main-section");
const timer = 1000;

// Create new cursor and Detect user cursor movement
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Loading animation function
function showLoading() {
    const spinner = ['|', '/', '-', '\\'];
    let i = 0;
    idMainSection.innerHTML = 'Loading...' + spinner[i];
    const interval = setInterval(
        () => {
            i = (i+1)%spinner.length;
            idMainSection.innerText = 'Loading...' + spinner[i];
        },
        200
    );
    return interval;
}

// Open default page
fetch("pages/home.html")
.then(response => {
    if (!response.ok) {
        window.location.href = "pages/404.html";
        throw new Error("Page Not Found!");
    }
    return response.text();
})
.then(data => {
    const loadingInterval = showLoading();
    setTimeout(
        () => {
            clearInterval(loadingInterval);
            idMainSection.innerText = '';
            idMainSection.innerHTML = data;
        },
        timer
    );
    history.pushState({ page: "home" }, "Home", "home");
})
.catch(error => {
    console.error("Error: ", Error);
})

// Open pages by buttons
document.getElementById("home").onclick = function() {
    idMainSection.innerHTML = "";

    fetch("pages/home.html")
        .then(response => {
            if (!response.ok) {
                window.location.href = "pages/404.html";
                throw new Error("Page Not Found!");
            }
            return response.text();
        })
        .then(data => {
            const loadingInterval = showLoading();
            setTimeout(
                () => {
                clearInterval(loadingInterval);
                idMainSection.innerText = '';
                idMainSection.innerHTML = data;
            },
            timer
        );
            history.pushState({ page: "home" }, "Home", "home");
        })
        .catch(error => {
            console.error("Error: ", Error);
        })
};
document.getElementById("blog").onclick = function() {
    idMainSection.innerHTML = "";

    fetch("pages/blog.html")
        .then(response => {
            if (!response.ok) {
                window.location.href = "pages/404.html";
                throw new Error("Page Not Found!");
            }
            return response.text();
        })
        .then(data => {
            const loadingInterval = showLoading();
            setTimeout(
                () => {
                clearInterval(loadingInterval);
                idMainSection.innerText = '';
                idMainSection.innerHTML = data;
            },
            timer
        );
            history.pushState({ page: "blog" }, "Blog", "blog");
        })
        .catch(error => {
            console.error("Error: ", Error);
        })
};
document.getElementById("small").onclick = function() {
    idMainSection.innerHTML = "";

    fetch("pages/small.html")
        .then(response => {
            if (!response.ok) {
                window.location.href = "pages/404.html";
                throw new Error("Page Not Found!");
            }
            return response.text();
        })
        .then(data => {
            const loadingInterval = showLoading();
            setTimeout(
                () => {
                clearInterval(loadingInterval);
                idMainSection.innerText = '';
                idMainSection.innerHTML = data;
            },
            timer
        );
            history.pushState({ page: "small" }, "Small Projects", "small");
        })
        .catch(error => {
            console.error("Error: ", Error);
        })
};
document.getElementById("about").onclick = function() {
    idMainSection.innerHTML = "";

    fetch("pages/about.html")
        .then(response => {
            if (!response.ok) {
                window.location.href = "page/404.html";
                throw new Error("Page Not Found!");
            }
            return response.text();
        })
        .then(data => {
            const loadingInterval = showLoading();
            setTimeout(
                () => {
                clearInterval(loadingInterval);
                idMainSection.innerText = '';
                idMainSection.innerHTML = data;
            },
            timer
        );
            history.pushState({ page: "about" }, "About", "about");
        })
        .catch(error => {
            console.error("Error: ", Error);
        })
};
