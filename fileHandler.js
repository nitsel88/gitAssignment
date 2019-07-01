var fs = require('fs');

module.exports = class fileHandler {
  
    constructor (srcFile, TargetFile) {
       this.srcFile = srcFile;
       this.TargetFile = TargetFile;
       this.data="";
    }

     copy() {        
       fs.readFile(this.srcFile, (err, data) => {
        if (err) throw err;
      
        fs.writeFile (this.TargetFile, data,  () => {
          if (err) throw err;
          console.log('File copied from ' + this.srcFile + ' to ' + this.TargetFile);
        })
      })
    }

    readFiles (filePath) {
      fs.readFileSync(filePath, (err, data) => {
        if (err) throw err;
        this.data =  data.toString();
      })
    }

    getData () {
      return this.data;
    }
}