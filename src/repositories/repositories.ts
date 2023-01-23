
import connection from "../database/database.js";

function selectAllCattle() {
    return connection.query(`SELECT id, peso, idade, "loteId" AS lote FROM novilha;`)
}

function selectOnlyCattle(piquete: number) {
 return connection.query(`SELECT novilha.id, peso, idade, "loteId" AS lote, piquete_num.id as piquete FROM novilha JOIN lote_gado ON novilha."loteId" = lote_gado.id JOIN piquete_num ON lote_gado."piqueteId" = piquete_num.id WHERE piquete_num.id = $1`, [piquete])
}

export const repository = {
    selectAllCattle, 
    selectOnlyCattle
}
 
