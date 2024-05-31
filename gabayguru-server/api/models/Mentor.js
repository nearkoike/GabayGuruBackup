const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

const techOptions = [
    "programming",
    "web",
    "data-science",
    "cybersecurity",
    "mobile",
    "cloud",
    "database",
    "project-management",
  ];
  
  const businessOptions = [
    "planning",
    "marketing",
    "finance",
    "startup-fundamentals",
    "e-commerce",
    "business-ethics",
    "leadership",
  ];
  
  const artsOptions = [
    "graphic-design",
    "video-editing",
    "photography",
    "writing",
    "music",
    "3d-modeling",
    "ui-ux",
  ];
  

const mentorSchema = new Schema({
  rating: Number,
  techSpecialization: [{
    type: String,
    enum: [...techOptions]
  }],
  businessSpecialization: [{
    type: String,
    enum: [...businessOptions]
  }],
  artsSpecialization: [{
    type: String,
    enum: [...artsOptions]
  }],
  yearsExp: Number,
  bio: String,
  rate: Number,
  linkedInURL: String,
  githubURL: String,
  resumeURL: String, 
  portfolioURL: String
});

const Mentor = User.discriminator("Mentor", mentorSchema);

module.exports = Mentor;
