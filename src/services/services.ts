import connection from "../database/database.js";
import { notFoundError } from "../errors/error.js";
import { CattleObject, CattleOnlyObject } from "../protocols/protocols.js";
import { repository } from "../repositories/repositories.js";


export async function allInProperty(){
    try {
        const numberOfCattle = await repository.selectNumberofCattle();

        return numberOfCattle;
 
    } catch (error) {
        throw error.message
    }
}


 export async function allInPiquete(piquete: number)  {
    try {
        const OnlyCattle = await repository.selectOnlyCattle(piquete);

        return OnlyCattle;
    
    } catch (error) {
        throw error.message
    }
 }

 export async function createNovilhaService(CattleObject: CattleOnlyObject)  {
    try {
        const OnlyCattle = await repository.insertUnique(CattleObject);
        return OnlyCattle
    } catch (error) {
        throw error.message
    }
 }

  export async function updatePiqueteService(newPiquete: number,id: number)  {
    try {
        const updatePiquete = await repository.updatePiquete(newPiquete, id);
        return updatePiquete
    } catch (error) {
        throw error.message
    }
}

 


export const cattleService = {
    allInProperty,
    allInPiquete, 
    createNovilhaService,
    updatePiqueteService
}