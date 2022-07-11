import connection from "./../config/db.js";

interface Ranking {
    username: string;
    wins: number;
    losses: number;
    draws:number;
};

async function getRanking() {
    const ranking =  await connection.query<Ranking>(`
        SELECT username, wins, losses, draws
        FROM fighters
        ORDER BY wins DESC, draws DESC;
    `);
    return ranking.rows;
}

const rankingRepository = {
    getRanking
};

export default rankingRepository;