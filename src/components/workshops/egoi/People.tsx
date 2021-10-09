import { melody, tarushii, vivian } from "../../index/images"
import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "USACO Platinum",
    photo: melody,
  },
  {
    name: "Rayna Arora",
    title: "EGOI Team Member / USACO Platinum",
  },
  {
    name: "Tarushii Goel",
    title: "EGOI Team Member / USACO Platinum",
    photo: tarushii,
  },
  {
    name: "Claire Zhang",
    title: "EGOI Team Member / USACO Platinum",
    photo: clairezhang,
  },
  {
    name: "Vivian Han",
    title: "EGOI Team Member / USACO Platinum",
    photo: vivian,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-cyan-600" />
}
