import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 15,
  },
  //will either have a user associated or a shelter associated
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  shelterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    default: null,
  },

  color: {
    type: String,
    enum: ["BLUE", "GREEN", "YELLOW", "RED"],
  },

  species: {
    type: String,
    required: true,
    enum: [
      "DOG",
      "CAT",
      "COW",
      "GOAT",
      "PIG",
      "FISH",
      "HORSE",
      "RABBIT",
      "BIRD",
    ],
  },
});

export default new mongoose.model("Pet", petSchema);
