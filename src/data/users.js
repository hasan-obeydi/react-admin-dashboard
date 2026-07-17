import {
  FIRSTNAME,
  LASTNAME,
  USERNAME,
  EMAIL,
  AGE,
  CITY,
} from "../actions/user";

const userFields = [
  { label: "نام", key: FIRSTNAME, inputType: "text" },
  { label: "نام خانوادگی", key: LASTNAME, inputType: "text" },
  { label: "نام کاربری", key: USERNAME, inputType: "text" },
  { label: "ایمیل", key: EMAIL, inputType: "text" },
  { label: "سن کاربر", key: AGE, inputType: "number" },
  { label: "شهر", key: CITY, inputType: "text" },
];

export default userFields;
