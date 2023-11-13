const fs = require('fs');

const packageJsonPath = './package.json';

// Read the current package.json file
const packageJson = require(packageJsonPath);

// Increment the patch version
const versionParts = packageJson.version.split('.');
versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
const newVersion = versionParts.join('.');

// Update the version in package.json
packageJson.version = newVersion;

// Write the updated package.json file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Version updated to ${newVersion}`);
