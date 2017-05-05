'use strict';

var path = require('path');

var DependencyVersionChecker = require('./dependency-version-checker');

class BowerDependencyVersionChecker extends DependencyVersionChecker {
  constructor(parent, name) {
    super(parent, name);

    var addon = this._parent._addon;
    var project = addon.project;
    var bowerDependencyPath = path.join(project.root, project.bowerDirectory, this.name);

    this._jsonPath = path.join(bowerDependencyPath, '.bower.json');
    this._fallbackJsonPath = path.join(bowerDependencyPath, 'bower.json');
    this._type = 'bower';
  }
}

module.exports = BowerDependencyVersionChecker;
