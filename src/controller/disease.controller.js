import Disease from "../models/disease.model.js";
export const createDisease = async (req, res) => {
  try {
    const disease = new Disease({
      name: req.body.name,
      description: req.body.description,
      symptoms: req.body.symptoms,
      diagnosis: req.body.diagnosis,
      treatment: req.body.treatment,
    });
    await disease.save();
    res.send("Disease Saved");
  } catch (e) {
    console.log(e);
  }
};
