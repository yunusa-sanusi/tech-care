import DiagnosisChart from './DiagnosisChart';
import VitalSigns from './VitalSigns';
import DiagnosticList from './DiagnosticList';

const DiagnosisSection = ({ patientData }) => {
  return (
    <section className="w-full col-span-2">
      <div className="bg-primary rounded-xl p-4">
        <h2 className="font-extrabold text-xl pb-6">Diagnosis History</h2>
        <DiagnosisChart chartData={patientData} />

        <VitalSigns patientData={patientData} />
      </div>

      <div className="bg-primary rounded-xl p-4 mt-8">
        <h2 className="font-extrabold text-xl pb-6">Diagnostic List</h2>
        <div>
          <DiagnosticList diagnosis={patientData.diagnostic_list} />
        </div>
      </div>
    </section>
  );
};
export default DiagnosisSection;
