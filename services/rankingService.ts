import rankingRespository from "./../repositories/rankingRepository.js"

async function showRanking(){
    const ranking = await rankingRespository.getRanking();
    return({fighters: ranking});
}

const rankingService = {
    showRanking
}

export default rankingService;