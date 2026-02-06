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
// const file = await this.fileRead();
// const fileData = JSON.parse(file);
// fileData.push(data);
// const jsonData = JSON.stringify(fileData);

const postForm = async (req, res) => {
  const data = req.body;

  await model.add(data);
  res.redirect("/studenti");
};
