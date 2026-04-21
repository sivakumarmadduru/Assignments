function checkLoanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): void {

  let message: string = "";

  // Rule 1: Credit Score above 750 → Automatically Approved
  if (creditScore > 750) {
    message = customerName + " is eligible for the loan (High credit score).";
  } 
  // Rule 1: Credit Score below 650 → Denied
  else if (creditScore < 650) {
    message = customerName + " is NOT eligible for the loan (Low credit score).";
  } 
  // Rule 2: Credit Score between 650 and 750
  else {
    
    // Check Income
    if (income >= 50000) {

      // Check Employment
      if (isEmployed) {

        // Check DTI Ratio
        if (debtToIncomeRatio < 40) {
          message = customerName + " is eligible for the loan.";
        } else {
          message = customerName + " is NOT eligible for the loan (High DTI ratio).";
        }

      } else {
        message = customerName + " is NOT eligible for the loan (Unemployed).";
      }

    } else {
      message = customerName + " is NOT eligible for the loan (Income less than $50,000).";
    }
  }

  console.log(message);
}


// Sample Input
const customerName = "John Doe";
const creditScore = 720;
const income = 55000.0;
const isEmployed = true;
const debtToIncomeRatio = 35.0;

// Function Call
checkLoanEligibility(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);