import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: String,
    email: String,
});

export default mongoose.model("User", userSchema);
