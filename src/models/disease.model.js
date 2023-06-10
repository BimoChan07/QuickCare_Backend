import mongoose from "mongoose";
const diseaseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Disease = new mongoose.model("Disease", diseaseSchema);
export default Disease;
