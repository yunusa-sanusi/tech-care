import DiagnosisDetail from './DiagnosisDetail';

const DiagnosticList = ({ diagnosis }) => {
  return (
    <>
      {/* <table className="table-auto text-left w-full h-[200px] block overflow-y-auto">
        <thead className="sticky top-0">
          <tr className="text-sm font-bold h-[48px] bg-secondary3">
            <th className="px-4 rounded-l-full">Problem/Diagnosis</th>
            <th className="px-4">Description</th>
            <th className="px-4 rounded-r-full">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {diagnosis.map((diag) => {
            return <DiagnosisDetail key={diag.name} diagnosis={diag} />;
          })}
        </tbody>
      </table> */}

      <div className="grid grid-cols-4 bg-secondary3 rounded-full p-4 text-sm font-bold">
        <h4 className="col-span-1">Problem/Diagnosis</h4>
        <h4 className="col-span-2">Description</h4>
        <h4 className="col-span-1">Status</h4>
      </div>

      <div className="mt-3 w-full oveflow-x-auto h-44 overflow-y-auto">
        {diagnosis.map((diag) => {
          return <DiagnosisDetail key={diag.name} diagnosis={diag} />;
        })}
      </div>
    </>
  );
};
export default DiagnosticList;
