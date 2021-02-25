const inquirer = require('inquirer');

const fs = require('fs');

inquirer
.prompt([
    {
        type: 'name',
        message: 'What is your name?',
        name: 'username',
      },
      {
        type: 'languages',
        message: 'What languages do you know?',
        name: 'userlanguages',
      },
      {
        type: 'comm',
        message: 'What is your prefered method of communication?',
        name: 'usercomm',
      },
])
.then
