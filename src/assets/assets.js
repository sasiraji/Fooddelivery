import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'
import un_checked from './un_checked.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked,
    un_checked
}

export const menu_list = [
    {
        menu_name: "Appetizers",
        menu_image: menu_1
    },
    {
        menu_name: "Bread Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Bread",
        menu_image: menu_3
    },
    {
        menu_name: "Burritoes",
        menu_image: menu_4
    },
    {
        menu_name: "Curry",
        menu_image: menu_5
    },
    {
        menu_name: "Dessert",
        menu_image: menu_6
    },
    {
        menu_name: "Rice Bowl",
        menu_image: menu_7
    },
    {
        menu_name: "Rice Variety",
        menu_image: menu_8
    }]

    
 export const food_list = [
  // Appetizers (IDs 1-4)
  {
    _id: "1",
    name: "Chicken Rolls",
    image: food_1,
    price: 12,
    description: "Tender chicken seasoned with aromatic spices, wrapped in a soft roll.",
    category: "Appetizers"
  },
  {
    _id: "2",
    name: "Egg 65",
    image: food_2,
    price: 18,
    description: "Crispy, spicy egg bites garnished with fresh herbs and tangy sauce.",
    category: "Appetizers"
  },
  {
    _id: "3",
    name: "Fried Rolls",
    image: food_3,
    price: 16,
    description: "Golden-fried rolls filled with a blend of vegetables and savory spices.",
    category: "Appetizers"
  },
  {
    _id: "4",
    name: "Veg Paneer",
    image: food_4,
    price: 24,
    description: "Soft paneer cubes and fresh vegetables cooked in a rich, spiced gravy.",
    category: "Appetizers"
  },

  // Bread Rolls (IDs 5-8)
  {
    _id: "5",
    name: "Kathi Egg Roll",
    image: food_5,
    price: 14,
    description: "Classic egg roll wrapped in soft paratha with zesty chutney.",
    category: "Bread Rolls"
  },
  {
    _id: "6",
    name: "Kathi Chicken Roll",
    image: food_6,
    price: 12,
    description: "Succulent chicken pieces wrapped in a soft paratha and drizzled with sauce.",
    category: "Bread Rolls"
  },
  {
    _id: "7",
    name: "Assorted Bread Rolls",
    image: food_7,
    price: 20,
    description: "Freshly baked bread rolls that pair perfectly with any meal.",
    category: "Bread Rolls"
  },
  {
    _id: "8",
    name: "Vegetable Rolls",
    image: food_8,
    price: 15,
    description: "Crispy rolls stuffed with a medley of garden-fresh vegetables.",
    category: "Bread Rolls"
  },

  // Bread (IDs 9-12)
  {
    _id: "9",
    name: "Chapati",
    image: food_9,
    price: 14,
    description: "Traditional unleavened flatbread, soft and ideal for pairing with curries.",
    category: "Bread"
  },
  {
    _id: "10",
    name: "Idli",
    image: food_10,
    price: 22,
    description: "Steamed rice cakes that are light, fluffy, and perfect for breakfast.",
    category: "Bread"
  },
  {
    _id: "11",
    name: "Naan",
    image: food_11,
    price: 10,
    description: "Classic leavened flatbread baked to perfection, ideal with rich gravies.",
    category: "Bread"
  },
  {
    _id: "12",
    name: "Parotta",
    image: food_12,
    price: 12,
    description: "Layered flatbread with a crisp texture, a beloved South Indian delight.",
    category: "Bread"
  },

  // Burritoes (IDs 13-16)
  {
    _id: "13",
    name: "Chicken Tikka Burrito",
    image: food_13,
    price: 12,
    description: "Grilled chicken tikka wrapped in a soft tortilla with zesty sauce.",
    category: "Burritoes"
  },
  {
    _id: "14",
    name: "Mutton Cukka Burrito",
    image: food_14,
    price: 18,
    description: "Tender mutton cooked in aromatic spices and wrapped in a warm tortilla.",
    category: "Burritoes"
  },
  {
    _id: "15",
    name: "Vegetable Burrito",
    image: food_15,
    price: 16,
    description: "Fresh vegetables tossed in flavorful spices, all wrapped in a tortilla.",
    category: "Burritoes"
  },
  {
    _id: "16",
    name: "Paneer Tikka Burrito",
    image: food_16,
    price: 24,
    description: "Marinated paneer cubes grilled and wrapped in a soft tortilla.",
    category: "Burritoes"
  },

  // Curry (IDs 17-20)
  {
    _id: "17",
    name: "Chicken Masala Curry",
    image: food_17,
    price: 14,
    description: "Rich chicken curry simmered with tomatoes and a blend of spices.",
    category: "Curry"
  },
  {
    _id: "18",
    name: "Chicken Curry",
    image: food_18,
    price: 12,
    description: "Classic chicken curry prepared with aromatic spices and herbs.",
    category: "Curry"
  },
  {
    _id: "19",
    name: "Tomato Curry",
    image: food_19,
    price: 20,
    description: "Tangy tomato-based curry with a spicy kick, perfect for any meal.",
    category: "Curry"
  },
  {
    _id: "20",
    name: "Semi Curry",
    image: food_20,
    price: 15,
    description: "A milder curry option with a subtle blend of spices for delicate palates.",
    category: "Curry"
  },

  // Dessert (IDs 21-24)
  {
    _id: "21",
    name: "Bhel Puri",
    image: food_21,
    price: 14,
    description: "Crispy puffed rice mixed with tangy chutneys and fresh vegetables.",
    category: "Dessert"
  },
  {
    _id: "22",
    name: "Ragada Chaat",
    image: food_22,
    price: 22,
    description: "A delightful chaat featuring soft ragada and spicy toppings.",
    category: "Dessert"
  },
  {
    _id: "23",
    name: "Carrot Halwa",
    image: food_23,
    price: 10,
    description: "Traditional Indian dessert made with grated carrots, milk, and aromatic spices.",
    category: "Dessert"
  },
  {
    _id: "24",
    name: "Kara Bhoondhi",
    image: food_24,
    price: 12,
    description: "A unique sweet treat with a blend of flavors to satisfy your dessert cravings.",
    category: "Dessert"
  },

  // Rice Bowl (IDs 25-28)
  {
    _id: "25",
    name: "Chicken Rice Bowl",
    image: food_25,
    price: 12,
    description: "Hearty rice bowl topped with succulent chicken pieces and fresh greens.",
    category: "Rice Bowl"
  },
  {
    _id: "26",
    name: "Egg Rice Bowl",
    image: food_26,
    price: 18,
    description: "Fluffy rice paired with protein-packed eggs for a balanced meal.",
    category: "Rice Bowl"
  },
  {
    _id: "27",
    name: "Vegetable Rice Bowl",
    image: food_27,
    price: 16,
    description: "A colorful bowl of rice loaded with a mix of fresh seasonal vegetables.",
    category: "Rice Bowl"
  },
  {
    _id: "28",
    name: "Mixed Rice Bowl",
    image: food_28,
    price: 24,
    description: "A delightful blend of rice varieties tossed with assorted vegetables.",
    category: "Rice Bowl"
  },

  // Rice Variety (IDs 29-32)
  {
    _id: "29",
    name: "Pepper Chicken Rice",
    image: food_29,
    price: 14,
    description: "Spicy pepper chicken served over a bed of fragrant, steaming rice.",
    category: "Rice variety"
  },
  {
    _id: "30",
    name: "Mutton Pepper Rice",
    image: food_30,
    price: 12,
    description: "Tender mutton with a peppery kick, perfectly complemented by steamed rice.",
    category: "Rice variety"
  },
  {
    _id: "31",
    name: "Powder Rice",
    image: food_31,
    price: 20,
    description: "Rice infused with aromatic spices for an extra burst of flavor.",
    category: "Rice variety"
  },
  {
    _id: "32",
    name: "Pulav",
    image: food_32,
    price: 15,
    description: "Aromatic and savory pulav loaded with vegetables and traditional spices.",
    category: "Rice variety"
  }
];
