'use client';

import Link from 'next/link'
import { use } from 'react';
import { useUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default function ActivityPage() {
  const { userPromise } = useUser();
  const user = use(userPromise);

  // if (!user) {
  //   redirect('/login');
  // }

  // { user && (
  //   ~~~~~
  // )}

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Activity</h1>
      <Link 
        href="/dashboard"
        onNavigate={(e) => {
          if (!user) {
            alert('ログインしていないため、遷移できません');
            e.preventDefault();
            redirect('/login');
          }
          return true;
        }}
      >Go to Dashboard
      </Link>
    </section>
  );
}
