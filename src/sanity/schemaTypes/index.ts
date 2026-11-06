import { type SchemaTypeDefinition } from 'sanity';
import { templateType } from './templateType';
import { faqType } from './faqType';
import { categoryType } from './categoryType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [templateType, faqType, categoryType],
};
