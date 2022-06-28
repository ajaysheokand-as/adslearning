import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetails";
function MeetupDetails() {
  return (
    <div>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg"
        id="m1"
        title="A First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup"
      />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
