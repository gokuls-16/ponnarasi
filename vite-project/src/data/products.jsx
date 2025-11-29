import {useState,createContext} from "react"

export   const ProductContext = createContext()
  
export const ProductProvider =({children})=>{
    const[products,setProducts]=useState(

    [
        { _id: "1", name: "iPhone 16  pro max", price: 69999, description: "Latest iPhone with A16 chip", image: "https://picsum.photos/id/1010/600/600" },
        { _id: "2", name: "Samsung S24", price: 62999, description: "Samsung flagship smartphone", image: "https://picsum.photos/id/1011/600/600" },
        { _id: "3", name: "Redmi Note 13", price: 15999, description: "Budget smartphone with big battery", image: "https://picsum.photos/id/1012/600/600" },
      
        // Smartphones
        { _id: "4", name: "OnePlus 12", price: 56999, description: "Flagship killer", image: "https://picsum.photos/id/1013/600/600" },
        { _id: "5", name: "Google Pixel 8", price: 64999, description: "Pure Android experience", image: "https://picsum.photos/id/1014/600/600" },
        { _id: "6", name: "Realme Narzo 70", price: 14999, description: "Smooth performance", image: "https://picsum.photos/id/1015/600/600" },
        { _id: "7", name: "Vivo V30 Pro", price: 42999, description: "Premium design", image: "https://picsum.photos/id/1016/600/600" },
        { _id: "8", name: "Poco X6 Pro", price: 24999, description: "Gaming beast", image: "https://picsum.photos/id/1018/600/600" },
      
        // Laptops
        { _id: "9", name: "MacBook Air M2", price: 99999, description: "Lightweight laptop", image: "https://picsum.photos/id/1020/600/600" },
        { _id: "10", name: "Dell XPS 13", price: 124999, description: "Premium ultrabook", image: "https://picsum.photos/id/1021/600/600" },
        { _id: "11", name: "HP Pavilion 15", price: 58999, description: "Value laptop", image: "https://picsum.photos/id/1022/600/600" },
        { _id: "12", name: "Lenovo Legion 5", price: 89999, description: "Gaming laptop", image: "https://picsum.photos/id/1023/600/600" },
      
        // Headphones
        { _id: "13", name: "Sony WH-1000XM5", price: 29999, description: "Noise cancellation", image: "https://picsum.photos/id/1024/600/600" },
        { _id: "14", name: "Boat Rockerz 550", price: 1999, description: "Budget wireless", image: "https://picsum.photos/id/1025/600/600" },
        { _id: "15", name: "JBL Tune 760NC", price: 5999, description: "ANC headphones", image: "https://picsum.photos/id/1026/600/600" },
      
        // Monitors
        { _id: "16", name: "Samsung 4K Monitor", price: 32999, description: "Sharp 4K display", image: "https://picsum.photos/id/1027/600/600" },
        { _id: "17", name: "LG Ultrawide 34", price: 49999, description: "Extra wide screen", image: "https://picsum.photos/id/1028/600/600" },
      
        // Gaming Consoles
        { _id: "18", name: "PlayStation 5", price: 49999, description: "Next-gen console", image: "https://picsum.photos/id/1029/600/600" },
        { _id: "19", name: "Xbox Series X", price: 52999, description: "Powerful console", image: "https://picsum.photos/id/1030/600/600" },
        { _id: "20", name: "Nintendo Switch", price: 29999, description: "Hybrid console", image: "https://picsum.photos/id/1031/600/600" },
      
        // Bags
        { _id: "21", name: "Wildcraft Backpack", price: 1499, description: "Durable bag", image: "https://picsum.photos/id/1032/600/600" },
        { _id: "22", name: "American Tourister Bag", price: 3999, description: "Travel bag", image: "https://picsum.photos/id/1033/600/600" },
      
        // Shoes
        { _id: "23", name: "Nike Air Max", price: 7999, description: "Comfort sneakers", image: "https://picsum.photos/id/1034/600/600" },
        { _id: "24", name: "Adidas Superstar", price: 6999, description: "Classic shoes", image: "https://picsum.photos/id/1035/600/600" },
        { _id: "25", name: "Puma Running Shoes", price: 3499, description: "Sports shoes", image: "https://picsum.photos/id/1036/600/600" },
      
        // Smartwatches
        { _id: "26", name: "Apple Watch 9", price: 41999, description: "Smart wearable", image: "https://picsum.photos/id/1037/600/600" },
        { _id: "27", name: "Galaxy Watch 6", price: 29999, description: "Android watch", image: "https://picsum.photos/id/1038/600/600" },
        { _id: "28", name: "Amazfit GTS 4", price: 6999, description: "Fitness tracker", image: "https://picsum.photos/id/1039/600/600" },
      
        // Sunglasses
        { _id: "29", name: "Ray-Ban Aviator", price: 9999, description: "Premium shades", image: "https://picsum.photos/id/1040/600/600" },
        { _id: "30", name: "Fastrack Sunglasses", price: 1299, description: "Trendy eyewear", image: "https://picsum.photos/id/1041/600/600" },
      
        // Cameras
        { _id: "31", name: "Canon EOS 1500D", price: 42999, description: "Beginner DSLR", image: "https://picsum.photos/id/1042/600/600" },
        { _id: "32", name: "Sony A7 III", price: 159999, description: "Professional camera", image: "https://picsum.photos/id/1043/600/600" },
      
        // Keyboards
        { _id: "33", name: "Logitech MX Keys", price: 10999, description: "Premium keyboard", image: "https://picsum.photos/id/1044/600/600" },
        { _id: "34", name: "Redragon RGB Keyboard", price: 3499, description: "Gaming keyboard", image: "https://picsum.photos/id/1045/600/600" },
      
        // Mice
        { _id: "35", name: "Logitech MX Master 3", price: 8999, description: "Ergonomic mouse", image: "https://picsum.photos/id/1046/600/600" },
        { _id: "36", name: "Razer Viper Mini", price: 2999, description: "Gaming mouse", image: "https://picsum.photos/id/1047/600/600" },
      
        // Personal Care
        { _id: "37", name: "Philips Trimmer", price: 1299, description: "Rechargeable trimmer", image: "https://picsum.photos/id/1048/600/600" },
        { _id: "38", name: "Havells Hair Dryer", price: 999, description: "Powerful dryer", image: "https://picsum.photos/id/1049/600/600" },
      
        // Home Appliances
        { _id: "39", name: "Dyson V11 Vacuum", price: 44999, description: "Cordless vacuum", image: "https://picsum.photos/id/1050/600/600" },
        { _id: "40", name: "Prestige Air Fryer", price: 5999, description: "Healthy cooking", image: "https://picsum.photos/id/1051/600/600" },
      
        // Storage
        { _id: "41", name: "Sandisk 128GB", price: 899, description: "High-speed USB", image: "https://picsum.photos/id/1052/600/600" },
        { _id: "42", name: "Seagate 1TB HDD", price: 3499, description: "Portable storage", image: "https://picsum.photos/id/1053/600/600" },
      
        // Power
        { _id: "43", name: "Mi 20000mAh Powerbank", price: 1999, description: "Fast charging", image: "https://picsum.photos/id/1054/600/600" },
        { _id: "44", name: "JBL Go 3 Speaker", price: 2499, description: "Portable speaker", image: "https://picsum.photos/id/1055/600/600" },
      
        // Decor
        { _id: "45", name: "LED Desk Lamp", price: 799, description: "Adjustable lamp", image: "https://picsum.photos/id/1056/600/600" },
        { _id: "46", name: "Wall Art Frame", price: 1499, description: "Decorative frame", image: "https://picsum.photos/id/1057/600/600" },
      
        // Fashion
        { _id: "47", name: "Leather Wallet", price: 899, description: "Men's wallet", image: "https://picsum.photos/id/1058/600/600" },
        { _id: "48", name: "Denim Jacket", price: 2499, description: "Stylish jacket", image: "https://picsum.photos/id/1059/600/600" },
      
        // Travel
        { _id: "49", name: "Skybags Trolley", price: 2999, description: "Travel suitcase", image: "https://picsum.photos/id/1060/600/600" },
        { _id: "50", name: "Safari Cabin Bag", price: 2499, description: "Lightweight luggage", image: "https://picsum.photos/id/1061/600/600" }
      ] );
    



  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};