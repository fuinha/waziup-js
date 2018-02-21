'use strict'

/* Sensing devices list
  Generated from FIESTA IoT ontology with this script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:SensingDevice. } 
  jena$ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
*/

export default [
"Ampere",
"Bar",
"BeatPerMinute",
"Candela",
"Centibar",
"Centimetre",
"Coordinates",
"Coulomb",
"Day",
"Decibel",
"DecibelA",
"DecibelMilliwatt",
"Degree",
"DegreeAngle",
"DegreeCelsius",
"DegreeFahrenheit",
"Dimensionless",
"EAQI",
"Farad",
"Gauss",
"Gram",
"GramPerCubicMetre",
"GramPerLitre",
"Hertz",
"Hour",
"Inch",
"Index",
"Item",
"Kelvin",
"KilobitsPerSecond",
"Kilogram",
"KilogramPerCubicMetre",
"Kilometre",
"KilometrePerHour",
"KiloWattHour",
"Litre",
"LitrePer100Kilometres",
"Lumen",
"Lux",
"Metre",
"MetrePerSecond",
"MetrePerSecondSquare",
"Microampere",
"Microgram",
"MicrogramPerCubicMetre",
"Microvolt",
"Microwatt",
"MicrowattPerSquareCentimetre",
"Miles",
"Milliampere",
"Millibar",
"Milligram",
"MilligramPerCubicMetre",
"MilligramPerLitre",
"MilligramPerSquareMetre",
"Millilitre",
"Millimetre",
"MillimetrePerHour",
"Millisecond",
"Millivolt",
"MillivoltPerMetre",
"Milliwatt",
"MinuteAngle",
"MinuteTime",
"MmHg",
"MmolPerLitre",
"Ohm",
"Okta",
"Others",
"PartsPerBillion",
"Pascal",
"Percent",
"Pound",
"PPM",
"Radian",
"RadianPerSecond",
"RadiationParticlesPerMinute",
"RevolutionsPerMinute",
"Scale",
"SecondAngle",
"SecondTime",
"SiemensPerMetre",
"Step",
"Tesla",
"Tonne",
"Unit",
"VehiclesPerMinute",
"Volt",
"VoltAmpereReactive",
"Watt",
"WattPerSquareMetre",
"Wout",
"Year"
]
