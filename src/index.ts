import bMapConvertGMap from "./map/bMapConvertGMap"
import gMapConvertBMap from "./map/gMapConvertBMap";

import deepClone from "./utils/deepClone";
import getUUID from "./utils/getUUID";
import leftAssign from "./utils/leftAssign";
import arrayUnique from "./utils/arrayUnique";
import randomNumber from "./utils/randomNumber";

import validateLandlineAndTel from "./validate/validateLandlineAndTel";
import validateTel from "./validate/validateTel";
import validateChinese from "./validate/validateChinese";
import validateIdCard from "./validate/validateIdCard";
import validateBankCard from "./validate/validateBankCard";

import getClientHeight from "./dom/getClientHeight";

export {
  bMapConvertGMap,
  gMapConvertBMap,
  deepClone,
  getUUID,
  leftAssign,
  arrayUnique,
  randomNumber,
  validateLandlineAndTel,
  validateTel,
  validateChinese,
  validateIdCard,
  validateBankCard,
  getClientHeight
};