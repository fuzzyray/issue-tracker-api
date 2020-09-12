/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const findOrCreateProject = require('../dbFunctions').findOrCreateProject;
const createIssue = require('../dbFunctions').createIssue;

const defaultIssue = {
  '_id': '0',
  'issue_title': 'No Issues in Project',
  'issue_text': 'This is the default issue returned, if no issues are found.',
  'created_on': '1970-01-01T00:00:00.000Z',
  'updated_on': '1970-01-01T00:00:00.000Z',
  'created_by': 'System',
  'assigned_to': 'System',
  'open': true,
  'status_text': 'Bug',
};

const createResult = (data) => {
  return {
    _id: data._id,
    issue_title: data.issue_title,
    issue_text: data.issue_text,
    created_on: data.created_on.toISOString(),
    updated_on: data.updated_on.toISOString(),
    created_by: data.created_by,
    assigned_to: data.assigned_to,
    open: data.open,
    status_text: data.status_text,
  };
};

module.exports = app => {

  app.route('/api/issues/:project')

      .get((req, res) => {
        const project = req.params.project.toLowerCase();
        console.log(project);
        res.json([defaultIssue]);
      })

      .post((req, res) => {
        const project = req.params.project.toLowerCase();
        const issue = req.body;
        findOrCreateProject(project, (err, data) => {
          if (err) {
            console.error(err);
            res.json({error: err});
          } else {
            issue.project = data._id;
            createIssue(issue, (err, data) => {
              if (err) {
                console.error(err);
                res.json({error: err});
              } else {
                res.json(createResult(data));
              }
            });
          }
        });
      })

      .put((req, res) => {
        const project = req.params.project.toLowerCase();
        console.log(project);
        console.log(req.body);
        res.json({error: 'Not implemented'});
      })

      .delete((req, res) => {
        const project = req.params.project.toLowerCase();
        console.log(project);
        console.log(req.body);
        res.json({error: 'Not implemented'});
      });

};
