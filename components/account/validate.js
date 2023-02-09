import * as yup from 'yup';

export const ValidateContact = yup.object({
    name : yup.string().required("pls enter your name"),
    email: yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "รูปแบบอีเมลไม่ถูกต้อง"
    )
    .required("กรุณากรอกอีเมล"),
    password : yup.string().required("pls enter  password"),
    phone : yup.string().required("pls enter  phone number"),

});