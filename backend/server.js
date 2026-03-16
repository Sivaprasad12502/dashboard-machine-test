const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = [
  { id: 1, status: "Ongoing", percentage: 78, color: "#1D8A2E" },
  { id: 2, status: "Pending", percentage: 25, color: "#F4BF00" },
  { id: 3, status: "On Hold", percentage: 32, color: "#2F8AF4" },
  { id: 4, status: "Overdue", percentage: 8, color: "#FF0000" },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
