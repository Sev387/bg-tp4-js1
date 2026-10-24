const etudiants =[
    [1000,"John","Doe",14,15],
    [2000,"Bob","Carlton",7,2],
    [3000,"Rayane","Smith",13,12]

];

function B(MOY){
    return MOY>=10;
}
function A(){
    etudiants.forEach(etudiant=> {
        let id=etudiant[0];
        let MOY=(etudiant[3]+etudiant[4])/2;
        let RESULT= B(MOY)? "ADMIS" : "Ajourné";
        console.log(`${id}: ${RESULT}`)
    })
}