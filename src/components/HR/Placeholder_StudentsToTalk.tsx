import { ExpectedContractType, ExpectedTypeWork } from './StudentInfoBoxes';

interface ArrayOfStudentsToTalk {
  toTalk: boolean;
  firstName: string;
  surname: string;
  reservation_date: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: string;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: string;
}

export const arrayOfStudentsToTalk: ArrayOfStudentsToTalk[] = [
  {
    toTalk: true,
    reservation_date: '11.07.2022 r.',
    firstName: 'Jan',
    surname: 'Kowalski',
    courseCompletion: 4,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 3,
    expectedTypeWork: ExpectedTypeWork['Na miejscu'],
    targetWorkCity: 'Warszawa',
    expectedContractType: ExpectedContractType['Tylko UoP'],
    expectedSalary: '8 000 zł',
    canTakeApprenticeship: false,
    monthsOfCommercialExp: '6 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '18.07.2022 r.',
    firstName: 'Paweł',
    surname: 'Szymański',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '20.07.2022 r.',
    firstName: 'Mariusz',
    surname: 'Lipa',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '21.07.2022 r.',
    firstName: 'Katarzyna',
    surname: 'Kot',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '21.07.2022 r.',
    firstName: 'Kamil',
    surname: 'Olszewski',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '22.07.2022 r.',
    firstName: 'Aleksandra',
    surname: 'Maj',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '19.07.2022 r.',
    firstName: 'Marcin',
    surname: 'Przybylski',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '20.07.2022 r.',
    firstName: 'Marcin',
    surname: 'Nowak',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '31.07.2022 r.',
    firstName: 'Łukasz',
    surname: 'Kowalski',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
  {
    toTalk: true,
    reservation_date: '31.07.2022 r.',
    firstName: 'Jakub',
    surname: 'Nowak',
    courseCompletion: 5,
    courseEngagment: 5,
    projectDegree: 4,
    teamProjectDegree: 2,
    expectedTypeWork: ExpectedTypeWork['Gotowość do przeprowadzki'],
    targetWorkCity: 'Pcim',
    expectedContractType: ExpectedContractType['Możliwe B2B'],
    expectedSalary: '15 000 zł',
    canTakeApprenticeship: true,
    monthsOfCommercialExp: '9 miesięcy',
  },
];
