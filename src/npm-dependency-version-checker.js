'use strict';

const resolve = require('resolve');
const DependencyVersionChecker = require('./dependency-version-checker');
const getProject = require('./get-project');

class NPMDependencyVersionChecker extends DependencyVersionChecker {
  constructor(parent, name) {
    super(parent, name);

    let addon = this._parent._addon;

    let jsonPath;
    try {
      jsonPath = resolve.sync(this.name + '/package.json', {
        basedir: addon.root || getProject(addon).root,
      });
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        jsonPath = null;
      } else {
        throw e;
      }
    }

    this._jsonPath = jsonPath;
    this._type = 'npm';
  }
}

module.exports = NPMDependencyVersionChecker;
