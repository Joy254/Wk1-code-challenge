function achieveNetSalary(){
    // initialize paye variable     
    let paye;

    personalRelief = 2400;

    grossSalary = ("Enter your salary: ")

    contributionBenefit = ("Your contribution Benefit: ")

    NHIFDeductions = ("Enter your NHIFDeduction: ")

    NSSFDeductions = ("Enter your NSSFDeduction: ")  

    // deductions and taxable incomes

    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;


    // log taxable income and total deductions to console
    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //PAYE calculations

    switch(true){
        case (taxableIncome <= 24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome >= 24001 && taxableIncome <= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome > 32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    //achieving the net salary  after all dedutions
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    
}