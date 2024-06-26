import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | Character Creation",
  description: "Learn how to create a character for Guildsmen TTRPG"
}

export default function CharacterCreation() {
  return (
    <article>
      <Contents />
      <h1>Character Creation</h1>
      <p>Your character is a persona you take on as you play the game. This is the protagonist that will be making decisions and affecting the world around you. To begin making a character, print out a character sheet using the link below and follow along with this chapter.</p>

      <div className="downloadContainer">
        <Link className="button py-2 px-8" href="/cs-sheet.pdf" download="guildsmen-character-sheet" target="_blank">
          Download the character sheet
          <FontAwesomeIcon icon={faDownload} className="" />
        </Link>
      </div>

      <section id="who-are-you">
        <h2>Who are You?</h2>
        <p>At the top-right of your character sheet are 4 fields: name, race, physique, and demeanor.</p>

        <p><strong>Name</strong> is your character&apos;s name. This is what other players will call you during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

        <p><strong>Species</strong> is your character&apos;s Species. In this game, there are six unique races for you to choose from: Locess, Mausca, Orcs, Matari, Slated, and Ungal. A list of these races with descriptions is further down.</p>

        <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>

        <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>

        <p>By combining these four fields, you can create a brief description of your character. For example: A fat, jovial Mausca named Bob.</p>
      </section>
      <section id="the-species">
        <h2>The Species</h2>
        <p>Selecting a species will determine your stats. Your stats are four terms located at the top-right of your character sheet: Nimble, Tough, Competence, and Constitution.</p>

        <p><strong>Nimble</strong> defines your character&apos;s agility. Nimble is used to move quickly, jump over objects, dodge, and for any other actions that require more finesse.</p>

        <p><strong>Tough</strong> defines your character&apos;s physical strength. Tough is used to lift and move heavy objects, wrestle other creatures, and for any other actions that require more strength.</p>

        <p><strong>Competence</strong> defines your character&apos;s ability to act under pressure, read situations, and see things that other people wouldn&apos;t. It will be used in moments of pressure and crisis.</p>

        <p><strong>Constitution</strong> defines your ability to endure stress. It us used to fend off poisons, resist disease and addiction, to exert yourself for extended periods of time, and for any other actions that require resistance or endurance.</p>

        <p>Beside each term is a row of bubbles that mark how much of that stat your character has. The more bubbles you have filled in, the better you will be when you try to do something related to that task (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>

        <p>When you pick a species, you are given a modifier next to each stat. Fill in the corresponding bubbles on your character sheet to match the modifiers given.</p>

        <h3>Locess</h3>
        <p>The Locess (lo-KESS) are bug-like creatures that stand about 6 feet tall. They come from the World Forest, a forest of trees that are as large as mountains. The most prominent features of the Locess are their exoskeleton and extra arms. Their exoskeleton comes in a variety of vibrant greens, light browns, and de-saturated reds. Their exoskeleton is also tough and covers every inch of their body, making it difficult to discern emotions in their face. Their heads are very lizard-like, with wide, square jaws that comes to a point at the chin. The overall shape of the head is wide, with their eyes set far apart. Their eyes are very large, usually a dark, neutral color, and are multifaceted. They feature 4 arms and pseudo-wings that hang from their backs. These wings are non-functional and mostly give the impression of a cape and are usually a dusty-gray color.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>+2 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>-1 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Constitution</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Mausca</h3>
        <p>The Mausca (mah-SKAH) are small people, usually no taller than 3 to 4 feet, with slight frames. They hail from the southern swamps and their physical features mirror that landscape. Their hair is incredibly thick and course with a deep, dark green color and usually grown long, giving their hair the appearance of swamp vines that hang from the trees. Their skin is generally a dark shade of cool brown and they have deep, vertical creases all along their body that makes them appear as though they are made from wood. Their most baffling feature is their eyes. Looking as though they were cut from pearls, their eyes are small and deeply set with a milky-white color and an opalescent sheen.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>+2 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>-1 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Constitution</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Orcs</h3>
        <p>The Orcs originated in the frozen tundras of the north and are large, burly people that generally stand about 6 to 7 feet tall with skin tones that come in light blues and grays. They have small tusks protruding through their skin on their jaw bone and chin. Their ears are long, pointed, and seated higher on their heads than the other species. Their hair grows only from the very top of their head and is usual black, white, or gray. Tribal tattoos generally covers their bodies, telling stories of the individuals victories hunting great beasts or telling histories of the family and tribe they come from.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>+0 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+2 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Constitution</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Matari</h3>
        <p>The Matari (mah-TAR-ee) come from a massive cliff overlooking an ocean where they have a city carved into the cliff wall. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Matari communities are generally very close-knit. They are the tallest of the species, standing anywhere from 6 to 8 feet tall, and have very blunt and broad features. Their skin is a marbling of crimson and tan-brown with no hair at all.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>-1 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Constitution</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Slated</h3>
        <p>The Slated (SLAY-ted) are creatures of the endless desert, and their bodies are adapted to that harsh environment. Standing no more than 6 feet tall, they have thick scales with a dull-gray color that cover their entire body. Along their back and on top of their head is a rounded shell. When crouching the down, the shell locks into a sphere shape that can keep sand out from impending sandstorms and is very durable against predators. Their eyes have two lids: a thin one for keeping out sand and a thick one for closing their eyes to light. Their culture is centered around invention and engineering. They celebrate failure and push the boundaries of what people think is possible.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>-1 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+0 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+2 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Constitution</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Ungal</h3>
        <p>The Ungal (OON-gaul) are the most mysterious species. They come from deep within the World Forest, where light does not touch the forest floor. They stand no taller than 5 feet and are the least humanoid of the species. Their lower body is like the cap of an oyster mushroom flipped upside-down, the lip of which flows and ungulates to give them mobility. Their arms do not end in hands. Instead, they end in a tubular appendage that functions much like an elephants trunk to grab and manipulate objects. Their head has no face. Instead, they have a few optical stalks that register mostly heat but also some light that grow around the entire head, giving a 360 degree field of view. On the top of their head grows a crown of small oyster-mushroom-like growths, which are used as both a symbol of age and wisdom as well as sensory organs to pick up sounds within both the normal and infrasonic rages. And along their entire body are this small plate-like growths that are constantly in motion, and the underside of the plates glows with a phosphorescence. These plates are use to communicate using the sounds that they make as they move.</p>

        <p>Due to their inability to speak with a mouth, they cannot make the same sounds as the other species and cannot verbalize any language other than their own. This sets them apart from the other species. This, coupled with their appearance, makes them something that most other individuals don&apos;t understand, which means the Ungal people are generally discriminated against and feared.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>+0 Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>-1 Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+1 Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>+2 Constitution</em></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="who-where-you">
        <h2>Who Where You?</h2>
        <p>All characters need a past that defines them. This will help you understand how your character would act in the game. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

        <p>These four boxes help define how your character would behave. In each box, jot down one or two brief sentences that work for your character. If you can&apos;t think of anything right away, that&apos;s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

        <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here.</p>

        <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they&apos;re seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work.</p>

        <p><strong>Personal Morals</strong> are your character&apos;s personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don&apos;t know is completely okay. Maybe their okay with stealing, or maybe they&apos;re very rigid about following the law. </p>

        <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they&apos;re a kleptomaniac (impulsively steals things), or maybe they&apos;re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they&apos;re easily distracted.</p>

        <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>

        <p>Once you&apos;ve got some things put in each box, consider writing out a full backstory if you&apos;re feeling ambitious. This is where you describe their life and what they&apos;ve gone through up to the point when the game starts. This is where you can give specific reasons for what you put in those 4 boxes.</p>

        <p>From here, you need to give your character some skills. Fill in 4 bubbles on the skills chart. Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. Starting from the -1 mark, you my increase your skills 4 times. You can increase 4 skills once (up to +0), you can condense them into just a couple skills (2 skills at +1), or any combination of that kind, as long as you only increase your skills 4 times. However, you cannot increase any skill past +2 at this time.</p>

        <p><em>Do not start with the myth skill before reading through the <a href="/rules/myth">Myth chapter</a></em></p>

        <p>If you&apos;ve made a backstory, try to consider what skills would make sense for your backstory. If you haven&apos;t made a backstory, feel free to pick whatever skills you think would work for your character.</p>

        <p>Finally, you need to select a wealth adjective. This describes how wealthy your character is on average. If you wrote a backstory, go with whatever makes the most sense for your backstory. If not, you should probably go with Moderate.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Wealth Adjectives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Destitute</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Poor</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Moderate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Wealthy</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Exquisite</em></td>
            </tr>
          </tbody>
        </table>

        <p>Pick an adjective and fill in the corresponding bubble in the Wealth box.</p>

        <p>While you&apos;re on your adventure, you may end up buying more items than your character generally carries around. When this happens, your Wealth may go down. More details on this in <a href="rules/the-market"><em>The Market chapter</em></a>.</p>

        <p>After that, you will need to determine how lucky your character is. Roll 1d6 (1, 6-sided die) and consult the table. Fill in the corresponding bubble in the Luck box on your character sheet.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Luck</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left">1</td>
              <td className="bottom right">-3</td>
            </tr>
            <tr>
              <td className="bottom left">2</td>
              <td className="bottom right">-2</td>
            </tr>
            <tr>
              <td className="bottom left">3</td>
              <td className="bottom right">-1</td>
            </tr>
            <tr>
              <td className="bottom left">4</td>
              <td className="bottom right">+1</td>
            </tr>
            <tr>
              <td className="bottom left">5</td>
              <td className="bottom right">+2</td>
            </tr>
            <tr>
              <td className="bottom left">6</td>
              <td className="bottom right">+3</td>
            </tr>
          </tbody>
        </table>

        <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the number that is in your luck box. The higher the total number, the better the outcome.</p>

        <p>This same principle is how skills work (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>
      </section>
      <section id="where-are-you-going">
        <h2>Where are You Going?</h2>
        <p>This final part of character creation should be done with all players present, because this decision will affect everyone.</p>

        <p>You now need to decide where your character is going. You and everyone else in your party are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are five common guilds, each will train your players in a specific set of skills.</p>

        <p>Once you choose a guild, all players will increase the skills listed to +1 if those skills are not already there.</p>

        <h3>Assassins Guild</h3>
        <p>Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Guild Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Investigate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Sneaky</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Social</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Throwdown</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Mythic Hunters Guild</h3>
        <p>Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythical creatures, harvest Navidus Crystals from them, and bring the crystals back to the guild. Occasionally, they will get hired to kill Mythical creatures that are causing a nuisance, or to help defend smaller towns from Mythical creature attacks.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Guild Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Investigate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Medic</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Nature</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Throwdown</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Explorers Guild</h3>
        <p>Explorers desire to bring the unknown world into the light. They go beyond the borders of the map to discover lands that no race has ever experienced. They know that the wonders of the world are beyond the borders of current maps.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Guild Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Craft</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Investigate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Medic</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Throwdown</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Mercenaries Guild</h3>
        <p>Mercenaries are those who use their strength to make a profit. They are loyal defenders – if they get paid. They are masters of martial skills and make formidable opponents.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Guild Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Craft</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Investigate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Medic</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Throwdown</em></td>
            </tr>
          </tbody>
        </table>

        <h3>Thieves Guild</h3>
        <p>Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them – if they can be sneaky enough.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Guild Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Investigate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Performance</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Sneaky</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Throwdown</em></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="going-forward">
        <h2>Going Forward</h2>
        <p>Now that you have a character, give your character whatever items make sense due to your skills, background, and guild. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

        <p>We suggest you read the rest of the rules chapters in their entirety as well to get a good grasp of the game and its mechanics. It&apos;s not necessary but it might be good to see what can be accomplished.</p>

        <p>There&apos;s so much you can do with the mechanics we&apos;ve created for you, and we think you&apos;ll really enjoy using them. And if you don&apos;t care about the mechanics but want some good world lore to read, go through the <a href="/rules/lore"><em>Lore</em></a> section and the <a href="/bestiary"><em>Bestiary</em></a>.</p>

        <p>As you move forward through the game, we hope that you find a love for role play and enjoy the systems of the game as much as we do.</p>

        <p><em>Good luck!</em></p>
      </section>
      <NextButton href="/rules/skills" />
    </article>
  )
}