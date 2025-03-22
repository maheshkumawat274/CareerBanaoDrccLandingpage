import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  
  {
    id: 1,
    name: "Sandip University, Bihar",
    image: "https://www.sandipfoundation.org/images/Leading-Polytechnic-Institute-in-India.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXW7e2vg6tDCQncmYXYouIgz3i7p-TbPJzA&s",
    highlights: ["UGC Approved", "60+ Programs", "Strong Placement Support"],
    location: "Madhubani, Bihar",
    link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Sandip_University&utm_campaign=drcc%20landingpage"
  },
  {
    id: 2,
    name: "Satyam Shivam Sundaram Group of Institutions",
    image: "https://assets.collegedunia.com/public/college_data/images/appImage/1599570681ad26cfdd057e6ec77418bd065982c9b51024x768.jpeg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcufZ6MRe8oYZGNHpalS-B1ShUxw6Rje0Hmw&s",
    highlights: ["Career-Oriented Programs", "Modern Infrastructure", "Strong Placement Support"],
    location: "Patna, Bihar",
    link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=SSGOI_Bihar&utm_campaign=drcc%20landingpage"
},
{
  id: 3,
  name: "Kusumraj Educational Institutions",
  image: "https://www.sikshapedia.com/public/data/colleges/kusum-raj-institute-of-pharmacy-bikram-bihar/taIqJWd6g4.webp",
  logo: "https://content.jdmagicbox.com/comp/patna/j1/0612px612.x612.220613134500.y3j1/catalogue/kusumraj-educational-institutions-bikram-patna-colleges-gi8fzwks8t-250.jpg",
  highlights: ["Quality Education", "Modern Infrastructure", "Industry-Oriented Courses"],
  location: "Patna, Bihar",
  link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Kusumraj_Educational_Institutions&utm_campaign=drcc%20landingpage"
},
{
  id: 4,
  name: "MGM Group of Institutions",
  image: "https://universitykart.com/Content/upload/admin/q4ic5hrf.la4.jpeg",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPqJ3QWYKpST2GUw-xpt33eH7oPokdbYSpQ&s",
  highlights: ["NAAC Accredited", "State-of-the-Art Facilities", "Strong Placement Record"],
  location: "Patna, Bihar",
  link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=MGM_Group_of%20_Institutions&utm_campaign=drcc%20landingpage"
},


  {
    id: 5,
    name: "RIT Roorkee",
    image: "https://images.shiksha.com/mediadata/images/1709814970phpnSEDD1.jpeg",
    logo: "https://ritroorkee.com/wp-content/uploads/2024/03/Untitled-design-31.png",
    highlights: ["AICTE Approved", "Industry-Focused Programs", "Excellent Placement Record"],
    location: "Roorkee, Uttarakhand",
    link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=RIT_Roorkee&utm_campaign=drcc%20landingpage"
  },
  {
    id: 6,
    name: "Uttaranchal University",
    image: "https://www.onlineuu.in/assets/images/gallery-1.jpg",
    logo: "https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/663e0018128475ea76c30c44_Uttranchal%20University%20(1).jpeg",
    highlights: ["NAAC A+ Accredited", "UGC Approved", "Excellent Placement Record"],
    location: "Dehradun, Uttarakhand",
    link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Uttaranchal_University&utm_campaign=drcc%20landingpage"
  },
    {
      id: 7,
      name: "Maharishi Markandeshwar University (MMU)",
      image: "https://www.mmambala.org/images/slider/bg1.jpg",
      logo: "https://shikshaview.com/wp-content/uploads/2020/05/MMU-AMBALA-LOGO.jpg",
      highlights: ["Ranked Among Top Universities", "Multiple Programs", "High Placement Rate"],
      location: "Mullana, Haryana",
      link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Maharishi_Markandeshwar&utm_campaign=drcc%20landingpage"
    },
    {
      id: 8,
      name: "Amritsar Group of Colleges",
      image: "https://media.collegedekho.com/media/img/institute/crawled_images/None/15801036831597567_520691991384779_946714222_o.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIJAnrOpTmo3RGpNBsQi06hgMgN04Bvq1MQ&s",
      highlights: ["NAAC Accredited", "50+ Programs", "Excellent Placement Record"],
      location: "Amritsar, Punjab",
      link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Amritsar_Group_of_Colleges&utm_campaign=drcc%20landingpage"
    },
    {
        id: 9,
        name: "Gulzar Group of Institutes",
        image: "https://media.collegedekho.com/media/img/institute/crawled_images/None/GFDDGHGHGDFH.jpeg",
        logo: "https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=0.483x0.175/https://assets.about.me/background/users/g/u/l/gulzargroupofinstitutions_1627114359_593.jpg",
        highlights: ["Industry-Oriented Programs", "Global Collaborations", "High Placement Rate"],
        location: "Ludhiana, Punjab",
        link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Gulzar_Group_of_Institutes&utm_campaign=drcc%20landingpage"
    },
      {
          id: 10,
          name: "Kashi Institute of Technology",
          image: "https://kashiit.ac.in/wp-content/uploads/2022/02/1-min-scaled.jpg",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPXq6rBeluIJQ4N37vU98Ukbk2yqP2prL1Q&s",
          highlights: ["AICTE Approved", "Specialized Engineering Programs", "Strong Industry Tie-ups"],
          location: "Varanasi, Uttar Pradesh",
          link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Kashi_Institute&utm_campaign=drcc%20landingpage"
      },
      {
        id: 11,
        name: "Suresh Gyan Vihar University",
        image: "https://www.gyanvihar.org:3001/uploads/1609137319883o12.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gyan_Vihar_Logo.jpg",
        highlights: ["NAAC 'A' Accredited", "Innovative Learning", "100% Placement Assistance"],
        location: "Jaipur, Rajasthan",
        link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Suresh_Gyan_Vihar_University&utm_campaign=drcc%20landingpage"
    },
    {
      id: 12,
      name: "Mewar University",
      image: "https://images.shiksha.com/mediadata/images/1709797742phpXM3tp9.jpeg",
      logo: "https://intform.mewaruniversity.org/assets/media/miu%20logo.png",
      highlights: ["UGC Recognized", "Industry-Oriented Courses", "Global Collaborations"],
      location: "Chittorgarh, Rajasthan",
      link: "https://enquiry.careerbanao.org/?utm_source=drcc_website&utm_medium=Mewar_University&utm_campaign=drcc%20landingpage"
  }
  
      
    
    
];

const CollegeCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 300); 

  return () => clearTimeout(handler);
}, [searchTerm]);

const uniqueColleges = Array.from(
  new Map(colleges.map((college) => [college.id, college])).values()
);

const filteredColleges = uniqueColleges.filter(
  (college) =>
    college.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    college.location?.toLowerCase().includes(debouncedSearch.toLowerCase())
);

const settings = {
  dots: false,
  infinite: filteredColleges.length > 1,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: debouncedSearch.length === 0,
  pauseOnHover: true,
  arrows:true,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const handleClick = (url: string) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    newTab.opener = null;
  }
};


  
  return (
    <div className=" font-poppins px-4 sm:px-14">
  {/* 🔹 Section Heading */}
  <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8 pt-14">
    <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
    DRCC APPROVED UNIVERSITY
  </h1>

  {/* 🔹 Search Section */}
  <div className="text-center p-6">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
      CareerBanao Bihar Student Credit Card Admission Program 2024
    </h1>
    <h1 className="text-lg md:text-xl font-semibold text-purple-700">
      DRCC Admission Counseling 2024
    </h1>
    <p className="text-gray-600 mt-3 text-sm md:text-base">
      The Bihar Student Credit Card Scheme provides financial support to students 
      for higher education. Apply now and continue your studies without financial barriers.
    </p>
    <p className="text-gray-500 text-sm mt-2">
      Enter your preferred <b>college name or location</b> to find admission details.
    </p>

    {/* 🔹 Search Input */}
    <input
      type="text"
      placeholder="Search by college name or location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mt-4 p-2 w-full md:w-1/2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
    />
  </div>

  {/* 🔹 Jab search term ho, tab grid dikhaye */}
  {searchTerm.length > 0 ? (
    <div className="w-full flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
    {filteredColleges.length > 0 ? (
      filteredColleges.map((college) => (
        <div key={college.id} className="bg-white min-w-[300px] shadow-lg rounded-lg overflow-hidden p-4">
          <div className="relative">
            <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
            <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"/>
          </div>
          <h1 className="text-md font-semibold text-purple-700 mt-2">{college.name}</h1>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
          </p>
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            {college.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-500 mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
          <a onClick={() => handleClick(college.link)}>
            <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
              <FaAward className="inline-block mr-2" /> Apply now
            </button>
          </a>
        </div>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-600">No colleges found.</p>
    )}
  </div>
  
  ) : (
    // 🔹 Jab search term empty ho, tab slider dikhaye
    <Slider {...settings} className="mx-4">
      {filteredColleges.map((college) => (
        <div key={college.id} className="px-2 pt-5 pb-5">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
              <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md" />
            </div>
            <div className="p-4">
              <h1 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                <FaUniversity className="text-purple-700 mr-2" />
                {college.name}
              </h1>
              <p className="text-sm text-gray-600 flex items-center mb-3">
                <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {college.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <a onClick={() => handleClick(college.link)}>
                <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
                  <FaAward className="inline-block mr-2" /> Apply now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )}
</div>

  );
};
export default CollegeCards;

