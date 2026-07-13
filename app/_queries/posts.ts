import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { buildPostImageUrl, formatRelativeTime, type PostType } from '@/app/_data/posts';

export interface FeedPostImage {
  id: string;
  storage_path: string;
  caption: string | null;
  url: string;
  sort_order: number;
}

export interface FeedPost {
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
  created_at: string;
}

const AVATAR_COLORS = [
  { bg: '#A9D9E8', color: '#1F7A93' },
  { bg: '#CFEBD8', color: '#3E9B6C' },
  { bg: '#F9D2DE', color: '#C56486' },
  { bg: '#FBD8CC', color: '#D9684A' },
  { bg: '#E7DCF6', color: '#7B5FC0' },
  { bg: '#CCD8F4', color: '#4E72C8' },
];

function getAvatarColors(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export async function getPosts(): Promise<FeedPost[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select(`
      *,
      author:users!posts_author_id_fkey(full_name, avatar_url),
      target_child:children!posts_target_child_id_fkey(full_name),
      post_images:post_images(storage_path, caption, sort_order, id)
    `)
    .order('created_at', { ascending: false });

  if (postsError) throw postsError;
  if (!posts) return [];

  return posts.map((row) => {
    const colors = getAvatarColors(row.author?.full_name || row.id);
    const initial = row.author?.full_name?.charAt(0).toUpperCase() || '?';
    const audience =
      row.target_type === 'kid' && row.target_child?.full_name
        ? `familia de ${row.target_child.full_name.split(' ')[0]}`
        : 'toda la sala';

    const images: FeedPostImage[] = (row.post_images || [])
      .sort((a: { sort_order: number }, b: { sort_order: number }) => a.sort_order - b.sort_order)
      .map((img: { id: string; storage_path: string; caption: string | null; sort_order: number }) => ({
        id: img.id,
        storage_path: img.storage_path,
        caption: img.caption,
        url: buildPostImageUrl(img.storage_path),
        sort_order: img.sort_order,
      }));

    return {
      id: row.id,
      authorName: row.author?.full_name || 'Staff',
      authorInitial: initial,
      avatarBg: colors.bg,
      avatarColor: colors.color,
      postType: row.post_type as PostType,
      description: row.description,
      audience,
      images,
      relativeTime: formatRelativeTime(row.created_at),
      created_at: row.created_at,
    };
  });
}
