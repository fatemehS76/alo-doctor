import { locations, doctors, blogs , comments} from "./info.js"

let selectElem = document.getElementById("city-selection")
let selectedLoc = document.querySelector(".selected-loc")
let locItems = document.querySelectorAll(".loc-item")
let doctorDivElem = document.querySelector(".doctors-container")
let blogDivElem = document.querySelector(".blogs-container")
let commentDivElem = document.querySelector(".comments-container")
let headerElem = document.querySelector("header")

selectElem.addEventListener("change", () => {
    locations.forEach(loc => {
        if (loc.city == selectElem.value) {
            selectedLoc.style.display = "block"
            locItems[0].innerHTML = loc.بیمارستان 
            locItems[1].innerHTML = loc.ازمایشگاه 
            locItems[2].innerHTML = loc.مراکزتصویربرداری
        } 
        else if (selectElem.value == "") selectedLoc.style.display = "none"
    })
})

let fragmentDoc = document.createDocumentFragment()
doctors.map(doc => {
    let docItem = document.createElement("div")
    docItem.setAttribute("class", "doctor-card card col-md-3 m-2 col-sm-5 p-2 text-center ")
    docItem.insertAdjacentHTML("afterbegin", `
        <img alt="doc pic" src class="doctor-img mt-2 img-thumbnail">
        <p class="title m-3 h5 text-nowrap">${doc.name}</p>
        <span class="text-secondary fs-3">${doc.specialties}</span>
        <span class="text-secondary small mt-1"><i class="fa fa-star" style="color: gold"></i> ${doc.rate}</span>
        <span class="text-secondary small mt-1"><i class="fa fa-location text-primary"></i> ${doc.location}</span>
        <button class="btn p-2 mt-2 w-100 text-light btn-outline-primary">نوبت دهی</button>
    `)
    fragmentDoc.append(docItem)
})
doctorDivElem.append(fragmentDoc)

let fragmentBlog = document.createDocumentFragment()
let date = new Date()
const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
}

blogs.map(blog => {
    let blogItem = document.createElement("div")
    blogItem.setAttribute("class", "blog-card card p-2 m-2 col-md-3 col-sm-5 text-center ")
    blogItem.insertAdjacentHTML("afterbegin", `
        <h6 class="title blog-title my-3 text-nowrap">${blog.title}</h6>
        <p class="lurem-info small text-secondary">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
        <p class="title"><i class="fa-regular fa-calendar-days m-1"></i> ${date.toLocaleString("fa-IR", options)}</p>
        <button class="btn p-2 mt-2 w-100 text-light btn-outline-primary">خواندن مقاله</button>
    `)
    fragmentBlog.append(blogItem)
})
blogDivElem.append(fragmentBlog)



let fragmentComment = document.createDocumentFragment()

comments.map(comment => {
    let commentItem = document.createElement("div")
    commentItem.setAttribute("class", "comment-card card p-3 text-right col-md-3 m-2")
    commentItem.insertAdjacentHTML("afterbegin", `
    
        <p class="title"><i class="fa fa-user ml-2 text-primary"></i>${comment.name}</p>
        <p class="title"><i class="fa-regular fa-calendar-days m-1"></i> ${date.toLocaleString("fa-IR", options)}</p>
        <p class="lurem-info small text-secondary">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
    `)
    fragmentComment.append(commentItem)
})
commentDivElem.append(fragmentComment)


document.querySelector(".up-btn").addEventListener("click", () => {
    // scrollTo(0,0)
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
        
    })
})

document.getElementById("side-menu").addEventListener("click", () => {
    sideMenu.classList.toggle("moving")
    document.body.classList.toggle("position-fixed")

})
let sideMenu = document.querySelector(".side-menu")
sideMenu.insertAdjacentHTML("afterbegin", `
            <ul class="side-ul px-2 m-0 text-right text-light">
                <li class="title py-4 text-light h2">الودکتر</li>
                <li class="py-3 px-2 h4 side-item">نوبت دهی</li>
                <li class="py-3 px-2 h4 side-item">مراکز درمانی</li>
                <li class="py-3 px-2 h4 side-item">وبلاگ سلامت</li>
                <li class="py-3 px-2 h4 side-item">ورود<i class="fa-solid fa-right-to-bracket mr-2"></i></li>
            </ul>
`)