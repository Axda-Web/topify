'use client';

import MediaItem from '@/components/MediaItem';
import { Song } from '@/types';

interface SearchContentProps {
  songs: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No songs available.
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          {/* TODO: Add like Button here */}
        </div>
      ))}
    </div>
  );
};
export default SearchContent;
