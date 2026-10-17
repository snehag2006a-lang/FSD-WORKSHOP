const fs = require('node:fs/promises');

async function processMultipleLogs(filePaths) {
  try {
    console.log('Starting parallel file reads...');
    
    
    const readPromises = filePaths.map(file => fs.readFile(file, 'utf8'));
    
    
    const contents = await Promise.all(readPromises);
    
    let totalCharacters = 0;
    contents.forEach((text, index) => {
      console.log(`File ${filePaths[index]} size: ${text.length} chars`);
      totalCharacters += text.length;
    });

    console.log(`Total Characters Processed across all files: ${totalCharacters}`);
  } catch (err) {
    
    console.error('Failed to process logs:', err.message);
    process.exitCode = 1;
  }
}


processMultipleLogs(['log1.txt', 'log2.txt']);