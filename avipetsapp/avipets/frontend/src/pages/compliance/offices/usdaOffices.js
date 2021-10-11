const usdaOffices = [
  {
    title: "Alabama",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/alabama",
  },
  {
    title: "Alaska",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/alaska",
  },
  {
    title: "American-Samoa",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/american-samoa",
  },
  {
    title: "Arizona",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/arizona",
  },
  {
    title: "Arkansas",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/arkansas",
  },
  {
    title: "California",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/california",
  },
  {
    title: "Colorado",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/colorado",
  },
  {
    title: "Connecticut",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/connecticut",
  },
  {
    title: "Delaware",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/delaware",
  },
  {
    title: "District-of-Columbia",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/district-of-columbia",
  },
  {
    title: "Florida",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/florida",
  },
  {
    title: "Georgia",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/georgia",
  },
  {
    title: "Guam",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/guam",
  },
  {
    title: "Hawaii",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/hawaii",
  },
  {
    title: "Idaho",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/idaho",
  },
  {
    title: "Illinois",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/illinois",
  },
  {
    title: "Indiana",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/indiana",
  },
  {
    title: "Iowa",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/iowa",
  },
  {
    title: "Kansas",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/kansas",
  },
  {
    title: "Kentucky",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/kentucky",
  },
  {
    title: "Louisiana",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/louisiana",
  },
  {
    title: "Maine",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/maine",
  },
  {
    title: "Maryland",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/maryland",
  },
  {
    title: "Massachusetts",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/massachusetts",
  },
  {
    title: "Michigan",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/michigan",
  },
  {
    title: "Minnesota",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/minnesota",
  },
  {
    title: "Mississippi",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/mississippi",
  },
  {
    title: "Missouri",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/missouri",
  },
  {
    title: "Montana",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/montana",
  },
  {
    title: "Nebraska",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/nebraska",
  },
  {
    title: "Nevada",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/nevada",
  },
  {
    title: "New-Hampshire",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/new-hampshire",
  },
  {
    title: "New-Jersey",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/new-jersey",
  },
  {
    title: "New-Mexico",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/new-mexico",
  },
  {
    title: "New-York",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/new-york",
  },
  {
    title: "North-Carolina",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/north-carolina",
  },
  {
    title: "North-Dakota",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/north-dakota",
  },
  {
    title: "Northern-Mariana-Islands",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/northern-mariana-islands",
  },
  {
    title: "Ohio",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/ohio",
  },
  {
    title: "Oklahoma",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/oklahoma",
  },
  {
    title: "Oregon",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/oregon",
  },
  {
    title: "Pennsylvania",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/pennsylvania",
  },
  {
    title: "Puerto-Rico",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/puerto-rico",
  },
  {
    title: "Rhode-Island",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/rhode-island",
  },
  {
    title: "South-Carolina",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/south-carolina",
  },
  {
    title: "South-Dakota",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/south-dakota",
  },
  {
    title: "Tennessee",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/tennessee",
  },
  {
    title: "Texas",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/texas",
  },
  {
    title: "Utah",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/utah",
  },
  {
    title: "Vermont",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/vermont",
  },
  {
    title: "Virginia",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/virginia",
  },
  {
    title: "Washington",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/washington",
  },
  {
    title: "West-Virginia",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/west-virginia",
  },
  {
    title: "Wisconsin",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/wisconsin",
  },
  {
    title: "Wyoming",
    url: "https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/endorsement-offices/vs-service-center-state-contact/wyoming",
  },
];

export default usdaOffices;
