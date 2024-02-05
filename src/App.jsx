import logo from './logo.svg';
import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center  overflow-x-hidden">
     <h1 className='bg-white rounded-lg  w-11/12 text-center
     px-10 py-2 font-bold text-4xl mt-[40px]'>RANDOM GIFS</h1>
 
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>


    </div>
  );
}

export default App;
