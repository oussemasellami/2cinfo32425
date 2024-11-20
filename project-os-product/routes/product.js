const express = require("express");
const router = express.Router();
const product = require("../products.json");
router.get("/", (req, res) => {
  res.json(product);
});

router.get("/:id", (req, res) => {
  res.json(product[req.params.id]);
});

router.get("/instock/:qt", (req, res) => {
  list = [];
  for (let element in product) {
    if (product[element].stock >= req.params.qt) {
      list.push(product[element]);
    }
  }

  res.json(list);
});

router.get("/:id/:qt", (req, res) => {
  res.json({
    id: req.params.id,
    qt: req.params.qt,
    unit_price: product[req.params.id].price,
    total: product[req.params.id].price * req.params.qt,
  });
});
module.exports = router;
