import rpc from './rpc'

export default function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: any) {
  const {
    limit = 999, // TODO: figure out Notion's way of handling pagination
    loadContentCover = true,
    type = 'table',
    userLocale = 'en',
    userTimeZone = 'America/Phoenix',
  } = loader

  const {
    aggregate = [
      {
        aggregation_type: 'count',
        id: 'count',
        property: 'title',
        type: 'title',
        view_type: 'table',
      },
    ],
    filter = [],
    filter_operator = 'and',
    sort = [
      // TDOO: workaround to get posts sorted by "Created At" property
      {
        property: 'piCV',
        direction: 'descending',
      },
    ],
  } = query

  return rpc('queryCollection', {
    collectionId,
    collectionViewId,
    loader: {
      limit,
      loadContentCover,
      type,
      userLocale,
      userTimeZone,
    },
    query: {
      aggregate,
      filter,
      filter_operator,
      sort,
    },
  })
}
