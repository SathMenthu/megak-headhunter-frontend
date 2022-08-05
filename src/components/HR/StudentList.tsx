import React from 'react';
// eslint-disable-next-line import/no-cycle
import { Student } from './Student';
import { arrayOfStudents } from './Placeholder_Students';

export function StudentList() {
  return (
    <>
      {arrayOfStudents.map((value, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
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
            {arrayOfStudents.length > index + 1 && (
              <div className="bg-HRblack h-3 relative top-[-4px]" />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
