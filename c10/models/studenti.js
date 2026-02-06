const { table } = require("console");
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
  const file = await this.fileRead();
  const fileData = JSON.parse(file);
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






for 

forEach(s, index)
table
ime.    prezime.  boj.  kopce delete
s.marko s.markoski 23   a hrev="/brishi/${1}" 
marko markoski 23.  2      a hrev="/brishi/${2}"
marko markoski 23.  3      a hrev="/brishi/${1}"
marko markoski 23.   4.   a hrev="/brishi/${1}"





app.get('/brishi/:i')




filter 

ime.    prezime.  boj.  kopce delete
s.marko s.markoski 23   1
marko markoski 23.  2     2
marko markoski 23.  3     3
marko markoski 23.   4.  4


const getStudenti = async (req, res) => {

  const data = await models.list()


  

  res.render('studenti', {data})
}