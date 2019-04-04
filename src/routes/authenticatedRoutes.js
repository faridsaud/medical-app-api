import patient from './patient';
import pathologicalHistory from './pathologicalHistory';
import nonPathologicalHistory from './nonPathologicalHistory';
import bodyExam from './bodyExam';
import clinicHistory from './clinicHistory';
import faceExam from './faceExam';
import medicalConsultation from './medicalConsultation';
import physicalExam from './physicalExam';
import user from './user';

const routes = [
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

export default routes;
