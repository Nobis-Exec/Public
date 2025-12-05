document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item")
      const isActive = faqItem.classList.contains("active")

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })

  const firstFaqItem = document.querySelector(".faq-item")
  if (firstFaqItem) {
    firstFaqItem.classList.add("active")
  }

  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  const previewContainer = document.getElementById("previewContainer")
  const previewImage = document.getElementById("previewImage")

  const hoverScale = 1.015
  const rotateAmplitude = 6

  if (previewContainer && previewImage) {
    function onMove(e) {
      const rect = previewContainer.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const rotX = -(y / (rect.height / 2)) * rotateAmplitude
      const rotY = (x / (rect.width / 2)) * rotateAmplitude

      previewImage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${hoverScale})`
    }

    function onEnter() {
      previewImage.style.transition = "transform 120ms ease-out"
    }

    function onLeave() {
      previewImage.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`
    }

    previewContainer.addEventListener("mousemove", onMove)
    previewContainer.addEventListener("mouseenter", onEnter)
    previewContainer.addEventListener("mouseleave", onLeave)
  }
})
