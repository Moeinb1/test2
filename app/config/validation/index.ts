import { z } from 'zod';
import {
  findValidationMessageByType,
  validationMessageRequired,
} from './findValidationMessageByType';

const validation = {
  nationalCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, { message: findValidationMessageByType('beCorrect', 'کد ملی') })
    .refine(
      (value) => /^\d+$/.test(value),
      findValidationMessageByType('beCorrect', 'کد ملی')
    ),
};
export default validation;
