import ParkList from "../components/parks/ParkList";

const dummyData = [
  {
    id: "m1",
    title: "Yosemite National Park",
    image:
      "https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    address: "Tioga Rd Hwy 120 & Hwy 140 Yosemite National Park, CA 95389",
    description:
      "Yosemite National Park is a popular landmark that is located in the state of California. It is known for being one of the most majestic and beautiful destinations in the United States.",
  },
  {
    id: "m2",
    title: "Haleakala National Park",
    image:
      "https://national-park.com/wp-content/uploads/2016/04/Welcome-to-the-Haleakala-National-Park.jpg",
    address: "30,000 Haleakalā Hwy, Kula, HI 96790",
    description:
      "Haleakalā National Park is on the Hawaiian island of Maui. It’s home to the dormant Haleakalā Volcano and endangered Hawaiian geese. The Leleiwi and Kalahaku overlooks on the steep Crater Road have views across the West Maui Mountains. Rugged trails in the Summit District pass cinder cones and lava flows. In the coastal area of Kīpahulu are the Pools of Ohe’o, freshwater pools and waterfalls set amid bamboo forest.",
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <ParkList parks={dummyData} />
    </div>
  );
}

export default AllMeetupsPage;
