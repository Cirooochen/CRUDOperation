import { Router } from "express";
import { createNote, getAllNotes, getNoteById } from "../controllers/notes.js";

const notesRouter = Router();

//Option one
// notesRouter.post("/", createNote);
// notesRouter.get("/", getAllNotes);
// notesRouter.get("/:id", getNoteById);

//Option two
notesRouter.route("/").post(createNote).get(getAllNotes);
notesRouter.route("/:id").get(getNoteById);

export default notesRouter;
