'use client'

import { useState, useEffect } from "react"
import { Character, species, skills, stats, wealthRange, luckRange, guild, modRange, addictionRange, user } from "@/util/types";
import ErrorMessage from "@/app/error-message";
import getUserByToken from "@/util/getUserByToken";
import BasicInfo from "./basic-info";
import BackgroundInfo from "./background-info";
import StartingSkills from "./starting-skills";
import LuckAndWealth from "./luck-and-wealth";
import GuildSelect from "./guild-select";
import GearList from "./gear-list";
import Spinner from "@/app/spinner";
import { useRouter } from "next/navigation";

// Initial variables for creating character skills and stats
const initSkills: skills = {
  craft: -1,
  leadership: -1,
  myth: -1,
  performance: -1,
  sneaky: -1,
  investigate: -1,
  medic: -1,
  nature: -1,
  social: -1,
  tech: -1,
  throwdown: -1
}

export default function CharacterForm(props: { user: user }) {
  const [page, setPage] = useState(1);
  const [validationError, setValidationError] = useState("")
  const PAGE_COUNT = 6

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (validationError) setTimeout(() => setValidationError(""), 5000)
  }, [validationError])

  // new character state
  const [name, setName] = useState<string>()
  const [species, setSpecies] = useState<species>()
  const [demeanor, setDemeanor] = useState<string>()
  const [physique, setPhysique] = useState<string>()
  const [skills, setSkills] = useState<skills>(initSkills)
  const [wealth, setWealth] = useState<wealthRange>()
  const [luck, setLuck] = useState<luckRange>()
  const [guild, setGuild] = useState<guild>()
  const [addiction, setAddiction] = useState<addictionRange>(0)
  const [goalsAndMotives, setGoalsAndMotives] = useState<string>()
  const [flawsAndWeaknesses, setFlawsAndWeaknesses] = useState<string>()
  const [personalMorals, setPersonalMorals] = useState<string>()
  const [importantConnections, setImportantConnections] = useState<string>()
  const [gear, setGear] = useState<string[]>([])

  const stats: stats = { tough: -1, nimble: -1, competence: -1, constitution: -1 }

  const [apiLoading, setApiLoading] = useState(false)
  const router = useRouter();

  const getPage = () => {
    switch (page) {
      case 1:
        return <BasicInfo name={name} setName={setName} species={species} setSpecies={setSpecies} demeanor={demeanor} setDemeanor={setDemeanor} physique={physique} setPhysique={setPhysique} />
      case 2:
        return <BackgroundInfo flawsAndWeaknesses={flawsAndWeaknesses} setFlawsAndWeaknesses={setFlawsAndWeaknesses} personalMorals={personalMorals} setPersonalMorals={setPersonalMorals} importantConnections={importantConnections} setImportantConnections={setImportantConnections} goalsAndMotives={goalsAndMotives} setGoalsAndMotives={setGoalsAndMotives} />
      case 3:
        return <StartingSkills skills={skills} setSkills={setSkills} setError={setValidationError} />
      case 4:
        return <LuckAndWealth luck={luck} setLuck={setLuck} wealth={wealth} setWealth={setWealth} />
      case 5:
        return <GuildSelect guild={guild} setGuild={setGuild} />
      case 6:
        return <GearList gear={gear} setGear={setGear} />
    }
  }

  const validate = () => {
    switch (page) {
      case 1:
        if (!name || !species) {
          setValidationError("Your character must have a name and species.")
          return false
        }
        return true
      case 2:
        // No validation needed on this page as all fields are completely optional
        return true
      case 3:
        let total = 0
        let keys = Object.keys(skills)
        keys.forEach(element => {
          //@ts-ignore
          total += skills[element]
        });
        if (total !== -7) {
          setValidationError("You must fill in a total of four bubbles to continue.")
          return false
        }
        return true
      case 4:
        if (!luck || wealth == undefined) {
          setValidationError("You must select your wealth and determine your luck to continue.")
          return false
        }
        return true
      case 5:
        if (!guild) {
          setValidationError("You must select a guild before continuing.")
          return false
        }
        return true
      case 6:
        return true
      default:
        return false
    }
  }

  // Create a line of bubbles as long as the PAGE_COUNT
  const getProgressBar = () => {
    let pages = []
    for (let i = 1; i <= PAGE_COUNT; i++) {
      pages.push(i)
    }
    return <div className="flex gap-1 justify-center my-2">
      {pages.map((el, i) => {
        return <div key={i} className={`border rounded-full w-4 h-4 ${el <= page ? "bg-stone-400" : "bg-stone-200"}`} />
      })}
    </div>
  }

  const setStats = () => {
    switch (species) {
      case "Locess":
        stats.nimble = 2
        stats.tough = -1
        stats.competence = 1
        stats.constitution = 0
        break;
      case "Matari":
        stats.nimble = -1
        stats.tough = 1
        stats.competence = 2
        stats.constitution = 0
        break;
      case "Mausca":
        stats.nimble = 2
        stats.tough = -1
        stats.competence = 0
        stats.constitution = 1
        break
      case "Orc":
        stats.nimble = 0
        stats.tough = 2
        stats.competence = 0
        stats.constitution = 0
        break
      case "Slated":
        stats.nimble = -1
        stats.tough = 0
        stats.competence = 2
        stats.constitution = 1
        break;
      case "Ungal":
        stats.nimble = 0
        stats.tough = -1
        stats.competence = 1
        stats.constitution = 2
        break
    }
  }

  const updateSkills = () => {
    let newSkills = { ...skills }
    switch (guild) {
      case "Assassins":
        if (newSkills.investigate < 1) newSkills.investigate = 1
        if (newSkills.sneaky < 1) newSkills.sneaky = 1
        if (newSkills.social < 1) newSkills.social = 1
        if (newSkills.throwdown < 1) newSkills.throwdown = 1
      case "Explorers":
        if (newSkills.craft < 1) newSkills.craft = 1
        if (newSkills.investigate < 1) newSkills.investigate = 1
        if (newSkills.medic < 1) newSkills.medic = 1
        if (newSkills.throwdown < 1) newSkills.throwdown = 1
      case "Mercenaries":
        if (newSkills.craft < 1) newSkills.craft = 1
        if (newSkills.investigate < 1) newSkills.investigate = 1
        if (newSkills.medic < 1) newSkills.medic = 1
        if (newSkills.throwdown < 1) newSkills.throwdown = 1
      case "Mythic Hunters":
        if (newSkills.investigate < 1) newSkills.investigate = 1
        if (newSkills.medic < 1) newSkills.medic = 1
        if (newSkills.nature < 1) newSkills.nature = 1
        if (newSkills.throwdown < 1) newSkills.throwdown = 1
      case "Thieves":
        if (newSkills.investigate < 1) newSkills.investigate = 1
        if (newSkills.performance < 1) newSkills.performance = 1
        if (newSkills.sneaky < 1) newSkills.sneaky = 1
        if (newSkills.throwdown < 1) newSkills.throwdown = 1
    }

    setSkills(newSkills)
  }

  const submit = () => {
    // update stats according to chosen species
    setStats()
    // update skills according to chosen guild
    updateSkills()
    // update myth addiction if chosen as a starting skill
    if (skills.myth >= 0) setAddiction(3)
    if (name && species && wealth && luck && guild) {
      let newChar = new Character(name, species, demeanor, physique, skills, stats, wealth, luck, guild, addiction, goalsAndMotives, flawsAndWeaknesses, personalMorals, importantConnections, props.user.username)
      newChar.gear = gear
      setApiLoading(true)
      let ok = true
      fetch("/resources/character-creator/api", { method: "POST", headers: { char: JSON.stringify(newChar) } })
        .then(res => {
          if (!res.ok) ok = false
          return res.json()
        })
        .then(data => {
          if (!ok) {
            throw new Error(data.message)
          } else {
            router.push("/profile/characters?message=New character created successfully!")
          }
        })
    } else {
      setValidationError("Some went wrong during form validation! Please contact us via discord.")
    }
  }

  return (
    <>
      {getPage()}
      {/* === Navigation Buttons === */}
      <div className="flex gap-4 justify-center items-center my-4">
        {/* prev button */}
        <button
          className={`button m-0 w-[100px] py-2 rounded ${page == 1 ? "hidden" : ""}`}
          onClick={e => { setPage(page - 1) }}
        >
          Prev
        </button>
        {/* next button */}
        <button
          className="button m-0 w-[100px] py-2 rounded relative"
          onClick={e => {
            if (page != PAGE_COUNT && validate()) {
              setPage(page + 1)
            } else if (page == PAGE_COUNT && validate()) {
              submit()
            }
          }}
        >
          {page == PAGE_COUNT ? "Submit" : "Next"}
          {apiLoading ? <div className="absolute -right-8"><Spinner /></div> : <></>}
        </button>
      </div>
      {getProgressBar()}
      <ErrorMessage message={validationError} />
    </>
  )
}