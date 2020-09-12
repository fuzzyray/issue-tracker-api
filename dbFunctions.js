const mongoose = require('mongoose');

// Schema/Model
const ProjectSchema = mongoose.Schema({
  name: {type: String, required: true},
});

const Project = mongoose.model('Project', ProjectSchema);

const IssueSchema = new mongoose.Schema({
  project: {type: mongoose.Types.ObjectId, ref: 'Project', required: true},
  issue_title: {type: String, required: true},
  issue_text: {type: String, required: true},
  created_on: {type: Date, required: true},
  created_by: {type: String, required: true},
  open: {type: Boolean, required: true},
  updated_on: {type: Date},
  assigned_to: {type: String},
  status_text: {type: String},
});

const Issue = mongoose.model('Issue', IssueSchema);

// Create

// Read

// Update

// Delete

// Connect to Mongo
const connect = (dbURI) => {
  mongoose.connect(dbURI,
      {useNewUrlParser: true, useUnifiedTopology: true});
};

exports.connect = connect;