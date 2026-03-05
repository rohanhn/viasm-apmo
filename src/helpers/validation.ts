// path: src/helpers/validation.ts
import { errors } from '@strapi/utils';
const { ValidationError } = errors;

export const validateRequiredRelation = (data: any, fieldName: string, errorMessage: string) => {
  // Kiểm tra nếu field không tồn tại hoặc bị null/undefined/mảng rỗng
  const value = data[fieldName];
  
  if (!value || (Array.isArray(value) && value.length === 0)) {
    throw new ValidationError(errorMessage);
  }
};