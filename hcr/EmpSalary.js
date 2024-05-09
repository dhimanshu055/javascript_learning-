// Define employee object with salary, leaves taken, and month
let employee = {
    name: "HIMANSHU",
    salary: 5000, // Example salary
    leavesTaken: 2, // Example leaves taken
    month: "January" // Example month
};

// Function to calculate net salary after leave deduction
function calculateNetSalary(employee) {
    const leaveDeductionRate = {
        "January": 100, // Example deduction rate per leave for January
        "February": 90, // Example deduction rate per leave for February
        // Add deduction rates for other months as needed
    };

    // Determine deduction rate based on month
    const deductionRate = leaveDeductionRate[employee.month] || 100; // Default deduction rate

    // Calculate deduction amount based on leaves taken
    const leaveDeduction = employee.leavesTaken * deductionRate;

    // Calculate net salary
    const netSalary = employee.salary - leaveDeduction;

    return netSalary;
}

// Calculate and display net salary
const netSalary = calculateNetSalary(employee);
console.log(`Net Salary for ${employee.name} after leave deduction: $${netSalary}`);
