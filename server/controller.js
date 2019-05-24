module.exports = {
  getProds: (req, res) => {
    const db = req.app.get("db");
    db.get_prods().then(product => {
      res.status(200).send(product);
    });
  },

  postProd: (req, res) => {
    const { name, price, img } = req.body;
    const db = req.app.get("db");
    db.post_prods([name, price, img])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => console.log(error));
  },

  updateProdName: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { name } = req.query;
    db.update
      .prods_name(id, name)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => console.log(error));
  },

  updateProdPrice: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { price } = req.query;
    db.update
      .prods_price(id, price)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => console.log(error));
  },

  updateProdImage: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { img } = req.query;
    db.update
      .prods_image(id, img)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => console.log(error));
  },

  deleteProd: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_prods(id)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => console.log(error));
  }
};
