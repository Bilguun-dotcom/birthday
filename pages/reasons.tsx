import styles from "../styles/Home.module.css";
import Header from "./components/header";
import { Button } from "../node_modules/@fluentui/react-button";
import { RiHeartsFill } from "react-icons/ri";
import React, { useState } from "react";

const reason = [
  "Your wild curiosity",
  "Empathy greather than I've ever seen",
  "You're a funny girl xd",
  "Fellow introvert xd",
  "You always try to listen to me",
  "You remember every little details about me and us <3",
  "Highly intellectual person xd",
  "Gave me a very cute book",
  "Have a killer body :>",
  "You simply make me better person",
  "You're a harmony in my chaotic world",
  "Always try to understand me",
  "You will be great mom xd",
  "Your inner world is deeper than the ocean",
  "Hardworking girl xd",
  "Cutest girl out there <3",
  "Perfect height for me xd",
  "An amazing kisser ^^",
  "You get my bad jokes xd",
  "We shared very intimate moments xd",
  "From the start I feel like I've had known you're the one xd",
  "My cheesy little girl xd",
  "Good dancer xd I think",
  "Coolest girl I know",
  "Cute when you're embarassed",
  "Funny when I roast you",
  "We have almost same song taste xd",
  "We like marvel movies and other tv shows",
  "Our relationship had a rough start but it's going quite strong xd",
  "Good cook I think xd",
  "Good at coding xd I think xd",
  "Pretty athletic girl xd",
  "We have so many interesting things planned",
  "Always encourage and motivate me",
  "You're the comfort I seek when I'm down <3",
  "Your smell is sexy xd you said it so ... xd",
  "Sometimes a little silly xd",
  "My partner in crime xd",
  "Have a beautiful voice ^^",
  "Very talented xd can sing and play guitar etc",
  "Like to talk about our dreams xd",
  "I really miss you T.T",
  "Have a runny nose and I find it cute xd",
  "Intellectually motivate me",
  "I always love to spend time with you xd",
  "I could easily tell you my secrets",
  "My princess <3",
  "You always find meaning from little things",
  "You always try to see good in people",
  "You're kind sweet and generous <3",
  "My proud independent girl",
  "You showed me your childhood memories <3",
  "You always are to yourself",
  "You can handle your shyness when you're doing good for others <3",
  "You're very brave and I'm very proud of your decisions",
  "You truely care your family and friends",
  "You take me as I am",
  "You make me happiest and luckiest guy",
  "It's only positiveness around you",
  "I like the way you eat xd",
  "I like the face you make when you watch sad movies",
  "I like the way you smile when I say something embarrassing things",
  "I like the way you kiss me in public like no one else is around xd",
  "I love your humour xd",
  "You teach me many things like pun, english words, how to handle shyness ...",
  "You're very talented at drawing xd",
  "You send me hilarious gifs xd",
  "You play boy games with me xd",
  "Very attractive girl xd",
  "You do silly things with me xd",
  "We're both hopeless romantic xd",
  "I could talk about anything with you xd",
  "I could be by myself around you",
  "Competent at everything you do",
  "When we're together it's effortlessly romantic",
  "You told me I'm cute xd, no take back xd",
  "Fancy girl xd especially those black outfits and the chocker aww <3",
  "Many things in common xd even the phone and the fact that I cannot sit in car too long",
  "Always take care of me xd",
  "Boobies xd",
  "I just want to hold you so tight <3",
  "I know you'll be terrific mom xd",
  "Bookworm xd",
  "Very interesting hobbies like meditation guide xd",
  "Seem to genuinely care about me",
  "You are always honest with me xd",
  "Your imagination is wild xd the world is your oyster xd",
  "Your thoughtfulness surprises me xd",
  "I could always rely on you xd",
  "Childish but mature at the same time xd",
  "Sexy xd",
  "You make me feel special xd",
  "You don't judge me ^^",
  "Cutie xd",
  "We connect in much deeper level xd",
  "You're my end game",
  "Beki and Noki against the world xd",
  "We had memorable and so fun time in a very short time xd",
  "You help me go through hard day xd",
  "We share same values",
  "Hotie xd",
];
function randomIntFromInterval(min: any, max: any) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Reasons() {
  const [number, setNumber] = React.useState(0);

  const rndInt = randomIntFromInterval(0, 99);
  function handleClick() {
    setNumber(rndInt);
  }
  return (
    <div className={styles.container}>
      <Header />
      <div className="flex-col pt-20">
        <div className="h-64">
          <h1 className={styles.title}>I {"<3"} you because</h1>
          <h1 className={styles.title}>{reason[number]}</h1>
        </div>
        <div className="grid place-items-center">
          <Button
            icon={<RiHeartsFill />}
            onClick={handleClick}
            className="h-12 w-48"
          >
            Another one xd
          </Button>
        </div>
      </div>
    </div>
  );
}
