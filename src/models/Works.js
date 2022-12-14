import mongoose from "mongoose";

const WorksSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    days: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("Works", WorksSchema);
