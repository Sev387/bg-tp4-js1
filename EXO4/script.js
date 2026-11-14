

        const catalogue = [

    { nom: "Produit1", prix: 2500, quantite: 15 },
    { nom: "Produit2", prix: 28000, quantite: 5 },
    { nom: "Produit3", prix: 1200, quantite: 30 },
    { nom: "Produit4", prix: 8500, quantite: 8 },
    { nom: "Produit5", prix: 6000, quantite: 12 }

        ];


        console.log("Valeur du stock de chaque produit");
catalogue.forEach(produit => {
    const valeurStock = produit.prix * produit.quantite;
    console.log(`- ${produit.nom} | Prix: ${produit.prix} DA | Qté: ${produit.quantite} | Valeur stock: ${valeurStock} DA`);
});

const sommePrix = catalogue.reduce((total, produit) => total + produit.prix, 0);
const prixMoyen = sommePrix / catalogue.length;

console.log(`\nPrix moyen du catalogue : ${prixMoyen.toFixed(2)} DA`);



console.log("\nProduits dont le prix dépasse la moyenne");
const produitsAuDessusMoyenne = catalogue.filter(produit => produit.prix > prixMoyen);

produitsAuDessusMoyenne.forEach(produit => {
    console.log(`> ${produit.nom} (${produit.prix} DA)`);
});



const totalArticles = catalogue.reduce((total, produit) => total + produit.quantite, 0);

const valeurGlobaleStock = catalogue.reduce((total, produit) => total + (produit.prix * produit.quantite), 0);

console.log(`Nombre total d'articles en stock : ${totalArticles}`);

console.log(`Valeur globale du stock : ${valeurGlobaleStock} DA`);



function calculerValeurStock(produit) {
    return produit.prix * produit.quantite;}

const produit1 = { nom: "Produit1", prix: 4500, quantite: 12 };
const produit2 = { nom: "Produit2", prix: 2500, quantite: 20 };
const produit3 = { nom: "Produit3", prix: 28000, quantite: 5 };

console.log(`Valeur du stock (${produit1.nom}) : ${calculerValeurStock(produit1)} DA`);
console.log(`Valeur du stock (${produit2.nom}) : ${calculerValeurStock(produit2)} DA`);
console.log(`Valeur du stock (${produit3.nom}) : ${calculerValeurStock(produit3)} DA`);

function traiterCatalogue(catalogue, callback) {
    catalogue.forEach(callback);}

    console.log("Noms des produits");
traiterCatalogue(catalogue, (produit) => {
    console.log(produit.nom);
});


console.log("Prix des produits");
traiterCatalogue(catalogue, (produit) => {
    console.log(`${produit.nom} : ${produit.prix} DA`);
});