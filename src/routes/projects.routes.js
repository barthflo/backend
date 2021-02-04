const db = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
  const sql = "SELECT * FROM projects";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/with-tags-and-pics', (req, res) => {
    const sql = "SELECT p.id, p.title, p.description, p.link_url, group_concat(DISTINCT c.name) as tags, group_concat(DISTINCT pi.name) as pictures_name, group_concat(DISTINCT pi.alt) as pictures_alt FROM projects p LEFT JOIN projects_categories pc ON p.id=pc.project_id LEFT JOIN categories c ON pc.category_id = c.id LEFT JOIN pictures pi ON pi.project_id = p.id GROUP BY p.id";
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        results.map(result => {
            if (result.tags || result.pictures_name || result.pictures_alt){
                result.tags = result.tags.split(',');
                result.pictures_name = result.pictures_name.split(',');
                result.pictures_alt = result.pictures_alt.split(',');
            }
            return result;
        })
        res.status(200).json(results);
      }
    });
  });

router.get('/:id', (req, res) => {
    const sql = "SELECT * FROM projects WHERE id=?";
    db.query(sql, [req.params.id], (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).json(results);
      }
    });
  });

router.post('/', (req, res) => {
  const sql = "INSERT INTO projects SET ?";
  db.query(sql, req.body, (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.status(201).json({id: results.insertId, ...req.body});
    }
  });
});

router.put('/:id', (req, res) => {
  let sql = "UPDATE projects SET ? WHERE id=?";
  db.query(sql, [req.body, req.params.id], (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      sql = "SELECT * FROM projects WHERE id=?";
      db.query(sql, req.params.id, (err, result) => {
        if (result.length === 0) {
          res.status(404).send({errorMessage: `Admin with id ${req.params.id} not found`});
        } else {
          res.status(200).json(result[0]);
        }
      });
    }
  });
});

router.delete('/:id', (req, res) => {
  const sql = "DELETE FROM projects WHERE id=?";
  db.query(sql, req.params.id, (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;