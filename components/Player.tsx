'use client';

import usePlayer from '@/hooks/usePlayer';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import useGetSongById from '@/hooks/useGetSongById';

import PlayerContent from './PlayerContent';

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-0 
        h-[80px] 
        w-full 
        bg-black 
        px-4 
        py-2
      "
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
