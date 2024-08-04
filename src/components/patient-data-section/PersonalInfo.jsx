const PersonalInfo = ({ type, info, icon }) => {
  return (
    <div className="flex items-center gap-x-2 py-3">
      <img src={icon} alt={type} className="w-[42px] h-[42px]" />
      <div>
        <h6 className="text-sm">{type}</h6>
        <p className="text-sm font-bold">{info}</p>
      </div>
    </div>
  );
};
export default PersonalInfo;
