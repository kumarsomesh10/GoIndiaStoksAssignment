const fouremData = [
    {
      "username": "Stocklover",
      "sector" : "Sector 2",
      "review": "I have a long-term investment approach when it comes to stocks. I focus on blue-chip companies with strong fundamentals. One of my best investments has been in a leading tech company.",
      "timestamp": "3 hours ago",
      "views": 700,
      "likes": 300,
      "comments": 50,
      "image": "https://i.imgur.com/bUo32iq.png"
    },
    {
      "username": "DayTrader101",
      "sector" : "Sector 2",
      "review": "I day trade stocks and focus on short-term price movements. I use technical analysis and market news to make quick trading decisions. It's a high-risk, high-reward strategy that requires constant monitoring.",
      "timestamp": "1 hour ago",
      "views": 900,
      "likes": 400,
      "comments": 70,
      "image": "https://i.imgur.com/bUo32iq.png"
    },
    {
      "username": "InvestmentPro",
      "sector" : "Sector 2",
      "review": "I believe in a balanced investment approach, including stocks, bonds, and real estate. Diversification is key to managing risk and achieving long-term financial goals.",
      "timestamp": "4 days ago",
      "views": 600,
      "likes": 200,
      "comments": 30,
      "image": "https://i.imgur.com/bUo32iq.png"
    },
    {
      "username": "StockWatcher",
      "sector" : "Sector 2",
      "review": "I closely follow stock market trends and news to stay informed about potential investment opportunities. One of my successful investments was in a healthcare company that developed a breakthrough drug.",
      "timestamp": "6 days ago",
      "views": 800,
      "likes": 350,
      "comments": 60,
      "image": "https://i.imgur.com/bUo32iq.png"
    },
    {
      "username": "PortfolioBuilder",
      "sector" : "Sector 2",
      "review": "I build diversified portfolios for clients based on their risk tolerance and investment goals. Stocks are a key component of most portfolios, offering growth potential over the long term.",
      "timestamp": "1 week ago",
      "views": 1000,
      "likes": 500,
      "comments": 80,
      "image": "https://i.imgur.com/bUo32iq.png"
    }
  ]
  
  
  import { AiOutlineHeart ,AiOutlineEye, AiOutlineShareAlt} from "react-icons/ai";
  
  import { BiComment } from "react-icons/bi";
  
  export default function Fourem() {
    return (
      <div className="fouremContainer border border-gray-300 p-4">
        <div className="hidden sm:hidden md:hidden lg:block heading bg-gray-200 text-red-500 text-center font-bold lg:text-4xl border rounded-lg p-3">DISCUSSION FORUM</div>



        <div className="content my-3 ">
          {fouremData.map((item, index) => (
            <div key={index} className="review border border-gray-200 rounded-lg shadow-md hover:shadow-xl p-4 mb-4 flex">
              <div className="image mr-4">
                <img src={item.image} alt="User Avatar" className="h-12  w-12 rounded-full" />
              </div>
              <div className="details flex-1">
                <div className="line-1 flex justify-between items-center mb-2">
                  <div className="flex ">
                  <div className="username font-bold text-lg max-md:text-sm">{item.username} </div>
                  <div className="sector ml-4 pl-3 pr-3 text-white max-md:text-sm bg-blue-700 broder rounded-full"> {item.sector}</div>
                  </div>
                  <div className="timestamp flex text-blue-700 max-md:text-sm">{item.timestamp}</div>
                </div>
                <div className="line-2 mb-2 cursor-text max-md:text-sm">{item.review}</div>
                <div className="line-3 flex items-center justify-between max-md:text-sm">
                  <div className="likes flex items-center cursor-pointer "><AiOutlineHeart className="mr-1" /> {item.likes}</div>
                  <div className="views flex items-center cursor-pointer"><AiOutlineEye className="mr-1" /> {item.views}</div>
                  <div className="comments flex items-center cursor-pointer"><BiComment className="mr-1" /> {item.comments} Comments</div>
                  <div className="share flex items-center cursor-pointer"><AiOutlineShareAlt className="mr-1" /> Share </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  