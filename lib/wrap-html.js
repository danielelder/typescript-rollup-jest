#!/usr/bin/env node
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const sourceDir = path.join(process.cwd(), '/src/modules');
const outputDir = path.join(process.cwd(), '/dist/html');
const templatePath = path.join(process.cwd(), '/lib/template.html');
const indexPath = path.join(process.cwd(), '/src/index.html');
const globPattern = path.join(sourceDir, '**/*.html');

// Modules
fs.readFile(templatePath, 'utf8', function (err, template) {
  glob(globPattern, function (err, files) {
    files.forEach(function (filename) {
      fs.readFile(filename, 'utf8', function (err, data) {
        const htmlName = path.basename(filename, '.html');
        const fullPath = path.join(outputDir, htmlName + '.html');
        const prettyName = htmlName.charAt(0).toUpperCase() + htmlName.slice(1);

        const page = template
          .replace('{{ content }}', data)
          .replace('{{ title }}', prettyName);

        mkdirp(path.dirname(fullPath), function (err) {
          fs.writeFile(fullPath, page, function (err) {
            if (err) {
              throw err;
            }
          })
        });
      })
    })
  })
})

// Test harness
fs.readFile(indexPath, 'utf8', function (err, template) {
  glob(globPattern, function (err, files) {
    const indexPath = path.join('dist', 'index.html');

    let listItems = '';

    files.forEach(function (filename) {
      const htmlName = path.basename(filename, '.html');
      const relativePath = path.join('html', htmlName + '.html');
      const prettyName = htmlName.charAt(0).toUpperCase() + htmlName.slice(1);
      listItems += '<li><a href="' + relativePath + '">' + prettyName + '</a></li>';
    });

    const page = template.replace('{{ listitems }}', listItems);

    mkdirp(path.dirname(indexPath), function (err) {
      fs.writeFile(indexPath, page, function (err) {
        if (err) {
          throw err;
        }
      })
    });
  });
})
