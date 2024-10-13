import {
  Cog,
  FolderGit2,
  GraduationCap,
  SquareUser,
  UserPen,
  UserRoundCog
} from "lucide-react";

export const Routes = {
  HOME: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USER_FORM: "/user-form",
  HARD_SKILLS_FORM: "/hard-skills-form",
  SOFT_SKILLS_FORM: "/soft-skills-form",
  ACADEMIC_BG_FORM: "/academic-bg-form",
  PROFESSIONAL_EXP_FORM: "/professional-exp-form",
  PROJECTS_FORM: "/projects-form",
  PORTFOLIO_TEMPLATE: "/portfolio-template",
  PORTFOLIO: "/portfolio"
};

export const RoutesInfo = {
  [Routes.USER_FORM]: {
    label: "Dados Pessoais",
    icon: (size) => <SquareUser size={size} />,
    isPriv: true
  },
  [Routes.HARD_SKILLS_FORM]: {
    label: "Habilidades Técnicas",
    icon: (size) => <Cog size={size} />,
    isPriv: true
  },
  [Routes.SOFT_SKILLS_FORM]: {
    label: "Habilidades Pessoais",
    icon: (size) => <UserRoundCog size={size} />,
    isPriv: true
  },
  [Routes.ACADEMIC_BG_FORM]: {
    label: "Dados Acadêmicos",
    icon: (size) => <GraduationCap size={size} />,
    isPriv: true
  },
  [Routes.PROFESSIONAL_EXP_FORM]: {
    label: "Dados Profissionais",
    icon: (size) => <UserPen size={size} />,
    isPriv: true
  },
  [Routes.PROJECTS_FORM]: {
    label: "Projetos",
    icon: (size) => <FolderGit2 size={size} />,
    isPriv: true
  },
  [Routes.DASHBOARD]: {
    isPriv: true
  },
  [Routes.PORTFOLIO_TEMPLATE]: {
    isPriv: true
  }
};
