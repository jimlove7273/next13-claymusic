import { getPosts, getConcerts } from '@/sanity/sanity-utils';

import HeroSlider from '@/components/HomePage/HeroSlider';
import YoutubeList from '@/components/HomePage/YoutubeList';
import AlbumList from '@/components/HomePage/AlbumList';

export default async function Home() {
  const posts = await getPosts();
  const concerts = await getConcerts();

  return (
    <>
      <input type="range" id="volume-control" min="0" max="100" />
      <HeroSlider />
      <AlbumList />
      <YoutubeList />
      <div className="w-full max-w-[1280px] mx-auto">
        POSTS:
        <br />
        {posts.map((post) => (
          <div key={post._id}>{post.title}</div>
        ))}
        <br />
        CONCERTS:
        <br />
        {concerts.map((concert) => (
          <div key={concert._id}>{concert.name}</div>
        ))}
      </div>
    </>
  );
}
