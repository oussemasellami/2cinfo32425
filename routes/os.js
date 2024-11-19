const express = require("express");
const router = express.Router();
const os = require("os");
router.get("/", (req, res) => {
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
  });
});

router.get("/cpus", (req, res) => {
  res.json({
    cpus: os.cpus(),
  });
});

router.get("/cpus/:id", (req, res) => {
    //const{id}=req.params
    res.json({
      cpus: os.cpus()[req.params.id],
    });
  });
module.exports = router;
