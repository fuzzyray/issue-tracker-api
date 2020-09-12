/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;

module.exports = app => {

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

  app.route('/api/issues/:project')

      .get((req, res) => {
        const project = req.params.project;
        console.log(project);
        res.json([defaultIssue]);
      })

      .post((req, res) => {
        const project = req.params.project;
        console.log(project);
        console.log(req.body);
        res.json({error: 'Not implemented'});
      })

      .put((req, res) => {
        const project = req.params.project;
        console.log(project);
        console.log(req.body);
        res.json({error: 'Not implemented'});
      })

      .delete((req, res) => {
        const project = req.params.project;
        console.log(project);
        console.log(req.body);
        res.json({error: 'Not implemented'});
      });

};
