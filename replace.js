const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'website', 'src');

const replacements = [
  { search: /Hillora Ella/gi, replace: 'Skyline Haven Ella Cabana' },
  { search: /Kithalella/g, replace: 'Heeloya' },
  { search: /No\. 54, Yahalegoda, Heeloya/g, replace: 'Weheragalathenna, Heeloya' },
  { search: /No\. 54, Yahalegoda/g, replace: 'Weheragalathenna' },
  { search: /Ella 90090, Sri Lanka/g, replace: 'Ella, 90090, Sri Lanka' },
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      replacements.forEach(r => {
        newContent = newContent.replace(r.search, r.replace);
      });
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

walkDir(directoryPath);
