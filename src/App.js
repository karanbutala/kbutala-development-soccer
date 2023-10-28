import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  Label,
  withAuthenticator,
  View,
  TextField,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { listAttendees, listGames } from "./graphql/queries";
import {
  createAttendees as createAttendeesMutation,
  createAttendeesGames as createAttendeesGamesMutation
} from "./graphql/mutations";

const App = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetchAttendees();
  }, []);

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchAttendees() {
  const apiData = await API.graphql({ query: listAttendees });
  const attendeesFromAPI = apiData.data.listAttendees.items;
  setAttendees(attendeesFromAPI);
  }

  async function fetchGames() {
  const apiData = await API.graphql({ query: listGames });
  const gamesFromAPI = apiData.data.listGames.items;
  setGames(gamesFromAPI);
  }

  async function createAttendees(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      attendeeNo: attendees.length+1,
      attendeeFirstName: form.get("fname"),
      attendeeLastName: form.get("lname"),
      attendeeContact: form.get("contact"),
      registrationTimestamp: Date.now(),
    };
    await API.graphql({
      query: createAttendeesMutation,
      variables: { input: data },
    });
    fetchAttendees();
    event.target.reset();
    setTimeout(() => createAttendeesGames(), 4000);
  }

  async function createAttendeesGames() {
    const game_data = {
    attendeesId: attendees.find((element) => element.attendeeNo === attendees.length+1).id,
    gamesId: games.find((element) => new Date(element.gameTimestamp * 1000) > Date.now()).id,
    };
    await API.graphql({
      query: createAttendeesGamesMutation,
      variables: { input: game_data },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>Soccer Registration</Heading>
      <br />
      <hr />
      <Heading level={2}>Game Details</Heading>
      <br/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell as="th">
                Name
              </TableCell>
              <TableCell as="th">
                Location
              </TableCell>
              <TableCell as="th">
                Players
              </TableCell>
              <TableCell as="th">
                Date and Time
              </TableCell>
            </TableRow>
          </TableHead>
      {games.filter((game) => new Date(game.gameTimestamp * 1000) > Date.now()).map((game) => (
      <TableBody>
        <TableRow
          key={game.id || game.gameTimestamp}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TableCell>
            {game.gameName}
          </TableCell>
          <TableCell>
            {game.gameLocation}
          </TableCell>
          <TableCell>
            {game.gamePlayersCount}
          </TableCell>
          <TableCell>
            {new Date(game.gameTimestamp * 1000).toLocaleString()}
          </TableCell>
        </TableRow>
      </TableBody>
      ))}
      </Table>
      <br />
      <Heading level={2}>Register</Heading>
      <View as="form" margin="3rem 0" onSubmit={createAttendees}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="fname"
            placeholder="First Name"
            label="First Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="lname"
            placeholder="Last Name"
            label="Last Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="contact"
            placeholder="Contact"
            label="Contact"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Shoot
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Attendees</Heading>
      <View margin="3rem 0">
      <Table>
          <TableHead>
            <TableRow>
              <TableCell as="th">
                No
              </TableCell>
              <TableCell as="th">
                First Name
              </TableCell>
              <TableCell as="th">
                Last Name
              </TableCell>
              <TableCell as="th">
                Contact
              </TableCell>
              <TableCell as="th">
                Registration Time
              </TableCell>
            </TableRow>
          </TableHead>
        {attendees.toSorted((a,b) => a.attendeeNo - b.attendeeNo).filter((attendee) => attendee.attendeeNo <= games[0].gamePlayersCount).map((attendee) => (
          <TableBody>
          <TableRow
            key={attendee.id || attendee.attendeeTimestamp}
            direction="row"
            justifyContent="left"
            alignItems="left"
          >
                <TableCell>
                  {attendee.attendeeNo}
                </TableCell>
                <TableCell>
                  {attendee.attendeeFirstName}
                </TableCell>
                <TableCell>
                  {attendee.attendeeLastName}
                </TableCell>
                <TableCell>
                  {attendee.attendeeContact}
                </TableCell>
                <TableCell>
                  {new Date(attendee.registrationTimestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
      ))}
      </Table>
      </View>
      <Heading level={2}>Waitlist</Heading>
      <View margin="3rem 0">
      <Table>
          <TableHead>
            <TableRow>
              <TableCell as="th">
                No
              </TableCell>
              <TableCell as="th">
                First Name
              </TableCell>
              <TableCell as="th">
                Last Name
              </TableCell>
              <TableCell as="th">
                Contact
              </TableCell>
              <TableCell as="th">
                Registration Time
              </TableCell>
            </TableRow>
          </TableHead>
        {attendees.toSorted((a,b) => a.attendeeNo - b.attendeeNo).filter((attendee) => attendee.attendeeNo > games[0].gamePlayersCount).map((attendee) => (
          <TableBody>
          <TableRow
            key={attendee.id || attendee.attendeeTimestamp}
            direction="row"
            justifyContent="left"
            alignItems="left"
          >
                <TableCell>
                  {attendee.attendeeNo}
                </TableCell>
                <TableCell>
                  {attendee.attendeeFirstName}
                </TableCell>
                <TableCell>
                  {attendee.attendeeLastName}
                </TableCell>
                <TableCell>
                  {attendee.attendeeContact}
                </TableCell>
                <TableCell>
                  {new Date(attendee.registrationTimestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
      ))}
      </Table>
      </View>
    </View>
  );
}

export default App;