import { Dimensions, Platform } from "react-native";
import NormalizeSize from "./NormalizeSize";

const { width, height } = Dimensions.get("window");

const metrics = {
  marginHorizontal: NormalizeSize.normalizeWidth(10),
  marginVertical: NormalizeSize.normalizeHeight(10),

  /*----------------- Login Page --------------------*/

  //Login page padding
  loginContainerPaddingTop: NormalizeSize.normalizeHeight(30),
  // Logo
  logoHeight: NormalizeSize.normalizeHeight(150),
  logoWidth: NormalizeSize.normalizeWidth(120),
  logoContainerH: NormalizeSize.normalizeHeight(155),
  logoContainerW: NormalizeSize.normalizeWidth(125),
  logoContainerPadding: NormalizeSize.normalizeWidth(10),
  //Input
  inputBoxW: NormalizeSize.normalizeWidth(300),
  inputBoxH: NormalizeSize.normalizeHeight(50),
  //Login button
  loginButtonH: NormalizeSize.normalizeHeight(40),
  loginButtonW: NormalizeSize.normalizeWidth(120),
  signinImageW: NormalizeSize.normalizeWidth(90),
  signinImageH: NormalizeSize.normalizeHeight(30),
  //Divider
  dividerSocialMediaW: NormalizeSize.normalizeWidth(300),
  //Socail media
  facebookLogoWH: NormalizeSize.normalizeWidth(60),
  googleLogoWH: NormalizeSize.normalizeWidth(60),
  socailMediaImageWH: NormalizeSize.normalizeWidth(55),
  //Signup text
  signupText: NormalizeSize.normalizeWidth(200),

  /*----------------- Form Page --------------------*/

  //Form page padding
  formContainerPaddingTop: NormalizeSize.normalizeHeight(30),
  //Form container
  formContainerPaddingLeft: NormalizeSize.normalizeWidth(15),
  formContainerPaddingRight: NormalizeSize.normalizeWidth(15),
  //form contents divider
  formContentDivider: NormalizeSize.normalizeWidth(350),
  //Title input box
  formTitleinputBoxW: NormalizeSize.normalizeWidth(350),
  formTitleinputBoxH: NormalizeSize.normalizeHeight(50),
  //Type drop menu container
  fromTypeDropMenucontainerW: NormalizeSize.normalizeWidth(350),
  fromTypeDropMenucontainerH: NormalizeSize.normalizeHeight(50),

  //Type drop menu
  formTypeDropMenuW: NormalizeSize.normalizeWidth(350),
  formTypeDropMenuH: NormalizeSize.normalizeHeight(30),
  formTypeDropMenuArrowW: NormalizeSize.normalizeWidth(15),
  formTypeDropMenuArrowH: NormalizeSize.normalizeHeight(15),

  //Add times list
  formAddTimeListContainerHeight: NormalizeSize.normalizeHeight(60),
  formAddTimeListContainerWidth: NormalizeSize.normalizeWidth(350),
  formAddTimeListHeight: NormalizeSize.normalizeHeight(60),
  formAddTimeListWidth: NormalizeSize.normalizeWidth(320)
};

export default metrics;
