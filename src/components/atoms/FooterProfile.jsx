import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const FooterProfile = ({ children, linkedInLink, githubLink }) => {
  return (
    <div className="w-auto grid grid-cols-2 items-center gap-1">
      <p>{children}</p>
      <div className="flex gap-3">
        <a href={githubLink}>
          <FaGithubSquare className="h-7 w-7" />
        </a>
        <a href={linkedInLink}>
          <CiLinkedin className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
};

export default FooterProfile;
