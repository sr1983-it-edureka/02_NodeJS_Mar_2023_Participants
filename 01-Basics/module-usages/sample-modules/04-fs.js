
const fs = {

  pathSeparator : ';',
  newLineChar : '/n',

  readFile(filename){

    console.log(`Read file called for ${filename}`);
    return 'my sample content';
  },

  writeFile(filename, contents){

    console.log(`Writing contents ${contents} to file ${filename} `);
  }

}

module.exports = fs;