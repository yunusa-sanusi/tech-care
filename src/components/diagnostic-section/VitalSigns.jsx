import VitalSignReading from './VitalSignReading';
import RespiratoryRate from 'assets/svg/respiratory_rate.svg';
import HeartBPM from 'assets/svg/HeartBPM.svg';
import temperature from 'assets/svg/temperature.svg';

const VitalSigns = ({ patientData }) => {
  return (
    <div className="pt-4 flex items-center gap-x-4">
      <VitalSignReading
        patientVitalReading={patientData.diagnosis_history[0].respiratory_rate}
        bgColor="bg-diagCard1"
        icon={RespiratoryRate}
        name="Respiratory Rate"
        unit="bpm"
      />
      <VitalSignReading
        patientVitalReading={patientData.diagnosis_history[0].temperature}
        bgColor="bg-diagCard2"
        icon={temperature}
        name="Temperature"
        unit="°F"
      />
      <VitalSignReading
        patientVitalReading={patientData.diagnosis_history[0].heart_rate}
        bgColor="bg-diagCard3"
        icon={HeartBPM}
        name="Heart Rate"
        unit="bpm"
      />
    </div>
  );
};
export default VitalSigns;
