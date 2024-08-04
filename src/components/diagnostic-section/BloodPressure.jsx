const BloodPressure = ({ bldPressure, name, bgColor, icon }) => {
  return (
    <div>
      <div className="flex items-center gap-x-1">
        <div className={`${bgColor} w-[14px] h-[14px] rounded-full`} />
        <p className="text-sm font-bold capitalize">{name}</p>
      </div>
      <h4 className="font-bold text-[22px] py-2">{bldPressure.value}</h4>
      <div className="flex items-center gap-x-2">
        <img src={icon} alt="arrow up icon" className="w-[10px] h-[6px]" />
        <p className="text-sm">{bldPressure.levels}</p>
      </div>
    </div>
  );
};
export default BloodPressure;
