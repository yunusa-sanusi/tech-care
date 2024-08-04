const VitalSignReading = ({
  patientVitalReading,
  bgColor,
  icon,
  name,
  unit,
}) => {
  return (
    <div className={`${bgColor} w-[228px] h-[242px] rounded-lg p-4`}>
      <img src={icon} alt={name + 'icon'} className="w-[96px] h-[96px]" />
      <div className="pt-2 pb-4">
        <p className="text-base font-medium">{name}</p>
        <h4 className="text-2xl font-extrabold">
          {patientVitalReading.value} {unit}
        </h4>
      </div>
      <p className="text-sm">{patientVitalReading.levels}</p>
    </div>
  );
};
export default VitalSignReading;
