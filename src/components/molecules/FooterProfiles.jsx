import FooterProfile from "../atoms/FooterProfile";

const FooterProfiles = () => {
  const profiles = [
    {
      name: "Kristi Hwang",
      githubLink: "https://github.com/kristi-h",
      linkedInLink: "https://linkedin.com/in/liaccountname",
    },
    {
      name: "Laura Gieg/Frosty",
      githubLink: "https://github.com/frosty8104",
      linkedInLink:
        "https://www.linkedin.com/in/laura-gieg-web-designer-developer/",
    },
    {
      name: "Yusuke Nagaoka",
      githubLink: "https://github.com/yusuken1121",
      linkedInLink: "https://www.linkedin.com/in/yusuke-nagaoka-a602242a8/",
    },
    {
      name: "Matthew Neie",
      githubLink: "https://github.com/MatthewNeie",
      linkedInLink: "https://linkedin.com/in/matthew-neie",
    },
    {
      name: "Jesse Guerrero",
      githubLink: "https://github.com/arositen",
      linkedInLink: "https://www.linkedin.com/in/jesse-guerrero-38628613b/",
    },
    {
      name: "Valeriy Lysenko",
      githubLink: "https://github.com/Valeriusdev",
      linkedInLink: "https://www.linkedin.com/in/valeriylysenko/",
    },
  ];
  return (
    <div className="w-2/3 grid sm:grid-cols-2 grid-cols-1 justify-center">
      {profiles.map((profile, i) => {
        const { name, githubLink, linkedInLink } = profile;
        return (
          <FooterProfile
            key={i}
            githubLink={githubLink}
            linkedInLink={linkedInLink}
          >
            {name}
          </FooterProfile>
        );
      })}
    </div>
  );
};

export default FooterProfiles;
