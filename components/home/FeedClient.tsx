'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/shared/Sidebar';
import { MobileNav } from '@/components/shared/MobileNav';
import { FeedHeader } from '@/components/home/FeedHeader';
import { Composer } from '@/components/home/Composer';
import { FeedDivider } from '@/components/home/FeedDivider';
import { PostCard } from '@/components/home/PostCard';
import { NewPostModal } from '@/components/home/NewPostModal';
import type { FeedPost } from '@/app/_queries/posts';

interface FeedClientProps {
  posts: FeedPost[];
  userRole?: 'staff' | 'admin' | 'parent';
  realChildren?: { id: string; full_name: string }[];
}

export function FeedClient({ posts, userRole, realChildren }: FeedClientProps) {
  const router = useRouter();
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="flex flex-1 min-h-screen bg-canvas">
      <Sidebar pathname="/" onOpenNewPost={() => setShowNewPost(true)} />
      <MobileNav pathname="/" />
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-[760px] w-full mx-auto px-5 md:px-10 pt-16 md:pt-[34px] pb-20">
          <FeedHeader />
          <Composer />
          <FeedDivider />
          {posts.length === 0 ? (
            <div className="text-center py-16 text-muted">
              Aún no hay publicaciones
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <NewPostModal
        open={showNewPost}
        onClose={() => setShowNewPost(false)}
        onPublish={() => {
          setShowNewPost(false);
          router.refresh();
        }}
        userRole={userRole}
        realChildren={realChildren}
      />
    </div>
  );
}
