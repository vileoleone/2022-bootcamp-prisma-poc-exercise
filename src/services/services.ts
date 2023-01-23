import connection from "../database/database.js";
import { notFoundError } from "../errors/error.js";
import { CattleObject, CattleOnlyObject } from "../protocols/protocols.js";
import { repository } from "../repositories/repositories.js";


export async function allInProperty(): Promise<CattleObject> {
    try {
        const allCattle = await repository.selectAllCattle();

        if (allCattle.rows === undefined) {
            throw notFoundError
        }

        return allCattle.rows ;
    
    } catch (error) {
        throw error.message
    }
}


export async function allInPiquete(piquete: number): Promise<CattleOnlyObject> {
    try {
        const OnlyCattle = await repository.selectOnlyCattle(piquete);

        if (OnlyCattle.rows === undefined) {
            throw notFoundError
        }

        return OnlyCattle.rows ;
    
    } catch (error) {
        throw error.message
    }
}




export const cattleService = {
    allInProperty, allInPiquete
}