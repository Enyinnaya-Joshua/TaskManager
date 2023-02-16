import mongoose from "mongoose";

interface tasks {
  task: string;
  status: string;
  description: string;
}

interface iTasks extends tasks, mongoose.Document {}

const taskSchema = new mongoose.Schema(
  {
    task: String,
    status: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model<iTasks>("tasks", taskSchema);
