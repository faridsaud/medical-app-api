import login from './login';
import patient from './patient';
import pathologicalHistory from './pathologicalHistory';
import nonPathologicalHistory from './nonPathologicalHistory';
import bodyExam from './bodyExam';
import clinicHistory from './clinicHistory';
import faceExam from './faceExam';
import medicalConsultation from './medicalConsultation';
import physicalExam from './physicalExam';
import user from './user';

export const nonAuthRoutes = [
  ...login,
];

export const authRoutes = [
  ...patient,
  ...pathologicalHistory,
  ...nonPathologicalHistory,
  ...bodyExam,
  ...clinicHistory,
  ...faceExam,
  ...medicalConsultation,
  ...physicalExam,
  ...user,
];
export default {
  authRoutes,
  nonAuthRoutes,
};
