import S from 'string';

/**
 *
 * @param Controller
 * @param plural Model's plural name. Example: Users
 * @param singular Model's singular name. Example: User
 * @returns {*[]}
 */
export const getRESTfulRoutes = (Controller, {plural, singular}) => [
  {
    method: 'GET',
    url: `/api/${S(plural).dasherize().slugify().s}`,
    handler: Controller[`get${plural}`],
  },
  {
    method: 'GET',
    url: `/api/${S(plural).dasherize().slugify().s}/:uuid`,
    handler: Controller[`get${singular}`],
    schema:{
      params:{
        uuid: {type: 'string'}
      }
    }
  },
  {
    method: 'POST',
    url: `/api/${S(plural).dasherize().slugify().s}`,
    handler: Controller[`add${singular}`],
  },
  {
    method: 'PUT',
    url: `/api/${S(plural).dasherize().slugify().s}/:uuid`,
    handler: Controller[`update${singular}`],
  },
  {
    method: 'DELETE',
    url: `/api/${S(plural).dasherize().slugify().s}/:uuid`,
    handler: Controller[`delete${singular}`],
  }
];
