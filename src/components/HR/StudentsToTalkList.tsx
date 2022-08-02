import React from 'react';
import { ExpectedContractType, ExpectedTypeWork, Student } from './Student';

export function StudentToTalkList() {
  return (
    <>
      <Student
        // showCV={showCV}
        toTalk
        reservation_date="11.07.2022 r."
        name="Jan"
        surname="Kowalski"
        courseCompletion={4}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={3}
        expectedTypeWork={ExpectedTypeWork['Na miejscu']}
        targetWorkCity="Warszawa"
        expectedContractType={ExpectedContractType['Tylko UoP']}
        expectedSalary="8 000 zł"
        canTakeApprenticeship={false}
        monthsOfCommercialExp="6 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="18.07.2022 r."
        name="Paweł"
        surname="Szymański"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3 mt-0" />
      <Student
        toTalk
        reservation_date="20.07.2022 r."
        name="Mariusz"
        surname="Lipa"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="21.07.2022 r."
        name="Katarzyna"
        surname="Kot"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="21.07.2022 r."
        name="Kamil"
        surname="Olszewski"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="22.07.2022 r."
        name="Aleksandra"
        surname="Maj"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="19.07.2022 r."
        name="Marcin"
        surname="Przybylski"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="20.07.2022 r."
        name="Marcin"
        surname="Nowak"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="31.07.2022 r."
        name="Łukasz"
        surname="Kowalski"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />
      <div className="bg-HRblack-200 h-3" />
      <Student
        toTalk
        reservation_date="31.07.2022 r."
        name="Jakub"
        surname="Nowak"
        courseCompletion={5}
        courseEngagment={5}
        projectDegree={4}
        teamProjectDegree={2}
        expectedTypeWork={ExpectedTypeWork['Gotowość do przeprowadzki']}
        targetWorkCity="Pcim"
        expectedContractType={ExpectedContractType['Możliwe B2B']}
        expectedSalary="15 000 zł"
        canTakeApprenticeship
        monthsOfCommercialExp="9 miesięcy"
      />{' '}
    </>
  );
}
