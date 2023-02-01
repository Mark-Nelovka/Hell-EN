import Header from "./Components/Header";
import Hero from "./Components/Hero";
// import Problem from "./Components/Problem";
import Methods from "./Components/Methods";
// import Program from "./Components/Program";
// import Teacher from "./Components/Teacher";
// import Assurance from "./Components/Assurance";
// import Comments from "./Components/Comments";
// import Contacts from "./Components/Contacts";
// import Footer from "./Components/Footer";

// function calculateTeamFinanceReport(salaries, teams) {
//   let groupSpecializationCounter = [];
//   teams.reduce((acc, item) => {
//     const findRepeatElement = groupSpecializationCounter.find((el, indx) => {
//       if (item.specialization === el.item) {
//         groupSpecializationCounter.splice(indx, 1, { ...el, acc: acc + 1 });
//         return el;
//       }
//       return null;
//     });
//     if (findRepeatElement) {
//       return acc;
//     }
//     groupSpecializationCounter.push({ item: item.specialization, acc });

//     return acc;
//   }, 1);

//   let maxSum = 0;
//   let result = {};
//   for (let specialization in salaries) {
//     const convertTax = +salaries[specialization].tax.replace(/[^0-9]/g, "");
//     const basicSum =
//       (salaries[specialization].salary / 100) * convertTax +
//       salaries[specialization].salary;
//     const keyForResult = `totalBudget${specialization}`;
//     const necessarySpecialization = groupSpecializationCounter.find(
//       (el) => el.item === specialization
//     );
//     const globalSum = basicSum * necessarySpecialization.acc;
//     maxSum += globalSum;
//     result = { ...result, [keyForResult]: globalSum.toFixed(2) };
//   }

//   return { totalBudgetTeam: maxSum.toFixed(2), ...result };
// }

export default function App() {
  // const salaries1 = {
  //   Manager: { salary: 1000, tax: "10%" },
  //   Designer: { salary: 600, tax: "30%" },
  //   Artist: { salary: 1500, tax: "15%" },
  // };
  // const team1 = [
  //   { name: "Vova", specialization: "Designer" },
  //   { name: "Misha", specialization: "Manager" },
  //   { name: "Max", specialization: "Designer" },
  //   { name: "Leo", specialization: "Artist" },
  // ];
  // const salaries2 = {
  //   TeamLead: { salary: 1000, tax: "99%" },
  //   Architect: { salary: 9000, tax: "34%" },
  // };
  // const team2 = [
  //   { name: "Alexander", specialization: "TeamLead" },
  //   { name: "Gaudi", specialization: "Architect" },
  //   { name: "Koolhas", specialization: "Architect" },
  //   { name: "Napoleon", specialization: "General" },
  //   { name: "Foster", specialization: "Architect" },
  // ];
  // const salaries3 = {
  //   TeamLead: { salary: 5000, tax: "99%" },
  //   Architect: { salary: 3456, tax: "34%" },
  //   Developer: { salary: 3456, tax: "20%" },
  //   Test: { salary: 3456, tax: "78%" },
  //   PM: { salary: 3456, tax: "15%" },
  // };
  // const team3 = [
  //   { name: "Alexander", specialization: "TeamLead" },
  //   { name: "Gaudi", specialization: "Test" },
  //   { name: "Koolhas", specialization: "Architect" },
  //   { name: "Napoleon", specialization: "General" },
  //   { name: "Foster", specialization: "Architect" },
  //   { name: "Ola", specialization: "Developer" },
  //   { name: "BMV", specialization: "Architect" },
  //   { name: "Mers", specialization: "PM" },
  //   { name: "Audi", specialization: "Test" },
  //   { name: "Mark", specialization: "Developer" },
  // ];
  // const financeReport1 = calculateTeamFinanceReport(salaries3, team3);
  // console.log(JSON.stringify(financeReport1));
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Problem /> */}
        <Methods />
        {/* <Program /> */}
        {/* <Teacher /> */}
        {/* <Assurance /> */}
        {/* <Comments /> */}
        {/* <Contacts /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
