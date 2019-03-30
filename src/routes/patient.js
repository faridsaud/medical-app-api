import PatientController from '../controllers/Patient';

const routes = [
  {
    method: 'GET',
    url: '/api/patients',
    handler: PatientController.getPatients,
  },
  {
    method: 'GET',
    url: '/api/patients/:uuid',
    handler: PatientController.getPatient,
  },
  {
    method: 'POST',
    url: '/api/patients',
    handler: PatientController.addPatient,
  },
  {
    method: 'PUT',
    url: '/api/patients/:uuid',
    handler: PatientController.updatePatient,
  },
  {
    method: 'DELETE',
    url: '/api/patients/:uuid',
    handler: PatientController.deletePatient,
  }
];

export default routes;
