/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttendees = /* GraphQL */ `
  subscription OnCreateAttendees(
    $filter: ModelSubscriptionAttendeesFilterInput
  ) {
    onCreateAttendees(filter: $filter) {
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
export const onUpdateAttendees = /* GraphQL */ `
  subscription OnUpdateAttendees(
    $filter: ModelSubscriptionAttendeesFilterInput
  ) {
    onUpdateAttendees(filter: $filter) {
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
export const onDeleteAttendees = /* GraphQL */ `
  subscription OnDeleteAttendees(
    $filter: ModelSubscriptionAttendeesFilterInput
  ) {
    onDeleteAttendees(filter: $filter) {
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
export const onCreateGames = /* GraphQL */ `
  subscription OnCreateGames($filter: ModelSubscriptionGamesFilterInput) {
    onCreateGames(filter: $filter) {
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
export const onUpdateGames = /* GraphQL */ `
  subscription OnUpdateGames($filter: ModelSubscriptionGamesFilterInput) {
    onUpdateGames(filter: $filter) {
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
export const onDeleteGames = /* GraphQL */ `
  subscription OnDeleteGames($filter: ModelSubscriptionGamesFilterInput) {
    onDeleteGames(filter: $filter) {
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
export const onCreateAttendeesGames = /* GraphQL */ `
  subscription OnCreateAttendeesGames(
    $filter: ModelSubscriptionAttendeesGamesFilterInput
  ) {
    onCreateAttendeesGames(filter: $filter) {
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
export const onUpdateAttendeesGames = /* GraphQL */ `
  subscription OnUpdateAttendeesGames(
    $filter: ModelSubscriptionAttendeesGamesFilterInput
  ) {
    onUpdateAttendeesGames(filter: $filter) {
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
export const onDeleteAttendeesGames = /* GraphQL */ `
  subscription OnDeleteAttendeesGames(
    $filter: ModelSubscriptionAttendeesGamesFilterInput
  ) {
    onDeleteAttendeesGames(filter: $filter) {
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
