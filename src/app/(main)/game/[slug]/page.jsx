'use client'
import { useParams } from 'next/navigation';

import React, { Suspense } from 'react'

export default function page() {
  const { slug } = useParams(); // Get the slug from the URL
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>{slug}</div>
    </Suspense>
  )
}
