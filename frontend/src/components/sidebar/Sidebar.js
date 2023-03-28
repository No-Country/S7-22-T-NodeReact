import { options } from './sidebar-options';

function Sidebar() {
    const sidebarOptions = options.map((option) => (
      <li key={option.id} className="my-2">
        <a href={option.url} className="flex items-center justify-center w-[181px] h-[44px] rounded-md bg-gradient-to-b from-[#D3E4F3] to-[#D3E4F3] text-black font-semibold text-sm leading-4">
          {option.icon}
          <span className="pl-2">{option.label}</span>
        </a>
      </li>
    ));
  
    return (
      <nav className="w-[246px] bg-[#a9bed1] absolute left-0 top-0 flex  justify-center h-full rounded-tr-3xl">
        <div className="bg-[#cbdcec] h-[100px] w-full absolute top-0 rounded-tr-3xl">
        <img src="/eduweb.png" alt="" width="55" className='m-3 ml-8'/>
        </div>
        <div>
        <ul className="text-center mt-[8rem]">{sidebarOptions}</ul>
        </div>
      </nav>
    );
  }

export default Sidebar