import { Dimensions, Platform } from "react-native";
import NormalizeSize from "./NormalizeSize";

const { width, height } = Dimensions.get("window");

const metrics = {
  marginHorizontal: NormalizeSize.normalizeWidth(10),
  marginVertical: NormalizeSize.normalizeHeight(10),
  containerPaddingTop: NormalizeSize.normalizeHeight(30),
  buttonHeight: NormalizeSize.normalizeHeight(50),
  logoHeight: NormalizeSize.normalizeHeight(150),
  logoWidth: NormalizeSize.normalizeWidth(120),
  logoContainerH: NormalizeSize.normalizeHeight(155),
  logoContainerW: NormalizeSize.normalizeWidth(125),
  logoContainerPadding: NormalizeSize.normalizeWidth(10),
  inputBoxW: NormalizeSize.normalizeWidth(300),
  inputBoxH: NormalizeSize.normalizeHeight(50),
  loginButtonH: NormalizeSize.normalizeHeight(40),
  loginButtonW: NormalizeSize.normalizeWidth(120),
  signinImageW: NormalizeSize.normalizeWidth(90),
  signinImageH: NormalizeSize.normalizeHeight(30),
  dividerSocialMediaW: NormalizeSize.normalizeWidth(300),
  facebookLogoWH: NormalizeSize.normalizeWidth(60),
  googleLogoWH: NormalizeSize.normalizeWidth(60),
  socailMediaImageWH: NormalizeSize.normalizeWidth(55)
};

export default metrics;
