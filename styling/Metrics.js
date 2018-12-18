import { Dimensions, Platform } from "react-native";
import NormalizeSize from "./NormalizeSize";

const { width, height } = Dimensions.get("window");

const metrics = {
  marginHorizontal: NormalizeSize.normalize(10),
  marginVertical: NormalizeSize.normalize(10),
  buttonHeight: NormalizeSize.normalize(50),
  logoHeight: NormalizeSize.normalize(150),
  logoWidth: NormalizeSize.normalize(120),
  logoContainerH: NormalizeSize.normalize(160),
  logoContainerW: NormalizeSize.normalize(130),
  inputBoxW: NormalizeSize.normalize(300),
  loginButtonH: NormalizeSize.normalize(35),
  loginButtonW: NormalizeSize.normalize(120),
  dividerSocialMediaW: NormalizeSize.normalize(300),
  facebookLogoWH: NormalizeSize.normalize(60),
  googleLogoWH: NormalizeSize.normalize(60),
  socailMediaImageWH: NormalizeSize.normalize(55)
};

export default metrics;
