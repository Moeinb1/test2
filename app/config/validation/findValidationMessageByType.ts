type FindValidationMessageByType =
  | 'matches'
  | 'file'
  | 'min'
  | 'exact'
  | 'beCorrect'
  | 'password'
  | 'confirmPassword';

export const findValidationMessageByType = (
  type: FindValidationMessageByType = 'beCorrect',
  message: string = 'ورودی'
) => {
  switch (type) {
    case 'matches':
      return `${message} معتبر نیست`;
    case 'file':
      return `باید اندازه فایل کمتر از ${message} کیلوبایت باشد`;
    case 'min':
      return `حداقل ${message} حرف`;
    case 'exact':
      return `باید ${message} حرف باشد`;
    case 'beCorrect':
      return `${message} خود را به درستی وارد کنید`;
    case 'password':
      return `رمز عبور باید دارای ۸ کاراکتر، یک حرف بزرگ، یک حرف کوچیک، یک عدد و یک کاراکتر باشد`;
    case 'confirmPassword':
      return `پسورد ها مطابقت ندارند`;
    default:
      break;
  }
};

export const validationMessageRequired = (name: string = 'فیلد') =>
  `${name} اجباری می باشد`;
