const app = document.querySelector("#app");
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {
    '/1': div1,
    '/2': div2,
    '/3': div3,
    '/4': div4
}

function router(container) {
    let number = window.location.pathname
    console.log(number);
    if (number === '/') {
        number = '/1'
    }

    //获取界面
    let div = routeTable[number.toString()]
    if (!div) {
        div = document.querySelector("#div404");
    }

    //展示页面
    container.innerHTML = ''
    container.appendChild(div);
}

const Alla = document.querySelectorAll("a.link")
for (let a of Alla) {
    a.addEventListener("click", e => {
        e.preventDefault()
        const href = a.getAttribute("href")
        window.history.pushState(null, `page ${href}`, href)
        onStatechange(href)
    })
}

router(app);

function onStatechange() {
    console.log("hash 变了");
    router(app);
}