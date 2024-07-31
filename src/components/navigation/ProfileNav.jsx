import moreVert from 'assets/svg/more_vert.svg';
import settings from 'assets/svg/settings.svg';
import doctorPortrait from 'assets/png/doctor-portrait-sm.png';

const ProfileNav = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="flex items-center gap-x-2">
        <img
          src={doctorPortrait}
          alt="user profile picture"
          className="w-[44px] h-[44px]"
        />
        <div>
          <h5 className="font-bold text-sm">Dr. Jose Simmons</h5>
          <p className="text-sm text-secondary">General Practitioner</p>
        </div>
      </div>
      <div className="w-[1px] h-[44px] bg-navDivider" />
      <div className="flex items-center gap-2">
        <img
          src={settings}
          alt="settings icon"
          className="w-[18px] h-[18px] cursor-pointer"
        />
        <img
          src={moreVert}
          alt="more options icon"
          className="w-[18px] h-[18px] cursor-pointer"
        />
      </div>
    </div>
  );
};
export default ProfileNav;
