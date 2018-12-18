module.exports = (model, input) => {
  //model.requiredPaths()
  let status = {
    valid: true
  };

  model.eachPath(el => {
    const path = model.path(el);
    const pathName = path.path;
    (() => {
      if (pathName == '__v' || pathName == '_id') return;

      const pathType = path.instance.toLowerCase();
      const isRequired = path.isRequired || false;
      const inCheck = input[pathName] != undefined;
      //console.log(`in ->`, pathName, pathType, isRequired);
      //empty is valid
      if (isRequired && !inCheck) {
        //console.log(isRequired, check[path]);
        status.valid = false;
        status.message = `out of required param : ${pathName}`;
        return;
      }
      //console.log(!check[pathName], typeof check[pathName] != pathType);
      if (inCheck && typeof input[pathName] != pathType) {
        status.valid = false;
        status.message = `incorrect type of param : ${pathName}`;
        return;
      }
    })();
  });

  return status;
};
