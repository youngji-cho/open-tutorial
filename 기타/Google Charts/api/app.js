// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require('express');
const app= express();
const bodyParser= require('body-parser');

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.locals.pretty =true;

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.get('/charts', (req, res) => {
  res.status(200).render('charts');
});

// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
