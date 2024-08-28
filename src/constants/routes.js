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
  PROJECTS_FORM: "/projects-form"
};

export const RoutesInfo = {
  [Routes.USER_FORM]: {
    label: "Dados pessoais",
    icon: (size) => <SquareUser size={size} />
  },
  [Routes.HARD_SKILLS_FORM]: {
    label: "Habilidades Técnicas",
    icon: (size) => <Cog size={size} />
  },
  [Routes.SOFT_SKILLS_FORM]: {
    label: "Habilidades pessoais",
    icon: (size) => <UserRoundCog size={size} />
  },
  [Routes.ACADEMIC_BG_FORM]: {
    label: "Dados Acadêmicos",
    icon: (size) => <GraduationCap size={size} />
  },
  [Routes.PROFESSIONAL_EXP_FORM]: {
    label: "Dados Profissionais",
    icon: (size) => <UserPen size={size} />
  },
  [Routes.PROJECTS_FORM]: {
    label: "Projetos",
    icon: (size) => <FolderGit2 size={size} />
  }
};
