import connection from "./../config/db.js";

interface Fighter {
    id: number;
    username: string;
    wins: number;
    losses: number;
    draws:number;
};

async function fighterExists(userName: string) {
    const fighterExists =  await connection.query<Fighter>(`
        SELECT *
        FROM fighters
        WHERE username = $1;
    `, [userName]);
    return fighterExists.rows[0];
}

async function createFighter(userName: string) {
    return  await connection.query(`
        INSERT INTO fighters(username, wins, losses, draws)
        VALUES($1, 0, 0, 0);
    `, [userName]);
}

async function saveWinner(userName: string) {
    return await connection.query(`
        UPDATE fighters
        SET wins = wins + 1
        WHERE username = $1;
    `, [userName]);
}

async function saveLoser(userName: string) {
    return await connection.query(`
        UPDATE fighters
        SET losses = losses + 1
        WHERE username = $1;
    `, [userName]);
}

async function saveDraw(userName: string) {
    return await connection.query(`
        UPDATE fighters
        SET draws = draws + 1
        WHERE username = $1;
    `, [userName]);
}

const battleRepository = {
    fighterExists,
    createFighter,
    saveWinner,
    saveLoser,
    saveDraw
};

export default battleRepository;