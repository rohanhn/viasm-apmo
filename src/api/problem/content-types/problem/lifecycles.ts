import { validateRequiredRelation } from "../../../../helpers/validation";

export default {
  async beforeCreate(event) {
    validateRequiredRelation(event.params.data, 'year', 'Trường "year" không được để trống!');
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (Object.prototype.hasOwnProperty.call(data, 'year')) {
      validateRequiredRelation(data, 'year', 'Trường "year" không được để trống!');
    }
  },
};