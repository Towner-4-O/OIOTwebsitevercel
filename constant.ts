// export const BACKEND_BASE_URL = "https://api.nimmavahana.com";
// export const BACKEND_BASE_URL = "http://localhost:3001";

// // PRODUCTION
// export const BACKEND_BASE_URL = "http://20.244.12.93:9090/oiot-app/api/v1";
export const BACKEND_BASE_URL = "https://oiotappapi.nimmavahana.com/oiot-app/api/v1";
//api list
export const config = {
  login: "/rider-auth/login",
  getProfile: "/adminapi/riderById/",
  getServiceCity: "/adminapi/AvailbleserviceCityforlanding",
  verifyNumber: "/api/verifyNumber",
  signUpRider: "/api/riders",
  forgotPassword: "/api/riderForgotPassword/",
  resetPassword: "/api/riderResetPassword/",
  expiredTheOtp: "/api/deleteOldOtp",
  verifyOTP: "/api/verify-otp",
};

export const media = {
  OIOT_URL: "https://oiot.app",
  TOWNER_PLAYSTORE:
    "https://play.google.com/store/apps/details?id=com.towner.app&hl=en",
  YOUTUBE_VIDEO: "https://youtu.be/GFXFxw81fJc?si=XyTQ5FieKA1_JNgz",
  YOUTUBE_VIDEO2: "https://youtu.be/XL82yNGfKlE?si=jVyFlmhmLHATqp7s",
  OIOT_PLAYSTORE: "https://play.google.com/store/apps/details?id=com.oiot.app",
  OIOT_APPSTORE: "https://apps.apple.com/in/app/oiot/id6474858061",
};

export const social = {
  instagram: "https://www.instagram.com/oiotofficial/",
  linkedin: "https://www.linkedin.com/in/towner-marketing/",
  facebook: "https://www.facebook.com/profile.php?id=61557570201711",
  twitter: "https://x.com/Oiottaxi",
  youtube: "https://www.youtube.com/@OIOT_Taxi",
};
