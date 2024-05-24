// document.querySelector(".js-debug-btn").addEventListener("click", () => {
//   console.log(labs)
// })

fetch("http://localhost:3000/api/labs")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json() // This parses the JSON response
  })
  .then((data) => {
    console.log(data) // Handle the JSON data
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error)
  })
