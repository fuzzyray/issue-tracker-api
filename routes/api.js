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

  app.route('/api/issues/:project')

      .get((req, res) => {
        const project = req.params.project;

      })

      .post((req, res) => {
        const project = req.params.project;

      })

      .put((req, res) => {
        const project = req.params.project;

      })

      .delete((req, res) => {
        const project = req.params.project;

      });

};
