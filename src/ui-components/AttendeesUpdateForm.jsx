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
import { getAttendees } from "../graphql/queries";
import { updateAttendees } from "../graphql/mutations";
export default function AttendeesUpdateForm(props) {
  const {
    id: idProp,
    attendees: attendeesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    attendeeNo: "",
    attendeeFirstName: "",
    attendeeLastName: "",
    attendeeContact: "",
    registrationTimestamp: "",
  };
  const [attendeeNo, setAttendeeNo] = React.useState(initialValues.attendeeNo);
  const [attendeeFirstName, setAttendeeFirstName] = React.useState(
    initialValues.attendeeFirstName
  );
  const [attendeeLastName, setAttendeeLastName] = React.useState(
    initialValues.attendeeLastName
  );
  const [attendeeContact, setAttendeeContact] = React.useState(
    initialValues.attendeeContact
  );
  const [registrationTimestamp, setRegistrationTimestamp] = React.useState(
    initialValues.registrationTimestamp
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = attendeesRecord
      ? { ...initialValues, ...attendeesRecord }
      : initialValues;
    setAttendeeNo(cleanValues.attendeeNo);
    setAttendeeFirstName(cleanValues.attendeeFirstName);
    setAttendeeLastName(cleanValues.attendeeLastName);
    setAttendeeContact(cleanValues.attendeeContact);
    setRegistrationTimestamp(cleanValues.registrationTimestamp);
    setErrors({});
  };
  const [attendeesRecord, setAttendeesRecord] =
    React.useState(attendeesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAttendees,
              variables: { id: idProp },
            })
          )?.data?.getAttendees
        : attendeesModelProp;
      setAttendeesRecord(record);
    };
    queryData();
  }, [idProp, attendeesModelProp]);
  React.useEffect(resetStateValues, [attendeesRecord]);
  const validations = {
    attendeeNo: [{ type: "Required" }],
    attendeeFirstName: [{ type: "Required" }],
    attendeeLastName: [{ type: "Required" }],
    attendeeContact: [{ type: "Required" }],
    registrationTimestamp: [{ type: "Required" }],
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
          attendeeNo,
          attendeeFirstName,
          attendeeLastName,
          attendeeContact,
          registrationTimestamp,
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
            query: updateAttendees,
            variables: {
              input: {
                id: attendeesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AttendeesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Attendee no"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={attendeeNo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              attendeeNo: value,
              attendeeFirstName,
              attendeeLastName,
              attendeeContact,
              registrationTimestamp,
            };
            const result = onChange(modelFields);
            value = result?.attendeeNo ?? value;
          }
          if (errors.attendeeNo?.hasError) {
            runValidationTasks("attendeeNo", value);
          }
          setAttendeeNo(value);
        }}
        onBlur={() => runValidationTasks("attendeeNo", attendeeNo)}
        errorMessage={errors.attendeeNo?.errorMessage}
        hasError={errors.attendeeNo?.hasError}
        {...getOverrideProps(overrides, "attendeeNo")}
      ></TextField>
      <TextField
        label="Attendee first name"
        isRequired={true}
        isReadOnly={false}
        value={attendeeFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeNo,
              attendeeFirstName: value,
              attendeeLastName,
              attendeeContact,
              registrationTimestamp,
            };
            const result = onChange(modelFields);
            value = result?.attendeeFirstName ?? value;
          }
          if (errors.attendeeFirstName?.hasError) {
            runValidationTasks("attendeeFirstName", value);
          }
          setAttendeeFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("attendeeFirstName", attendeeFirstName)
        }
        errorMessage={errors.attendeeFirstName?.errorMessage}
        hasError={errors.attendeeFirstName?.hasError}
        {...getOverrideProps(overrides, "attendeeFirstName")}
      ></TextField>
      <TextField
        label="Attendee last name"
        isRequired={true}
        isReadOnly={false}
        value={attendeeLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeNo,
              attendeeFirstName,
              attendeeLastName: value,
              attendeeContact,
              registrationTimestamp,
            };
            const result = onChange(modelFields);
            value = result?.attendeeLastName ?? value;
          }
          if (errors.attendeeLastName?.hasError) {
            runValidationTasks("attendeeLastName", value);
          }
          setAttendeeLastName(value);
        }}
        onBlur={() => runValidationTasks("attendeeLastName", attendeeLastName)}
        errorMessage={errors.attendeeLastName?.errorMessage}
        hasError={errors.attendeeLastName?.hasError}
        {...getOverrideProps(overrides, "attendeeLastName")}
      ></TextField>
      <TextField
        label="Attendee contact"
        isRequired={true}
        isReadOnly={false}
        value={attendeeContact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeNo,
              attendeeFirstName,
              attendeeLastName,
              attendeeContact: value,
              registrationTimestamp,
            };
            const result = onChange(modelFields);
            value = result?.attendeeContact ?? value;
          }
          if (errors.attendeeContact?.hasError) {
            runValidationTasks("attendeeContact", value);
          }
          setAttendeeContact(value);
        }}
        onBlur={() => runValidationTasks("attendeeContact", attendeeContact)}
        errorMessage={errors.attendeeContact?.errorMessage}
        hasError={errors.attendeeContact?.hasError}
        {...getOverrideProps(overrides, "attendeeContact")}
      ></TextField>
      <TextField
        label="Registration timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={
          registrationTimestamp &&
          convertToLocal(convertTimeStampToDate(registrationTimestamp))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              attendeeNo,
              attendeeFirstName,
              attendeeLastName,
              attendeeContact,
              registrationTimestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.registrationTimestamp ?? value;
          }
          if (errors.registrationTimestamp?.hasError) {
            runValidationTasks("registrationTimestamp", value);
          }
          setRegistrationTimestamp(value);
        }}
        onBlur={() =>
          runValidationTasks("registrationTimestamp", registrationTimestamp)
        }
        errorMessage={errors.registrationTimestamp?.errorMessage}
        hasError={errors.registrationTimestamp?.hasError}
        {...getOverrideProps(overrides, "registrationTimestamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || attendeesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || attendeesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
