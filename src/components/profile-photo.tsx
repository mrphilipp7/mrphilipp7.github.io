import profile from '../assets/profile.webp';

const ProfilePhoto = () => {
  return (
    <div className="w-64 h-64 flex items-center justify-center">
      <img
        src={profile}
        alt="Profile photo of Zach Philipp"
        decoding="async"
        fetchPriority="high"
        className="rounded-full object-cover w-full h-full shadow-xl border border-foreground/10"
      />
    </div>
  );
};

export default ProfilePhoto;
