'use client';

import Link from 'next/link'

export default async function ActivityPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Activity</h1>
      <Link 
        href="/dashboard"
        onNavigate={() => {
          console.log('Navigating to dashboard');
        }}
      >View Team Members
      </Link>
    </section>
  );
}
