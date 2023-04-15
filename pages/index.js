import React from "react";
import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meet up",
    image: "https://picsum.photos/600/600/?random",
    address: "Some address 5, 12345 Some City",
    description: "This a first meetup",
  },
  {
    id: "m2",
    title: "A 2 Meet up",
    image: "https://picsum.photos/600/600/?random",
    address: "222Some address 5, 12345 Some City",
    description: "222This a first meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
