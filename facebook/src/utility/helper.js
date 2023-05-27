import { isEmail, isPhoneNumber } from "./validate";

export const hideEmailPhone = (data) => {
  if (isEmail(data)) {
    let com = data.split("@")[1];
    let mail = data.split("@")[0];

    let first = mail.substr(0, 2);
    let last = mail.substr(-2, 2);

    return `${first}*********${last}@${com}`;
  }
  if (isPhoneNumber(data)) {
    let first = data.substr(0, 3);
    let last = data.substr(-2, 2);

    return `${first}******${last}`;
  }
};
