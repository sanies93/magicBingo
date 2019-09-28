import React from "react";
import Card from "@material-ui/core/Card";
import "./card.css";

// Add images to dictionary
const dict = {};

dict.image1 = "../images/Tarot/majorArcana/death.jpg";
dict.image2 = "../images/Tarot/majorArcana/judgment.jpg";
dict.image3 = "../images/Tarot/majorArcana/justice.jpg";
dict.image4 = "../images/Tarot/majorArcana/strength.jpg";
dict.image5 = "../images/Tarot/majorArcana/temperance.jpg";
dict.image6 = "../images/Tarot/majorArcana/theChariot.jpg";
dict.image7 = "../images/Tarot/majorArcana/theDevil.jpg";
dict.image8 = "../images/Tarot/majorArcana/theEmperor.jpg";
dict.image9 = "../images/Tarot/majorArcana/theEmpress.jpg";
dict.image10 = "../images/Tarot/majorArcana/theFool.jpg";
dict.image11 = "../images/Tarot/majorArcana/theHangedMan.jpg";
dict.image12 = "../images/Tarot/majorArcana/theHermit.jpg";
dict.image13 = "../images/Tarot/majorArcana/theHierophant.jpg";
dict.image14 = "../images/Tarot/majorArcana/theHighPriestess.jpg";
dict.image15 = "../images/Tarot/majorArcana/theLovers.jpg";
dict.image16 = "../images/Tarot/majorArcana/theMagician.jpg";
dict.image17 = "../images/Tarot/majorArcana/theMoon.jpg";
dict.image18 = "../images/Tarot/majorArcana/theStar.jpg";
dict.image19 = "../images/Tarot/majorArcana/theSun.jpg";
dict.image20 = "../images/Tarot/majorArcana/theTower.jpg";
dict.image21 = "../images/Tarot/majorArcana/theWheelOfFortune.jpg";
dict.image22 = "../images/Tarot/majorArcana/theWorld.jpg";

dict.image23 = "../images/Tarot/suitOfCups/aceOfCups.jpg";
dict.image24 = "../images/Tarot/suitOfCups/eightOfCups.jpg";
dict.image25 = "../images/Tarot/suitOfCups/fiveOfCups.jpg";
dict.image26 = "../images/Tarot/suitOfCups/fourOfCups.jpg";
dict.image27 = "../images/Tarot/suitOfCups/kingOfCups.jpg";
dict.image28 = "../images/Tarot/suitOfCups/knightOfCups.jpg";
dict.image29 = "../images/Tarot/suitOfCups/nineOfCups.jpg";
dict.image30 = "../images/Tarot/suitOfCups/pageOfCups.jpg";
dict.image31 = "../images/Tarot/suitOfCups/queenOfCups.jpg";
dict.image32 = "../images/Tarot/suitOfCups/sevenOfCups.jpg";
dict.image33 = "../images/Tarot/suitOfCups/sixOfCups.jpg";
dict.image34 = "../images/Tarot/suitOfCups/tenOfCups.jpg";
dict.image35 = "../images/Tarot/suitOfCups/threeOfCups.jpg";
dict.image36 = "../images/Tarot/suitOfCups/twoOfCups.jpg";

dict.image37 = "../images/Tarot/suitOfPentacles/aceOfPentacles.jpg";
dict.image38 = "../images/Tarot/suitOfPentacles/eightOfPentacles.jpg";
dict.image39 = "../images/Tarot/suitOfPentacles/fiveOfPentacles.jpg";
dict.image40 = "../images/Tarot/suitOfPentacles/fourOfPentacles.jpg";
dict.image41 = "../images/Tarot/suitOfPentacles/kingOfPentacles.jpg";
dict.image42 = "../images/Tarot/suitOfPentacles/knightOfPentacles.jpg";
dict.image43 = "../images/Tarot/suitOfPentacles/nineOfPentacles.jpg";
dict.image44 = "../images/Tarot/suitOfPentacles/pageOfPentacles.jpg";
dict.image45 = "../images/Tarot/suitOfPentacles/queenOfPentacles.jpg";
dict.image46 = "../images/Tarot/suitOfPentacles/sevenOfPentacles.jpg";
dict.image47 = "../images/Tarot/suitOfPentacles/sixOfPentacles.jpg";
dict.image48 = "../images/Tarot/suitOfPentacles/tenOfPentacles.jpg";
dict.image49 = "../images/Tarot/suitOfPentacles/threeOfPentacles.jpg";
dict.image50 = "../images/Tarot/suitOfPentacles/twoOfPentacles.jpg";

dict.image51 = "../images/Tarot/suitOfSwords/aceOfSwords.jpg";
dict.image52 = "../images/Tarot/suitOfSwords/eightOfSwords.jpg";
dict.image53 = "../images/Tarot/suitOfSwords/fiveOfSwords.jpg";
dict.image54 = "../images/Tarot/suitOfSwords/fourOfSwords.jpg";
dict.image55 = "../images/Tarot/suitOfSwords/kingOfSwords.jpg";
dict.image56 = "../images/Tarot/suitOfSwords/knightOfSwords.jpg";
dict.image57 = "../images/Tarot/suitOfSwords/nineOfSwords.jpg";
dict.image58 = "../images/Tarot/suitOfSwords/pageOfSwords.jpg";
dict.image59 = "../images/Tarot/suitOfSwords/queenOfSwords.jpg";
dict.image60 = "../images/Tarot/suitOfSwords/sevenOfSwords.jpg";
dict.image61 = "../images/Tarot/suitOfSwords/sixOfSwords.jpg";
dict.image62 = "../images/Tarot/suitOfSwords/tenOfSwords.jpg";
dict.image63 = "../images/Tarot/suitOfSwords/threeOfSwords.jpg";
dict.image64 = "../images/Tarot/suitOfSwords/twoOfSwords.jpg";

dict.image65 = "../images/Tarot/suitOfWands/aceOfWands.jpg";
dict.image66 = "../images/Tarot/suitOfWands/eightOfWands.jpg";
dict.image67 = "../images/Tarot/suitOfWands/fiveOfWands.jpg";
dict.image68 = "../images/Tarot/suitOfWands/fourOfWands.jpg";
dict.image69 = "../images/Tarot/suitOfWands/kingOfWands.jpg";
dict.image70 = "../images/Tarot/suitOfWands/knightOfWands.jpg";
dict.image71 = "../images/Tarot/suitOfWands/nineOfWands.jpg";
dict.image72 = "../images/Tarot/suitOfWands/pageOfWands.jpg";
dict.image73 = "../images/Tarot/suitOfWands/queenOfWands.jpg";
dict.image74 = "../images/Tarot/suitOfWands/sevenOfWands.jpg";
dict.image75 = "../images/Tarot/suitOfWands/sixOfWands.jpg";
dict.image76 = "../images/Tarot/suitOfWands/tenOfWands.jpg";
dict.image77 = "../images/Tarot/suitOfWands/threeOfWands.jpg";
dict.image78 = "../images/Tarot/suitOfWands/twoOfWands.jpg";

