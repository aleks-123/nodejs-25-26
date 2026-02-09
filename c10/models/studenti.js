const fs = require("fs");

const DATA_SOURCE = `${__dirname}/../studenti.json`;

const fileRead = () => {
  return new Promise((success, fail) => {
    fs.readFile(DATA_SOURCE, "utf8", (err, data) => {
      if (err) {
        return fail(err.message);
      }
      return success(data);
    });
  });
};

const fileWrite = (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(DATA_SOURCE, data, (err) => {
      if (err) return fail(err.message);
      return success();
    });
  });
};

const list = async () => {
  const file = await fileRead();
  const fileData = JSON.parse(file);
  return fileData;
};

const add = async (data) => {
  console.log(data);
  const file = await this.fileRead();
  console.log(file);
  const fileData = JSON.parse(file);
  console.log(fileData);
  fileData.push(data);
  const jsonData = JSON.stringify(fileData);
  await fileWrite(jsonData);
};

const remove = async (i) => {
  console.log(i);
  i = Number(i);
  const file = await this.fileRead();
  const fileData = JSON.parse(file);
  const newFilterData = fileData.filter((_, index) => index !== i);
  await writeFile(JSON.stringify(newFilterData));
};

module.exports = {
  add,
  list,
  remove,
};
