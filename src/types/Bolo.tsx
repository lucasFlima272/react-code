export interface Bolo { // definindo um tipo de dado
    nome: string;
    id: string | undefined;
    descricao: string;
    categoria: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}