const DiagnosisDetail = ({ diagnosis }) => {
  return (
    // <tr className="text-sm">
    //   <td className="p-4 border-b border-b-[#F6F7F8]">{diagnosis.name}</td>
    //   <td className="p-4 border-b border-b-[#F6F7F8]">
    //     {diagnosis.description}
    //   </td>
    //   <td className="p-4 border-b border-b-[#F6F7F8]">{diagnosis.status}</td>
    // </tr>
    <div className="grid grid-cols-4 py-6 px-4 text-sm border-b border-b-[#F6F7F8]">
      <p className="col-span-1">{diagnosis.name}</p>
      <p className="col-span-2">{diagnosis.description}</p>
      <p className="col-span-1">{diagnosis.status}</p>
    </div>
  );
};
export default DiagnosisDetail;
