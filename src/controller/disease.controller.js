import Disease from "../models/disease.model.js";
export const createDisease = async (req, res) => {
  try {
    const disease = new Disease({
      name: req.body.name,
    });
    await disease.save();
    res.send("Disease Saved");
  } catch (e) {
    console.log(e);
  }
};
