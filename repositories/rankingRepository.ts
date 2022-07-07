import connection from "./../config/db.js";

async function getRanking() {
    const ranking =  await connection.query(`
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