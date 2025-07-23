import express from "express";

import notesRouter from "./routes/notesRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 8080;

app.use(express.json()); //middleware, to convert any javascript into json format.

//Users Routers
app.use("/users", userRouter);
//Notes Routers
app.use("/notes", notesRouter);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
