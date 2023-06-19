import Disease from "../models/disease.model.js";

export const createDisease = async (req, res) => {
  try {
    const { name, description, symptoms, diagnosis, treatment } = req.body;
    const disease = new Disease({
      name,
      description,
      symptoms,
      diagnosis,
      treatment,
    });
    await disease.save();
    res.send("Disease Saved");
  } catch (e) {
    console.log(e);
  }
};
