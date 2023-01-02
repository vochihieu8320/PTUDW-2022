const validateFile = (file) => {
  let file_size = file.size/1024/1024;
  if(file_size > 8){
    return false
  }

  let file_type = file.mimetype.split('/');

  if(file_type[0] != "image"){
    return false
  }

  return true
}

module.exports = { validateFile }