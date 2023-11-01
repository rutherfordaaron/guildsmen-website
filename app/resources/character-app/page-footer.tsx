import { faBagShopping, faBook, faCircleInfo, faGear, faNoteSticky, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageFooter(props: { active: "character" | "skills" | "gear" | "details" | "notes" | "settings", setActive: Function }) {
  const buttonClass = "border-stone-400 dark:border-stone-200 w-full py-2 hover:bg-stone-300 dark:hover:bg-stone-500 hover:cursor-pointer"
  const iconClass = "text-[18px]"
  return (
    <div className="fixed inset-x-0 bottom-0 border-t bg-stone-200 dark:bg-stone-600 flex justify-evenly">
      <button className={`${buttonClass}`} onClick={e => props.setActive("character")}>
        <FontAwesomeIcon className={iconClass} icon={faPerson} />
        <p className="m-0 text-xs text-center">Stats</p>
      </button>
      <button className={`${buttonClass}`} onClick={e => props.setActive("skills")}>
        <FontAwesomeIcon className={iconClass} icon={faBook} />
        <p className="m-0 text-xs text-center">Skills</p>
      </button>
      <button className={`${buttonClass}`} onClick={e => props.setActive("gear")}>
        <FontAwesomeIcon className={iconClass} icon={faBagShopping} />
        <p className="m-0 text-xs text-center">Gear</p>
      </button>
      <button className={`${buttonClass}`} onClick={e => props.setActive("details")}>
        <FontAwesomeIcon className={iconClass} icon={faCircleInfo} />
        <p className="m-0 text-xs text-center">Details</p>
      </button>
      <button className={`${buttonClass}`} onClick={e => props.setActive("notes")}>
        <FontAwesomeIcon className={iconClass} icon={faNoteSticky} />
        <p className="m-0 text-xs text-center">Notes</p>
      </button>
      <button className={`${buttonClass}`} onClick={e => props.setActive("settings")}>
        <FontAwesomeIcon className={iconClass} icon={faGear} />
        <p className="m-0 text-xs text-center">Settings</p>
      </button>
    </div>
  )
}