import Card from "./Card";

export default function CardProps() {
  return (
    <div className="grid grid-cols-4 gap-10 pl-[300px]  ">
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdr_4WUknEJS946kvjC_JDelTmbs6K1X-m9w&s"
        title="beach"
        text="     Completely renovated for the season 2020,Arena Verudela Beach Apartment
        fully equipped and moderly furnished 4-Star self-Service appartmenta
        located on the Adriatic costline by one of most beautiful in pula
      "
      />

      <Card
        image="https://media.istockphoto.com/id/499578760/photo/homemade-barbecue-meat-balls.jpg?s=612x612&w=0&k=20&c=kUdos-naJRGLGQ01O0J_-Tcs-U5w0q1jVhavGvjeYAo="
        title="Food"
        text="    They are made with ground beef or a mix of ground beef and pork, or even with ground reindeer or elk meat, mixed with breadcrumbs soaked in milk or viili, beef stock and finely chopped onions or alternatively.
      "
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszPIzlEiRNMEXcYDNs05H0Iske7JF60nZlw&s"
        title="Sakura"
        text="Even here in India, there are places where you can witness the blooming of sakura (cherry blossom trees) during the much-anticipated Cherry Blossoms season in India.Most of the ornamental cherry trees.
      "
      />
    </div>
  );
}
