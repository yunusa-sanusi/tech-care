import moreHoriz from 'assets/svg/more_horiz.svg';

const Patient = ({ patientName, patientImage }) => {
  return (
    <div
      className={`flex justify-between items-center py-4 px-4 mr-1 ${
        patientName === 'Emily Williams' ? 'bg-secondary2' : 'none'
      }`}
    >
      <div className="flex items-center gap-x-2">
        <img src={patientImage} alt="patient image" />
        <div>
          <h5 className="font-bold text-sm">{patientName}</h5>
          <p className="text-secondary text-sm">Female, 18</p>
        </div>
      </div>
      <img
        src={moreHoriz}
        alt="more options icon"
        className="w-[18px] h-[3px]"
      />
    </div>
  );
};
export default Patient;
