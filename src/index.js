import { app } from "./app.js";

app.get("/", (req, res) => {
  res.status(200).send({ success: true });
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
