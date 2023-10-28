/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createGames } from "../graphql/mutations";
export default function GamesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gameName: "",
    gameLocation: "",
    gameTimestamp: "",
    gamePlayersCount: "",
  };
  const [gameName, setGameName] = React.useState(initialValues.gameName);
  const [gameLocation, setGameLocation] = React.useState(
    initialValues.gameLocation
  );
  const [gameTimestamp, setGameTimestamp] = React.useState(
    initialValues.gameTimestamp
  );
  const [gamePlayersCount, setGamePlayersCount] = React.useState(
    initialValues.gamePlayersCount
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGameName(initialValues.gameName);
    setGameLocation(initialValues.gameLocation);
    setGameTimestamp(initialValues.gameTimestamp);
    setGamePlayersCount(initialValues.gamePlayersCount);
    setErrors({});
  };
  const validations = {
    gameName: [{ type: "Required" }],
    gameLocation: [{ type: "Required" }],
    gameTimestamp: [{ type: "Required" }],
    gamePlayersCount: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          gameName,
          gameLocation,
          gameTimestamp,
          gamePlayersCount,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createGames,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "GamesCreateForm")}
      {...rest}
    >
      <TextField
        label="Game name"
        isRequired={true}
        isReadOnly={false}
        value={gameName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameName: value,
              gameLocation,
              gameTimestamp,
              gamePlayersCount,
            };
            const result = onChange(modelFields);
            value = result?.gameName ?? value;
          }
          if (errors.gameName?.hasError) {
            runValidationTasks("gameName", value);
          }
          setGameName(value);
        }}
        onBlur={() => runValidationTasks("gameName", gameName)}
        errorMessage={errors.gameName?.errorMessage}
        hasError={errors.gameName?.hasError}
        {...getOverrideProps(overrides, "gameName")}
      ></TextField>
      <TextField
        label="Game location"
        isRequired={true}
        isReadOnly={false}
        value={gameLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameName,
              gameLocation: value,
              gameTimestamp,
              gamePlayersCount,
            };
            const result = onChange(modelFields);
            value = result?.gameLocation ?? value;
          }
          if (errors.gameLocation?.hasError) {
            runValidationTasks("gameLocation", value);
          }
          setGameLocation(value);
        }}
        onBlur={() => runValidationTasks("gameLocation", gameLocation)}
        errorMessage={errors.gameLocation?.errorMessage}
        hasError={errors.gameLocation?.hasError}
        {...getOverrideProps(overrides, "gameLocation")}
      ></TextField>
      <TextField
        label="Game timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={
          gameTimestamp && convertToLocal(convertTimeStampToDate(gameTimestamp))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              gameName,
              gameLocation,
              gameTimestamp: value,
              gamePlayersCount,
            };
            const result = onChange(modelFields);
            value = result?.gameTimestamp ?? value;
          }
          if (errors.gameTimestamp?.hasError) {
            runValidationTasks("gameTimestamp", value);
          }
          setGameTimestamp(value);
        }}
        onBlur={() => runValidationTasks("gameTimestamp", gameTimestamp)}
        errorMessage={errors.gameTimestamp?.errorMessage}
        hasError={errors.gameTimestamp?.hasError}
        {...getOverrideProps(overrides, "gameTimestamp")}
      ></TextField>
      <TextField
        label="Game players count"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={gamePlayersCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              gameName,
              gameLocation,
              gameTimestamp,
              gamePlayersCount: value,
            };
            const result = onChange(modelFields);
            value = result?.gamePlayersCount ?? value;
          }
          if (errors.gamePlayersCount?.hasError) {
            runValidationTasks("gamePlayersCount", value);
          }
          setGamePlayersCount(value);
        }}
        onBlur={() => runValidationTasks("gamePlayersCount", gamePlayersCount)}
        errorMessage={errors.gamePlayersCount?.errorMessage}
        hasError={errors.gamePlayersCount?.hasError}
        {...getOverrideProps(overrides, "gamePlayersCount")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
