import { memo } from 'react';
import {
  type FeedPostImage,
} from '@/app/_queries/posts';
import {
  getPostTypeConfig,
  type PostType,
} from '@/app/_data/posts';
import {
  CommentIcon,
  HeartIcon,
} from '@/components/shared/icons';

const AVATAR_BADGE_COLORS: Record<PostType, { container: string; dot: string; text: string }> = {
  meal: { container: 'bg-[#9A7B1E]/15', dot: 'bg-[#9A7B1E]', text: 'text-[#9A7B1E]' },
  nap: { container: 'bg-[#E7DCF6]', dot: 'bg-[#7B5FC0]', text: 'text-[#7B5FC0]' },
  activity: { container: 'bg-[#C7E7F1]', dot: 'bg-staff', text: 'text-staff' },
  achievement: { container: 'bg-[#CFEBD8]', dot: 'bg-achievement', text: 'text-achievement' },
  mood: { container: 'bg-[#F9D2DE]', dot: 'bg-[#C56486]', text: 'text-[#C56486]' },
  photo: { container: 'bg-[#FBD8CC]', dot: 'bg-[#D9684A]', text: 'text-[#D9684A]' },
  announcement: { container: 'bg-[#CCD8F4]', dot: 'bg-announcement', text: 'text-announcement' },
};

interface PostCardProps {
  post: {
    id: string;
    authorName: string;
    authorInitial: string;
    avatarBg: string;
    avatarColor: string;
    postType: PostType;
    description: string;
    audience: string;
    images: FeedPostImage[];
    relativeTime: string;
  };
}

export const PostCard = memo(function PostCard({ post }: PostCardProps) {
  const config = getPostTypeConfig(post.postType);
  const badge = AVATAR_BADGE_COLORS[post.postType];

  return (
    <article className="bg-card border border-line rounded-[20px] py-5 px-[22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <div className="flex items-center gap-3 mb-[14px]">
        <span
          className="w-[44px] h-[44px] rounded-full font-head font-semibold text-[17px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: post.avatarBg, color: post.avatarColor }}
        >
          {post.authorInitial}
        </span>
        <div className="flex-1">
          <div className="font-head font-semibold text-[16.5px] text-ink">
            {post.authorName}
          </div>
          <div className="text-[12.5px] text-muted">
            {post.relativeTime}
          </div>
        </div>
        <div
          className={`flex items-center gap-[7px] py-[6px] px-3 rounded-full ${badge.container}`}
        >
          <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
          <span
            className={`text-[12px] font-extrabold tracking-[0.5px] ${badge.text}`}
          >
            {config.label}
          </span>
        </div>
      </div>

      <div className="text-[12.5px] text-muted mb-[10px]">
        Para: {post.audience}
      </div>

      <p className="text-[15.5px] leading-[1.55] text-[#4A4038] m-0">
        {post.description}
      </p>

      {post.images.length > 0 && (
        <div className="mt-4">
          {post.images.length === 1 ? (
            <div className="rounded-[14px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.images[0].url}
                    alt={post.images[0].caption || post.description}
                    className="w-full h-auto object-cover"
                  />
            </div>
          ) : (
            <div className="overflow-x-auto snap-x snap-mandatory flex gap-2 scrollbar-hide">
              {post.images.map((image) => (
                <div
                  key={image.id}
                  className="snap-center min-w-full rounded-[14px] overflow-hidden flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={image.caption || post.description}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-[18px] mt-4 pt-[14px] border-t border-[#F0E6D8]">
        <span className="flex items-center gap-[7px] text-[#E0654A] font-bold text-[14px]">
          <HeartIcon className="w-[19px] h-[19px]" />
          0
        </span>
        <button
          type="button"
          className="flex items-center gap-[7px] text-[#94887B] font-bold text-[14px] bg-transparent border-none cursor-pointer p-0"
        >
          <CommentIcon className="w-[18px] h-[18px]" />
          0
        </button>
      </div>
    </article>
  );
});
