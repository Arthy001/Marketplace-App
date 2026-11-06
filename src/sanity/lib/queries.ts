import { groq } from 'next-sanity';

export const TEMPLATES_QUERY = groq`
  *[_type == "template"] | order(isFeatured desc, _createdAt desc) {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    tagline,
    description,
    detailedDescription,
    category,
    categoryLabel,
    priceStandardTHB,
    priceStandardUSD,
    priceExtendedTHB,
    priceExtendedUSD,
    status,
    isFeatured,
    isNew,
    version,
    framework,
    rating,
    reviewsCount,
    salesCount,
    "thumbnail": thumbnail.asset->url,
    "gallery": gallery[].asset->url,
    demoUrl,
    githubUrl,
    keyFeatures,
    techStack,
    includedItems,
    databaseSchemaInfo,
    requirements,
    lastUpdated
  }
`;

export const TEMPLATE_BY_SLUG_QUERY = groq`
  *[_type == "template" && slug.current == $slug][0] {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    tagline,
    description,
    detailedDescription,
    category,
    categoryLabel,
    priceStandardTHB,
    priceStandardUSD,
    priceExtendedTHB,
    priceExtendedUSD,
    status,
    isFeatured,
    isNew,
    version,
    framework,
    rating,
    reviewsCount,
    salesCount,
    "thumbnail": thumbnail.asset->url,
    "gallery": gallery[].asset->url,
    demoUrl,
    githubUrl,
    keyFeatures,
    techStack,
    includedItems,
    databaseSchemaInfo,
    requirements,
    lastUpdated
  }
`;

export const FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }
`;
