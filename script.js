const faqs = document.querySelectorAll(".faq")

faqs.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("show")

        let faqBody = item.querySelector(".faq-body")

        if (item.classList.contains("show")) {
            faqBody.style.height = `${faqBody.scrollHeight + 30}px`
        } else {
            faqBody.style.height = `0px`
        }

        hideOthers(index)
    })
})

function hideOthers(index1) {
    faqs.forEach((item2, index2) => {
        if (index1 != index2) {
            console.log(item2);
            item2.classList.remove("show")

            let faqBody = item2.querySelector(".faq-body")
            faqBody.style.height = "0"
        }
    })
}