import { observer } from "mobx-react";
import { Button, Container } from "../../shared";
import styled from "styled-components";
import { useState } from "react";

const CalcRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border-radius: 20px;
  background: #221149;
  padding: 20px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid #eee;
  font-size: 16px;
  outline: none;
  @media (max-width: 780px) {
    width: calc(100% - 15px);
  }
`;

const CalcGrid = styled.div`
  display: flex;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const CalcTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 75%;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 680px) {
    width: 100%;
  }
  @media (max-width: 380px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const CalcGridElement = styled.div`
  border-radius: 20px;
  height: 228px;
  background: #221149;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  h1 {
    font-size: 40px;
    color: rgb(0, 255, 255);
  }

  p {
    font-size: 24px;
  }
`;

const CalcPlanets = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  gap: 20px;
  @media (max-width: 680px) {
    width: 100%;
    margin-left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 470px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 380px) {
      grid-template-columns: 1fr;
    }
  }
`;

const CalcPlanetElement = styled.div`
  border-radius: 20px;
  background: #221149;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 680px) {
    height: 60px;
  }
`;

const Inputs = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 780px) {
    flex-direction: column;
    width: 100%;
    ${Button} {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  @media(max-width: 500px) {
    font-size: 24px;
  }
`;

const IDCalculator = observer(() => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [tableSun, setTableSun] = useState<string>("");
  const [tableMars, setTableMars] = useState<string>("");
  const [tableJupiter, setTableJupiter] = useState<string>("");
  const [tableLunaEarth, setTableLunaEarth] = useState<string>("");
  const [tableVenera, setTableVenera] = useState<string>("");
  const [tableUran, setTableUran] = useState<string>("");
  const [tableMerkury, setTableMerkury] = useState<string>("");
  const [tableSaturn, setTableSaturn] = useState<string>("");
  const [tableNeptun, setTableNeptun] = useState<string>("");

  const count = () => {
    setTableSun("");
    setTableMars("");
    setTableJupiter("");
    setTableLunaEarth("");
    setTableVenera("");
    setTableUran("");
    setTableMerkury("");
    setTableSaturn("");
    setTableNeptun("");
    let datetxt = day + month + year;
    let dop1 = datetxt
      .split("")
      .map((e) => Number(e))
      .reduce((acc, number) => acc + number, 0)
      .toString();
    let dop2 =
      dop1.split("").length < 1
        ? dop1.split("").map((e) => Number(e))[0] * 2
        : dop1
            .split("")
            .map((e) => Number(e))
            .reduce((a, b) => a + b, 0);
    let dop3 = (Number(dop1) - Number(datetxt[0]) * 2).toString();
    let dop4 = dop3
      .split("")
      .map((e) => Number(e))
      .reduce((a, b) => a + b, 0);
    console.log(dop1, dop2, dop3, dop4);
    let doptext = dop1 + dop2 + dop3 + dop4;
    let result = doptext + datetxt;

    result.split("").filter((e) => e === "1" && setTableSun((prev) => (prev === "-" ? "1" : prev + "1")));
    result.split("").filter((e) => e === "2" && setTableLunaEarth((prev) => (prev === "-" ? "2" : prev + "2")));
    result.split("").filter((e) => e === "3" && setTableMerkury((prev) => (prev === "-" ? "3" : prev + "3")));
    result.split("").filter((e) => e === "4" && setTableMars((prev) => (prev === "-" ? "4" : prev + "4")));
    result.split("").filter((e) => e === "5" && setTableVenera((prev) => (prev === "-" ? "5" : prev + "5")));
    result.split("").filter((e) => e === "6" && setTableSaturn((prev) => (prev === "-" ? "6" : prev + "6")));
    result.split("").filter((e) => e === "7" && setTableJupiter((prev) => (prev === "-" ? "7" : prev + "7")));
    result.split("").filter((e) => e === "8" && setTableUran((prev) => (prev === "-" ? "8" : prev + "8")));
    result.split("").filter((e) => e === "9" && setTableNeptun((prev) => (prev === "-" ? "9" : prev + "9")));
  };

  return (
    <Container>
      <Title>Калькулятор</Title>
      <CalcRow>
        <Inputs>
          <Input placeholder="День" value={day} onChange={({ target }) => setDay(target.value)} />
          <Input placeholder="Месяц" value={month} onChange={({ target }) => setMonth(target.value)} />
          <Input placeholder="Год" value={year} onChange={({ target }) => setYear(target.value)} />
        </Inputs>
        <Button height={44} borderradius={10} width={200} weight={400} onClick={count}>
          Рассчитать
        </Button>
      </CalcRow>
      <CalcGrid>
        <CalcTable>
          <CalcGridElement>
            <h1>{tableSun || "-"}</h1>
            <p>Солнце</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableMars || "-"}</h1>
            <p>Марс</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableJupiter || "-"}</h1>
            <p>Юпитер</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableLunaEarth || "-"}</h1>
            <p>Луна * Земля</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableVenera || "-"}</h1>
            <p>Венера</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableUran || "-"}</h1>
            <p>Уран</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableMerkury || "-"}</h1>
            <p>Меркурий</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableSaturn || "-"}</h1>
            <p>Сатурн</p>
          </CalcGridElement>
          <CalcGridElement>
            <h1>{tableNeptun || "-"}</h1>
            <p>Нептун</p>
          </CalcGridElement>
        </CalcTable>
        <CalcPlanets>
          <CalcPlanetElement>
            <p>1 Солнце</p>
            <p>
              {tableSun
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>2 Луна * Земля</p>
            <p>
              {tableLunaEarth
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>3 Меркурий</p>
            <p>
              {tableMerkury
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>4 Марс</p>
            <p>
              {tableMars
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>5 Венера</p>
            <p>
              {tableVenera
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>6 Сатурн</p>
            <p>
              {tableSaturn
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>7 Юпитер</p>
            <p>
              {tableJupiter
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>8 Уран</p>
            <p>
              {tableUran
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
          <CalcPlanetElement>
            <p>9 Нептун</p>
            <p>
              {tableNeptun
                .split("")
                .map((e) => Number(e))
                .reduce((a, c) => a + c, 0)}
            </p>
          </CalcPlanetElement>
        </CalcPlanets>
      </CalcGrid>
    </Container>
  );
});

export default IDCalculator;
