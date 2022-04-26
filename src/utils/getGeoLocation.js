export const getGeoLocation = (onSuccess, onError) => {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
