/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttendees = /* GraphQL */ `
  query GetAttendees($id: ID!) {
    getAttendees(id: $id) {
      id
      attendeeNo
      attendeeFirstName
      attendeeLastName
      attendeeContact
      registrationTimestamp
      Games {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attendeeNo
        attendeeFirstName
        attendeeLastName
        attendeeContact
        registrationTimestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGames = /* GraphQL */ `
  query GetGames($id: ID!) {
    getGames(id: $id) {
      id
      gameName
      gameLocation
      gameTimestamp
      gamePlayersCount
      attendeess {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameName
        gameLocation
        gameTimestamp
        gamePlayersCount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttendeesGames = /* GraphQL */ `
  query GetAttendeesGames($id: ID!) {
    getAttendeesGames(id: $id) {
      id
      attendeesId
      gamesId
      attendees {
        id
        attendeeNo
        attendeeFirstName
        attendeeLastName
        attendeeContact
        registrationTimestamp
        createdAt
        updatedAt
        __typename
      }
      games {
        id
        gameName
        gameLocation
        gameTimestamp
        gamePlayersCount
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttendeesGames = /* GraphQL */ `
  query ListAttendeesGames(
    $filter: ModelAttendeesGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendeesGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attendeesId
        gamesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendeesGamesByAttendeesId = /* GraphQL */ `
  query AttendeesGamesByAttendeesId(
    $attendeesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendeesGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendeesGamesByAttendeesId(
      attendeesId: $attendeesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        attendeesId
        gamesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendeesGamesByGamesId = /* GraphQL */ `
  query AttendeesGamesByGamesId(
    $gamesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendeesGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendeesGamesByGamesId(
      gamesId: $gamesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        attendeesId
        gamesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
