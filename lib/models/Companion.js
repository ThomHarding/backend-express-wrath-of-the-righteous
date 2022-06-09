const pool = require('../utils/pool');

module.exports = class Companion { 
  id;
  name;
  alignment;
  class;
  chapter;
  pathlocked;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.alignment = row.alignment;
    this.class = row.class;
    this.chapter = row.chapter;
    this.pathlocked = row.pathlocked;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name, class, chapter FROM Companions;');
    return rows.map((row) => new Companion(row));
  }
  
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM Companions WHERE id=$1', [id]);
    return rows.map((row) => new Companion(row));
  }
};
