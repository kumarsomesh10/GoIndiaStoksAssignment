const marketStories = [
    {
      "image": "https://i.imgur.com/hFRu16U.jpg",
      "title": "Tech Stocks Soar to New Heights",
      "description": "Technology stocks have surged in recent weeks, driven by strong earnings reports and optimism about the sector's future."
    },
    {
      "image": "https://i.imgur.com/hFRu16U.jpg",
      "title": "Oil Prices Reach 3-Year High",
      "description": "Oil prices have climbed to their highest level in three years, fueled by supply concerns and geopolitical tensions."
    },
    {
      "image": "https://i.imgur.com/hFRu16U.jpg",
      "title": "Cryptocurrency Market Volatility Continues",
      "description": "The cryptocurrency market remains highly volatile, with prices fluctuating widely over the past week."
    },
    {
      "image": "https://i.imgur.com/hFRu16U.jpg",
      "title": "Retail Sector Faces Challenges Amid Pandemic",
      "description": "The retail sector is grappling with challenges such as supply chain disruptions and changing consumer behavior due to the ongoing pandemic."
    },
    {
      "image": "https://i.imgur.com/hFRu16U.jpg",
      "title": "Global Markets Brace for Impact of Inflation",
      "description": "Global markets are on edge as inflation concerns persist, leading to speculation about potential central bank actions."
    }
];

  

export default function Stories() {
    return (
      <div className="storiesContainer border border-grey-300 p-4">
        <div className="hidden sm:hidden md:hidden lg:block heading bg-gray-200 text-red-500 text-center font-bold lg:text-4xl border rounded-lg p-3">MARKET STORIES</div>

        <div className="content my-3">
          {marketStories.map((item, index) => (
            <div key={index} className="story border border-gray-200 mb-4 flex flex-col hover:shadow-xl max-md:text-sm">
              <div className="image-container mb-2">
                <img src={item.image} alt="Story" className="h-40 w-full object-cover " />
              </div>
              <div className="title mb-2 font-bold p-1 pl-3 pr-3">{item.title}</div>
              <div className="description p-1 pl-3 pr-3">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  