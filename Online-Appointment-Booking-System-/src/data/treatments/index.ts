import { bridalTreatments } from './bridal';
import { facialTreatments } from './facial';
import { hairTreatments } from './hair';
import { makeupTreatments } from './makeup';
import { nailTreatments } from './nails';
import { skincareTreatments } from './skincare';

export const treatments = [
  ...bridalTreatments,
  ...facialTreatments,
  ...hairTreatments,
  ...makeupTreatments,
  ...nailTreatments,
  ...skincareTreatments
];

export * from './bridal';
export * from './facial';
export * from './hair';
export * from './makeup';
export * from './nails';
export * from './skincare';