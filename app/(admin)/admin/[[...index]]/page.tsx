// https://www.youtube.com/watch?v=OcTPaUfay5I
'use client';

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
