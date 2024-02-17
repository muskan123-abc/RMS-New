// Fan favorites
import fanFavoritesImg1 from "../../assets/images/fanFavorites/webp//fan_favorites_card_img1.webp";
import fanFavoritesImg2 from "../../assets/images/fanFavorites/webp/fan_favorites_card_img2.webp";
import fanFavoritesImg3 from "../../assets/images/fanFavorites/webp/fan_favorites_card_img3.webp";
import fanFavoritesImg4 from "../../assets/images/fanFavorites/webp/fan_favorites_card_img4.webp";
// video Slidre
import movieImage1 from "../../assets/images/watchVideos/guardiansofglaxy.webp";
import movieImage2 from "../../assets/images/watchVideos/ps-1.webp";
//
// FEATURED-TODAY
import featuredSliderImg1 from "../../assets/images/featuredToday/featured_slider_img1.webp";
import featuredSliderImg2 from "../../assets/images/featuredToday/featured_slider_img2.webp";
import featuredSliderImg3 from "../../assets/images/featuredToday/featured_slider_img3.webp";
//
import moviesposture from "../../assets/images/webp/robin_hood.webp";

// RECENTLY VIEWED
import recentlyViewedImg1 from "../../assets/images/recentlyViewed/img-1.webp";
import recentlyViewedImg2 from "../../assets/images/recentlyViewed/img-2.webp";
import recentlyViewedImg3 from "../../assets/images/recentlyViewed/img-3.webp";
import recentlyViewedImg4 from "../../assets/images/recentlyViewed/img-4.webp";
import { FooterFacebookIcon, FooterInstagramIcon, FooterLinkedinIcon } from "./Icons";
export const FanFavoriteContent = [
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg1,
    rating: 3,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg2,
    rating: 4,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg3,
    rating: 2,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg4,
    rating: 5,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg1,
    rating: 1,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg2,
    rating: 3,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg3,
    rating: 5,
  },
  {
    title: "In elit nullam sit quam",
    image: fanFavoritesImg4,
    rating: 4,
  },
];

//
export const watchVideosSlider = [
  {
    image: movieImage1,
    title: "Id tristique imperdiet volutpat lectus nam.",
    url: "https://www.youtube.com/embed/JqcncLPi9zw?si=txaaPpNiQOIR2MzS",
    rating: "4",
  },
  {
    image: movieImage2,
    title: "Id tristique imperdiet volutpat lectus nam.",
    url: "https://www.youtube.com/embed/kwy1xpqMHsM?si=gdnyMSY5AFIq3gta",
    rating: "5",
  },
  {
    image: movieImage1,
    title: "Id tristique imperdiet volutpat lectus nam.",
    url: "https://www.youtube.com/embed/JqcncLPi9zw?si=txaaPpNiQOIR2MzS",
    rating: "4",
  },
  {
    image: movieImage2,
    title: "Id tristique imperdiet volutpat lectus nam.",
    url: "https://www.youtube.com/embed/kwy1xpqMHsM?si=gdnyMSY5AFIq3gta",
    rating: "4",
  },
];

//

