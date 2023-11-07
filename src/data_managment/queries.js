// SQL Queries
export const createTodoTableQuery = `
CREATE TABLE IF NOT EXISTS todo (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    university VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;



