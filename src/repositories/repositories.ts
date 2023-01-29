
//import connection from "../database/database.js";
import {CattleOnlyObject} from "../protocols/protocols.js"

import prisma from "../database/database.js"

function selectNumberofCattle() {

    return prisma.novilha.aggregate({
        _count: {
            id: true 
        }
    })

}

function selectOnlyCattle(piquete: number) {
    return prisma.lote_gado.findMany({
        where: {
            piqueteId:piquete
        },
        select: {
            novilha: true
        },
    })

}

export async function insertUnique(CattleOnlyObject:CattleOnlyObject) {
    return prisma.novilha.create({
     data: CattleOnlyObject
 })   
}

export async function updatePiquete(newPiquete: number, id: number) {
    return prisma.lote_gado.update({
        where: {
            id: id
        },
        data: {
         piqueteId: newPiquete
     } 
 })   
}

export const repository = {
    selectNumberofCattle,
    selectOnlyCattle, 
    insertUnique, 
    updatePiquete
}
 
