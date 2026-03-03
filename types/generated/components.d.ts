import type { Schema, Struct } from '@strapi/strapi';

export interface AwardsGold extends Struct.ComponentSchema {
  collectionName: 'components_awards_golds';
  info: {
    displayName: 'Gold';
  };
  attributes: {
    gold_cut: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'awards.gold': AwardsGold;
    }
  }
}
