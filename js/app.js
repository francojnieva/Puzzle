const partImg = document.querySelectorAll(".part-img")
const puzzleDivs = document.querySelectorAll(".section-puzzle div")

partImg.forEach(part => {
    part.addEventListener("dragstart", (e) => {
        part.classList.add("dragging")
        e.dataTransfer.setData("id", part.id)
    })

    part.addEventListener("dragend", () => {
        part.classList.remove("dragging")
    })
})

puzzleDivs.forEach(div => {
  div.addEventListener("dragover", (e) => {
    e.preventDefault()
  })

  div.addEventListener("drop", (e) => {
    const draggedPartId = e.dataTransfer.getData("id")
    // console.log(draggedPartId)
    const draggedPart = document.getElementById(draggedPartId)
    draggedPart.style.width = "80px"
    div.appendChild(draggedPart)
  })
})