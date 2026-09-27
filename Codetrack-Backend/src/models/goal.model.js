import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 120,
    },
    currentValue: {
      type: Number,
      required: true,
      min: 0,
    },
    targetValue: {
      type: Number,
      required: true,
      min: 1,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
    },
  },
  { timestamps: true },
);

export const Goal = mongoose.model("Goal", goalSchema);
