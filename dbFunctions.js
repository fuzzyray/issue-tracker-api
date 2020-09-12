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
const findOrCreateProject = (name, cb) => {
  const newProject = new Project({name: name});
  Project.find({name: name}, (err, data) => {
    if (err) {
      cb(err, null);
    } else if (data) {
      cb(null, data[0]);
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

const createIssue = (issue, cb) => {
  /*
  {
    project: {type: mongoose.Types.ObjectId, ref: 'Project', required: true},
    issue_title: {type: String, required: true},
    issue_text: {type: String, required: true},
    created_on: {type: Date, required: true},
    created_by: {type: String, required: true},
    updated_on: {type: Date, required: true},
    open: {type: Boolean, default: true, required: true},
    assigned_to: {type: String},
    status_text: {type: String},
  }
  */
  issue.created_on = new Date();
  issue.updated_on = issue.created_on;
  // TODO: Add checking for required fields? We get an error from db, if missing
  const newIssue = new Issue(issue);
  newIssue.save((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

// Read

// Update

// Delete

exports.connect = connect;
exports.findOrCreateProject = findOrCreateProject;
exports.createIssue = createIssue;