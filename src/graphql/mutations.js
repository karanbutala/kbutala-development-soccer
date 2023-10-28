/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttendees = /* GraphQL */ `
  mutation CreateAttendees(
    $input: CreateAttendeesInput!
    $condition: ModelAttendeesConditionInput
  ) {
    createAttendees(input: $input, condition: $condition) {
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
export const updateAttendees = /* GraphQL */ `
  mutation UpdateAttendees(
    $input: UpdateAttendeesInput!
    $condition: ModelAttendeesConditionInput
  ) {
    updateAttendees(input: $input, condition: $condition) {
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
export const deleteAttendees = /* GraphQL */ `
  mutation DeleteAttendees(
    $input: DeleteAttendeesInput!
    $condition: ModelAttendeesConditionInput
  ) {
    deleteAttendees(input: $input, condition: $condition) {
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
export const createGames = /* GraphQL */ `
  mutation CreateGames(
    $input: CreateGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    createGames(input: $input, condition: $condition) {
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
export const updateGames = /* GraphQL */ `
  mutation UpdateGames(
    $input: UpdateGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    updateGames(input: $input, condition: $condition) {
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
export const deleteGames = /* GraphQL */ `
  mutation DeleteGames(
    $input: DeleteGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    deleteGames(input: $input, condition: $condition) {
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
export const createAttendeesGames = /* GraphQL */ `
  mutation CreateAttendeesGames(
    $input: CreateAttendeesGamesInput!
    $condition: ModelAttendeesGamesConditionInput
  ) {
    createAttendeesGames(input: $input, condition: $condition) {
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
export const updateAttendeesGames = /* GraphQL */ `
  mutation UpdateAttendeesGames(
    $input: UpdateAttendeesGamesInput!
    $condition: ModelAttendeesGamesConditionInput
  ) {
    updateAttendeesGames(input: $input, condition: $condition) {
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
export const deleteAttendeesGames = /* GraphQL */ `
  mutation DeleteAttendeesGames(
    $input: DeleteAttendeesGamesInput!
    $condition: ModelAttendeesGamesConditionInput
  ) {
    deleteAttendeesGames(input: $input, condition: $condition) {
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
