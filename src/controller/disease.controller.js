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
    console.log("Error saving disease: " + e);
  }
};

// Display Disease
export const displayDisease = async (req, res) => {
  try {
    const diseaseId = req.params.id;
    const disease = await Disease.findById(diseaseId);
    if (disease) {
      res
        .status(200)
        .json({ message: "Retrieving data from database", disease });
      res.status(200).json({ message: "", disease });
    } else {
      res.status(404).json({ message: "Disease not found" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error retrieving disease information", e });
  }
};

// Update Disease
export const updateDisease = async (req, res) => {
  try {
    const { name, description, symptoms, diagnosis, treatment } = req.body;
    if (!name || !description || !symptoms || !diagnosis || !treatment) {
      return res.status(400).send("All fields required");
    }
    const disease = new Disease({
      name,
      description,
      symptoms,
      diagnosis,
      treatment,
    });
    await Disease.findByIdAndUpdate(req.params.id, {
      name,
      description,
      symptoms,
      diagnosis,
      treatment,
    });
    res.send("Disease updated");
  } catch (e) {
    res.status(500).json({ message: "Error updating disease", e });
  }
};

// Delete Disease
export const deleteDisease = async (req, res) => {
  try {
    const diseaseId = req.params.id;
    const disease = await Disease.findByIdAndDelete(diseaseId);
    if (disease) {
      res.status(200).json({ message: "Disease deleted" });
    } else {
      res.status(404).json({ message: "Disease not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error deleting disease", e });
  }
};
