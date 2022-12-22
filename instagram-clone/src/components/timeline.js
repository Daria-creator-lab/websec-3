import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  const { photos } = usePhotos();
 
  return (
    <div className="container col-span-2">
      {!photos ?(
        <p className='font-bold'>loading...</p>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)          
      ) : (
        <p className="text-center text-2xl">Follow people to see Photos</p>          
      )}
    </div>
  );
}

