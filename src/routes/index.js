import patient from './patient';
import pathologicalHistory from './pathologicalHistory';
import nonPathologicalHistory from './nonPathologicalHistory';

const routes = [
    ...patient,
    ...pathologicalHistory,
    ...nonPathologicalHistory
];

export default routes;
