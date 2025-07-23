import NotePosts from "../models/NotePosts.js";
import Users from "../models/Users.js";

export const getAllNotes = async (req, res) => {
  try {
    // const notes = await NotePosts.findAll({include:Users}); //this include: Users and all of its' attributes: firstname, lastname and email
    const notes = await NotePosts.findAll({
      include: { model: Users, attributes: ["firstName", "email"] },
    }); //this include: Users' firstName and email
    res.json(notes);
  } catch (error) {
    console.error("Error fetching Notes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const id = +req.params.id;
    // console.log(typeof req.params.id);
    const note = await NotePosts.findByPk(id);
    res.json(note);
  } catch (error) {
    console.error("Note Not Found!!!", error);
    res.status(404).json({ message: "Coundn't find note!" });
  }
};

export const createNote = async (req, res) => {
  try {
    const {
      body: { title, description },
    } = req;
    if (!title || !description) {
      return res.status(400).json({ error: "title and content are required" });
    }
    const note = await NotePosts.create(req.body);
    res.json(note);
  } catch (error) {
    console.error("Error Creating Note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
