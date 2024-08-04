import DiagnosisDetail from './DiagnosisDetail';

const DiagnosticList = ({ diagnosis }) => {
  return (
    <>
      <div className="grid grid-cols-4 bg-secondary3 rounded-full p-4 text-sm font-bold">
        <h4 className="col-span-1">Problem/Diagnosis</h4>
        <h4 className="col-span-2">Description</h4>
        <h4 className="col-span-1">Status</h4>
      </div>

      <div className="mt-3 w-full oveflow-x-auto h-52 overflow-y-auto">
        {diagnosis.map((diag) => {
          return <DiagnosisDetail key={diag.name} diagnosis={diag} />;
        })}
      </div>
    </>
  );
};
export default DiagnosticList;
