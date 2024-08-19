const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const databricksHost = process.env.DATABRICKS_HOST;
const databricksToken = process.env.DATABRICKS_TOKEN;

router.get('/query', async (req, res) => {
  try {
    const response = await axios.post(
      `${databricksHost}/api/2.0/sql/statements`,
      {
        statement: 'SELECT * FROM your_table LIMIT 10',
        warehouse_id: 'your-warehouse-id'
      },
      {
        headers: {
          Authorization: `Bearer ${databricksToken}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao consultar o Databricks');
  }
});

module.exports = router;
