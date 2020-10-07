const createUser = function (username, password, picture, callback) {
  dataBase.createUser(username, password, (error, userID) => {
    if (error) {
      callback(error);
    } else {
      cloudinary.uploadPicture(picture, (error, path) => {
        if (error) {
          callback(error);
        } else {
          dataBase.updatePicture(userID, path, (error) => {
            if (error) {
              callback(error);
            } else {
              callback(null);
            }
          });
        }
      });
    }
  });
};
