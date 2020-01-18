const fs = require('fs')

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/images')
    //.filter((file) => {
    //  return file.endsWith('.png')
    //})
    //.map((file) => {
    //  return file.replace('@2x.png', '').replace('@3x.png', '')
    //})
    .map((fileName) => {
      var parts = fileName.split('.');
      var filePrefix = parts[0];
      var fileExt = parts[1];
     return { filePrefix: filePrefix, fileExt: fileExt };
    })
    
return Array.from(new Set(array))
}

const generate = () => {
  let properties = imageFileNames()
    .map((file) => {
      return `${file.filePrefix}: require('./images/${file.filePrefix}.${file.fileExt}')`
    })
    .join(',\n  ')
    
const string = `const images = {
  ${properties}
}

export default images
`

fs.writeFileSync('src/res/images.js', string, 'utf8')
}

generate()