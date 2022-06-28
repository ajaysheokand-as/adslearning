import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
    address: "Some Address Here",
    description: "This is first Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
    address: "Some Address Here 2",
    description: "This is Second Meetup",
  },
];

function HomePage(props) {
  return (
    <div>
      {" "}
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://ajaysheokand:vZnbW9RooOJoXp8h@cluster0.hnh3h6x.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
