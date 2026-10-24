function f1(){
    const tabEtudiants =["Etudiant1","Etudiant2","Etudiant3"];
    console.table(tabEtudiants);
}

function f2(){
    const etudiant ={
        nom:'john',
        prenom:'Doe',
        age:30
    };
    console.log(etudiant);
}

function f3(){
    const tabObjetsEtudiants=[
        {nom:'john',prenom:'Doe',age:21},
        {nom:'john2',prenom:'Doe2',age:21},
        {nom:'john3',prenom:'Doe3',age:21}

    ];
    tabObjetsEtudiants.forEach(e=>{
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    });
}