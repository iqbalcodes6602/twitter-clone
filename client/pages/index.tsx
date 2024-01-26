import FeedCard from "@/components/FeedCard";

import { BsTwitter } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { FaBell, FaEnvelope, FaBookmark, FaListUl, FaUser, FaEllipsisH } from "react-icons/fa";


interface TwitterSidebarButtons {
  text: string;
  Icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButtons[] = [
  { text: "Home", Icon: <IoIosHome /> },
  { text: "Explore", Icon: <MdExplore />},
  { text: "Notifications", Icon: <FaBell /> },
  { text: "Messages", Icon: <FaEnvelope /> },
  { text: "Bookmarks", Icon: <FaBookmark />},
  { text: "Lists", Icon: <FaListUl />},
  { text: "Profile", Icon: <FaUser />},
  { text: "More", Icon: <FaEllipsisH />},
];


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div  className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 mb-1" >
            <BsTwitter />
          </div>
          <div>
            {SidebarMenuItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-600 rounded-full cursor-pointer mr-4">
                <div className="text-l">{item.Icon}</div>
                <div className="text-l">{item.text}</div>
              </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">Tweet</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-500">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
