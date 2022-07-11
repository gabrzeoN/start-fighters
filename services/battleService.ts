import axios, { AxiosResponse } from "axios";
import battleRespository from "../repositories/battleRepository.js"

interface UserData {
    name: string;
    stars: number;
};

async function getTotalStar(user: string) {
    const {data} = await getGitHubData(user);
    let stars: number = 0;
    for(let i = 0; i < data.length; i++){
        stars += data[i].stargazers_count;
    }
    const userData : UserData = {name: user, stars};
    return userData;
}

async function getGitHubData(user: string) {
    try{
        const userData: AxiosResponse = await axios.get(`https://api.github.com/users/${user}/repos`);
        return userData;
    }catch(error){
        throw {type: "notFound", message: "User is not register on GitHub!"};
    }
    // const userData: AxiosResponse = await axios.get(`https://api.github.com/users/${user}/repos`);
    // if(!userData){
    //     throw {type: "notFound", message: "User is not register on GitHub!"};
    // }
    // return userData;
}

async function compareStars(firstUser: UserData, secondUser: UserData){
    if(firstUser.stars > secondUser.stars){
        saveBattleResult(firstUser.name, secondUser.name, false);
        return {
            "winner": firstUser.name, 
            "loser": secondUser.name, 
            "draw": false
        }
    }else if(firstUser.stars < secondUser.stars){
        saveBattleResult(secondUser.name, firstUser.name, false);
        return {
            "winner": secondUser.name, 
            "loser": firstUser.name, 
            "draw": false
        }
    }else{
        saveBattleResult(firstUser.name, secondUser.name, true);
        return {
            "winner": null, 
            "loser": null, 
            "draw": true
        }
    }
}

async function saveBattleResult(winner: string, loser: string, draw: boolean) {
    if(!await battleRespository.fighterExists(winner)){
        await battleRespository.createFighter(winner);
    }
    if(!await battleRespository.fighterExists(loser)){
        await battleRespository.createFighter(loser);
    }

    if(draw){
        await battleRespository.saveDraw(winner);
        await battleRespository.saveDraw(loser);
    }else{
        await battleRespository.saveWinner(winner);
        await battleRespository.saveLoser(loser);
    }
}

const battleService = {
    getTotalStar,
    getGitHubData,
    compareStars
}

export default battleService;