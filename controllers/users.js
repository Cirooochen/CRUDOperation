import NotePosts from "../models/NotePosts.js";
import Users from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({ include: NotePosts });
    res.json(users);
  } catch (error) {
    console.error("Error fetching Users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = +req.params.id;
    // console.log(typeof req.params.id);
    const user = await Users.findByPk(id);
    res.json(user);
  } catch (error) {
    console.error("User Not Found!!!", error);
    res.status(404).json({ message: "Coundn't find user!" });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email },
    } = req;
    if (!firstName || !lastName || !email) {
      return res
        .status(400)
        .json({ error: "firstname,lastname and email are required" });
    }
    const user = await Users.create(req.body);
    res.json(user);
  } catch (error) {
    console.error("Error Creating Users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      // params: { id },
      body: { id, firstName, lastName, email },
    } = req;
    // if (!firstName || !lastName || !email) {
    //   return res
    //     .status(400)
    //     .json({ error: "firstname,lastname and email are required" });
    // }
    const user = await Users.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.update(req.body); //update the user
    res.json(user);
  } catch (error) {
    console.error("Error Creating Users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (!firstName || !lastName || !email) {
      return res
        .status(400)
        .json({ error: "firstname,lastname and email are required" });
    }
    const user = await Users.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.destroy(); //delete the user
    res.json(user);
  } catch (error) {
    console.error("Error Creating Users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
