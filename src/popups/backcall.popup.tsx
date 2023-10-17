import { observer } from "mobx-react";
import { FC, useState } from "react";
import { Button, Input } from "../shared";
import config from "../config";
import { usePopupStoreContext } from "../store";

const BackCall: FC = observer(() => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { setVisible } = usePopupStoreContext();
  const sendData = async () => {
    if (!name || !phone) return;
    fetch(config.api, {
      method: "POST",
      body: JSON.stringify({ name, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        alert("Заявка отправлена");
        setVisible(false);
      });
  };

  return (
    <>
      <Input placeholder="Имя" value={name} onChange={({ target }) => setName(target.value)} />
      <Input placeholder="Номер телефона" value={phone} onChange={({ target }) => setPhone(target.value)} />
      <Button height={40} borderradius={8} weight={400} onClick={sendData}>
        Оставить заявку
      </Button>
    </>
  );
});

export default BackCall;
