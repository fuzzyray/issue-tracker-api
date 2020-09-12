const mongoose = require('mongoose');

// Connect to Mongo
const connect = (dbURI) => {
  mongoose.connect(dbURI,
      {useNewUrlParser: true, useUnifiedTopology: true});
};

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
  updated_on: {type: Date, required: true},
  open: {type: Boolean, default: true, required: true},
  assigned_to: {type: String},
  status_text: {type: String},
});

const Issue = mongoose.model('Issue', IssueSchema);

// Create
const createOrFindProject = (name, cb) => {
  const newProject = new Project({name: name});
  findProjectByName(name, (err, data) => {
    if (err) {
      cb(err, null);
    } else if (data) {
      cb(null, data);
    } else {
      newProject.save((err, data) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    }
  });
};

// Read
const findProjectByName = (name, cb) => {
  Project.find({name: name}, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data[0]);
    }
  });
};

// Update

// Delete

exports.connect = connect;
exports.createOrFindProject = createOrFindProject;