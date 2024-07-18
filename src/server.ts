import app from "./app";
import mongoose from "mongoose";
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_TypeScript").then(() => {
  console.log("Connected to the database.");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
