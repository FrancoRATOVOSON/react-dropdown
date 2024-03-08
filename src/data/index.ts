enum CarsConstructor {
  TOYOTA='TOYOTA',
  RENAULT='RENAULT'
}

const cars = new Map<CarsConstructor, Array<string>>()

cars.set(CarsConstructor.TOYOTA,['Avensis', 'Aygo', 'Prius', 'Yaris'])
cars.set(CarsConstructor.RENAULT,['Clio', 'Espace', 'Mégane', 'Scenic'])

export {cars, CarsConstructor}