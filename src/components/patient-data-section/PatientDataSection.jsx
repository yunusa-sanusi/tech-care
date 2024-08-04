import PersonalInfo from './PersonalInfo';
import LabResult from './LabResult';

import birthIcon from 'assets/svg/BirthIcon.svg';
import femaleIcon from 'assets/svg/FemaleIcon.svg';
import maleIcon from 'assets/svg/MaleIcon.svg';
import phoneIcon from 'assets/svg/PhoneIcon.svg';
import insuranceIcon from 'assets/svg/InsuranceIcon.svg';

const PatientDataSection = ({ patientData }) => {
  return (
    <section className="w-full col-span-1">
      <div className="bg-primary px-4 py-6 rounded-xl mb-6">
        <div className="w-[200px] h=[200px] mx-auto">
          <img
            src={patientData.profile_picture}
            alt={patientData.name}
            className="w-full h-full"
          />
          <h3 className="text-2xl font-extrabold text-center py-5">
            {patientData.name}
          </h3>
        </div>

        <div className="">
          <PersonalInfo
            type="Date of Birth"
            info={patientData.date_of_birth}
            icon={birthIcon}
          />
          <PersonalInfo
            type="Gender"
            info={patientData.gender}
            icon={patientData.gender === 'male' ? maleIcon : femaleIcon}
          />
          <PersonalInfo
            type="Contact Info."
            info={patientData.phone_number}
            icon={phoneIcon}
          />
          <PersonalInfo
            type="Emergency Contacts"
            info={patientData.emergency_contact}
            icon={phoneIcon}
          />
          <PersonalInfo
            type="Insurance Provider"
            info={patientData.insurance_type}
            icon={insuranceIcon}
          />
        </div>
        <button className="bg-secondary1 w-[220px] h-[41px] flex items-center justify-center rounded-full mx-auto my-3 mt-6 capitalize text-sm font-bold">
          show all information
        </button>
      </div>

      <div className="bg-primary px-4 py-6 rounded-xl">
        <h2 className="font-extrabold text-xl pb-6">Lab Results</h2>

        <div className="h-[200px] overflow-y-auto">
          {patientData.lab_results.map((result) => {
            return <LabResult key={result} result={result} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default PatientDataSection;
