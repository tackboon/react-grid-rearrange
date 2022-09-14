export const checkIsTouchScreendevice = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints;
};
