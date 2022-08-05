import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback } from '../../views/HR';
import { arrayOfStudentsToTalk } from './Placeholder_StudentsToTalk';
// eslint-disable-next-line import/no-cycle
import { StudentToTalk } from './StudentToTalk';

interface Props {
  showCV: (value: HRMenuCallback) => void;
}
export function StudentToTalkList(props: Props) {
  const { showCV } = props;
  return (
    <>
      {arrayOfStudentsToTalk.map((value, index) => {
        return (
          <React.Fragment key={value.id}>
            <StudentToTalk
              showCV={showCV}
              id={value.id}
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
            {arrayOfStudentsToTalk.length > index + 1 && (
              <div className="bg-HRblack h-3" />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
