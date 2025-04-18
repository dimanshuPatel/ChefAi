import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe", // ✅ Ensures recipes are stored as references
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
