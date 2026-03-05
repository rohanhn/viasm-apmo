import { validateRequiredRelation } from "../../../../helpers/validation";

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    
    validateRequiredRelation(data, 'year', 'Trường "year" không được để trống!');

    validateRequiredRelation(data, 'country', 'Trường "country" không được để trống!');
  },
  async beforeUpdate(event) {
    const { data } = event.params;

    if (Object.prototype.hasOwnProperty.call(data, 'year')) {
      validateRequiredRelation(data, 'year', 'Trường "year" không được để trống!');
    }

    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      validateRequiredRelation(data, 'country', 'Trường "country" không được để trống!');
    }
  },
};