export type CattleObject = {
    id: number, 
    peso: number, 
    idade: number, 
    loteId: number,
}

export type CattleOnlyObject =  Omit<CattleObject, "id">
  

export type Error = {
  name: string;
  message: string;
};