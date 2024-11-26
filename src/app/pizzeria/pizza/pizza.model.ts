//* INERFACE
// si possono avere+ interfacce all'interno di uno stesso file, poi ovviamente importerò nei Component quelle che di servono
// serve per utilizzarla dove mi pare! è un interfaccia dello studente per definire 
export interface Pizza {
    nome: string,
    disponibilita: boolean,
    prezzo: number,
    ingredienti: string[]
}