//MOST-RARED SLIDER DATA
export const mostRatedSliderHome = [
  {
    image: moviesposture,
    title: "Robin Hood",
    title2: "There’s even more to watch.",
    description:
      " Odio elit nulla tellus elementum. Odio proin dignissim venenatis ullamcorper. Sed enim et sed lorem. Quis et potenti tortor arcu egestas ac tortor non. Aliquet sem varius in eget sodales nisl pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet phasellus sociis urna. Faucibus quis dui etiam hendrerit amet pellentesque pellentesque. ",
    rating: "4",
  },
  {
    image: moviesposture,
    title: "Most Wanted",
    title2: "There’s to watch.",
    description:
      " Odio elit nulla tellus elementum. Odio proin dignissim venenatis ullamcorper. Sed enim et sed lorem. Quis et potenti tortor arcu egestas ac tortor non. Aliquet sem varius in eget sodales nisl pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet phasellus sociis urna. Faucibus quis dui etiam hendrerit amet pellentesque pellentesque.",
    rating: "4",
  },
  {
    image: moviesposture,
    title: "Superman",
    title2: "More to watch.",
    description:
      " Odio elit nulla tellus elementum. Odio proin dignissim venenatis ullamcorper. Sed enim et sed lorem. Quis et potenti tortor arcu egestas ac tortor non. Aliquet sem varius in eget sodales nisl pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet phasellus sociis urna. Faucibus quis dui etiam hendrerit amet pellentesque pellentesque.",
    rating: "4",
  },
];
//
// REVIEWS RATING DATA
export const reviewList = [
  {
    title: "Sed felis nisl et ultrices",
    date: "22/05/2023",
    rating: "5",
    description:
      "Odio eget vestibulum pulvinar interdum nisl pellentesque imperdiet ut mattis. Duis vel lacus nulla dapibus auctor arcu viverra eget sed. Laoreet in elit bibendum quisque dictum tellus ipsum. Lacus sem mus non vel suspendisse posuere elit.",
  },
  {
    title: "Sed felis nisl et ultrices",
    date: "22/05/2023",
    rating: "5",
    description:
      "Odio eget vestibulum pulvinar interdum nisl pellentesque imperdiet ut mattis. Duis vel lacus nulla dapibus auctor arcu viverra eget sed. Laoreet in elit bibendum quisque dictum tellus ipsum. Lacus sem mus non vel suspendisse posuere elit.",
  },
];
// FOOTER LINKS
export const footerList = [
  {
    title: "Home",
    footerLinks: [
      {
        link: "Watch videos",
        url: "/#watchvideo",
      },
      {
        link: "Fan favorites",
        url: "/#fanfavorites",
      },
      {
        link: "Most rated movies",
        url: "/#mostrated",
      },
      {
        link: "Featured",
        url: "/#featured",
      },
      {
        link: "Reviews & Rating",
        url: "/#reviews",
      },
      {
        link: "Recently Viewed",
        url: "/#recentlyviewed",
      },
      {
        link: "Faqs",
        url: "#faqs-list",
      },
    ],
  },
  {
    title: "Category",
    footerLinks: [
      {
        link: "Links",
        url: "/category",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
    ],
  },
  {
    title: "Item",
    footerLinks: [
      {
        link: "Links",
        url: "/my-product",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
    ],
  },
  {
    title: "My account",
    footerLinks: [
      {
        link: "Links",
        url: "/account-detail",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
      {
        link: "Links",
        url: "/",
      },
    ],
  },
];

// FAQ DATA
export const faqList = [
  {
    title: "Q1. Fermentum in hac mattis viverra orem commodo?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
  {
    title: "Q2. Viverra ipsum gravida etiam sem iaculis?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
  {
    title: "Q3. Morbi curabitur suscipit id posuere?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
  {
    title: "Q4. Cursus sit sit velsem accumsan varius sed auris?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
  {
    title: "Q5. Dui tincidunt sed eu convallis quis ultrices?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
  {
    title: "Q6. Arcu lorem faucibus eu integer orci pretium faucibus?",
    description:
      "Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent. ",
  },
];

// FEATURED-TODAY DATA
export const featuredSlider = [
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg1,
    rating: "4",
  },
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg2,
    rating: "4",
  },
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg3,
    rating: "4",
  },
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg1,
    rating: "4",
  },
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg2,
    rating: "4",
  },
  {
    title: "Sed felis nisl et ultrices",
    description: "Arcu egestas ac tortor non",
    image: featuredSliderImg3,
    rating: "4",
  },
];

// RECENTLY-VIEWED DATA
export const recentlyViewedSlider = [
  {
    title: "Nam lacus leo blandit morbi",
    image: recentlyViewedImg1,
  },
  {
    title: "Risus at in euismod fringilla",
    image: recentlyViewedImg2,
  },
  {
    title: "Purus mollis vitae magna",
    image: recentlyViewedImg3,
  },
  {
    title: "Leo id nisi nulla adipiscing",
    image: recentlyViewedImg4,
  },
  {
    title: "Nam lacus leo blandit morbi",
    image: recentlyViewedImg1,
  },
  {
    title: "Risus at in euismod fringilla",
    image: recentlyViewedImg2,
  },
  {
    title: "Purus mollis vitae magna",
    image: recentlyViewedImg3,
  },
  {
    title: "Leo id nisi nulla adipiscing",
    image: recentlyViewedImg4,
  },
];
// SHARE VIEW IN ITEM PAGE
export const ShareList = [
  {
    link: "",
    icon: <FooterInstagramIcon />,
    title: "Instagram",
  },
  {
    link: "",
    icon: <FooterFacebookIcon />,
    title: "Facebook",
  },
  {
    link: "",
    icon: <FooterLinkedinIcon />,
    title: "Linkdin",
  },
  {
    link: "",
    icon: <FooterInstagramIcon />,
    title: "Instagram",
  },
  {
    link: "",
    icon: <FooterFacebookIcon />,
    title: "Facebook",
  },
  {
    link: "",
    icon: <FooterLinkedinIcon/>,
    title: "Linkdin",
  },
  {
    link: "",
    icon: <FooterFacebookIcon />,
    title: "Facebook",
  },
];




