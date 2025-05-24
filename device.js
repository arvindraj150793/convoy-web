export const hasGPS = () => {
  return 'geolocation' in navigator;
};

export const checkCameraAccess = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ video: true });
    return true;
  } catch {
    return false;
  }
};