const imageArray = [];
const randNumGen = [];

let status;

const randImg = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!imageArray.includes(newNum)) {
    imageArray.push(newNum);
    return newNum;

  } else {
    return randImg();
  }
}

const randNum = () => {
  const newNum = Math.floor(Math.random() * 78) + 1;

  if (!randNumGen.includes(newNum)) {
    randNumGen.push(newNum);
    return newNum;

  } else {
    return randNum();
  }
}

class Image extends React.Component {

  render() {

    return (
      <div>
        <img onClick={this.props.onClick}
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
          style={{ opacity: this.props.opacity }}
        />
      </div>
    )

  }

}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      width: "100",
      height: "150",
      cards: [
        {
          id: 0,
          key: randNum(),
          opacity: 1
        },
        {
          id: 1,
          key: randNum(),
          opacity: 1
        },
        {
          id: 2,
          key: randNum(),
          opacity: 1
        },
        {
          id: 3,
          key: randNum(),
          opacity: 1
        },
        {
          id: 4,
          key: randNum(),
          opacity: 1
        },
        {
          id: 5,
          key: randNum(),
          opacity: 1
        },
        {
          id: 6,
          key: randNum(),
          opacity: 1
        },
        {
          id: 7,
          key: randNum(),
          opacity: 1
        },
        {
          id: 8,
          key: randNum(),
          opacity: 1
        },
        {
          id: 9,
          key: randNum(),
          opacity: 1
        },
        {
          id: 10,
          key: randNum(),
          opacity: 1
        },
        {
          id: 11,
          key: randNum(),
          opacity: 1
        },
        {
          id: 12,
          key: randNum(),
          opacity: 1
        },
        {
          id: 13,
          key: randNum(),
          opacity: 1
        },
        {
          id: 14,
          key: randNum(),
          opacity: 1
        },
        {
          id: 15,
          key: randNum(),
          opacity: 1
        }
      ]
    };
  }

  handleClick = (id) => {
    const clickedCard = this.state.cards.filter(c => c.id === id)[0];

    console.log(clickedCard);

    if (imageArray.includes(clickedCard.key)) {
      console.log("Numbers: " + randNumGen);
      const squares = this.state.squares;
      if (calculateWinner(squares) || squares[id]) {
        return;
      }
      squares[id] = 'X';
      console.log(id + ": " + squares);
      const newCards = this.state.cards.map(card => {
        if (card.id === id) {
          return Object.assign({}, card, { opacity: .5 })
        }

        return card;
      })

      this.setState({
        cards: newCards,
        squares: squares
      });
    }
  }


  renderSquare(card) {
    return (
      <Image
        onClick={() => this.handleClick(card.id)}
        width={this.state.width}
        height={this.state.height}
        src={dict["image" + (card.key)]}
        opacity={card.opacity}
      />
    );
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    // let status;
    if (winner) {
      status = 'You win!';
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[0])}
          {this.renderSquare(this.state.cards[1])}
          {this.renderSquare(this.state.cards[2])}
          {this.renderSquare(this.state.cards[3])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[4])}
          {this.renderSquare(this.state.cards[5])}
          {this.renderSquare(this.state.cards[6])}
          {this.renderSquare(this.state.cards[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[8])}
          {this.renderSquare(this.state.cards[9])}
          {this.renderSquare(this.state.cards[10])}
          {this.renderSquare(this.state.cards[11])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.cards[12])}
          {this.renderSquare(this.state.cards[13])}
          {this.renderSquare(this.state.cards[14])}
          {this.renderSquare(this.state.cards[15])}
        </div>
      </div>
    );
  }
}

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "200",
      height: "300",
      caller: {
        src: dict["image" + randImg()],
        opacity: 1
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      console.log("Images: " + imageArray);
      if (status) {
        return;
      }
      this.setState({
        caller: {
          src: dict["image" + randImg()],
          opacity: 1
        }
      })
    }, 5000);
  }

  render() {
    return <Image
      width={this.state.width}
      height={this.state.height}
      src={this.state.caller.src}
      opacity={this.state.caller.opacity} />;
  }
}

