import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
import { labs } from "./data/lab.js"

app.get("/api/labs", function (req, res) {
  res.json({ labs })
})

app.get("/api/labs/:id", function (req, res) {
  const lab = labs.find((lab) => lab.id === req.params.id)
  if (lab) {
    res.json({ lab })
  } else {
    res.status(404).json({ message: "Lab not found" })
  }
})

// TODO: Update the amt of people in the lab (value)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
