const fs = require("fs");

// Example usage:
const exampleData = [
  [
    "CONTACT",
    "or if",
    "you",
    "have",
    "any",
    "questions",
    "please do",
    "For",
    "urthr",
    "contact",
    "our",
    "Customer",
    "Relations",
    "department:",
    "not hesitate to",
    "",
    "Jesper",
    "Hoffmann",
    "Simon Karkov Skals",
    "Head of Customer",
    "Relations",
    "Customer Relations Manager",
    "Phone:204460",
    "46",
    "Phone:63 25 66 25",
    "customer@danpilot.dk",
  ],
  [
    "Pricing",
    "2025",
    "Products",
    "Updated",
    "June",
    "1st 2025",
    "Port Pilotage",
    "YOUR TIME, YOUR SAFETY - OURCOMMITMENT",
  ],

  [
    "PREAMBLE",
    "AtDanPilot,our aim is tonsure anotimal pilotageoperationorourcustomers,adheringtotheexpectationsofall arties",
    "involved with regards to time, afty and rliability.",
    "As",
    "reflect the requirements of our customers and the shipping industry forfixed pricing and dependable service.",
    "Pleasecarefully studyblowinformation ordetailsonour picing structure.",
    "RATE STRUCTURE",
    "Theapliablecdtliclollolements:",
    "Basic fee",
    "The BasicFe iepedttherm otieiwehr pioageicompulorro,andonteaeo",
    "operation.",
    "Vessel fee",
    "Vessel Fee is calculated based on the dimensions of the vessel, whether pilotage is compulsory or not, and the draft",
    "during pilotage.",
    "Pilotage fee",
    "Pilotage Fee is calculated based on the dimensions of the vessel, whether pilotage is compulsory or not, draft",
    "during pilotage and route piloted.",
    "Travelling expenses",
    "A7%chare levid onthe above lements,coveringteexpen and time asciatd with the trnsport of the",
    "pilot to/from the vessel.",
    "ORDERING PILOTAGE",
    "When calculating the rate of the pilotage service provided, below types of orders are considered:",
    "PILOTAGE INTO PORT: (Non compulsory pilotage / Compulsory pilotage)",
    "Standard order",

    "Standard order rate is applied (Basic Fee kr. 8.126/ 6.424)",
    "Min 24 hrs",
    "Priority order",
    "□",
    "Priority Fee is applied to Standard pilotage (Priority Fe",
    "Less than 24 hrs",
    "DKK 6.000,-)",
    "PILOTAGE FROM, OR WITHIN PORT: (Non compulsory pilotage / Compulsory pilotage)",
    "Early order",
    "口",
    "Early order rate is applied (Basic Fee kr. 7.625 / 5.924)",
    "Min 7 hrs fi rm notice",
    "Standard order",
    "Standard order rate is applied (Basic Fee kr. 8.126 / 6.424)",
    "Min 4 hrs fi rm notice",
    "Priority order",
    "Priority Fee is applied to Standard pilotage (Priority Fee",
    "Less than 4 hours",
    "DKK 6.000)",
    "PRIORITY FEE",
    "AsofMarc 12,anyprtplotaerviceordd wih lssthanemiimumtice asovrdbyDanih law24hours",
    "forilo)lle.",
    "for the pilotage.",
    "Ordering pilotage TO port",
    "If >24 hours between time of order and requested pilot boarding time",
    "No Priority Fee",
    "If <24 hours between time of order and requested pilot boarding time",
    "Priority Fee applied (DKK 6.000)",
    "Ordering pilotage FROM or WITHIN port",
    "If >4 hours between time of order and requested pilot boarding time",
    "No Priority Fee",
    "If <4 hours between time of order and requested pilot boarding time",
    "Priority Fee applied (DKK 6.000)",
  ],
  [
    "BUNKERING PILOTAGE",
    "PilotageofbunkerslsinlaitobukigatiniDishstraits.",
    "Plo",
    "Bunkering fee",
    "□ Copenhagen, Kalundborg& Skagen Anchorage",
    "◻",
    "DKK 3.500",
    "Bunkering loaemustbeordered wit18houroicetoTA.",
    "WAITING TIME",
    "Waiting time",
    "Per commenced hour",
    "◻",
    "DKK 2.250",
    "CANCELLATION",
    "In the event that an order is cancelled, the following fees are imposed.",
    "If >6 hours between time of cancelling and ETA",
    "No charge",
    "If <6 hours between time of cancelling and ETA",
    "Cancellation Fee (DKK 6.000)",
    "If cancelled after ETA or if the pilotage has been commenced",
    "Pilotage is charged at full price",
    "*Pilotage is deemed having commenced when pilot sets first foot on vessel, pilot ladder or",
    "pilot boat whichever occurs first",
    "LATE ARRIVAL DISCOUNT",
    "In the event that the pilot commences*the pilotage later than the accepted ETA in accordance with the official notice",
    "requirements by more than4hours,and thedelay is notcaused by faults/erors oromissions by the customervessel/agent or",
    "their servantsorintheeventofcemjure,Danlot illsubractaaeArivalDiscountontherateofthepilotae.",
    "□",
    "25 % discount on the rate of the pilotage is deducted.",
    "A pilotage is deemed commenced upon the pilot seting first foot on the pilot ladder.",
    "SERVICE TRIPS",
    "For assistance with on-/offsigners by use of DanPilot pilot boats, or delivery of parcels to transiting vessels.",
    "Service trips are invoiced based on time spent as per below;",
    "Service trip in connection with pilot operation",
    "At Skagen or Gedser:",
    "口",
    "Per commenced hour",
    "DKK 2.500",
    "Any other location:",
    "□ Per commenced hour",
    "DKK 5.000",
    "Service trip not in connection with pilot operation",
    "At Skagen or Gedser:",
    "口",
    "Per commenced hour",
    "DKK 4.500",
    "Any other location:",
    "DKK 5.500",
    "Service trips must be ordered with 18 hours notice to ETA.",
    "S",
    "YOUR TIME, YOUR SAFETY",
    "- OUR COMMITMENT",
    "DanPilot",
  ],
];
function writeListToFile() {
  let content = "";

  exampleData.forEach((page, pageIndex) => {
    // Add page header with 2 new lines before it (except for first page)
    if (pageIndex > 0) {
      content += "\n\n";
    }
    content += `page ${pageIndex + 1}\n`;

    // Add each string in the page with a new line prefix
    page.forEach((line) => {
      content += `\n${line}`;
    });
  });

  // Write to file
  fs.writeFileSync("./transit.txt", content, "utf8");
  console.log(`File written successfully`);
}

// Uncomment to test:
// writeListToFile(exampleData, './output.txt');

writeListToFile();
