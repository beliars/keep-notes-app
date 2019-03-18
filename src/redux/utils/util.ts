import * as _ from 'lodash';

export function getIdsArrEntities(entities: any) {
  return _.map(entities, (entity: any) => entity._id);
}

export function updateEntities(payload: any, entityModel?: any) {
  if (!_.isArray(payload)) {
    payload = [payload];
  }
  const entitiesIds = payload.map((payload: any) => payload._id);
  const entities = payload.reduce((entities: { [_id: string]: any }, entity: any) => {
    return {
      ...entities,
      [entity._id]: entityModel ? new entityModel(entity) : entity,
    };
  }, {});
  return {entitiesIds, entities};
}
