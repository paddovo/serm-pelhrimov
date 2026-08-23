import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Verify essential static HTML files exist', () => {
  const essentialFiles = [
    'index.html',
    'o-nas.html',
    'kurzy.html',
    'galerie.html',
    'kalendar-akci.html',
    'kontakt.html',
    'pro-zacatecniky.html',
    'discipliny.html',
    'admin/index.html'
  ];

  essentialFiles.forEach(file => {
    assert.strictEqual(fs.existsSync(file), true, `File ${file} should exist`);
  });
});
