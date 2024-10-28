const fs = require('fs');
const path = require('path');

// Create jekyll directory if it doesn't exist
if (!fs.existsSync('jekyll')) {
  fs.mkdirSync('jekyll');
}

// Copy build folder to jekyll directory
fs.cpSync('build', 'jekyll', { recursive: true });