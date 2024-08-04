import downloadIcon from 'assets/svg/download.svg';

const LabResult = ({ result }) => {
  return (
    <div className="py-4 px-3 hover:bg-secondary3 flex items-center justify-between">
      <p className="text-[13px]">{result}</p>
      <img
        src={downloadIcon}
        alt="download icon"
        className="w-[20px] h-[20px]"
      />
    </div>
  );
};
export default LabResult;
