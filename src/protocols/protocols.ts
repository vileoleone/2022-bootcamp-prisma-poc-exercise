export type CattleObject = {
    id: number, 
    peso: number, 
    idade: number, 
    lote: number
}

export type CattleOnlyObject = {
    id: number, 
    peso: number, 
    idade: number, 
    lote: number,
    piquete: number
}

export type Error = {
  name: string;
  message: string;
};