export default class Game extends React.Component {
  randNumGen = [];
  render() {
    return (
      <div className="game">
        <div className="game-caller">
          <Caller />
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          {/* <Card body>{reading.Judgement}</Card> */}
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

//**************************************************************************************************/

const reading = {};

reading.aceOfWands = "Wands are associated with fire energy, and the Ace of Wands is the core representation of fire within the deck. The card shows a hand that is sticking out of a cloud while holding the wand. When we look at this card, we can see that the hand is reaching out to offer the wand, which is still growing. Some of the leaves from the wand have sprouted, which is meant to represent spiritual and material balance and progress. In the distance is a castle that symbolizes opportunities available in the future.";
reading.twoOfWands = "In a general context, the Two of Wands signifies having two paths. When this Minor Arcana card appears in your Tarot reading you have decisions to make or a choice between two options but remember the grass isn�t always greener on the other side! This card can signify overseas travel, sudden departures, emigration and deciding if you will stay or go. It can also indicate a lack of contentment with your life, restlessness, withdrawal and detachment. It can represent waiting, anticipation and wanderlust. It is also a card of cooperation, business partnerships or overseas expansion.";
reading.threeOfWands = "The Three of Wands depicts a man who is standing on the edge of a cliff, looking over the ocean and the mountains. From the cliff edge, he sees everything that is ahead of him. The Wands are planted into the ground and surround the man as he grasps one in his hand. He seems to look forward and reflect on both the commitment that he has for his plans, as well as the method of execution in order to bring them to reality.";
reading.fourOfWands = "The Four of Wands depicts a couple which dances beneath the welcome wreath which is tied between four wands, which are crystal tipped. There is a canopy of flowers on the card which resembles the canopy that is particularly characteristic of the traditional Jewish ceremony. There seems to be a party that is going on, or some kind of welcome committee for the couple in question. You can see from the image that it represents a time which is sprinkled with feelings of fulfillment, satisfaction brought by the actual attainment of a goal.";
reading.fiveOfWands = "The Five of Wands depicts five men all holding their own wands and brandishing them up in the air. Like with most fives in the tarot, it is about some kind of disagreement that is facing the querent. This disagreement can either be taken to be as a sign of conflict between the men, or that all of them are simply enjoying the adrenaline rush of this conflict, and that the competition amongst them is of a good natured rivalry, not anger. The relaxed way in which they seem to be holding their wands gives a sense that this argument may be one of show rather than a fierce one.";
reading.sixOfWands = "The Six of Wands tarot card depicts a man who is currently wearing a wreath of victory around his head. He is depicted riding a horse through a crowd of people who are cheering. The horse is white, which is a well-known symbol of strength, purity as well as success. The crowd is there to show the public�s recognition for the achievements of the man riding the horse. The wand that the man is carrying also has a wreath which is tied to it in an attempt to further emphasize his success. The man is not afraid, or shy about all of this attention but rather proud with his accomplishments. To this, the crowd around him reacts with cheerfulness and enthusiasm.";
reading.sevenOfWands = "The Seven of Wands has an image of a man who is standing on a tall hill and being challenged by the opponents below. He seems to be defending this position and attacking in retaliation. It is interesting to note that in the Rider-Waite depiction of the Seven of Wands, the man is wearing not matching shoes. This is linked to the symbolism of being on uneven ground or not having a stable footing in life.";
reading.eightOfWands = "The Eight of Wands is depicted as eight flying staves that appear as if they are suspended in the air. Some may look at them as wands that are blossoming that are traveling at a maximum speed. The background where they travel through is a clear sky which represents that there is likely nothing that will stand in the way of these making it to their destination. It shows a majestic landscape with a river that is streaming, the water breathing life to the image. The wands also appear like they are about to land, which signals the end of a long journey.";
reading.nineOfWands = "The Nine of Wands shows a weak-looking man holding on to a wand with 8 other upright wands standing behind them. The man looks injured, but he still seems ready to fight another battle, and desires strongly to win. He has a look of hope and determination about him that should help him go through that one last battle. It is a card that shows a mix of challenges, hope and triumph.";
reading.tenOfWands = "A man is shown carrying a heavy burden of wood, in the form of ten bundled wands, approaching a town which is not too far. This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and he is now carrying the harvests to his final destination. Although he is not near the destination, it shows that he has finished the hardest part of life struggle and he just needs a place to relax and revel in his success.";
reading.pageOfWands = "A well-dressed young man is boldly holding a stick standing on a barren land. His shirt is made in a salamander like pattern which is a symbol of transformation from bad to good. This young man is a passionate advocator, who is constantly spreading spiritual and social advancement ideas that lift up his fellow man. The desert in the background behind him both is indicative of his element, fire, and also represents that he is living in a world that has not bared fruit yet. His ideas are therefore completely hypothetical. However, if he were to choose to use them, and undertake the journey of his suit, his purity of heart could lead him to find better fortunes.";
reading.knightOfWands = "The Knight of Wands is seen on his horse that is reared up and ready for action. Judging from the knight�s clothes and armor, as well as his horse, he is prepared for what�s ahead. He is wearing a yellow patterned shirt on top of his metal armor. He is also wearing an armor helmet with red plume sticking out of it. He seems to be ready for battle, except he is holding a large wand instead of a sword. His horse is orange in color and has a mane that looks like flames. When you look at the Knight of Wands' face, you�ll see the determination of wanting to be successful in his endeavor. Fire is a dominate factor in the Knight of Wands' symbolism. The decorative tassels hanging from his arms and back, as well as the horses mane, are all in the color of flame. He is also wearing a yellow shirt printed with the fiery salamander symbol.";
reading.queenOfWands = "The image depicted in the Queen of Wand shows a queen sitting proudly on a throne while facing forwards which is a clear symbol of strength and fire. She is holding a sunflower in her left hand, and the image of the sunflowers are also carved on the throne - meaning happiness, satisfaction, and fertility. In her right hand, she is holding her wand which is starting to blossom, and symbolizes life. In her positive aspects, the Queen of Wands can be associated with fidelity, sustenance, and warmth. Her hidden side is hinted at with the placement of the black cat at her feet, which is traditionally a symbol of witchcraft and occultism, but can also point at her ability to grasp with her deep intuition.";
reading.kingOfWands = "The King of Wands depicts a man who has in his hands a blossoming wand, which is set to represent creativity and life's passion. His throne, as well as his cape, are decorated with the salamander and the lion, which are symbols of fire and strength. The salamander that is biting his tail represents the infinity as well as the overall drive to move through all obstacles. The robe is bright and orange resembling a flame, while the crown is shaped like a tongue of fire. Let�s go ahead and take a deeper look at the symbolism behind the King of Wands.";

reading.aceOfSwords = "The Ace of Swords shows a hand emerging from the clouds wielding a double-edged sword. This double edged sword carries a golden crown while being encircled by a wreath. The wreath has for a long time been associated with victory, success and great achievement. The crown is used as the symbol for both royalty and the power to rule that comes with royalty. Behind the foreground, the sword stands floating over a varied setting - which holds both mountains and sea, which are used as symbols of the vast reach and distant lands that the swords can be used to conquer, as well as ambition.";
reading.twoOfSwords = "The Two of Swords symbolizes the confusion we face when we are forced to make difficult choices. In the Two of Swords card, there is a seated woman that is blindfolded while holding a sword in each of her hands. In the background, there is a sea surrounded by crags and rocks that serve as obstacles for vessels and ships, stalling progress and action. The woman in the card being blindfolded is a representation of a situation which prevents her from seeing both the problem and the solution with clarity. The swords that she is holding in each of her hands show that there are two choices that lead in different directions and are mutually exclusive to one another. It may also depict a stalemate, which means that the problem should be addressed with a logical and rational thinking. The Moon positioned on the right side of the card signifies may signify the role of illusions and deception in the difficulty that the woman has in making a choice.";
reading.threeOfSwords = "One of the most iconic images in the tarot, the Three of Swords displays a floating heart that is pierced by three swords. Above it, there are heavy clouds. There is also a heavy downpour in the background. The symbolism is pretty opaque, and the emotional effect that it has is immediate. The heart is the seat of warmth, affection and spirit, and the three swords indicate the power to harm, cause pain, and create suffering to what it pierces. This is an image of grief, loss and literally heartbreak. The clouds and rain depict the surrounding grimness of the situation. All these symbols point to the Three of Swords showing a low point in one's life.";
reading.fourOfSwords = "There is a quiet stillness that is present in the Four of Swords, a sense of calm peace that is contrasted so deeply with the pain in the Three of Swords. Here, in a church, there is a carving of a knight that lies upon a tomb with three swords hanging above him while the fourth one lies beneath him. These three swords are a reminder of the suffering that he has endured in the earlier card. The position of the fourth sword seems to be a signal that the fight has ended. A child and a woman are depicted by the stained glass place behind the statue, giving the scene a sense of warmth and welcoming after the retreat. The knight has his hands positioned as if he is praying.";
reading.fiveOfSwords = "The Five of Swords card depicts a young man who has a very convenient look of contempt on his face. He is looking at the enemies that he has managed to conquer. There are five swords that he possesses � which he has taken from the other combatants who are in the card. The two other figures are walking away from him in a slow manner with a sense of loss and sadness. Above them, the sky is tumultuous and cloudy, which indicates that not everything is well, despite the fact that the battle is already over.";
reading.sixOfSwords = "The image in the Six of Swords shows a woman and a child in a boat being rowed in the water to a land that is on the other side. We can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us. The woman's head is covered with a cloak - perhaps she is fleeing something, and must go without others knowing her true identity. We can assume that because of this, she is undergoing great loss or sadness. The symbolism within the Six of Swords is that of loss or change, as well as moving towards a future that looks more promising than the one that we left behind. The six swords alongside the boat symbolize the strong power of the rational mind, compared to intuition and the heart.";
reading.sevenOfSwords = "In the Seven of Swords card, there is a man that is seen running away sneakily from a camp of some sort, while carrying five swords in his hands. Behind him, two other swords are on standing on the ground. From this image, we can deduce that the Seven of Swords is about stealth, getting away with something, deception or betrayal. The expression on the man�s face shows quite a bit of confidence, and he seems to be sure of his success on this mission of stealing the swords. Unfortunately for him though, on the left there seems to be a group of soldiers who have discovered the theft and one soldier is actually raising a flag or a weapon as if to signal his pursuit.";
reading.eightOfSwords = "On the Eight of Swords is a woman who is tied up and blindfolded. There are eight swords placed strategically around her in a way that restricts her movement as though she is in some kind of trap or jail. However, it seems as though whoever built the trap was a little lazy or hasty, leaving some open space where she could escape. But because of the blindfold preventing the woman from seeing, she has no way of finding her way out of this trap. The barren land around her might signify a lack of creativity of some sort, while the grey sky in the background can signify despair, since there she feels that there is no hope of her breaking free from the kind of situation that she is bound to. If only she could take the blindfold off, she would see that she could simply just walk out of this situation.";
reading.nineOfSwords = "The Nine of Swords depicts a woman that is sitting on her bed while she holds her head in her hands. It appears as though the woman has just awakened from a very bad nightmare. She seems to be upset, anxious and fearful. Nine swords are hanging on her wall, and a carving that depicts a person defeated by another can be found in her bed. The quilt has been decorated with various astrological symbols and roses. Here we see the same woman in that we saw earlier in the Eight of Swords - and perhaps, she was finally released, but haunted by the nightmares of the suffering she endured while she was left and deserted.";
reading.tenOfSwords = "Another one of the most striking and ominous cards in the deck, the Ten of Swords shows a man lying flat on the ground with his face facing the dirt. He is covered with a red cloth from the chest down to his legs. Ten long swords are stabbed into his back, he may not have seen this end coming. There is a terrible stillness in the air: the sky above him is black and cloudy indicating the fear and negativity associated with death. The waters in front of him are still, with no ripples - adding to the eerie stillness and finality of this card. Looking into the horizon, in the east, the sun is rising, and the weather seems very calm despite the darkness. The Ten of Swords seems to intimate that this is the lowest point in one's life, and it cannot get worse than this. At least, even in this state, the sun is rising.";
reading.pageOfSwords = "The Page of Swords card is representative of a person in one's life who shows an abundance of energy. With wind-blown trees, turbulent clouds and the their tossed hair, a youth stands proudly on a rocky precipice. This energetic youth has a sword in her hands. Her expression is one of determination, and perhaps a little bit of defiance - she seems ready to pounce at the slightest word.";
reading.knightOfSwords = "What a rush we see this Knight in! The Knight of Swords card depicts a young man who is dressed in his armor and rides a strong white horse into the midst of a battle. The white color of his horse is a reference to the overall purity and intellectual energy which motivates this young rider. The sky behind him holds stormy clouds as well as trees which are tossed wildly around by the strong winds. The horse�s harness is also decorated with images of birds and butterflies. The cape of the knight is also decorated with those same birds.";
reading.queenOfSwords = "The Queen of Swords wears a stern look as she sits high on the throne - looking off into the distance. A queen of the air element that the swords represents, her place in the clouds shows that no one can trick or fool her. The sword in her right hand is pointed towards the sky, whereas the left hand is extended like it is offering something. The Queen of Swords gives us the gift of judgment for everyday decisions and having the flexibility to take in knowledge from others.";
reading.kingOfSwords = "The King of Swords tarot card shows a king who sits on his throne while holding a double-edged sword that points upwards in his right hand. The King of Swords radiates intellectual power, clear thinking, truth, and authority. He understands that power holds great responsibility. The blue tunic that the king wears is a symbol of his spiritual understanding. The butterflies on the back of his throne are indicative of transformation.";

reading.aceOfPentacles = "In this card, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin with a pentagram engraved on its surface. This pentacle is associated with the element of earth, and seen as a sign of wealth and all things material and earthly. Below the hand is a garden which appears to be flourishing with flowers and other kinds of vegetation - giving off the aura of fertility, growth and prosperity. The mountain represents the ambition required to drive one's search for the pentacle. The flowing creek seem to indicate that emotions are flowing towards this ambition.";
reading.twoOfPentacles = "The Two of Pentacles card depicts a man who is dancing as he is juggling two large coins. The pentacles are surrounded by the infinity sign that denotes that the person can handle all the issues the come his way and he can manage his life with grace. In the background, you will notice that there are two ships that are riding the giant waves, and they reinforce the balancing act that the man has to face - he is in rough and choppy waters, but manages to stay afloat. The Two of Pentacles depicts the usual ups and downs that occur in one�s life. Despite all the chaos that surrounds him, the man lives a very carefree life as he dances, and handles all that comes to him with joy.";
reading.threeOfPentacles = "The Three of Pentacles displays a young apprentice who works in a cathedral. In front of him, there are two others, a priest and a nobleman of some sort, that are holding plans of the cathedral on a piece of parchment. We can tell from the way the apprentice has raised his head that he is discussing his progress on building the cathedral. The two others are keenly listening to him in order to more clearly understand what is needed of them and how they can provide guidance. Despite the apprentice being less experienced, the two others listen to him because they know his ideas and his experience are fundamental in the successful completion of the whole building. The Three of Pentacles therefore represents the coming together of different kinds of knowledge in order to build something together.";
reading.fourOfPentacles = "This card depicts a man who is sitting on a stool, who is holding onto two pentacles in a very defensive and tight posture. It�s almost as if he is hoarding them out of fear of loss. One pentacle is balanced precariously on his head, while another one is tightly clutched between his own hands, and there are two of them which are securely placed underneath his feet.";
reading.fiveOfPentacles = "Just like the fives of the other suits in the tarot, the Five of Pentacles symbolizes adversity. It shows two individuals walking outside while it is snowing. Not only are they cold, they are also sick, poor, tired, and hungry. It looks as if they are lacking the basic necessities of life. A lot of people can relate to the two individuals in more ways than one. One of the individuals in the card has crutches, while the other figure has a shawl covering her head. She is walking barefoot in the snow. There is a black wall in the background with a stained glass window featuring the five pentacles, suggesting a church of some kind. More often than not, the Five of Pentacles is a bad omen. However, do not fret, as it can change depending on where it is placed in the reading.";
reading.sixOfPentacles = "In the image on the Six of Pentacles, there is a man who is dressed in purple robes. The color purple symbolizes is the status and wealth of this man. He has a scale that is balanced in one hand, which stands for equality and fairness. We are reminded of the Justice tarot card, which suggests karma, cause and effect, and that we receive what we give. His other hand is giving money to two beggars who are kneeling at his feet. The Six of Pentacles suggests that you are in a secure enough position to give to others without affecting your own stability.";
reading.sevenOfPentacles = "The Seven of Pentacles shows a young man who seems to be taking a break from his hard labor to admire the fruit and blossoms in his garden. He rests on his shovel as he is admiring the seven pentacles hanging from the lush green vegetation. The way that he is laying his head over hands seems to suggest a kind of fatigue - he has worked hard to make sure that this year's crop is a good one. Because he is focused on long term goals, he cannot touch his harvest right now, and only reserves one of the pentacles for himself, choosing to invest the others. With his efforts, he hopes to grow his crop for the long term.";
reading.eightOfPentacles = "The Eight of Pentacles card depicts a young man who is etching a pentacle shape into the eight golden coins. The card symbolizes someone who is completely focused and absorbed in what they are doing. The town that is far in the background means that he successfully isolated himself from the distractions so that he can fully concentrate on his task. The Eight of Pentacles refers to that moments in your life when you are dedicated to completing a certain task. You are fully-immersed, and you are committed in delivering the best version of your work.";
reading.nineOfPentacles = "The Nine of Pentacles depicts a woman in the middle of a vineyard. The woman wears what appears to be a long, luxurious dress adorned with sunflowers. She seems to be part of a wealthy house, for in the far background, we see a castle. A falcon is sitting peacefully and playfully on her left hand. The vines behind her are rich and filled with grapes and golden coins, signaling that she has been very successful in her ventures, which are yielding a great and plentiful harvest.";
reading.tenOfPentacles = "In the Ten of Pentacles card, there is an old man seated in an archway leading into a great estate. It seems he is the head of the family, for he is surrounded by younger loved ones. He wears a robe that is decorated with moon crescents and grapevines - indicating the joining of spirit and matter. He has his family and dogs with him. There is a happy couple in front of him, presumably his children and a playful child behind this couple, his grandchild. The child playfully reaches out to pet the dog.";
reading.pageOfPentacles = "The Page of Pentacles card depicts a youth standing all by himself in a wide field surrounded by flowers. In the background, you will also notice several lush trees and a furrowed field. The young man seems to be walking in a slow manner and appears unaware of his surroundings, for his attention is completely captured by the coin he is holding, and all that it represents: ambition, security, wealth, nature, and sensuality. The Page of Pentacles symbolizes a person who is grounded, loyal and diligent.";
reading.knightOfPentacles = "Much like the other court cards of this suit, the Knight of Pentacles revolves around work, effort, and a general responsibility. The Knight of Pentacles sits on a dark horse in a field. Unlike the other knights, who are always off on one adventure or another, this knight decides to stay home, and instead, focus on tilling the fields. He prepares for the next harvest - it is on this land that he believes that he can do the most. In his hands, he has a single gold coin. He gazes into it, and in his eyes we see a careful consideration. Perhaps he is dreaming of what it could bring him. The other knights may think he's a little boring, but this knight is more concerned about the long term future of his kingdom.";
reading.queenOfPentacles = "The Queen of Pentacles card depicts a beautiful woman sitting on a decorated throne holding a golden coin. Surrounding her are beautiful blossoming trees and green floral gardens. Her throne is decorated with various beasts of the earth, tying her closely with nature and abundance. At the bottom of the card, on the right-hand side, a rabbit is pouncing into the frame, which symbolizes her high energy and fertility. The Queen of Pentacles, therefore, depicts a certain level of success and prosperity. But the rabbit at the bottom cautions us that we should be careful of where we leap when we are chasing that success.";
reading.kingOfPentacles = "The King of Pentacles refers to a man of high ambition, materialistic satisfaction, and worldly success. The King of Pentacles is sitting on a throne that is adorned with vines and bull carvings, and the robe that he is wearing is embroidered with many images of grapevines. He looks sophisticated and regal. He is also surrounded by different types of plants, vines, and flowers which depicts this king�s attainment of materialistic success. He holds a scepter in his right hand and the coin with a pentacles engraved on it in his left hand. The castle can be seen behind him, which is a symbol of his determination and effort.";

reading.aceOfCups = "In the Ace of Cups card, there is a hand emanating from the clouds holding out a cup, as if in a offer to the querent to take a drink. This cup is overflowing with sparkling water which symbolizes pure and pristine emotion. If you take this offer, drinking from this cup will surely bring you nothing short of emotional as well as spiritual fulfillment. The cup has five streams of water overflowing from the brim. These five streams represent the power of intuition and show the importance of listening to your inner voice. In order to obtain the kind of emotional or spiritual fulfillment that is depicted in the Ace of Cups, the querent will need to follow this inner voice, and remain true to it, regardless of the situation. This will require emotional discipline, but the rewards that this can bring are hinted at within the card itself: overflowing joy and happiness.";
reading.twoOfcups = "This card shows an image of a man and a woman that are exchanging their cups in a ceremony. There is the symbol of Hermes� caduceus in between which is often related to negotiation, trade, cosmic energy, protection, proper conduct, and duality. The Two of Cups refers to something quite positive, for it is one of the most auspicious cards in the tarot for relationships, whether romantic, business or otherwise. It suggests a new partnership is in the works, and it will be created with balance, respect, and honor. Above the caduceus is a chimera, which symbolizes fire and passion also governs this partnership.";
reading.threeOfCups = "When you draw the Three of Cups, you will see three women lifting their cups up in the air in a celebration of some sort. Good times are in the air, for the three ladies have wreaths made of flowers in their hair. Wreaths are often associated with success and victory, so their happiness is well deserved. The ladies are also seen standing on top of a field of flowers and fruit, further adding to the joyful feelings in this card. There are feelings of beauty, growth, compassion and happiness that the women share between each other. An interesting note though, in the Rider-Waite the woman in the middle is turned away from the reader and her face hidden from view. However, the two other maidens are seen smiling";
reading.fourOfCups = "The Four of Cups displays a young man sitting under a tree on a mountaintop, far from others. He seems to be in contemplation and meditation. In front of him are three cups laying on the grass while another cup is being offered to him by a hand in the air. The man has crossed his hand and legs, and he is looking down at the three cups, unimpressed, such that he cannot see the cup being presented to him by the stretched arm. The Four of Cups represents our tendency to take for granted the things that we have, making it hard for us to see what treasures the universe presents us with. We tend to have the answers to our troubles right around us, but we tend to focus too much on what we do not have.";
reading.fiveOfCups = "There are certain Tarot cards whose imagery immediately conjure up negative emotions, and the Five of Cups carries such weight. This is a card which signifies loss as well as the painful challenges which stem from that particular loss. The card depicts a figure that is wearing a black cloak. The person hides his face in what seems to be despair. There are five cups on the ground, three of which have fallen while the other two remain standing. The person, however, seem to notice that there are two standing cups as is too busy mourning over those which are fallen. There is a powerful river which flows between him and a house or a castle in the distance, indicating that a torrent of emotions have separated him from home.";
reading.sixofCups = "The Six of Cups symbolize the joy of nostalgia, the comfort of home and childhood innocence. In the card itself, there are six cups filled with white flowers. Two children are depicted in the foreground, and one is passing a cup to another. This handing of the flowers from the boy to the girl shows the passing of traditions and happy reunions. The children seem to be in a castle of sorts, that we can imagine give them a sense of security and comfort.";
reading.sevenOfCups = "The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. The card shows person with their back turned towards us, contemplating 7 images that are creeping out of the cups, all of which are floating in the clouds. Clouds are a representation of dreams, illusions, thoughts and imagination. There are numerous fantasies that are appearing from the cups, which are representative of the many visions that one sees while dreaming. The Seven of Cups may imply that you have a number of options to choose from.";
reading.eightOfCups = "In the Eight of Cups, we are confronted with the moment of transition. We see a cloaked figure taking off to a barren land leaving behind eight golden cups. He is tired of what those cups that he has spent so much time collecting, and is now setting out to seeking a higher purpose. It may be a result of a boredom or unhappiness that comes with realizing that whatever they have been looking for in life isn�t as pleasurable or as satisfying as they once assumed it would be. The person undertaking this journey might also signify be seeking excitement in the unknown. The mountainous barren lands that he sets off to can also be symbols of facing new challenges. Their stark emptiness seem to indicate that they are waiting for one to come and shape the. The journey that is taken can be done in the guise of trying out new things that have the potential to help one grow both mentally as well as spiritually. It also shows the willingness to detach oneself from others so that one can work on self-improvement, self-understanding and growth.";
reading.nineOfCups = "In this card, a middle-aged man is sitting on a wooden bench while his arms are crossed, and his face are showing quite a level of contentment. He is dressed elegantly and has the look of the true satisfaction. The head-dress on his head is red, and is a depiction of his active mind. At his background, you will notice there are nine golden cups, structured and arranged in an orderly manner. The Nine of Cups symbolizes a representation of fulfillment and success, both spiritually and materially. The man shows that expression of success after achieving his innermost desire.";
reading.tenOfCups = "On the Ten of Cups, there is a couple holding each other while facing a beautiful house and a green garden. Beside them, there are two children playing joyously. The couple is seen holding each other in a loving and romantic embrace, while the children are freely playing. The couple seems to be in a stable relationship, while also blessed with the abundance of a comfortable home and beautiful children. The green land signifies fertility, and the river shows how freely the feelings of the couple are flowing, meaning that their relationship is quite peaceful. Above in the sky, there are ten cups, shaped in an arc, which are meant to symbolize blessings from heaven. The rainbow behind them shows the end of hard times and sorrows, and a new happy life where each and every one of the family will enjoy. The Ten of Cups card depicts �having it all�.";
reading.pageOfCups = "The Page of Cups represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that we may not truly understand. In this card, a youth at the seashore wears a blue tunic adorned with floral prints, and holds a golden cup. She also wears a beret that looks quite bohemian, and a long flowing scarf. She is surprised by a fish that pops out of the cup, as if to greet her from a fairytale. She can neither drink nor toast with the cup as the fish stares at her and seemingly tries to engage with her.";
reading.knightOfCups = "The Knight of Cups is a card which depicts a young knight who is gloriously riding a white horse while at the same time holding a cup as if he is a messenger of a certain sort. Unlike the Knight of Wands or the Knight of Swords, this particular one isn�t charging along with his horse. He is instead moving slowly forward which provides the entire setting an overall impression of peace and calmness. The horse is known to represent one's drive, energy, and power. The horse's color is white, which is a well-known symbol of spirituality, light, and purity.";
reading.queenOfCups = "The Queen of Cups rules the emotional realm. She is the woman whose throne is right on the ocean�s edge, and water is typically symbolic of the unconscious and feeling. Her position at the shore indicates that she lies between land and sea, the place where feeling and thought exist. She holds a cup that has handles shaped like an angel. This cup is closed, which is why the Queen of Cups symbolizes the thoughts that come with our unconscious mind. The queen sits alone, which allows her to think. The calmness of the water and the sky symbolizes the serene mind of the queen. Her feet are not touching the water, which stands for her looking at her thoughts and feelings from the outside.";
reading.kingOfCups = "The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. The card itself depicts a king seated on a throne, who has an amulet that is shaped like a fish. The fish in his necklace represents his creativity and spirit, which thrives on the calm waters that surround him. We can see from the background that there is a steady balance between the conscious and unconscious.";

reading.theFool = "The Fool depicts a youth walking joyfully into the world. He is taking his first steps, and he is exuberant, joyful, excited. He carries nothing with him except a small sack, caring nothing for the possible dangers that lie in his path. Indeed, he is soon to encounter the first of these possible dangers, for if he takes just a step more, he he topple over the cliff that he is reaching. But this doesn't seem to concern him - we are unsure whether he is just naive or simply unaware. The dog at his heels barks at him in warning, and if he does not become more aware of his surroundings soon, he may never see all the adventures that he dreams of encountering.";
reading.theMagician = "The Magician is one tarot card that is filled with symbolism. The central figure depicts someone with one hand pointed to the sky, while the other hand points to the ground, as if to say 'as above, so below'. This is a rather complicated phrase, but its summarization is that earth reflects heaven, the outer world reflects within, the microcosm reflects the macrocosm, earth reflects God. It can also be interpreted here that the magician symbolizes the ability to act as a go-between between the world above and the contemporary, human world. On his table, the magician also wields all the suits of the tarot. This symbolizes the four elements being connected by this magician - the four elements being earth, water, air, and fire. The infinity sign on his head indicates the infinite possibilities of creation with the will.";
reading.theHighPriestess = "You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon�s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.The High Priestess's location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess.";
reading.theEmpress = "The Empress depicts a woman sitting on a throne. From the abundant nature that surrounds her, we can assume that this woman represents the Earth Mother archetype, a goddess of fertility. Her world is ruled by venus which means that there is complete love, harmony, fertility and luxury by the grace of this goddess. The woman herself has blonde hair crowned with stars, signaling her divine connection with the mystical realm. She is dressed in a pomegranate-patterned robe that represents fertility, and she is seated on cushions embroidered with a venus sign. She is surrounded by an enchanting green forest with a river streaming through it. The Empress brings abundance and blessings in the readings of those she meets.";
reading.theEmperor = "In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries. In one hand, he carries a scepter, representing his reign and his right to rule, and in the other an orb, a symbol of the kingdom that he watches over. The long beard of the emperor represents his vast experience; over time he has learned much about what it takes to rule, to establish power, authority and complete order for the benefit of his people. Behind him, the barren mountains shows his determination, his ambition for greater heights and his leadership capability. Contrast this with his complement, the Empress, whose flowing fields are filled with nurturing kindness. The Emperor instead rules with grit, strength and force.";
reading.theHierophant = "The card depicts a religious figure that sits in a rather formal environment characteristic for a church. He is wearing three elaborate vestments which are designated to represent the three different worlds. His right hand is properly raised in an act of benediction, a sign of blessing � it�s the same hand that the Magician has raised. In his other hand, he carries a triple cross, which is associated traditionally with the pope. Each of the horizontal bars in the cross are thought to represent the Father, the Son and the Holy Ghost. Beneath him, two acolytes are seated, representing the transfer of sacred knowledge within institutions. Through these acolytes, the card also comes to represent following the path to knowledge and education. This card is also known as the High Priest in certain decks - as well as the Pope. He is acting as the masculine counterpart of another card which is known as the High Priestess. This card is ruled by Taurus.";
reading.theLovers = "In the Lovers card, the man and the woman in the image are being protected and blessed by an angel above. The couple seems secure and happy in their home, which appears to be the Garden of Eden. The fruit tree with the snake behind the woman is a reference to that story, which tells of humanity's fall into temptation and into the realm of flesh and sensuality. The angel depicted here is Raphael, the angel of air - who is of the same element of the zodiac sign that governs this card: Gemini. Air is associated with mental activity, and communication in particular, which is the foundation for healthy relationships. His blessing seems to give this card a sense of balance and harmony, the symbolization of union in a grand and cosmic sense between two opposing forces.";
reading.theChariot = "The Chariot tarot card depicts a figure sitting inside a vehicle that is being driven by two black and white sphinxes. The whole card has a bit of a celestial influence; the figure sits underneath a blue canopy adorned by white stars. On his shoulders, he carries the sign of the crescent moon, representing the spiritual influence under which he is guided. On his head sits a crown, meaning that he is enlightened, and that his will is pure. Emblazoned on his chest is a square, denoting the element of earth, of the material world, which grounds him and his actions. The sphinxes are colored in black and white, a symbol of opposing forces that the charioteer must learn to control. Here they are calm, but they frequently get into scuffles as they seem to want to move in different directions. His task is to guide these sphinxes towards a destination, one that is marked by the cosmic forces that he represents.The Chariot is linked to the Cancer zodiac sign.";
reading.Strength = "In this tarot card, you will see a woman who calmly holds the jaws of a fully grown lion. Despite the fact that the lion looks menacing and strong, the woman seems to have dominion over it. What is captivating is how gracefully she controls the lion. She is calm and collected, which is representative for being in control and disciplined especially in times of great adversities. The fact that she is also holding the jaws of a lion also shows that she has courage. Her control of the lion without being too rough shows love and compassion. The blue background over the mountains shows stability and the kind of calmness that comes with being stable. The lion is a symbol of courage, passion and desire which are very much part of the human feelings that are necessary for survival. But if these feelings are not put in check can lead to our eventual destruction.";
reading.theHermit = "The Hermit depicts an old man standing alone at the peak of the mountain while holding a lantern in one of his hands and a staff on the other. The mountain denotes accomplishment, development, and success. The hermit tarot card refers to the level of spiritual knowledge that he attained, and that he is ready to impart that knowledge to everyone. There is also a deep commitment he has to his goal and a solid awareness of the path that he is taking. Inside the lantern, you will notice a star with 6 points which is also known as the Seal of Solomon. This symbol represents wisdom. The staff that he holds depicts authority and power.";
reading.theWheelOfFortune = "The Wheel of Fortune is one of the most highly symbolic cards in the deck, filled with signs that each have its own meaning. At the center of the card, lies a giant wheel, covered in esoteric symbols. There are different creatures that surround the wheel; the angel, the eagle, the bull and the lion. They are related to four fixed signs in the zodiac - leo, taurus, scorpio and aquarius. These four animals are also representatives for the four evangelists in Christian traditions, which is perhaps the reason that they are all adorned with wings. The books that each of the creatures hold represents the Torah which communicates wisdom and self-understanding. The snake indicates the act of descending into material world. On the wheel itself, rides a sphinx that sits at the top, and what appears to be either a devil, or Anubis himself arising at the bottom. These two Egyptian figures are representative of both the wisdom of the gods and kings (in the case of the sphinx) and the underworld (Anubis). They are rotating forever, in a cycle, and suggests that as one comes up, the other goes down.";
reading.justice = "The Justice tarot card is a symbol of truth, fairness, and law. As she sits in her chair, the scales in her left hand represent how intuition should balance logic. She symbolizes impartiality with the double-edged sword in her right hand. The clarity in thought which is required to dispense justice are symbolized by the square on the crown she wears. Behind her, there is a purple cloak and standing grey pillars. Beneath her red cloak, which is held together by a clasp, she shows the tip of a white shoe. This is a spiritual reminder that what she delivers are the outcomes of their actions.";
reading.theHangedMan = "In this card, it depicts a man who is suspended upside-down, and he is hanging by his foot from the living world tree. This tree is rooted deep down in the underworld, and it is known to support the heavens. It is believed that the hanging man is actually positioned there by his own free will. We believe this because of the serene expression which is on his face. His right foot is bound to the branches, but his left foot remains perfectly free. At the same time, he is holding his hands behind his back in a way which forms an inverted triangle. His wearing of red pants are a representation of the physical body and human�s passion, while the blue that he wears in his shirt are representative of calm emotions, a color combination that is commonly seen in saints. His intellect is symbolized by the yellow color of his shoes, hair and halo.";
reading.death = "Here, we see Death riding a beautiful white horse while holding up a black flag with a white pattern. It is portrayed as a living skeleton, the bones being the only part of the human body existing after death. He wears armor, which gives him his invincibility - signaling that no one can destroy Death. The white horse that he rides stands for purity, as Death purifies everyone. Beneath him, all classes of humans lie in the dirt - a king, and a pauper, meant to remind us that death does not differentiate between class, race, gender.";
reading.temperance = "On the Temperance card, there is an angel with wings, whose gender is not immediately obvious, which suggests that there is a balance between the sexes. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world. On her robe, there is a square, which has a triangle inscribed inside, another echo of the tangible earth in union with the holy trinity. She holds two cups in a manner where she can mix the waters, which represent the super and subconscious minds. The water flows between them, suggesting union and infinity. Everything about this card represents balance, the perfect harmony that comes from the union of dualities. Her advice is to test any new waters, before jumping into the deep end.";
reading.theDevil = "This card shows the Devil represented in his most well-known satyr form, otherwise known as Baphomet. Along with being half goat and half man, the devil has bat wings and an inverted pentagram on his forehead. He is standing on a pedestal, to which are chained a nude man and woman, as if to show that he has dominion over them. Both the man and the woman have horns, as if to show that the more time they spend with the Devil, the less human they become. The chains make it appear as though the devil has taken them captive. The man has a flame on his tail while a woman has a bowl of grapes on her tail, which symbolizes their addiction to power and finer things in life, respectively.Looking closely, both the man and the woman don�t look happy.  Their individual power has been taken from them, leaving them exposed and ashamed in their nakedness.";
reading.theTower = "The Tower card depicts a high spire nestled on top of the mountain. A lightning bolt strikes the tower which sets it ablaze. Flames are bursting in the windows and people are jumping out of the windows as an act of desperation. They perhaps signal the same figures we see chained in the Devil card earlier. They want to escape the turmoil and destruction within. The Tower is a symbol for the ambition that is constructed on faulty premises. The destruction of the tower must happen in order to clear out the old ways and welcome something new. Its revelations can come in a flash of truth or inspiration.";
reading.theStar = "The Star card shows a woman kneeling at the edge of a small pond. She is holding two containers of water. One container pours the water out to the dry land, as if to to nourish it and ensure its fertility. The lush green land around her seems to say that it is working. One foot is inside the water which shows the spiritual abilities and inner strength of the woman. The other foot on the ground shows her practical abilities and strengths. Behind her, there is a large central star surrounded by seven small stars which represent the chakras. There is bird standing at a tree branch which represents the holy ibis of thought. The Star's astrological correspondent is Aquarius.";
reading.theMoon = "When we encounter the Moon, we see a path that leads off into the distance. On either side of the path stand a wolf and a dog, representing our animalistic nature - one is civilized, and the other wild and feral. There is a crawfish that is crawling out of the pond from which the path stems from. In the distance, we can see two towers flanking the central path, once again alluding to the doubles visible in this card. Everything in this card seems to echo the other, as if to allude to two possibilities. When we walk down the path, we walk the fine line between conscious and unconscious, between the tamed side of civilization of the dog, and the forces of nature represented by the wolf. The towers on the opposing ends represent the forces of good and evil, and their similarity in appearance can allude to the difficulties that we face in distinguishing between them.";
reading.theSun = "The Sun card presents an feeling of optimism and fulfillment. This card represents the dawn which follows the darkest of nights. The Sun is the source of all the life on our planet, and it represents life energy itself. There is a child depicted in the card, playing joyfully in the foreground. A symbol of our innocence, it represents the happiness that occurs when you are in alignment with your true self. The child is naked, meaning that he has absolutely nothing to hide. The card also depicts the childhood innocence and absolute purity. This is particularly emphasized through the white horse upon which the child is riding. The horse here is also a symbol of strength and nobility.";
reading.Judgement = "This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel�s trumpet call. Their outstretched arms symbolize that they are ready to be judged by the universe. They are about to meet their creator, their actions weighed, and find out where they will spend the remainder of eternity: in heaven or in hell. The massive tidal wave in the background signify that judgement is unavoidable, and that this judgement will be final. Judgement is ruled by Pluto, who is the underworld�s ruler. There are echoes of this card in Death, for they both remind us that everything comes to an end and that a new beginning is coming.";
reading.theWorld = "The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand. She symbolizes balance and evolution in movement. The fulfillment and unity that she represents is not one that is static, but ever-changing, dynamic and eternal. The green wreath of flowers that surrounds the central figure is a symbol of success, while the red ribbons that wrap around it are reminiscent of infinity. There are four figures on each corner of the card - and they are the same ones that are in the Wheel of Fortune. The four figures represent Scorpio, Leo, Aquarius and Taurus  representative of the four corners of the universe, the four elements, and the four evangelicals. Together, they symbolize the harmony between all of their energies.";