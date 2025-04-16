'use client';

import Link from 'next/link'
import { use } from 'react';
import { useUser } from '@/lib/auth';

export default function ActivityPage() {
  const { userPromise } = useUser();
  const user = use(userPromise);

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Activity</h1>
      <Link 
        href="/dashboard"
        onNavigate={(e) => {
          console.log('Navigating to dashboard');
          if (!user) {
            alert('ログインしていないため、遷移できません');
            e.preventDefault();
          }
          console.log('Navigating to dashboard');
          return true;
        }}
      >Go to Dashboard
      </Link>
    </section>
  );
}
