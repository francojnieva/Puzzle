const partImg = document.querySelectorAll(".part-img")
const sectionPuzzle = document.querySelectorAll(".section-puzzle")

partImg.forEach(part => {
    part.addEventListener("dragstart", (e) => {
        part.classList.add("dragging")
        e.dataTransfer.setData("class", part.id)
    })

    part.addEventListener("dragend", () => {
        part.classList.remove("dragging")
    })
})