import { validateRequiredRelation } from "../../../../helpers/validation";

export default {
  async beforeCreate(event) {
    validateRequiredRelation(event.params.data, 'year_name', 'Trường "year_name" không được để trống!');
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (Object.prototype.hasOwnProperty.call(data, 'year_name')) {
      validateRequiredRelation(data, 'year_name', 'Trường "year_name" không được để trống!');
    }
  },
};