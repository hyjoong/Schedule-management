const deviceSizes = {
  mobile: "500px",
  tablet: "1000px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

export const theme = {
  black: "#333333",
  red: "#FF0000",
  white: "#FFFFFF",
  gray: "#323D45",
  yellow: "#FFA000",
  lightGray: "#E5E5E5",
  thinGray: "rgba(0, 0, 0, 0.4)",
  deepBlue: "#1565C0",
  lightBlue: "#2196F3",
  device,
};
