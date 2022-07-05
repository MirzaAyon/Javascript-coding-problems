/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/
//calculate how many woods I need

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
//ekhane per furniture er wood er poriman fixed but furniture er quantity fixed na 
//tai furniture er poriman ta function e newa hoise 

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);