import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    sur_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      default: null,
    },
    secondary_name: {
      type: String,
      trim: true,
      default: null,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Custom"],
    },
    birth_date: {
      type: String,
    },
    birth_month: {
      type: String,
    },
    birth_year: {
      type: String,
    },
    profile_photo: {
      type: String,
      default: null,
    },
    cover_photo: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: "Digital creator",
    },
    profession: {
      type: Array,
      default: [],
    },
    education: {
      college: {
        type: Array,
        default: [],
      },
      high_school: {
        type: Object,
        default: {},
      },
    },
    living: {
      type: String,
      default: null,
    },
    home_town: {
      type: String,
      default: null,
    },
    relationship: {
      type: String,
      enum: ["Single", "Married", "In a Relationship", "Divorce"],
    },
    joined: {
      type: Date,
    },
    social_media: {
      type: Array,
      default: [],
    },
    friends: {
      type: Array,
      default: [],
    },
    follower: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    friends_request: {
      type: Array,
      default: [],
    },
    send_request: {
      type: Array,
      default: [],
    },
    block_list: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    featured_collection: {
      type: Array,
      default: null,
    },
    language: {
      type: Array,
      default: [],
    },
    access_token: {
      type: String,
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userModel);
