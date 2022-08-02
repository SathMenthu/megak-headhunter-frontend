import React from 'react';
import { arrayOfStudentsToTalk } from './Placeholder_StudentsToTalk';
import { StudentToTalk } from './StudentToTalk';

interface Props {
  showCV: (value: string) => void;
}
export function StudentToTalkList(props: Props) {
  const { showCV } = props;
  return (
    <>
      {arrayOfStudentsToTalk.map((value, index) => {
        return (
          <>
            <StudentToTalk
              showCV={showCV}
              firstName={value.firstName}
              surname={value.surname}
              reservation_date={value.reservation_date}
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
            {arrayOfStudentsToTalk.length > index && (
              <div className="bg-HRblack-200 h-3" />
            )}
          </>
        );
      })}
    </>
  );
}
