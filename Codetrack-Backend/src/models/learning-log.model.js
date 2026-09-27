import mongoose from "mongoose";

const learningLogSchema = new mongoose.Schema(
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
      maxLength: 160,
    },
    tag: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxLength: 40,
    },
    durationMinutes: {
      type: Number,
      required: true,
      min: 1,
      max: 1440, //24hrs
    },
    loggedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true },
);

// queryOptimization
learningLogSchema.index({ user: 1, loggedAt: -1 });

export const LearningLog = mongoose.model("LearningLog", learningLogSchema);
