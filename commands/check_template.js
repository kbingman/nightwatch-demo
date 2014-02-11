exports.command = function(file, callback) {
  
    this.execute(
        function(imagedata) { // execute application specific code
            App.resizePicture(data);
            return true;
        }, 
        [], // arguments array to be passed to the function
        function(result) {
            if (typeof callback === "function") {
                callback.call(self, result);
            }
        }
    );
    
    return this; // allows the command to be chained.
};
