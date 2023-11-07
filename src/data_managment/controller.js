import { pool } from '../config/database.js'
import { createTodoTableQuery } from './queries.js';

// CREATE TABLE IF NOT EXISTS
export const createTodoTable = async (req, res) => {
    try {
        await pool.query(createTodoTableQuery);
        res.status(200).json({ message: "Table Created Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



