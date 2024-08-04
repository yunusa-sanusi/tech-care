import BloodPressure from './BloodPressure';
import arrowUp from 'assets/svg/ArrowUp.svg';
import arrowDown from 'assets/svg/ArrowDown.svg';

const LatestBloodPressureData = ({ latestBldPressure }) => {
  return (
    <>
      <BloodPressure
        bldPressure={latestBldPressure.systolic}
        name="systolic"
        bgColor="bg-chartPt1"
        icon={arrowUp}
      />
      <div className="w-full h-[1px] bg-chartGrid my-3" />
      <BloodPressure
        bldPressure={latestBldPressure.diastolic}
        name="diastolic"
        bgColor="bg-chartPt2"
        icon={arrowDown}
      />
    </>
  );
};
export default LatestBloodPressureData;
