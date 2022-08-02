import React from 'react';
import { Student } from './Student';
import { arrayOfStudents } from './Placeholder_Students';

export function StudentList() {
  return (
    <>
      {arrayOfStudents.map((value, index) => {
        return (
          <>
            <Student
              name={value.name}
              courseCompletion={value.courseCompletion}
              courseEngagment={value.courseEngagment}
              projectDegree={value.projectDegree}
              teamProjectDegree={value.teamProjectDegree}
              expectedTypeWork={value.expectedTypeWork}
              targetWorkCity={value.targetWorkCity}
              expectedContractType={value.expectedContractType}
              expectedSalary={value.expectedSalary}
              canTakeApprenticeship={value.canTakeApprenticeship}
              monthsOfCommercialExp={value.monthsOfCommercialExp}
            />
            {arrayOfStudents.length > index && (
              <div className="bg-HRblack-200 h-3" />
            )}
          </>
        );
      })}
    </>
  );
}
