import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Feijoada", price: 45.90 },
        { name: "Salmão Grelhado", price: 68.50 },
        { name: "Strogonoff de Frango", price: 39.90 },
        { name: "Lasanha à Bolonhesa", price: 42.90 },
        { name: "Moqueca de Peixe", price: 65.00 },
        { name: "Picanha na Brasa", price: 89.90 },
        { name: "Risoto de Camarão", price: 72.50 },
        { name: "Nhoque ao Molho Quatro Queijos", price: 48.90 },
        { name: "Filé à Parmegiana", price: 54.90 },
        { name: "Bobó de Camarão", price: 78.90 },
        { name: "Paella Valenciana", price: 85.00 },
        { name: "Costela no Bafo", price: 62.90 },
        { name: "Peixe à Meuniére", price: 69.90 },
        { name: "Espaguete à Carbonara", price: 45.90 },
        { name: "Frango ao Curry", price: 47.50 },
        { name: "Yakisoba", price: 38.90 },
        { name: "Polvo à Lagareiro", price: 98.90 },
        { name: "Pato ao Molho de Laranja", price: 82.90 },
        { name: "Rabada com Agrião", price: 58.90 },
        { name: "Bacalhau à Portuguesa", price: 94.90 }
    ]);
};
