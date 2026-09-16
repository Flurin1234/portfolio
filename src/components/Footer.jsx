import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
