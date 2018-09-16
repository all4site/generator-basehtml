'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



module.exports = class extends Generator {
  // prompting() {
  //   return this.prompt([{
  //     type: 'input',
  //     name: 'name',
  //     message: 'Your project name',
  //     default: this.appname // Default to current folder name
  //   }]).then((answers) => {
  //     this.props = answers;
  //   });
  // }


  writing() {

    this.fs.copy(
      this.templatePath('img/*'),
      this.destinationPath('app/img')
    );

    this.fs.copy(
      this.templatePath('fonts/'),
      this.destinationPath('app/fonts')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html')
    );

    this.fs.copy(
      this.templatePath('*.pug'),
      this.destinationPath('app/')
    );
    this.fs.copy(
      this.templatePath('js/main.js'),
      this.destinationPath('app/js/main.js')
    );
    this.fs.copy(
      this.templatePath('sass/'),
      this.destinationPath('app/sass')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        //name: this.props.name
        name: this.appname
      }
    );
  }

  installingLodash() {
    this.npmInstall(['bower', 'browser-sync', 'del', 'gulp', 'gulp-autoprefixer', 'gulp-concat', 'gulp-csso', 'gulp-if', 'gulp-pug', 'gulp-newer', 'gulp-notify', 'gulp-sass', 'gulp-tinypng', 'gulp-uglify', 'gulp-uncss', 'gulp-useref', 'gulp-wait', 'gulp-wiredep'
		], {
			'save-dev': true
		});

    this.bowerInstall(['jquery', 'all4site-fontawesome', 'animate.css', 'all4site-normalize','all4site-jqueryui'], {
      'save': true

    });
  }
  // installingLodash: function() {
  //   this.bowerInstall(['lodash'], {
  //     'dev': true
  //   });
  // }

  install() {
    this.installDependencies();
  }

}
