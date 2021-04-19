import axios from "axios";
import CryptoJS from "crypto-js";
import * as Network from "expo-network";

const email = "vericras@kakao.com";
const password = "!1q2w3e4r";



var encrypted = CryptoJS.AES.encrypt(
  CryptoJS.enc.Utf8.parse(email),
  CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
  {
    iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
  }
);
const encEmail = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
console.log("encEmail", encEmail);

var encryptedp = CryptoJS.AES.encrypt(
  CryptoJS.enc.Utf8.parse(password),
  CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
  {
    iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
  }
);
const encPassword = encryptedp.ciphertext.toString(CryptoJS.enc.Base64);
console.log("encPassword", encPassword);



const boraLoginInfo = (ip) =>
  axios.get(`http://crm.borabit.com/v1/user/get_user_info_login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Auth-Key": "LrMgyJaOG8pYK2PbRoqZvlcXSxWe95wF",
    },
    params: {
      user_email: encEmail,
      user_password: encPassword,
      device_id: ip,
    },
  });

const getLoginInfo = async () => {
  try {
    const ip = await Network.getIpAddressAsync();
    console.log(ip)
    await boraLoginInfo(ip).then((response) => {
      console.log("response",response);
    });

    return data;
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const loginApi = {
  getLoginInfo: () => getLoginInfo(),
};
