import React, { useState } from "react";
import {
  Container,
  Divider,
  Header,
  HeaderContent,
  Segment,
  Label,
  Form,
  Button,
} from "semantic-ui-react";
import { MessageComponent } from "./MessageComponent";

const ContainerComponent = () => {
  const [mobileNo, setMobileNo] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitDetails = async () => {
    console.log("Mobile No: " + mobileNo);
    console.log("pincode " + pincode);
    const data = { mobile: mobileNo, pincode: pincode };
    const response = await fetch(
      "https://dafd6c8fec3b.ngrok.io/submitDetails",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setSubmitted(true);
  };
  return (
    <div>
      <br></br>
      <Container textAlign="center">
        <Header as="h1">Covid Vaccine Notifications on your Whatsapp</Header>
        <HeaderContent>
          <Header as="h4">
            Get vaccine availability notifications in your whatsapp now for
            every 1 hour. Just give us some details as specified below
          </Header>
        </HeaderContent>
      </Container>
      <Container textAlign="justified">
        <b>Get Vaccinated</b>
        <Divider />
        <Divider />
        <Segment inverted color="green">
          Please give us your details as below to get notified on whatsapp.
        </Segment>
        <Label color="blue" horizontal>
          TWILIO
        </Label>
        {`Developed with Twilio integration. Plesae save this number +14155238886 in your mobile and send a message called `}
        <b color="black">join them-about</b>
        {" to it"}
        <Divider />
        {submitted ? (
          <MessageComponent />
        ) : (
          <Form>
            <Form.Field>
              <label>
                Please enter your 10 digit mobile number which has whatsapp
                account associated with it
              </label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                value={mobileNo}
              />
            </Form.Field>
            <Form.Field>
              <label>
                Enter the 6 digit pincode of the area you want to check
              </label>
              <input
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                value={pincode}
              />
            </Form.Field>
            <Button type="submit" primary onClick={submitDetails}>
              Submit
            </Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default ContainerComponent;
