function woodQuality(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 30;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity* perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    
    return totalWood;
}

const wood = woodQuality(6,1,1);
console.log( " Wood need",wood);
