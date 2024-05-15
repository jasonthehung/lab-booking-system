document.addEventListener("DOMContentLoaded", () => {
  const labsGrid = document.querySelector(".js-labs-grid")

  labsGrid.innerHTML = labs
    .map(
      (lab) => `
                <div class="lab-container">
                  <div class="lab-header">
                    <h2>${lab.name}</h2>
                    <p id="lab-${lab.id}-value" class="js-lab-value">Available: (${lab.amt.value} / ${lab.amt.capacity})</p>
                  </div>
                  <p class="lab-description" id="lab-${lab.id}-description"></p>
                  <hr />
                  <div class="lab-actions">
                    <a href="${lab.target}" target="_blank">
                      <button class="enter-btn js-enter-btn" data-lab-id="${lab.id}">Enter</button>
                    </a>
                    <button class="leave-btn js-leave-btn" data-lab-id="${lab.id}">Leave</button>
                  </div>
                </div>
              `
    )
    .join("")

  labsGrid.querySelectorAll(".js-enter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const labId = btn.dataset.labId
      const selectedLab = labs.find((lab) => lab.id === labId)

      selectedLab.amt.value++

      document.querySelector(
        `#lab-${selectedLab.id}-value`
      ).textContent = `Available: (${selectedLab.amt.value} / ${selectedLab.amt.capacity})`

      const desc = document.querySelector(`#lab-${selectedLab.id}-description`)
      desc.textContent = "You are in the lab"
      desc.className = "lab-description lab-description-show"
    })
  })

  labsGrid.querySelectorAll(".js-leave-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const labId = btn.dataset.labId
      const selectedLab = labs.find((lab) => lab.id === labId)

      if (selectedLab.amt.value < 1) return
      selectedLab.amt.value--

      document.querySelector(
        `#lab-${selectedLab.id}-value`
      ).textContent = `Available: (${selectedLab.amt.value} / ${selectedLab.amt.capacity})`

      const desc = document.querySelector(`#lab-${selectedLab.id}-description`)
      desc.textContent = ""
      desc.className = "lab-description"
    })
  })
})
