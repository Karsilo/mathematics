import { fundamentalDocs, advancedDocs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// Fundamental Mathematics documentation source
export const fundamentalSource = loader({
  baseUrl: '/fundamental',
  source: fundamentalDocs.toFumadocsSource(),
});

// Advanced Mathematics documentation source
export const advancedSource = loader({
  baseUrl: '/advanced',
  source: advancedDocs.toFumadocsSource(),
});
