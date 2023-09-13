import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
