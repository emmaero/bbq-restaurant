import React, { useState } from "react";
import InputText from "../../sharedComponents/inputComponents/InputText";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <form>
      <InputText hook={[name, setName]} inputType="text">
        Full name
      </InputText>
      <InputText hook={[email, setEmail]} inputType="email">
        Email
      </InputText>
      <InputText hook={[date, setDate]} inputType="date">
        Date
      </InputText>
      <InputText hook={[time, setTime]} inputType="time">
        Time
      </InputText>
    </form>
  );
}
