import PathologicalHistoryController from '../controllers/PathologicalHistory';

const routes = [
  {
    method: 'GET',
    url: '/api/pathologicalHistories',
    handler: PathologicalHistoryController.getPathologicalHistories,
  },
  {
    method: 'GET',
    url: '/api/pathologicalHistories/:uuid',
    handler: PathologicalHistoryController.getPathologicalHistory,
    schema:{
      params:{
        uuid: {type: 'string'}
      }
    }
  },
  {
    method: 'POST',
    url: '/api/pathologicalHistories',
    handler: PathologicalHistoryController.addPathologicalHistory,
  },
  {
    method: 'PUT',
    url: '/api/pathologicalHistories/:uuid',
    handler: PathologicalHistoryController.updatePathologicalHistory,
  },
  {
    method: 'DELETE',
    url: '/api/pathologicalHistories/:uuid',
    handler: PathologicalHistoryController.deletePathologicalHistory,
  }
];

export default routes;
